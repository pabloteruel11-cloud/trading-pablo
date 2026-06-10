// CHART ENGINE — EUR/USD Trading Simulator
// Professional candlestick charts with TradingView-style dark theme

(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────────────────
  // UTILITIES
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Linear Congruential Generator — deterministic pseudorandom from a seed.
   * Returns a function that yields floats in [0, 1).
   */
  function seededRandom(seed) {
    let s = seed >>> 0; // ensure unsigned 32-bit
    return function () {
      s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
      return s / 4294967296;
    };
  }

  /** Round price to 5 decimal places (EUR/USD convention). */
  function r5(n) {
    return Math.round(n * 100000) / 100000;
  }

  /** Clamp a value between min and max. */
  function clamp(v, min, max) {
    return Math.min(Math.max(v, min), max);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 1. generateCandles
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Generate an array of OHLC candles for EUR/USD.
   *
   * @param {Object} params
   * @param {number}  params.basePrice      - Starting price (e.g. 1.0850)
   * @param {number}  params.numCandles     - How many candles to produce
   * @param {string}  params.scenario       - Scenario identifier
   * @param {number}  params.seed           - Integer seed for reproducibility
   * @param {number}  [params.trendStrength=0.6] - 0-1, stronger = steeper trend
   * @returns {Array<{open,high,low,close}>}
   */
  function generateCandles({ basePrice, numCandles, scenario, seed, trendStrength = 0.6 }) {
    const rng = seededRandom(seed);
    const candles = [];

    // Default pip size for H4 context; callers can vary numCandles to simulate timeframes
    const PIP = 0.0001;
    const minBody = 15 * PIP;
    const maxBody = 80 * PIP;

    // Helper: build one candle from open + directional body + wicks
    function makeCandle(open, direction, bodyPips, wickPips) {
      const body = bodyPips * PIP;
      const close = direction >= 0 ? open + body : open - body;
      const wick = wickPips * PIP;
      const high = Math.max(open, close) + wick * (0.3 + rng() * 0.7);
      const low = Math.min(open, close) - wick * (0.3 + rng() * 0.7);
      return {
        open: r5(open),
        high: r5(high),
        low: r5(low),
        close: r5(close),
      };
    }

    // Helper: random body size in pip range
    function randomBody(minP, maxP) {
      return minP + rng() * (maxP - minP);
    }

    // Ensure price stays in EUR/USD realistic range
    function guardPrice(p) {
      return clamp(p, 1.04, 1.13);
    }

    let price = guardPrice(basePrice);

    // ── Scenario implementations ────────────────────────────────────────────

    if (scenario === 'bullish_trend') {
      // Realistic uptrend: ~62% bullish candles, bears are smaller — net upward drift
      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        const isBull = rng() < (0.56 + trendStrength * 0.22);
        const bp = isBull
          ? randomBody(14, 50) * (0.65 + trendStrength * 0.55)
          : randomBody(7, 22) * 0.5;
        const wp = randomBody(4, 18);
        const c = makeCandle(price, isBull ? 1 : -1, bp, wp);
        candles.push(c);
        price = guardPrice(c.close);
      }

    } else if (scenario === 'bearish_trend') {
      // Realistic downtrend: ~62% bearish candles, bulls are smaller — net downward drift
      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        const isBear = rng() < (0.56 + trendStrength * 0.22);
        const bp = isBear
          ? randomBody(14, 50) * (0.65 + trendStrength * 0.55)
          : randomBody(7, 22) * 0.5;
        const wp = randomBody(4, 18);
        const c = makeCandle(price, isBear ? -1 : 1, bp, wp);
        candles.push(c);
        price = guardPrice(c.close);
      }

    } else if (scenario === 'range_market') {
      // Price oscillates within a band (~80 pip range)
      const mid = price;
      const band = 0.0040;
      for (let i = 0; i < numCandles; i++) {
        const deviation = price - mid;
        // Bias direction toward center
        const dir = deviation > band * 0.3 ? -1 : deviation < -band * 0.3 ? 1 : (rng() > 0.5 ? 1 : -1);
        const bp = randomBody(8, 30);
        const wp = randomBody(5, 15);
        const c = makeCandle(price, dir, bp, wp);
        price = guardPrice(c.close);
        candles.push(c);
      }

    } else if (scenario === 'demand_bounce') {
      // Sustained drop → sharp reversal candle → bullish continuation
      const dropCandles = Math.floor(numCandles * 0.45);
      const bounceCandle = dropCandles;
      const continueStart = dropCandles + 1;

      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        if (i < dropCandles) {
          // Bearish drop phase
          const bp = randomBody(15, 40);
          const wp = randomBody(5, 12);
          const c = makeCandle(price, -1, bp, wp);
          price = guardPrice(c.close);
          candles.push(c);
        } else if (i === bounceCandle) {
          // Big rejection candle — long lower wick, closes up
          const bp = randomBody(30, 65) * (0.8 + trendStrength * 0.4);
          const rejectionWick = randomBody(20, 45); // long lower wick
          const open = price;
          const close = open + bp * PIP;
          const low = open - rejectionWick * PIP;
          const high = close + randomBody(5, 15) * PIP;
          candles.push({
            open: r5(open),
            high: r5(high),
            low: r5(low),
            close: r5(close),
          });
          price = guardPrice(close);
        } else {
          // Bullish continuation
          const bp = randomBody(12, 35) * (0.6 + trendStrength * 0.5);
          const wp = randomBody(5, 15);
          const isBull = (i - continueStart) % 3 < 2;
          const c = makeCandle(price, isBull ? 1 : -1, bp * (isBull ? 1 : 0.4), wp);
          price = guardPrice(c.close);
          candles.push(c);
        }
      }

    } else if (scenario === 'supply_reject') {
      // Rally → big bearish rejection → drop
      const rallyCandles = Math.floor(numCandles * 0.45);
      const rejectCandle = rallyCandles;

      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        if (i < rallyCandles) {
          const bp = randomBody(15, 40);
          const wp = randomBody(5, 12);
          const c = makeCandle(price, 1, bp, wp);
          price = guardPrice(c.close);
          candles.push(c);
        } else if (i === rejectCandle) {
          // Rejection: long upper wick, closes down
          const bp = randomBody(30, 65) * (0.8 + trendStrength * 0.4);
          const rejectionWick = randomBody(20, 45);
          const open = price;
          const close = open - bp * PIP;
          const high = open + rejectionWick * PIP;
          const low = close - randomBody(5, 15) * PIP;
          candles.push({
            open: r5(open),
            high: r5(high),
            low: r5(low),
            close: r5(close),
          });
          price = guardPrice(close);
        } else {
          const isBear = (i - rejectCandle - 1) % 3 < 2;
          const bp = randomBody(12, 35) * (isBear ? 0.8 + trendStrength * 0.4 : 0.4);
          const wp = randomBody(5, 15);
          const c = makeCandle(price, isBear ? -1 : 1, bp, wp);
          price = guardPrice(c.close);
          candles.push(c);
        }
      }

    } else if (scenario === 'liquidity_sweep_low') {
      // Build equal lows → sweep below → sharp reversal up
      const setupCandles = Math.floor(numCandles * 0.55);
      const eqlPrice = price - 0.0020; // level to establish as EQL
      let eqlSet = false;

      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        if (i < setupCandles) {
          // Oscillate, touching eqlPrice area on ~2 occasions
          const touchEQL = !eqlSet && i === Math.floor(setupCandles * 0.4);
          const touchEQL2 = !eqlSet && i === Math.floor(setupCandles * 0.75);
          if (touchEQL || touchEQL2) {
            const open = price;
            const close = eqlPrice + randomBody(10, 25) * PIP;
            const low = Math.min(open, close, eqlPrice) - randomBody(2, 5) * PIP;
            const high = Math.max(open, close) + randomBody(5, 12) * PIP;
            candles.push({ open: r5(open), high: r5(high), low: r5(low), close: r5(close) });
            price = guardPrice(close);
            if (touchEQL2) eqlSet = true;
          } else {
            const dir = rng() > 0.45 ? 1 : -1;
            const c = makeCandle(price, dir, randomBody(10, 30), randomBody(5, 15));
            price = guardPrice(c.close);
            candles.push(c);
          }
        } else if (i === setupCandles) {
          // THE SWEEP: pierces below EQL with long wick, closes above
          const open = price;
          const sweepLow = Math.min(open, eqlPrice) - randomBody(10, 25) * PIP; // pierce below both
          const close = open + randomBody(25, 55) * PIP * trendStrength; // close well above
          const high = close + randomBody(5, 10) * PIP;
          candles.push({ open: r5(open), high: r5(high), low: r5(sweepLow), close: r5(close) });
          price = guardPrice(close);
        } else {
          // Bullish continuation after sweep
          const isBull = (i - setupCandles - 1) % 3 < 2;
          const c = makeCandle(price, isBull ? 1 : -1, randomBody(15, 40) * (isBull ? 1 : 0.35), randomBody(5, 15));
          price = guardPrice(c.close);
          candles.push(c);
        }
      }

    } else if (scenario === 'liquidity_sweep_high') {
      // Build equal highs → sweep above → sharp reversal down
      const setupCandles = Math.floor(numCandles * 0.55);
      const eqhPrice = price + 0.0020;

      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        if (i < setupCandles) {
          const touchEQH = i === Math.floor(setupCandles * 0.4) || i === Math.floor(setupCandles * 0.75);
          if (touchEQH) {
            const open = price;
            const close = eqhPrice - randomBody(10, 25) * PIP;
            const high = Math.max(open, close, eqhPrice) + randomBody(2, 5) * PIP;
            const low = Math.min(open, close) - randomBody(5, 12) * PIP;
            candles.push({ open: r5(open), high: r5(high), low: r5(low), close: r5(close) });
            price = guardPrice(close);
          } else {
            const dir = rng() > 0.45 ? -1 : 1;
            const c = makeCandle(price, dir, randomBody(10, 30), randomBody(5, 15));
            price = guardPrice(c.close);
            candles.push(c);
          }
        } else if (i === setupCandles) {
          // SWEEP HIGH
          const open = price;
          const sweepHigh = eqhPrice + randomBody(10, 25) * PIP;
          const close = open - randomBody(25, 55) * PIP * trendStrength;
          const low = close - randomBody(5, 10) * PIP;
          candles.push({ open: r5(open), high: r5(Math.max(open, sweepHigh)), low: r5(low), close: r5(close) });
          price = guardPrice(close);
        } else {
          const isBear = (i - setupCandles - 1) % 3 < 2;
          const c = makeCandle(price, isBear ? -1 : 1, randomBody(15, 40) * (isBear ? 1 : 0.35), randomBody(5, 15));
          price = guardPrice(c.close);
          candles.push(c);
        }
      }

    } else if (scenario === 'false_break_no_reverse') {
      // Sweeps a level but continues in the original direction — trap
      const setupCandles = Math.floor(numCandles * 0.55);
      const sweepLevel = price - 0.0015;

      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        if (i < setupCandles) {
          // Slight bearish drift toward sweep level
          const c = makeCandle(price, -1, randomBody(8, 25), randomBody(5, 12));
          price = guardPrice(c.close);
          candles.push(c);
        } else if (i === setupCandles) {
          // False break: pierces below, closes near pierce, NO reversal
          const open = price;
          const effectiveLevel = Math.min(open, sweepLevel); // account for price drift
          const low = effectiveLevel - randomBody(8, 18) * PIP;
          const close = effectiveLevel - randomBody(3, 8) * PIP; // closes BELOW — no reversal
          const high = open + randomBody(3, 8) * PIP;
          candles.push({ open: r5(open), high: r5(high), low: r5(low), close: r5(close) });
          price = guardPrice(close);
        } else {
          // Continuation down after false break
          const c = makeCandle(price, -1, randomBody(12, 35), randomBody(5, 15));
          price = guardPrice(c.close);
          candles.push(c);
        }
      }

    } else if (scenario === 'choppy_market') {
      // Erratic, no structure
      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        const dir = rng() > 0.5 ? 1 : -1;
        const bp = randomBody(5, 45);
        const wp = randomBody(8, 30);
        const c = makeCandle(price, dir, bp, wp);
        price = guardPrice(c.close);
        candles.push(c);
      }

    } else {
      // Fallback: flat range
      for (let i = 0; i < numCandles; i++) {
        price = guardPrice(price);
        const dir = rng() > 0.5 ? 1 : -1;
        const c = makeCandle(price, dir, randomBody(10, 25), randomBody(5, 15));
        price = guardPrice(c.close);
        candles.push(c);
      }
    }

    return candles;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 2. drawChart
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Render candlestick chart onto a canvas element.
   *
   * @param {HTMLCanvasElement} canvasEl
   * @param {Array<{open,high,low,close}>} candles
   * @param {Object} config
   */
  function drawChart(canvasEl, candles, config) {
    if (!canvasEl || !candles || candles.length === 0) return;

    const ctx = canvasEl.getContext('2d');
    const W = canvasEl.width;
    const H = canvasEl.height;

    // Safe defaults for config
    const cfg = Object.assign({
      demandZones: [],
      supplyZones: [],
      liquidityLines: [],
      entryLine: null,
      slLine: null,
      tp1Line: null,
      tp2Line: null,
      sweepIndex: null,
      signalIndex: null,
      showSetupArrow: false,
    }, config || {});

    // ── Layout constants ─────────────────────────────────────────────────
    const PAD = { top: 20, right: 70, bottom: 30, left: 60 };
    const chartW = W - PAD.left - PAD.right;
    const chartH = H - PAD.top - PAD.bottom;

    // ── Price range ──────────────────────────────────────────────────────
    let priceMin = Infinity;
    let priceMax = -Infinity;
    for (const c of candles) {
      if (c.low < priceMin) priceMin = c.low;
      if (c.high > priceMax) priceMax = c.high;
    }
    // Extend range for zones & lines
    for (const z of (cfg.demandZones || [])) { priceMin = Math.min(priceMin, z.bottom); priceMax = Math.max(priceMax, z.top); }
    for (const z of (cfg.supplyZones || [])) { priceMin = Math.min(priceMin, z.bottom); priceMax = Math.max(priceMax, z.top); }
    for (const l of (cfg.liquidityLines || [])) { priceMin = Math.min(priceMin, l.price); priceMax = Math.max(priceMax, l.price); }
    if (cfg.entryLine != null) { priceMin = Math.min(priceMin, cfg.entryLine); priceMax = Math.max(priceMax, cfg.entryLine); }
    if (cfg.slLine != null) { priceMin = Math.min(priceMin, cfg.slLine); priceMax = Math.max(priceMax, cfg.slLine); }
    if (cfg.tp1Line != null) { priceMax = Math.max(priceMax, cfg.tp1Line); }
    if (cfg.tp2Line != null) { priceMax = Math.max(priceMax, cfg.tp2Line); }

    const margin = (priceMax - priceMin) * 0.08;
    priceMin -= margin;
    priceMax += margin;
    const priceRange = priceMax - priceMin;

    // Coordinate helpers
    function toY(price) {
      return PAD.top + chartH - ((price - priceMin) / priceRange) * chartH;
    }
    const candleW = Math.max(2, Math.floor((chartW / candles.length) * 0.72));
    function toX(idx) {
      return PAD.left + (idx + 0.5) * (chartW / candles.length);
    }

    // ── Background ────────────────────────────────────────────────────────
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, W, H);

    // ── Grid lines + Y-axis labels (dynamic spacing to avoid crowding) ──────
    const PIP = 0.0001;
    const minPxBetween = 26;
    const maxGridLines = Math.max(3, Math.floor(chartH / minPxBetween));
    const rawPips = (priceRange / PIP) / maxGridLines;
    const niceSteps = [5, 10, 15, 20, 25, 30, 40, 50, 75, 100];
    let niceStep = niceSteps[niceSteps.length - 1];
    for (const s of niceSteps) { if (s >= rawPips) { niceStep = s; break; } }
    const gridStep = niceStep * PIP;
    const gridStart = Math.ceil(priceMin / gridStep) * gridStep;

    ctx.strokeStyle = '#1a2035';
    ctx.lineWidth = 0.5;
    ctx.setLineDash([]);
    for (let p = gridStart; p <= priceMax; p += gridStep) {
      const y = toY(p);
      ctx.beginPath();
      ctx.moveTo(PAD.left, y);
      ctx.lineTo(W - PAD.right, y);
      ctx.stroke();
    }

    // ── Y-axis price labels ───────────────────────────────────────────────
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let p = gridStart; p <= priceMax; p += gridStep) {
      const y = toY(p);
      ctx.fillText(p.toFixed(4), PAD.left - 4, y);
    }

    // ── X-axis labels ─────────────────────────────────────────────────────
    ctx.fillStyle = '#475569';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const xStep = Math.max(1, Math.floor(candles.length / 8));
    for (let i = 0; i < candles.length; i += xStep) {
      ctx.fillText(i + 1, toX(i), H - PAD.bottom + 4);
    }

    // ── Demand zones ─────────────────────────────────────────────────────
    for (const z of (cfg.demandZones || [])) {
      const y1 = toY(z.top);
      const y2 = toY(z.bottom);
      const h = y2 - y1;
      ctx.fillStyle = 'rgba(38,166,154,0.12)';
      ctx.fillRect(PAD.left, y1, chartW, h);
      ctx.strokeStyle = 'rgba(38,166,154,0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.strokeRect(PAD.left, y1, chartW, h);
      // Label
      ctx.fillStyle = '#26a69a';
      ctx.font = '11px Arial';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText('DEMANDA', W - PAD.right - 3, y1 - 1);
    }

    // ── Supply zones ──────────────────────────────────────────────────────
    for (const z of (cfg.supplyZones || [])) {
      const y1 = toY(z.top);
      const y2 = toY(z.bottom);
      const h = y2 - y1;
      ctx.fillStyle = 'rgba(239,83,80,0.12)';
      ctx.fillRect(PAD.left, y1, chartW, h);
      ctx.strokeStyle = 'rgba(239,83,80,0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.strokeRect(PAD.left, y1, chartW, h);
      ctx.fillStyle = '#ef5350';
      ctx.font = '11px Arial';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'bottom';
      ctx.fillText('OFERTA', W - PAD.right - 3, y1 - 1);
    }

    // ── Liquidity lines ───────────────────────────────────────────────────
    for (const ll of (cfg.liquidityLines || [])) {
      const y = toY(ll.price);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(PAD.left, y);
      ctx.lineTo(W - PAD.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#fbbf24';
      ctx.font = '10px Arial';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      ctx.fillText(ll.label || 'EQL', PAD.left + 3, y - 2);
    }

    // ── SL / TP / Entry lines ─────────────────────────────────────────────
    function drawPriceLine(price, strokeColor, lineWidth, dash, labelText) {
      if (price == null) return;
      const y = toY(price);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = lineWidth;
      ctx.setLineDash(dash);
      ctx.beginPath();
      ctx.moveTo(PAD.left, y);
      ctx.lineTo(W - PAD.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
      // Label pill on right side
      const lw = 52;
      const lh = 14;
      const lx = W - PAD.right + 2;
      const ly = y - lh / 2;
      ctx.fillStyle = 'rgba(11,14,26,0.82)';
      ctx.fillRect(lx, ly, lw, lh);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 0.8;
      ctx.strokeRect(lx, ly, lw, lh);
      ctx.fillStyle = strokeColor;
      ctx.font = '9px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(labelText + ' ' + price.toFixed(4), lx + lw / 2, y);
    }

    drawPriceLine(cfg.slLine, '#ef5350', 1, [4, 3], 'SL');
    drawPriceLine(cfg.tp1Line, '#26a69a', 1, [4, 3], 'TP1');
    drawPriceLine(cfg.tp2Line, '#26a69a', 1.5, [6, 3], 'TP2');
    drawPriceLine(cfg.entryLine, '#60a5fa', 1.5, [], 'ENT');

    // ── Candles ───────────────────────────────────────────────────────────
    const halfW = Math.max(1, Math.floor(candleW / 2));
    for (let i = 0; i < candles.length; i++) {
      const c = candles[i];
      const x = toX(i);
      const yOpen = toY(c.open);
      const yClose = toY(c.close);
      const yHigh = toY(c.high);
      const yLow = toY(c.low);

      const isDoji = Math.abs(c.open - c.close) < 0.0001;
      const isBull = c.close >= c.open;

      let candleColor;
      if (isDoji) {
        candleColor = '#787b86';
      } else {
        candleColor = isBull ? '#26a69a' : '#ef5350';
      }

      // Wick
      ctx.strokeStyle = candleColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(x, yHigh);
      ctx.lineTo(x, yLow);
      ctx.stroke();

      // Body
      const bodyTop = Math.min(yOpen, yClose);
      const bodyH = Math.max(1, Math.abs(yClose - yOpen));
      if (isDoji) {
        ctx.strokeStyle = candleColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x - halfW, yOpen);
        ctx.lineTo(x + halfW, yOpen);
        ctx.stroke();
      } else {
        ctx.fillStyle = candleColor;
        ctx.fillRect(x - halfW, bodyTop, candleW, bodyH);
      }
    }

    // ── Sweep marker ─────────────────────────────────────────────────────
    if (cfg.sweepIndex != null && cfg.sweepIndex >= 0 && cfg.sweepIndex < candles.length) {
      const si = cfg.sweepIndex;
      const c = candles[si];
      const x = toX(si);
      const isBull = c.close >= c.open;
      const markerY = isBull ? toY(c.low) + 10 : toY(c.high) - 10;
      ctx.beginPath();
      ctx.arc(x, markerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24';
      ctx.fill();
      ctx.fillStyle = '#fbbf24';
      ctx.font = '9px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = isBull ? 'top' : 'bottom';
      ctx.fillText('SWEEP', x, markerY + (isBull ? 8 : -8));
    }

    // ── Signal marker (triangle) ──────────────────────────────────────────
    if (cfg.signalIndex != null && cfg.signalIndex >= 0 && cfg.signalIndex < candles.length) {
      const si = cfg.signalIndex;
      const c = candles[si];
      const x = toX(si);
      const isLong = cfg.showSetupArrow !== 'short';
      const tipY = isLong ? toY(c.low) + 14 : toY(c.high) - 14;
      const dir = isLong ? 1 : -1;
      const s = 7;
      ctx.beginPath();
      ctx.moveTo(x, tipY - dir * s * 1.5);
      ctx.lineTo(x - s, tipY + dir * s * 0.3);
      ctx.lineTo(x + s, tipY + dir * s * 0.3);
      ctx.closePath();
      ctx.fillStyle = '#60a5fa';
      ctx.fill();
    }

    // ── Setup arrow ───────────────────────────────────────────────────────
    if (cfg.showSetupArrow && cfg.signalIndex != null) {
      const si = cfg.signalIndex;
      if (si >= 0 && si < candles.length) {
        const c = candles[si];
        const x = toX(si);
        const isLong = cfg.showSetupArrow === 'long';
        const arrowColor = isLong ? '#26a69a' : '#ef5350';
        const baseY = isLong ? toY(c.low) + 26 : toY(c.high) - 26;
        const tipY = isLong ? baseY - 18 : baseY + 18;
        const dir = isLong ? 1 : -1;

        // Shaft
        ctx.strokeStyle = arrowColor;
        ctx.lineWidth = 2.5;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(x, baseY);
        ctx.lineTo(x, tipY + dir * 6);
        ctx.stroke();

        // Arrowhead
        const ah = 7;
        ctx.beginPath();
        ctx.moveTo(x, tipY);
        ctx.lineTo(x - ah, tipY + dir * ah);
        ctx.lineTo(x + ah, tipY + dir * ah);
        ctx.closePath();
        ctx.fillStyle = arrowColor;
        ctx.fill();
      }
    }

    // ── Pivot labels (for step tutorial) ─────────────────────────────────
    for (const pv of (cfg.pivots || [])) {
      if (pv.index == null || pv.index < 0 || pv.index >= candles.length) continue;
      const c = candles[pv.index];
      const x = toX(pv.index);
      const isHigh = pv.type === 'high';
      const tipY  = isHigh ? toY(c.high) - 5 : toY(c.low) + 5;
      const lblY  = isHigh ? tipY - 14 : tipY + 14;
      const col   = pv.color || (isHigh ? '#26a69a' : '#60a5fa');

      ctx.beginPath();
      ctx.arc(x, tipY, 4, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();

      ctx.font = 'bold 11px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const tw = ctx.measureText(pv.label).width + 10;
      ctx.fillStyle = 'rgba(11,14,26,0.92)';
      ctx.fillRect(x - tw / 2, lblY - 8, tw, 16);
      ctx.strokeStyle = col;
      ctx.lineWidth = 1;
      ctx.strokeRect(x - tw / 2, lblY - 8, tw, 16);
      ctx.fillStyle = col;
      ctx.fillText(pv.label, x, lblY);
    }

    // ── Text badge (bias label etc.) ──────────────────────────────────────
    for (const b of (cfg.textBadges || [])) {
      const bx = PAD.left + chartW * (b.xp != null ? b.xp : 0.5);
      const by = PAD.top  + chartH * (b.yp != null ? b.yp : 0.08);
      ctx.font = `bold ${b.size || 12}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const bw = ctx.measureText(b.text).width + 16;
      const bh = (b.size || 12) + 10;
      ctx.fillStyle = b.bg || 'rgba(11,14,26,0.92)';
      ctx.fillRect(bx - bw / 2, by - bh / 2, bw, bh);
      ctx.strokeStyle = b.color || '#e2e8f0';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(bx - bw / 2, by - bh / 2, bw, bh);
      ctx.fillStyle = b.color || '#e2e8f0';
      ctx.fillText(b.text, bx, by);
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 3. drawTutorialChart
  // ─────────────────────────────────────────────────────────────────────────

  /**
   * Render a static educational chart on canvasEl.
   *
   * @param {HTMLCanvasElement} canvasEl
   * @param {string} type
   */
  function drawTutorialChart(canvasEl, type) {
    if (!canvasEl) return;

    const ctx = canvasEl.getContext('2d');
    const W = canvasEl.width;
    const H = canvasEl.height;

    // Build static candle data depending on type
    let candles = [];
    let overlays = {}; // {pivots, trendLines, zones, sweepIdx, eqlPrice, labels}

    // ── HH / HL (bullish structure) ───────────────────────────────────────
    if (type === 'hh_hl') {
      // 15 candles with clear HH/HL swings
      const base = [
        // Initial leg up
        { o: 1.0800, h: 1.0840, l: 1.0795, c: 1.0835 },
        { o: 1.0835, h: 1.0860, l: 1.0828, c: 1.0855 },
        { o: 1.0855, h: 1.0870, l: 1.0820, c: 1.0825 }, // pullback → HL1
        { o: 1.0825, h: 1.0845, l: 1.0818, c: 1.0840 },
        { o: 1.0840, h: 1.0895, l: 1.0835, c: 1.0890 }, // HH1
        { o: 1.0890, h: 1.0897, l: 1.0855, c: 1.0860 },
        { o: 1.0860, h: 1.0868, l: 1.0840, c: 1.0845 }, // pullback → HL2
        { o: 1.0845, h: 1.0870, l: 1.0838, c: 1.0865 },
        { o: 1.0865, h: 1.0920, l: 1.0860, c: 1.0915 }, // HH2
        { o: 1.0915, h: 1.0922, l: 1.0888, c: 1.0892 },
        { o: 1.0892, h: 1.0900, l: 1.0870, c: 1.0875 }, // pullback → HL3
        { o: 1.0875, h: 1.0896, l: 1.0870, c: 1.0890 },
        { o: 1.0890, h: 1.0945, l: 1.0885, c: 1.0940 }, // HH3
        { o: 1.0940, h: 1.0948, l: 1.0928, c: 1.0932 },
        { o: 1.0932, h: 1.0950, l: 1.0925, c: 1.0945 },
      ];
      candles = base;
      overlays = {
        pivots: [
          { idx: 4, price: 1.0895, label: 'HH', type: 'hh' },
          { idx: 6, price: 1.0840, label: 'HL', type: 'hl' },
          { idx: 8, price: 1.0920, label: 'HH', type: 'hh' },
          { idx: 10, price: 1.0868, label: 'HL', type: 'hl' },
          { idx: 12, price: 1.0945, label: 'HH', type: 'hh' },
        ],
        trendLines: [
          { from: { idx: 4, price: 1.0895 }, to: { idx: 12, price: 1.0945 } }, // HH line
          { from: { idx: 6, price: 1.0840 }, to: { idx: 10, price: 1.0868 } }, // HL line
        ],
      };

    // ── LH / LL (bearish structure) ──────────────────────────────────────
    } else if (type === 'lh_ll') {
      const base = [
        { o: 1.0950, h: 1.0955, l: 1.0910, c: 1.0915 },
        { o: 1.0915, h: 1.0920, l: 1.0890, c: 1.0895 },
        { o: 1.0895, h: 1.0930, l: 1.0890, c: 1.0925 }, // pullback → LH1
        { o: 1.0925, h: 1.0928, l: 1.0895, c: 1.0900 },
        { o: 1.0900, h: 1.0905, l: 1.0855, c: 1.0860 }, // LL1
        { o: 1.0860, h: 1.0895, l: 1.0858, c: 1.0890 }, // pullback → LH2
        { o: 1.0890, h: 1.0893, l: 1.0858, c: 1.0862 },
        { o: 1.0862, h: 1.0868, l: 1.0820, c: 1.0825 }, // LL2
        { o: 1.0825, h: 1.0860, l: 1.0822, c: 1.0855 }, // pullback → LH3
        { o: 1.0855, h: 1.0858, l: 1.0828, c: 1.0832 },
        { o: 1.0832, h: 1.0835, l: 1.0790, c: 1.0795 }, // LL3
        { o: 1.0795, h: 1.0820, l: 1.0792, c: 1.0810 },
        { o: 1.0810, h: 1.0815, l: 1.0780, c: 1.0785 },
        { o: 1.0785, h: 1.0790, l: 1.0760, c: 1.0765 },
        { o: 1.0765, h: 1.0770, l: 1.0745, c: 1.0748 },
      ];
      candles = base;
      overlays = {
        pivots: [
          { idx: 2, price: 1.0930, label: 'LH', type: 'lh' },
          { idx: 4, price: 1.0855, label: 'LL', type: 'll' },
          { idx: 5, price: 1.0895, label: 'LH', type: 'lh' },
          { idx: 7, price: 1.0820, label: 'LL', type: 'll' },
          { idx: 8, price: 1.0860, label: 'LH', type: 'lh' },
          { idx: 10, price: 1.0790, label: 'LL', type: 'll' },
        ],
        trendLines: [
          { from: { idx: 2, price: 1.0930 }, to: { idx: 8, price: 1.0860 } },
          { from: { idx: 4, price: 1.0855 }, to: { idx: 10, price: 1.0790 } },
        ],
      };

    // ── EQL Sweep (low) ───────────────────────────────────────────────────
    } else if (type === 'eql_sweep') {
      const eql = 1.0830;
      const base = [
        { o: 1.0880, h: 1.0892, l: 1.0872, c: 1.0875 },
        { o: 1.0875, h: 1.0882, l: 1.0828, c: 1.0832 }, // touch EQL
        { o: 1.0832, h: 1.0858, l: 1.0828, c: 1.0852 },
        { o: 1.0852, h: 1.0870, l: 1.0845, c: 1.0865 },
        { o: 1.0865, h: 1.0878, l: 1.0858, c: 1.0862 },
        { o: 1.0862, h: 1.0875, l: 1.0829, c: 1.0832 }, // touch EQL again
        { o: 1.0832, h: 1.0848, l: 1.0825, c: 1.0842 },
        { o: 1.0842, h: 1.0855, l: 1.0835, c: 1.0838 },
        { o: 1.0838, h: 1.0845, l: 1.0810, c: 1.0815 }, // SWEEP: pierces below
        { o: 1.0815, h: 1.0872, l: 1.0808, c: 1.0868 }, // REVERSAL big bull
        { o: 1.0868, h: 1.0885, l: 1.0860, c: 1.0880 },
        { o: 1.0880, h: 1.0900, l: 1.0875, c: 1.0895 },
        { o: 1.0895, h: 1.0912, l: 1.0888, c: 1.0908 },
        { o: 1.0908, h: 1.0925, l: 1.0900, c: 1.0920 },
        { o: 1.0920, h: 1.0938, l: 1.0915, c: 1.0932 },
      ];
      candles = base;
      overlays = {
        eqlPrice: eql,
        sweepIdx: 8,
        reversalIdx: 9,
        labels: [
          { text: 'EQL', x: 'right', price: eql, color: '#fbbf24' },
          { text: 'SWEEP', idx: 8, above: false, color: '#ef5350' },
          { text: 'REVERSIÓN', idx: 9, above: true, color: '#26a69a' },
        ],
      };

    // ── EQH Sweep (high) ──────────────────────────────────────────────────
    } else if (type === 'eqh_sweep') {
      const eqh = 1.0920;
      const base = [
        { o: 1.0870, h: 1.0898, l: 1.0865, c: 1.0892 },
        { o: 1.0892, h: 1.0922, l: 1.0888, c: 1.0918 }, // touch EQH
        { o: 1.0918, h: 1.0922, l: 1.0895, c: 1.0900 },
        { o: 1.0900, h: 1.0915, l: 1.0888, c: 1.0892 },
        { o: 1.0892, h: 1.0905, l: 1.0880, c: 1.0898 },
        { o: 1.0898, h: 1.0921, l: 1.0892, c: 1.0918 }, // touch EQH again
        { o: 1.0918, h: 1.0922, l: 1.0905, c: 1.0910 },
        { o: 1.0910, h: 1.0918, l: 1.0898, c: 1.0902 },
        { o: 1.0902, h: 1.0940, l: 1.0898, c: 1.0935 }, // SWEEP: pierces above
        { o: 1.0935, h: 1.0938, l: 1.0878, c: 1.0882 }, // REVERSAL big bear
        { o: 1.0882, h: 1.0888, l: 1.0860, c: 1.0865 },
        { o: 1.0865, h: 1.0870, l: 1.0842, c: 1.0848 },
        { o: 1.0848, h: 1.0855, l: 1.0828, c: 1.0832 },
        { o: 1.0832, h: 1.0840, l: 1.0815, c: 1.0818 },
        { o: 1.0818, h: 1.0825, l: 1.0800, c: 1.0805 },
      ];
      candles = base;
      overlays = {
        eqhPrice: eqh,
        sweepIdx: 8,
        reversalIdx: 9,
        labels: [
          { text: 'EQH', x: 'right', price: eqh, color: '#fbbf24' },
          { text: 'SWEEP', idx: 8, above: true, color: '#ef5350' },
          { text: 'REVERSIÓN', idx: 9, above: false, color: '#26a69a' },
        ],
      };

    // ── Demand zone ───────────────────────────────────────────────────────
    } else if (type === 'demand_zone') {
      const zoneTop = 1.0845;
      const zoneBot = 1.0820;
      const base = [
        // Big impulse up (origin)
        { o: 1.0820, h: 1.0905, l: 1.0815, c: 1.0898 }, // impulse origin
        { o: 1.0898, h: 1.0920, l: 1.0890, c: 1.0915 },
        { o: 1.0915, h: 1.0935, l: 1.0905, c: 1.0928 },
        { o: 1.0928, h: 1.0942, l: 1.0918, c: 1.0938 },
        // Pullback toward zone
        { o: 1.0938, h: 1.0942, l: 1.0905, c: 1.0910 },
        { o: 1.0910, h: 1.0918, l: 1.0882, c: 1.0888 },
        { o: 1.0888, h: 1.0895, l: 1.0858, c: 1.0865 },
        { o: 1.0865, h: 1.0870, l: 1.0835, c: 1.0840 }, // approaching zone
        { o: 1.0840, h: 1.0848, l: 1.0822, c: 1.0835 }, // enters zone
        // Reaction from zone
        { o: 1.0835, h: 1.0892, l: 1.0825, c: 1.0885 }, // rejection candle
        { o: 1.0885, h: 1.0910, l: 1.0878, c: 1.0905 },
        { o: 1.0905, h: 1.0928, l: 1.0898, c: 1.0922 },
        { o: 1.0922, h: 1.0948, l: 1.0915, c: 1.0942 },
        { o: 1.0942, h: 1.0960, l: 1.0935, c: 1.0955 },
        { o: 1.0955, h: 1.0975, l: 1.0948, c: 1.0968 },
      ];
      candles = base;
      overlays = {
        demandZone: { top: zoneTop, bottom: zoneBot },
        impulseIdx: 0,
        labels: [
          { text: 'IMPULSO ORIGEN', idx: 0, above: true, color: '#26a69a' },
          { text: 'ZONA DEMANDA (FRESCA)', x: 'zone', price: (zoneTop + zoneBot) / 2, color: '#26a69a' },
        ],
      };

    // ── Supply zone ───────────────────────────────────────────────────────
    } else if (type === 'supply_zone') {
      const zoneTop = 1.0940;
      const zoneBot = 1.0915;
      const base = [
        { o: 1.0940, h: 1.0945, l: 1.0858, c: 1.0865 }, // impulse origin (drop)
        { o: 1.0865, h: 1.0872, l: 1.0840, c: 1.0845 },
        { o: 1.0845, h: 1.0852, l: 1.0822, c: 1.0828 },
        { o: 1.0828, h: 1.0835, l: 1.0808, c: 1.0812 },
        // Rally back toward zone
        { o: 1.0812, h: 1.0842, l: 1.0808, c: 1.0838 },
        { o: 1.0838, h: 1.0868, l: 1.0832, c: 1.0862 },
        { o: 1.0862, h: 1.0892, l: 1.0858, c: 1.0888 },
        { o: 1.0888, h: 1.0918, l: 1.0882, c: 1.0912 }, // approaching zone
        { o: 1.0912, h: 1.0938, l: 1.0905, c: 1.0920 }, // enters zone
        // Rejection from zone
        { o: 1.0920, h: 1.0945, l: 1.0868, c: 1.0875 }, // rejection candle
        { o: 1.0875, h: 1.0882, l: 1.0848, c: 1.0852 },
        { o: 1.0852, h: 1.0858, l: 1.0822, c: 1.0828 },
        { o: 1.0828, h: 1.0835, l: 1.0800, c: 1.0805 },
        { o: 1.0805, h: 1.0812, l: 1.0780, c: 1.0785 },
        { o: 1.0785, h: 1.0792, l: 1.0762, c: 1.0768 },
      ];
      candles = base;
      overlays = {
        supplyZone: { top: zoneTop, bottom: zoneBot },
        impulseIdx: 0,
        labels: [
          { text: 'IMPULSO ORIGEN', idx: 0, above: false, color: '#ef5350' },
          { text: 'ZONA OFERTA (FRESCA)', x: 'zone', price: (zoneTop + zoneBot) / 2, color: '#ef5350' },
        ],
      };

    // ── Full setup long ────────────────────────────────────────────────────
    } else if (type === 'full_setup_long') {
      const eql = 1.0840;
      const zoneTop = 1.0852;
      const zoneBot = 1.0828;
      const entry = 1.0870;
      const sl = 1.0815;
      const tp1 = 1.0920;
      const tp2 = 1.0970;
      const base = [
        // Phase 1: Bullish direction (HH/HL)
        { o: 1.0820, h: 1.0862, l: 1.0815, c: 1.0855 },
        { o: 1.0855, h: 1.0878, l: 1.0845, c: 1.0872 },
        { o: 1.0872, h: 1.0905, l: 1.0865, c: 1.0900 }, // HH
        { o: 1.0900, h: 1.0905, l: 1.0865, c: 1.0870 },
        { o: 1.0870, h: 1.0878, l: 1.0842, c: 1.0848 }, // HL
        { o: 1.0848, h: 1.0868, l: 1.0842, c: 1.0862 },
        { o: 1.0862, h: 1.0898, l: 1.0858, c: 1.0892 }, // HH
        { o: 1.0892, h: 1.0898, l: 1.0858, c: 1.0862 },
        // Phase 2: Pullback to EQL zone (liquidity sweep)
        { o: 1.0862, h: 1.0865, l: 1.0838, c: 1.0842 }, // near EQL
        { o: 1.0842, h: 1.0848, l: 1.0810, c: 1.0818 }, // SWEEP
        // Phase 3: Reaction at demand zone
        { o: 1.0818, h: 1.0878, l: 1.0812, c: 1.0872 }, // reversal candle (engulfing)
        // Entry signal
        { o: 1.0872, h: 1.0885, l: 1.0865, c: 1.0880 },
        { o: 1.0880, h: 1.0908, l: 1.0875, c: 1.0902 },
        { o: 1.0902, h: 1.0935, l: 1.0895, c: 1.0928 },
        { o: 1.0928, h: 1.0955, l: 1.0920, c: 1.0948 },
        // TP continuation
        { o: 1.0948, h: 1.0975, l: 1.0940, c: 1.0968 },
        { o: 1.0968, h: 1.0985, l: 1.0958, c: 1.0978 },
        { o: 1.0978, h: 1.1002, l: 1.0970, c: 1.0995 },
        { o: 1.0995, h: 1.1018, l: 1.0988, c: 1.1010 },
        { o: 1.1010, h: 1.1025, l: 1.1000, c: 1.1018 },
        { o: 1.1018, h: 1.1038, l: 1.1008, c: 1.1030 },
        { o: 1.1030, h: 1.1050, l: 1.1022, c: 1.1042 },
        { o: 1.1042, h: 1.1062, l: 1.1035, c: 1.1055 },
        { o: 1.1055, h: 1.1075, l: 1.1048, c: 1.1068 },
        { o: 1.1068, h: 1.1082, l: 1.1058, c: 1.1075 },
      ];
      candles = base;
      overlays = {
        demandZone: { top: zoneTop, bottom: zoneBot },
        eqlPrice: eql,
        sweepIdx: 9,
        signalIdx: 10,
        entryLine: entry,
        slLine: sl,
        tp1Line: tp1,
        tp2Line: tp2,
        showArrow: 'long',
        labeledPivots: [
          { idx: 2, price: 1.0905, label: 'HH', type: 'hh' },
          { idx: 4, price: 1.0842, label: 'HL', type: 'hl' },
          { idx: 6, price: 1.0898, label: 'HH', type: 'hh' },
        ],
        sectionLabels: [
          { text: '1. DIRECCIÓN', idx: 3, above: true, color: '#60a5fa' },
          { text: '2. LIQUIDEZ BARRIDA', idx: 9, above: false, color: '#fbbf24' },
          { text: '3. ZONA DEMANDA', idx: 10, above: false, color: '#26a69a' },
          { text: 'ENTRADA', idx: 10, above: true, color: '#60a5fa' },
        ],
      };

    // ── Full setup short ───────────────────────────────────────────────────
    } else if (type === 'full_setup_short') {
      const eqh = 1.0920;
      const zoneTop = 1.0935;
      const zoneBot = 1.0910;
      const entry = 1.0900;
      const sl = 1.0950;
      const tp1 = 1.0850;
      const tp2 = 1.0800;
      const base = [
        { o: 1.0960, h: 1.0965, l: 1.0918, c: 1.0922 },
        { o: 1.0922, h: 1.0928, l: 1.0895, c: 1.0900 },
        { o: 1.0900, h: 1.0905, l: 1.0868, c: 1.0872 }, // LL
        { o: 1.0872, h: 1.0908, l: 1.0868, c: 1.0902 },
        { o: 1.0902, h: 1.0908, l: 1.0878, c: 1.0882 }, // LH
        { o: 1.0882, h: 1.0888, l: 1.0848, c: 1.0852 }, // LL
        { o: 1.0852, h: 1.0888, l: 1.0848, c: 1.0882 },
        { o: 1.0882, h: 1.0888, l: 1.0862, c: 1.0868 }, // LH
        // Rally to EQH zone
        { o: 1.0868, h: 1.0898, l: 1.0862, c: 1.0892 },
        { o: 1.0892, h: 1.0940, l: 1.0888, c: 1.0935 }, // SWEEP high
        // Rejection from supply zone
        { o: 1.0935, h: 1.0942, l: 1.0878, c: 1.0885 }, // reversal engulfing
        { o: 1.0885, h: 1.0892, l: 1.0862, c: 1.0868 },
        { o: 1.0868, h: 1.0872, l: 1.0838, c: 1.0842 },
        { o: 1.0842, h: 1.0848, l: 1.0812, c: 1.0818 },
        { o: 1.0818, h: 1.0825, l: 1.0795, c: 1.0800 },
        // Continues down toward TP2
        { o: 1.0800, h: 1.0808, l: 1.0775, c: 1.0780 },
        { o: 1.0780, h: 1.0788, l: 1.0755, c: 1.0760 },
        { o: 1.0760, h: 1.0765, l: 1.0738, c: 1.0742 },
        { o: 1.0742, h: 1.0748, l: 1.0718, c: 1.0722 },
        { o: 1.0722, h: 1.0728, l: 1.0702, c: 1.0708 },
        { o: 1.0708, h: 1.0715, l: 1.0688, c: 1.0692 },
        { o: 1.0692, h: 1.0698, l: 1.0672, c: 1.0678 },
        { o: 1.0678, h: 1.0685, l: 1.0658, c: 1.0662 },
        { o: 1.0662, h: 1.0668, l: 1.0642, c: 1.0648 },
        { o: 1.0648, h: 1.0655, l: 1.0628, c: 1.0632 },
      ];
      candles = base;
      overlays = {
        supplyZone: { top: zoneTop, bottom: zoneBot },
        eqhPrice: eqh,
        sweepIdx: 9,
        signalIdx: 10,
        entryLine: entry,
        slLine: sl,
        tp1Line: tp1,
        tp2Line: tp2,
        showArrow: 'short',
        labeledPivots: [
          { idx: 2, price: 1.0868, label: 'LL', type: 'll' },
          { idx: 4, price: 1.0908, label: 'LH', type: 'lh' },
          { idx: 5, price: 1.0848, label: 'LL', type: 'll' },
          { idx: 7, price: 1.0888, label: 'LH', type: 'lh' },
        ],
        sectionLabels: [
          { text: '1. DIRECCIÓN', idx: 4, above: false, color: '#60a5fa' },
          { text: '2. LIQUIDEZ BARRIDA', idx: 9, above: true, color: '#fbbf24' },
          { text: '3. ZONA OFERTA', idx: 10, above: true, color: '#ef5350' },
          { text: 'ENTRADA', idx: 10, above: false, color: '#60a5fa' },
        ],
      };
    }

    if (candles.length === 0) return;

    // ── Compute price range ───────────────────────────────────────────────
    const PAD = { top: 28, right: 60, bottom: 28, left: 58 };
    const chartW = W - PAD.left - PAD.right;
    const chartH = H - PAD.top - PAD.bottom;

    let priceMin = Infinity;
    let priceMax = -Infinity;
    for (const c of candles) {
      if (c.l < priceMin) priceMin = c.l;
      if (c.h > priceMax) priceMax = c.h;
    }
    // Include zone prices in range
    if (overlays.demandZone) { priceMin = Math.min(priceMin, overlays.demandZone.bottom); priceMax = Math.max(priceMax, overlays.demandZone.top); }
    if (overlays.supplyZone) { priceMin = Math.min(priceMin, overlays.supplyZone.bottom); priceMax = Math.max(priceMax, overlays.supplyZone.top); }
    if (overlays.eqlPrice) { priceMin = Math.min(priceMin, overlays.eqlPrice); }
    if (overlays.eqhPrice) { priceMax = Math.max(priceMax, overlays.eqhPrice); }
    if (overlays.entryLine != null) { priceMin = Math.min(priceMin, overlays.entryLine); priceMax = Math.max(priceMax, overlays.entryLine); }
    if (overlays.slLine != null) { priceMin = Math.min(priceMin, overlays.slLine); priceMax = Math.max(priceMax, overlays.slLine); }
    if (overlays.tp1Line != null) { priceMin = Math.min(priceMin, overlays.tp1Line); priceMax = Math.max(priceMax, overlays.tp1Line); }
    if (overlays.tp2Line != null) { priceMin = Math.min(priceMin, overlays.tp2Line); priceMax = Math.max(priceMax, overlays.tp2Line); }

    const margin = (priceMax - priceMin) * 0.12;
    priceMin -= margin;
    priceMax += margin;
    const priceRange = priceMax - priceMin;

    function toY(p) { return PAD.top + chartH - ((p - priceMin) / priceRange) * chartH; }
    const step = chartW / candles.length;
    const candleW = Math.max(2, Math.floor(step * 0.72));
    const halfW = Math.max(1, Math.floor(candleW / 2));
    function toX(idx) { return PAD.left + (idx + 0.5) * step; }

    // ── Background + grid ─────────────────────────────────────────────────
    ctx.fillStyle = '#0b0e1a';
    ctx.fillRect(0, 0, W, H);

    const PIP = 0.0001;
    const tenPips = 10 * PIP;
    const gridStart = Math.ceil(priceMin / tenPips) * tenPips;
    ctx.strokeStyle = '#1a2035';
    ctx.lineWidth = 0.5;
    ctx.setLineDash([]);
    for (let p = gridStart; p <= priceMax; p += tenPips) {
      const y = toY(p);
      ctx.beginPath();
      ctx.moveTo(PAD.left, y);
      ctx.lineTo(W - PAD.right, y);
      ctx.stroke();
    }

    // Y-axis labels
    ctx.fillStyle = '#64748b';
    ctx.font = '9px Arial';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (let p = gridStart; p <= priceMax; p += tenPips) {
      ctx.fillText(p.toFixed(4), PAD.left - 3, toY(p));
    }

    // ── Zones ─────────────────────────────────────────────────────────────
    function drawZone(zone, fillColor, strokeColor, label) {
      const y1 = toY(zone.top);
      const y2 = toY(zone.bottom);
      ctx.fillStyle = fillColor;
      ctx.fillRect(PAD.left, y1, chartW, y2 - y1);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.strokeRect(PAD.left, y1, chartW, y2 - y1);
      if (label) {
        ctx.fillStyle = strokeColor;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(label, PAD.left + chartW / 2, (y1 + y2) / 2);
      }
    }
    if (overlays.demandZone) drawZone(overlays.demandZone, 'rgba(38,166,154,0.15)', '#26a69a');
    if (overlays.supplyZone) drawZone(overlays.supplyZone, 'rgba(239,83,80,0.15)', '#ef5350');

    // ── EQL / EQH line ────────────────────────────────────────────────────
    function drawHorizontalDash(price, color, lw, dash, label) {
      const y = toY(price);
      ctx.strokeStyle = color;
      ctx.lineWidth = lw;
      ctx.setLineDash(dash);
      ctx.beginPath();
      ctx.moveTo(PAD.left, y);
      ctx.lineTo(W - PAD.right, y);
      ctx.stroke();
      ctx.setLineDash([]);
      if (label) {
        ctx.fillStyle = color;
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillText(label, PAD.left + 3, y - 2);
      }
    }
    if (overlays.eqlPrice != null) drawHorizontalDash(overlays.eqlPrice, '#fbbf24', 1.5, [5, 4], 'EQL');
    if (overlays.eqhPrice != null) drawHorizontalDash(overlays.eqhPrice, '#fbbf24', 1.5, [5, 4], 'EQH');
    if (overlays.entryLine != null) drawHorizontalDash(overlays.entryLine, '#60a5fa', 1.5, [], null);
    if (overlays.slLine != null) drawHorizontalDash(overlays.slLine, '#ef5350', 1, [4, 3], 'SL');
    if (overlays.tp1Line != null) drawHorizontalDash(overlays.tp1Line, '#26a69a', 1, [4, 3], 'TP1');
    if (overlays.tp2Line != null) drawHorizontalDash(overlays.tp2Line, '#26a69a', 1.5, [6, 3], 'TP2');

    // ── Trend lines ────────────────────────────────────────────────────────
    if (overlays.trendLines) {
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      for (const tl of overlays.trendLines) {
        ctx.beginPath();
        ctx.moveTo(toX(tl.from.idx), toY(tl.from.price));
        ctx.lineTo(toX(tl.to.idx), toY(tl.to.price));
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    // ── Candles ───────────────────────────────────────────────────────────
    for (let i = 0; i < candles.length; i++) {
      const c = candles[i];
      const x = toX(i);
      const isBull = c.c >= c.o;
      const isDoji = Math.abs(c.o - c.c) < 0.0002;
      const color = isDoji ? '#787b86' : isBull ? '#26a69a' : '#ef5350';

      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(x, toY(c.h));
      ctx.lineTo(x, toY(c.l));
      ctx.stroke();

      const bodyTop = Math.min(toY(c.o), toY(c.c));
      const bodyH = Math.max(1, Math.abs(toY(c.c) - toY(c.o)));
      if (isDoji) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x - halfW, toY(c.o));
        ctx.lineTo(x + halfW, toY(c.o));
        ctx.stroke();
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(x - halfW, bodyTop, candleW, bodyH);
      }
    }

    // ── Pivot labels (HH/HL/LH/LL) ───────────────────────────────────────
    const pivots = overlays.pivots || overlays.labeledPivots || [];
    for (const pv of pivots) {
      const x = toX(pv.idx);
      const isHigh = pv.type === 'hh' || pv.type === 'lh';
      const c = candles[pv.idx];
      if (!c) continue;
      const anchorY = isHigh ? toY(c.h) - 14 : toY(c.l) + 14;
      const labelColor = (pv.type === 'hh' || pv.type === 'hl') ? '#60a5fa' : '#f87171';

      // Background pill
      ctx.font = 'bold 11px Arial';
      const tw = ctx.measureText(pv.label).width + 8;
      const th = 15;
      ctx.fillStyle = 'rgba(11,14,26,0.88)';
      ctx.fillRect(x - tw / 2, anchorY - th / 2, tw, th);
      ctx.strokeStyle = labelColor;
      ctx.lineWidth = 0.8;
      ctx.strokeRect(x - tw / 2, anchorY - th / 2, tw, th);

      ctx.fillStyle = labelColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(pv.label, x, anchorY);

      // Tiny connector line
      const connY = isHigh ? toY(c.h) - 3 : toY(c.l) + 3;
      ctx.strokeStyle = labelColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(x, connY);
      ctx.lineTo(x, anchorY + (isHigh ? th / 2 : -th / 2));
      ctx.stroke();
    }

    // ── Sweep + reversal markers ──────────────────────────────────────────
    if (overlays.sweepIdx != null) {
      const si = overlays.sweepIdx;
      const c = candles[si];
      if (c) {
        const x = toX(si);
        // Detect sweep direction
        const isSweepDown = overlays.eqlPrice != null;
        const markerY = isSweepDown ? toY(c.l) + 8 : toY(c.h) - 8;
        ctx.beginPath();
        ctx.arc(x, markerY, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = '#fbbf24';
        ctx.fill();

        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = isSweepDown ? 'top' : 'bottom';
        ctx.fillText('SWEEP', x, markerY + (isSweepDown ? 9 : -9));
      }
    }
    if (overlays.reversalIdx != null) {
      const ri = overlays.reversalIdx;
      const c = candles[ri];
      if (c) {
        const x = toX(ri);
        const isBullReversal = c.c > c.o;
        const markerY = isBullReversal ? toY(c.h) - 10 : toY(c.l) + 10;
        ctx.fillStyle = isBullReversal ? '#26a69a' : '#ef5350';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = isBullReversal ? 'bottom' : 'top';
        ctx.fillText('REVERSIÓN', x, markerY + (isBullReversal ? -2 : 2));
      }
    }

    // ── Signal (entry) candle marker ──────────────────────────────────────
    if (overlays.signalIdx != null) {
      const si = overlays.signalIdx;
      const c = candles[si];
      if (c) {
        const x = toX(si);
        const isLong = overlays.showArrow === 'long';
        const tipY = isLong ? toY(c.l) + 18 : toY(c.h) - 18;
        const dir = isLong ? 1 : -1;
        const s = 7;
        // Triangle
        ctx.beginPath();
        ctx.moveTo(x, tipY - dir * s * 1.5);
        ctx.lineTo(x - s, tipY + dir * s * 0.3);
        ctx.lineTo(x + s, tipY + dir * s * 0.3);
        ctx.closePath();
        ctx.fillStyle = '#60a5fa';
        ctx.fill();

        // Arrow
        const arrowColor = isLong ? '#26a69a' : '#ef5350';
        const arrowBaseY = isLong ? toY(c.l) + 32 : toY(c.h) - 32;
        const arrowTipY = isLong ? arrowBaseY - 20 : arrowBaseY + 20;
        ctx.strokeStyle = arrowColor;
        ctx.lineWidth = 2.5;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(x, arrowBaseY);
        ctx.lineTo(x, arrowTipY + dir * 6);
        ctx.stroke();
        const ah = 7;
        ctx.beginPath();
        ctx.moveTo(x, arrowTipY);
        ctx.lineTo(x - ah, arrowTipY + dir * ah);
        ctx.lineTo(x + ah, arrowTipY + dir * ah);
        ctx.closePath();
        ctx.fillStyle = arrowColor;
        ctx.fill();
      }
    }

    // ── Section labels ────────────────────────────────────────────────────
    const sectionLabels = overlays.sectionLabels || [];
    for (const lbl of sectionLabels) {
      if (lbl.idx == null || lbl.idx >= candles.length) continue;
      const c = candles[lbl.idx];
      if (!c) continue;
      const x = toX(lbl.idx);
      const baseY = lbl.above ? toY(c.h) - 24 : toY(c.l) + 24;

      ctx.font = 'bold 10px Arial';
      const tw = ctx.measureText(lbl.text).width + 10;
      const th = 16;
      ctx.fillStyle = 'rgba(11,14,26,0.90)';
      ctx.fillRect(x - tw / 2, baseY - th / 2, tw, th);
      ctx.strokeStyle = lbl.color;
      ctx.lineWidth = 0.8;
      ctx.strokeRect(x - tw / 2, baseY - th / 2, tw, th);
      ctx.fillStyle = lbl.color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(lbl.text, x, baseY);
    }

    // ── Demand/supply zone center label ───────────────────────────────────
    if (overlays.demandZone) {
      const z = overlays.demandZone;
      const midY = (toY(z.top) + toY(z.bottom)) / 2;
      ctx.fillStyle = '#26a69a';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ZONA DEMANDA (FRESCA)', PAD.left + chartW / 2, midY);
    }
    if (overlays.supplyZone) {
      const z = overlays.supplyZone;
      const midY = (toY(z.top) + toY(z.bottom)) / 2;
      ctx.fillStyle = '#ef5350';
      ctx.font = 'bold 10px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('ZONA OFERTA (FRESCA)', PAD.left + chartW / 2, midY);
    }

    // ── Impulse origin label ──────────────────────────────────────────────
    if (overlays.impulseIdx != null) {
      const ii = overlays.impulseIdx;
      const c = candles[ii];
      if (c) {
        const x = toX(ii);
        const isBull = c.c > c.o;
        const labelY = isBull ? toY(c.h) - 14 : toY(c.l) + 14;
        const labelColor = isBull ? '#26a69a' : '#ef5350';
        ctx.font = 'bold 10px Arial';
        const tw = ctx.measureText('IMPULSO ORIGEN').width + 10;
        const th = 15;
        ctx.fillStyle = 'rgba(11,14,26,0.88)';
        ctx.fillRect(x - tw / 2, labelY - th / 2, tw, th);
        ctx.strokeStyle = labelColor;
        ctx.lineWidth = 0.8;
        ctx.strokeRect(x - tw / 2, labelY - th / 2, tw, th);
        ctx.fillStyle = labelColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('IMPULSO ORIGEN', x, labelY);
      }
    }

    // ── Price labels for SL/TP/Entry on right side ────────────────────────
    function drawRightLabel(price, text, color) {
      if (price == null) return;
      const y = toY(price);
      const lw = 56;
      const lh = 14;
      const lx = W - PAD.right + 2;
      ctx.fillStyle = 'rgba(11,14,26,0.85)';
      ctx.fillRect(lx, y - lh / 2, lw, lh);
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.8;
      ctx.strokeRect(lx, y - lh / 2, lw, lh);
      ctx.fillStyle = color;
      ctx.font = '9px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text + ' ' + price.toFixed(4), lx + lw / 2, y);
    }
    drawRightLabel(overlays.slLine, 'SL', '#ef5350');
    drawRightLabel(overlays.tp1Line, 'TP1', '#26a69a');
    drawRightLabel(overlays.tp2Line, 'TP2', '#26a69a');
    drawRightLabel(overlays.entryLine, 'ENT', '#60a5fa');
  }

  // ─────────────────────────────────────────────────────────────────────────
  // EXPORT
  // ─────────────────────────────────────────────────────────────────────────

  window.ChartEngine = {
    generateCandles,
    drawChart,
    drawTutorialChart,
  };

})();
