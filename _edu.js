// EDU CHARTS — Visualizaciones educativas para principiantes
// Todas las funciones dibujan en Canvas API con tema negro puro
// Estilo TradingView dark — EUR/USD Trading Simulator

(function () {
  'use strict';

  // ── Helpers ──────────────────────────────────────────────────────────────

  function setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width;
    const H = canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    return { ctx, W, H, dpr };
  }

  function bg(ctx, W, H) {
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, W, H);
  }

  function label(ctx, text, x, y, color, size, align, baseline) {
    ctx.save();
    ctx.fillStyle = color || '#e2e8f0';
    ctx.font = `${size || 12}px system-ui, Arial, sans-serif`;
    ctx.textAlign = align || 'center';
    ctx.textBaseline = baseline || 'middle';
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  function boldLabel(ctx, text, x, y, color, size, align) {
    ctx.save();
    ctx.fillStyle = color || '#e2e8f0';
    ctx.font = `bold ${size || 12}px system-ui, Arial, sans-serif`;
    ctx.textAlign = align || 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, x, y);
    ctx.restore();
  }

  function line(ctx, x1, y1, x2, y2, color, width, dash) {
    ctx.save();
    ctx.strokeStyle = color || '#e2e8f0';
    ctx.lineWidth = width || 1;
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }

  function drawCandle(ctx, x, open, close, high, low, bullColor, bearColor, bodyW) {
    const isBull = close >= open;
    const color = isBull ? (bullColor || '#26a69a') : (bearColor || '#ef5350');
    const bodyTop = isBull ? close : open;
    const bodyBot = isBull ? open : close;
    const bw = bodyW || 10;

    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    // Wick
    ctx.beginPath();
    ctx.moveTo(x, high);
    ctx.lineTo(x, bodyTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, bodyBot);
    ctx.lineTo(x, low);
    ctx.stroke();
    // Body
    ctx.fillStyle = color;
    const h = Math.max(bodyTop - bodyBot, 1);
    ctx.fillRect(x - bw / 2, bodyBot, bw, h);
    ctx.restore();
  }

  function arrowRight(ctx, x1, y, x2, color, size) {
    const s = size || 6;
    ctx.save();
    ctx.strokeStyle = color || '#94a3b8';
    ctx.fillStyle = color || '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x1, y);
    ctx.lineTo(x2 - s, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x2, y);
    ctx.lineTo(x2 - s, y - s / 2);
    ctx.lineTo(x2 - s, y + s / 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function arrowDown(ctx, x, y1, y2, color, size) {
    const s = size || 6;
    ctx.save();
    ctx.strokeStyle = color || '#94a3b8';
    ctx.fillStyle = color || '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, y1);
    ctx.lineTo(x, y2 - s);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y2);
    ctx.lineTo(x - s / 2, y2 - s);
    ctx.lineTo(x + s / 2, y2 - s);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  // ── 1. Pirámide de participantes ─────────────────────────────────────────

  function drawParticipantsPyramid(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    const levels = [
      { label: 'BANCOS CENTRALES', sub: 'Fed, BCE, BOJ...', color: '#7f1d1d', border: '#ef5350' },
      { label: 'BANCOS COMERCIALES', sub: 'JP Morgan, Deutsche Bank...', color: '#7c2d12', border: '#f97316' },
      { label: 'FONDOS / INSTITUCIONES', sub: 'Hedge funds, asset managers', color: '#1e3a5f', border: '#3b82f6' },
      { label: 'TÚ — TRADER RETAIL', sub: 'Millones de traders individuales', color: '#14342b', border: '#26a69a' },
    ];

    const pyramidTop = 48;
    const pyramidBot = H - 80;
    const pyramidH = pyramidBot - pyramidTop;
    const levelH = pyramidH / levels.length;

    // Half-widths for each level boundary — pyramid shifted left to give room for annotations
    const topHW = W * 0.05;
    const botHW = W * 0.36;
    const cx = W * 0.38;

    for (let i = 0; i < levels.length; i++) {
      const t = i / levels.length;
      const b = (i + 1) / levels.length;
      const hw1 = topHW + (botHW - topHW) * t;
      const hw2 = topHW + (botHW - topHW) * b;
      const y1 = pyramidTop + levelH * i;
      const y2 = pyramidTop + levelH * (i + 1);

      // Fill trapezoid
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx - hw1, y1);
      ctx.lineTo(cx + hw1, y1);
      ctx.lineTo(cx + hw2, y2);
      ctx.lineTo(cx - hw2, y2);
      ctx.closePath();
      ctx.fillStyle = levels[i].color;
      ctx.fill();
      ctx.strokeStyle = levels[i].border;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // Labels
      const midY = (y1 + y2) / 2;
      boldLabel(ctx, levels[i].label, cx, midY - 7, '#ffffff', 11);
      label(ctx, levels[i].sub, cx, midY + 9, 'rgba(255,255,255,0.65)', 9.5);
    }

    // Right-side annotation arrow + labels
    const arrowX = cx + botHW + 18;
    const arrowPad = 14;

    // Vertical double arrow
    ctx.save();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(arrowX, pyramidTop + arrowPad);
    ctx.lineTo(arrowX, pyramidBot - arrowPad);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // Arrow tips
    arrowDown(ctx, arrowX, pyramidTop + arrowPad, pyramidTop + arrowPad + 14, '#94a3b8', 5);
    ctx.save();
    ctx.fillStyle = '#94a3b8';
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5;
    // Up arrow tip
    ctx.beginPath();
    ctx.moveTo(arrowX, pyramidTop + arrowPad);
    ctx.lineTo(arrowX - 4, pyramidTop + arrowPad + 8);
    ctx.lineTo(arrowX + 4, pyramidTop + arrowPad + 8);
    ctx.closePath();
    ctx.fill();
    // Down arrow tip
    ctx.beginPath();
    ctx.moveTo(arrowX, pyramidBot - arrowPad);
    ctx.lineTo(arrowX - 4, pyramidBot - arrowPad - 8);
    ctx.lineTo(arrowX + 4, pyramidBot - arrowPad - 8);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    const annotX = arrowX + 10;
    label(ctx, 'Más poder', annotX, pyramidTop + 28, '#94a3b8', 9.5, 'left');
    label(ctx, '(mueven el mercado)', annotX, pyramidTop + 42, '#475569', 8.5, 'left');
    label(ctx, 'Más cantidad', annotX, pyramidBot - 36, '#94a3b8', 9.5, 'left');
    label(ctx, '(más traders)', annotX, pyramidBot - 22, '#475569', 8.5, 'left');

    // Bottom text
    const msgY = H - 34;
    label(ctx, 'Los de arriba mueven el mercado.', cx, msgY, '#94a3b8', 10.5);
    label(ctx, 'Tu trabajo: identificar sus huellas y seguirles la corriente.', cx, msgY + 16, '#475569', 9.5);
  }

  // ── 2. Anatomía de una vela ──────────────────────────────────────────────

  function drawCandleAnatomy(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    const midY = H * 0.46;
    const candleH = H * 0.52;
    const bodyH = candleH * 0.45;

    ctx.save();
    ctx.shadowColor = 'rgba(38,166,154,0.3)';
    ctx.shadowBlur = 8;
    boldLabel(ctx, 'ANATOMÍA DE UNA VELA JAPONESA', W / 2, 20, '#e2e8f0', 13);
    ctx.restore();

    // — Alcista (verde) ——————————————————————
    const bx = W * 0.28;
    const bOpen = midY + bodyH / 2;
    const bClose = midY - bodyH / 2;
    const bHigh = bClose - candleH * 0.22;
    const bLow = bOpen + candleH * 0.22;
    const bW = 28;

    // Bullish body: close_Y < open_Y (higher on canvas = higher price) → isBull=false in Y-coords
    // so we swap bull/bear color args to get the correct GREEN color
    drawCandle(ctx, bx, bOpen, bClose, bHigh, bLow, '#ef5350', '#26a69a', bW);
    label(ctx, 'ALCISTA', bx, H * 0.08, '#26a69a', 11);

    // Label lines — alcista
    const lblColor = '#94a3b8';
    const lblSize = 10.5;
    const lx = bx - 60;

    // High
    line(ctx, bx, bHigh, lx - 4, bHigh, lblColor, 0.8, [3, 2]);
    label(ctx, 'HIGH (Máximo)', lx - 6, bHigh, lblColor, lblSize, 'right');

    // Close
    line(ctx, bx - bW / 2, bClose, lx - 4, bClose, '#26a69a', 0.8, [3, 2]);
    label(ctx, 'CLOSE (Cierre)', lx - 6, bClose, '#26a69a', lblSize, 'right');

    // Open
    line(ctx, bx - bW / 2, bOpen, lx - 4, bOpen, '#26a69a', 0.8, [3, 2]);
    label(ctx, 'OPEN (Apertura)', lx - 6, bOpen, '#26a69a', lblSize, 'right');

    // Low
    line(ctx, bx, bLow, lx - 4, bLow, lblColor, 0.8, [3, 2]);
    label(ctx, 'LOW (Mínimo)', lx - 6, bLow, lblColor, lblSize, 'right');

    // Body label
    const rx = bx + 58;
    const bodyMid = (bOpen + bClose) / 2;
    line(ctx, bx + bW / 2, bodyMid, rx + 4, bodyMid, '#26a69a', 0.8, [3, 2]);
    label(ctx, 'CUERPO', rx + 6, bodyMid, '#26a69a', lblSize, 'left');
    label(ctx, '(Close − Open)', rx + 6, bodyMid + 13, '#475569', 9, 'left');

    // Upper shadow
    const usMid = (bHigh + bClose) / 2;
    line(ctx, bx + 2, usMid, rx + 4, usMid, lblColor, 0.8, [3, 2]);
    label(ctx, 'Sombra superior', rx + 6, usMid, lblColor, lblSize, 'left');

    // Lower shadow
    const lsMid = (bOpen + bLow) / 2;
    line(ctx, bx + 2, lsMid, rx + 4, lsMid, lblColor, 0.8, [3, 2]);
    label(ctx, 'Sombra inferior', rx + 6, lsMid, lblColor, lblSize, 'left');

    // — Bajista (roja) ————————————————————————
    const rx2 = W * 0.72;
    const rOpen = midY - bodyH / 2;
    const rClose = midY + bodyH / 2;
    const rHigh = rOpen - candleH * 0.22;
    const rLow = rClose + candleH * 0.22;

    // Bearish body: close_Y > open_Y → isBull=true in Y-coords → swap to get RED
    drawCandle(ctx, rx2, rOpen, rClose, rHigh, rLow, '#ef5350', '#26a69a', bW);
    label(ctx, 'BAJISTA', rx2, H * 0.08, '#ef5350', 11);

    // Label right side — bajista
    const rlx = rx2 + 60;
    line(ctx, rx2, rHigh, rlx + 4, rHigh, lblColor, 0.8, [3, 2]);
    label(ctx, 'HIGH', rlx + 6, rHigh, lblColor, lblSize, 'left');

    line(ctx, rx2 + bW / 2, rOpen, rlx + 4, rOpen, '#ef5350', 0.8, [3, 2]);
    label(ctx, 'OPEN', rlx + 6, rOpen, '#ef5350', lblSize, 'left');

    line(ctx, rx2 + bW / 2, rClose, rlx + 4, rClose, '#ef5350', 0.8, [3, 2]);
    label(ctx, 'CLOSE', rlx + 6, rClose, '#ef5350', lblSize, 'left');

    line(ctx, rx2, rLow, rlx + 4, rLow, lblColor, 0.8, [3, 2]);
    label(ctx, 'LOW', rlx + 6, rLow, lblColor, lblSize, 'left');

    // Middle caption
    label(ctx, 'Verde = cierre > apertura (sube)', W / 2, H * 0.08, '#475569', 9.5);

    // ─── Bottom: 3 velas de ejemplo ───────────────────────────────────────
    const exY = H - 55;
    const exBase = exY - 10;
    const exCandleH = 38;
    const spacing = W / 4;

    // Divider line
    line(ctx, 20, H * 0.88, W - 20, H * 0.88, '#1e2a3a', 1);
    label(ctx, 'PATRONES BÁSICOS', W / 2, H * 0.89, '#475569', 9.5);

    // Doji
    const dX = spacing * 0.8;
    const dMid = exBase - exCandleH / 2;
    drawCandle(ctx, dX, dMid, dMid + 1, dMid - exCandleH / 2, dMid + exCandleH / 2, '#26a69a', '#26a69a', 14);
    boldLabel(ctx, 'DOJI', dX, exY + 10, '#e2e8f0', 10);
    label(ctx, 'Indecisión', dX, exY + 22, '#94a3b8', 9);

    // Martillo
    const mX = spacing * 1.9;
    drawCandle(ctx, mX, exBase - 7, exBase - 12, exBase - 14, exBase - 7 + exCandleH * 0.72, '#26a69a', '#26a69a', 14);
    boldLabel(ctx, 'MARTILLO', mX, exY + 10, '#26a69a', 10);
    label(ctx, 'Rechazo bajista', mX, exY + 22, '#94a3b8', 9);

    // Engulfing alcista (dos velas)
    const eX = spacing * 3.1;
    // First candle: small red/bearish (isBull=false in Y-coords → bearColor=red ✓)
    drawCandle(ctx, eX - 10, exBase - exCandleH * 0.3, exBase - exCandleH * 0.55, exBase - exCandleH * 0.6, exBase - exCandleH * 0.22, '#26a69a', '#ef5350', 12);
    // Second candle: big green/bullish engulfing (isBull=false in Y-coords → swap to get green)
    drawCandle(ctx, eX + 10, exBase - 2, exBase - exCandleH * 0.8, exBase - exCandleH * 0.82, exBase, '#ef5350', '#26a69a', 16);
    boldLabel(ctx, 'ENGULFING', eX, exY + 10, '#26a69a', 10);
    label(ctx, 'Señal de compra', eX, exY + 22, '#94a3b8', 9);
  }

  // ── 3. Reloj de sesiones ─────────────────────────────────────────────────

  function drawSessionsClock(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    // Title with subtle glow
    ctx.save();
    ctx.shadowColor = 'rgba(59,130,246,0.3)';
    ctx.shadowBlur = 10;
    boldLabel(ctx, 'SESIONES DEL MERCADO FOREX', W / 2, 20, '#e2e8f0', 13);
    ctx.restore();
    label(ctx, 'Hora CET (España) — Cuándo operar y cuándo no', W / 2, 35, '#475569', 10);

    const cx = W / 2;
    const cy = H / 2 + 14;
    const R = Math.min(W, H) * 0.355;
    const innerR = R * 0.51;

    function hourToAngle(h) {
      return (h / 24) * Math.PI * 2 - Math.PI / 2;
    }

    // Draw session arcs
    const drawArc = (start, end, fillColor, strokeColor, outerR, innerRad, glow) => {
      let sa = hourToAngle(start);
      let ea = hourToAngle(end);
      if (end <= start) ea += Math.PI * 2;
      ctx.save();
      if (glow) { ctx.shadowColor = strokeColor; ctx.shadowBlur = 8; }
      ctx.beginPath();
      ctx.arc(cx, cy, outerR, sa, ea);
      ctx.arc(cx, cy, innerRad, ea, sa, true);
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      if (strokeColor) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }
      ctx.restore();
    };

    // Background ring (dead zone)
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2, true);
    ctx.fillStyle = '#0a0a0a';
    ctx.fill();
    ctx.restore();

    // Dead zone border (no session)
    drawArc(23, 1, 'rgba(10,10,10,0.8)', '#1e2a3a', R, innerR, false);

    // Tokyo — blue
    drawArc(1, 9, 'rgba(26,58,95,0.85)', '#2d6aad', R, innerR, false);
    // London — green (most important)
    drawArc(9, 17, 'rgba(13,53,48,0.9)', '#26a69a', R, innerR, true);
    // New York — slightly inner ring to show overlap area
    drawArc(17, 23, 'rgba(22,40,80,0.85)', '#3b82f6', R * 0.93, innerR * 1.07, false);
    // NY from 15 to 17 (overlap zone) at same outer radius
    drawArc(15, 17, 'rgba(22,40,80,0.85)', '#3b82f6', R * 0.93, innerR * 1.07, false);
    // Overlap (brightest, on top)
    drawArc(15, 17, 'rgba(120,53,15,0.92)', '#fbbf24', R, innerR, true);

    // Outer ring stroke
    ctx.save();
    ctx.strokeStyle = '#1e2a3a';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(cx, cy, R + 1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();

    // Hour markers
    const keyHours = [0, 1, 9, 15, 17, 23];
    for (let h = 0; h < 24; h++) {
      const a = hourToAngle(h);
      const isKey = keyHours.includes(h);
      const tickLen = isKey ? 11 : 4;
      const ticR = R + 3;
      ctx.save();
      ctx.strokeStyle = isKey ? '#94a3b8' : '#1e2a3a';
      ctx.lineWidth = isKey ? 1.8 : 0.8;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * ticR, cy + Math.sin(a) * ticR);
      ctx.lineTo(cx + Math.cos(a) * (ticR + tickLen), cy + Math.sin(a) * (ticR + tickLen));
      ctx.stroke();
      ctx.restore();

      if (isKey) {
        const lblR = R + 24;
        const lx = cx + Math.cos(a) * lblR;
        const ly = cy + Math.sin(a) * lblR;
        label(ctx, `${h}h`, lx, ly, '#94a3b8', 10);
      }
    }

    // Session labels inside arcs
    function arcLabelPos(start, end, radius) {
      const mid = (hourToAngle(start) + hourToAngle(end > start ? end : end + 24)) / 2;
      return { x: cx + Math.cos(mid) * radius, y: cy + Math.sin(mid) * radius, angle: mid };
    }

    const lblR = (R + innerR) / 2;

    // Tokyo label
    const tk = arcLabelPos(1, 9, lblR);
    ctx.save();
    ctx.translate(tk.x, tk.y);
    ctx.rotate(tk.angle + Math.PI / 2);
    ctx.fillStyle = '#60a5fa';
    ctx.font = 'bold 9.5px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('TOKIO', 0, 0);
    ctx.restore();

    // London label
    const lo = arcLabelPos(9, 17, lblR);
    ctx.save();
    ctx.translate(lo.x, lo.y);
    ctx.rotate(lo.angle + Math.PI / 2);
    ctx.shadowColor = '#26a69a';
    ctx.shadowBlur = 6;
    ctx.fillStyle = '#26a69a';
    ctx.font = 'bold 10px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('LONDRES ★', 0, 0);
    ctx.restore();

    // NY label (inner radius band)
    const nyR = (R * 0.93 + innerR * 1.07) / 2;
    const ny = arcLabelPos(17, 23, nyR);
    ctx.save();
    ctx.translate(ny.x, ny.y);
    ctx.rotate(ny.angle + Math.PI / 2);
    ctx.fillStyle = '#60a5fa';
    ctx.font = 'bold 9px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('NY', 0, 0);
    ctx.restore();

    // Overlap label (bright)
    const ov = arcLabelPos(15, 17, lblR);
    ctx.save();
    ctx.translate(ov.x, ov.y);
    ctx.rotate(ov.angle + Math.PI / 2);
    ctx.shadowColor = '#fbbf24';
    ctx.shadowBlur = 8;
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 9px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('OVL', 0, 0);
    ctx.restore();

    // Center circle with gradient look
    const grad = ctx.createRadialGradient(cx, cy - 10, 0, cx, cy, innerR - 2);
    grad.addColorStop(0, '#0d1421');
    grad.addColorStop(1, '#050505');
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, innerR - 2, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
    ctx.strokeStyle = '#1e2a3a';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    // Center text — clean and compact
    boldLabel(ctx, 'EUR/USD', cx, cy - 22, '#e2e8f0', 15);
    label(ctx, 'Mejor momento:', cx, cy - 5, '#94a3b8', 9.5);
    ctx.save();
    ctx.shadowColor = '#fbbf24';
    ctx.shadowBlur = 8;
    boldLabel(ctx, '15:00 – 17:00 CET', cx, cy + 12, '#fbbf24', 12);
    ctx.restore();
    label(ctx, 'Overlap LON+NY', cx, cy + 28, '#fbbf24', 9);

    // Legend bottom — cleaner row
    const legY = H - 22;
    const items = [
      { color: '#26a69a', text: 'Londres ★' },
      { color: '#3b82f6', text: 'Nueva York' },
      { color: '#fbbf24', text: 'Overlap Best' },
      { color: '#2d6aad', text: 'Tokio' },
    ];
    const legSpacing = W / (items.length + 1);
    items.forEach((it, i) => {
      const lx = legSpacing * (i + 1);
      ctx.save();
      ctx.beginPath();
      ctx.arc(lx - 16, legY, 5, 0, Math.PI * 2);
      ctx.fillStyle = it.color;
      ctx.fill();
      ctx.restore();
      label(ctx, it.text, lx, legY, '#94a3b8', 9.5, 'left');
    });
  }

  // ── 4. Galería de velas ──────────────────────────────────────────────────

  function drawCandleGallery(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    // Title
    ctx.save();
    ctx.shadowColor = 'rgba(251,191,36,0.2)';
    ctx.shadowBlur = 8;
    boldLabel(ctx, 'PATRONES DE VELAS — Los 5 más importantes', W / 2, 20, '#e2e8f0', 13);
    ctx.restore();

    const patterns = [
      {
        name: 'ENGULFING',
        nameLine2: 'ALCISTA',
        desc: 'Señal de COMPRA',
        detail: 'Compradores tomaron el control',
        draw: (x, midY, ch, bw) => {
          // Small red candle: close < open in Y → bearColor (red)
          drawCandle(ctx, x - bw * 0.75, midY + ch * 0.05, midY - ch * 0.05, midY - ch * 0.08, midY + ch * 0.09, '#26a69a', '#ef5350', bw * 0.65);
          // Large green engulfing: close > open in Y → bullColor (green)
          drawCandle(ctx, x + bw * 0.75, midY - ch * 0.30, midY + ch * 0.25, midY - ch * 0.34, midY + ch * 0.30, '#26a69a', '#ef5350', bw * 1.1);
        },
        color: '#26a69a'
      },
      {
        name: 'ENGULFING',
        nameLine2: 'BAJISTA',
        desc: 'Señal de VENTA',
        detail: 'Vendedores tomaron el control',
        draw: (x, midY, ch, bw) => {
          // Small green candle: close > open in Y → bullColor (green)
          drawCandle(ctx, x - bw * 0.75, midY - ch * 0.05, midY + ch * 0.05, midY - ch * 0.09, midY + ch * 0.08, '#26a69a', '#ef5350', bw * 0.65);
          // Large red engulfing: close < open in Y → bearColor (red)
          drawCandle(ctx, x + bw * 0.75, midY + ch * 0.30, midY - ch * 0.25, midY - ch * 0.30, midY + ch * 0.34, '#26a69a', '#ef5350', bw * 1.1);
        },
        color: '#ef5350'
      },
      {
        name: 'MARTILLO',
        nameLine2: '',
        desc: 'Rechazo bajista',
        detail: 'Compradores absorbieron la venta',
        draw: (x, midY, ch, bw) => {
          // Tiny body at top, very long lower shadow (3× body)
          const bodyTop = midY - ch * 0.04;
          const bodyBot = midY + ch * 0.04;
          const high = bodyTop - ch * 0.03;  // minimal upper shadow
          const low  = midY + ch * 0.55;     // very long lower shadow
          drawCandle(ctx, x, bodyBot, bodyTop, high, low, '#26a69a', '#26a69a', bw);
        },
        color: '#26a69a'
      },
      {
        name: 'ESTRELLA',
        nameLine2: 'FUGAZ',
        desc: 'Rechazo alcista',
        detail: 'Vendedores rechazaron la subida',
        draw: (x, midY, ch, bw) => {
          // Tiny body at bottom, very long upper shadow (3× body)
          const bodyTop = midY - ch * 0.04;
          const bodyBot = midY + ch * 0.04;
          const high = midY - ch * 0.55;     // very long upper shadow
          const low  = bodyBot + ch * 0.03;  // minimal lower shadow
          drawCandle(ctx, x, bodyBot, bodyTop, high, low, '#ef5350', '#ef5350', bw);
        },
        color: '#ef5350'
      },
      {
        name: 'DOJI',
        nameLine2: '',
        desc: 'Indecisión',
        detail: 'Espera confirmación',
        draw: (x, midY, ch, bw) => {
          const mid = midY;
          drawCandle(ctx, x, mid, mid + 1, mid - ch * 0.42, mid + ch * 0.42, '#94a3b8', '#94a3b8', bw);
          ctx.save();
          ctx.strokeStyle = '#94a3b8';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(x - bw * 0.7, mid);
          ctx.lineTo(x + bw * 0.7, mid);
          ctx.stroke();
          ctx.restore();
        },
        color: '#94a3b8'
      },
    ];

    const cols = patterns.length;
    const colW = W / cols;
    const midY = H * 0.42;
    const candleH = H * 0.50;
    const bw = Math.min(colW * 0.22, 20);

    patterns.forEach((p, i) => {
      const x = colW * (i + 0.5);

      // Column background (subtle)
      ctx.save();
      ctx.fillStyle = 'rgba(255,255,255,0.008)';
      ctx.fillRect(colW * i + 2, 36, colW - 4, H - 58);
      ctx.restore();

      // Draw candle(s) with a subtle glow
      ctx.save();
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      p.draw(x, midY, candleH, bw);
      ctx.restore();

      // Dividers
      if (i > 0) {
        line(ctx, colW * i, 34, colW * i, H - 8, '#1a1a1a', 1);
      }

      // Label box with color background
      const lblY = H * 0.74;
      const nameH = 15;
      const boxH = p.nameLine2 ? 14 : 0;

      ctx.save();
      ctx.fillStyle = p.color + '22';
      const boxW = colW * 0.84;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x - boxW / 2, lblY - 8, boxW, nameH + boxH + 4, 4);
      else ctx.rect(x - boxW / 2, lblY - 8, boxW, nameH + boxH + 4);
      ctx.fill();
      ctx.restore();

      boldLabel(ctx, p.name, x, lblY, p.color, 10);
      if (p.nameLine2) boldLabel(ctx, p.nameLine2, x, lblY + 14, p.color, 10);

      const descY = lblY + (p.nameLine2 ? 28 : 14);
      label(ctx, p.desc, x, descY, '#e2e8f0', 9.5);
      label(ctx, p.detail, x, descY + 14, '#475569', 8.5, 'center');
    });

    // Bottom note
    line(ctx, 16, H - 18, W - 16, H - 18, '#1a1a1a', 0.8);
    label(ctx, 'Ningún patrón es 100% fiable — siempre confirma con el contexto del mercado', W / 2, H - 8, '#475569', 9);
  }

  // ── 5. Soporte y resistencia ─────────────────────────────────────────────

  function drawSupportResistance(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    ctx.save();
    ctx.shadowColor = 'rgba(239,83,80,0.2)';
    ctx.shadowBlur = 8;
    boldLabel(ctx, 'SOPORTE Y RESISTENCIA', W / 2, 20, '#e2e8f0', 13);
    ctx.restore();

    const padL = 30, padR = 20;
    const chartTop = 42, chartBot = H - 48;
    const chartH = chartBot - chartTop;
    const chartW = W - padL - padR;

    const resY = chartTop + chartH * 0.15;
    const supY = chartTop + chartH * 0.85;

    // Grid lines
    for (let i = 1; i <= 3; i++) {
      const gy = chartTop + (chartH / 4) * i;
      line(ctx, padL, gy, W - padR, gy, '#0d1421', 1);
    }

    // Candle data — 15 candles showing bounces
    const nCandles = 16;
    const cW = (chartW * 0.88) / nCandles;
    const cSpace = chartW / nCandles;

    // Pre-defined scenario:
    // Candles 0-2: rising to resistance
    // Candle 3: touches resistance, big wick
    // Candles 4-6: bounce down
    // Candle 7: touches resistance again, rejected
    // Candles 8-10: drop to support
    // Candle 11: touches support, wick down, bounce
    // Candles 12-13: rise toward resistance
    // Candle 14: 3rd touch of resistance rejected
    // Candle 15: pull back

    const priceRange = supY - resY;
    const prices = [
      // [open, close, high, low] -- fracciones relativas al rango resY->supY
      // 0.0 = linea RESISTENCIA (top)  |  1.0 = linea SOPORTE (bottom)
      // WICKS: high_frac < min(open,close)  |  low_frac > max(open,close)

      // -- SUBIDA hacia resistencia --
      [0.96, 0.78, 0.75, 0.99],  // 0  cuerpo grande, sube desde base
      [0.78, 0.57, 0.54, 0.81],  // 1  cuerpo grande, sigue subiendo
      [0.57, 0.34, 0.31, 0.60],  // 2  cuerpo largo, se acerca a resistencia

      // -- 1er RECHAZO en RESISTENCIA --
      [0.40, 0.56, 0.02, 0.58],  // 3  wick superior DRAMATICO (0.02!), cuerpo debajo

      // -- CAIDA tras 1er rechazo --
      [0.56, 0.72, 0.53, 0.75],  // 4  baja con fuerza
      [0.72, 0.88, 0.69, 0.91],  // 5  baja profundo -- cerca de soporte

      // -- INTENTO ALCISTA --
      [0.88, 0.66, 0.63, 0.91],  // 6  rebote desde zona baja

      // -- 2do RECHAZO en RESISTENCIA --
      [0.32, 0.50, 0.03, 0.53],  // 7  wick superior LARGO (0.03!), rechazo claro

      // -- CAIDA PROFUNDA hacia soporte --
      [0.50, 0.68, 0.47, 0.71],  // 8  baja -- cuerpo medio
      [0.68, 0.88, 0.65, 0.91],  // 9  cae fuerte hacia soporte

      // -- REBOTE EN SOPORTE --
      [0.88, 0.68, 0.65, 1.07],  // 10 wick inferior CRUZA soporte (1.07!), rebote BRUTAL

      // -- RECUPERACION --
      [0.68, 0.48, 0.45, 0.71],  // 11 sube -- cuerpo solido
      [0.48, 0.28, 0.25, 0.51],  // 12 sube fuerte -- acercandose a resistencia

      // -- ACERCAMIENTO al 3er nivel --
      [0.28, 0.16, 0.13, 0.31],  // 13 cuerpo pequeno, casi en resistencia

      // -- 3er RECHAZO -- el mas brutal --
      [0.16, 0.38, 0.01, 0.41],  // 14 wick EXTREMO (0.01 = roza resistencia), rechazo total

      // -- PULLBACK final --
      [0.38, 0.58, 0.35, 0.62],  // 15 baja confirmando la zona
    ];

    function toY(frac) {
      return resY + frac * priceRange;
    }

    prices.forEach((p, i) => {
      const x = padL + cSpace * (i + 0.5);
      drawCandle(ctx, x, toY(p[0]), toY(p[1]), toY(p[2]), toY(p[3]), '#ef5350', '#26a69a', cW * 0.72);
    });

    // Resistance line
    ctx.save();
    ctx.strokeStyle = '#ef5350';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([6, 3]);
    ctx.beginPath();
    ctx.moveTo(padL, resY);
    ctx.lineTo(W - padR, resY);
    ctx.stroke();
    ctx.restore();

    // Support line
    ctx.save();
    ctx.strokeStyle = '#26a69a';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([6, 3]);
    ctx.beginPath();
    ctx.moveTo(padL, supY);
    ctx.lineTo(W - padR, supY);
    ctx.stroke();
    ctx.restore();

    // Bounce arrows on resistance (touches 3, 7, 14)
    [3, 7, 14].forEach(i => {
      const x = padL + cSpace * (i + 0.5);
      arrowDown(ctx, x, resY - 18, resY - 6, '#ef5350', 5);
    });

    // Bounce arrows on support (touch 10)
    [10].forEach(i => {
      const x = padL + cSpace * (i + 0.5);
      ctx.save();
      ctx.fillStyle = '#26a69a';
      ctx.strokeStyle = '#26a69a';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, supY + 18);
      ctx.lineTo(x, supY + 6);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, supY + 6);
      ctx.lineTo(x - 4, supY + 12);
      ctx.lineTo(x + 4, supY + 12);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    });

    // Labels
    label(ctx, 'RESISTENCIA — Vendedores aquí', W - padR - 2, resY - 10, '#ef5350', 10, 'right');
    label(ctx, '(El precio rebota hacia abajo 3 veces)', W - padR - 2, resY - 22, '#475569', 9, 'right');
    label(ctx, 'SOPORTE — Compradores aquí', W - padR - 2, supY + 12, '#26a69a', 10, 'right');
    label(ctx, '(El precio rebota hacia arriba)', W - padR - 2, supY + 24, '#475569', 9, 'right');

    // Bottom explanation
    label(ctx, 'Cuantas más veces rebota el precio en un nivel → más fuerte es ese nivel', W / 2, H - 14, '#94a3b8', 9.5);
  }

  // ── 6. Estructura de mercado ─────────────────────────────────────────────

  function drawMarketStructure(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    ctx.save();
    ctx.shadowColor = 'rgba(59,130,246,0.25)';
    ctx.shadowBlur = 8;
    boldLabel(ctx, 'ESTRUCTURA DE MERCADO — HH, HL, LH, CHoCH y BOS', W / 2, 20, '#e2e8f0', 13);
    ctx.restore();

    const padL = 28, padR = 18;
    const chartTop = 42, chartBot = H - 52;
    const chartH = chartBot - chartTop;
    const chartW = W - padL - padR;
    const n = 16;
    const cSpace = chartW / n;
    const cW = cSpace * 0.62;

    // Fracciones: 0 = techo (precio alto), 1 = suelo (precio bajo)
    // Bull: c < o (cierra más arriba). Bear: c > o.
    const candles = [
      // UPTREND ──────────────────────────────────────────────────────────────
      { o: 0.93, c: 0.76, h: 0.74, l: 0.95 },  // 0  bull — arranque desde base
      { o: 0.76, c: 0.58, h: 0.56, l: 0.78 },  // 1  bull — HH1 (primer máximo)
      { o: 0.58, c: 0.70, h: 0.56, l: 0.72 },  // 2  bear — pullback
      { o: 0.70, c: 0.77, h: 0.68, l: 0.79 },  // 3  bear — HL1 (mínimo más alto)
      { o: 0.77, c: 0.53, h: 0.51, l: 0.79 },  // 4  bull — impulso 2
      { o: 0.53, c: 0.36, h: 0.34, l: 0.55 },  // 5  bull — HH2 (nuevo máximo)
      { o: 0.36, c: 0.52, h: 0.34, l: 0.54 },  // 6  bear — pullback
      { o: 0.52, c: 0.61, h: 0.50, l: 0.63 },  // 7  bear — HL2 (mínimo más alto)
      { o: 0.61, c: 0.34, h: 0.32, l: 0.63 },  // 8  bull — impulso 3
      { o: 0.34, c: 0.12, h: 0.10, l: 0.36 },  // 9  bull — HH3 (cima máxima)
      // ZONA REVERSAL ────────────────────────────────────────────────────────
      { o: 0.12, c: 0.30, h: 0.10, l: 0.32 },  // 10 bear — primera caída
      { o: 0.30, c: 0.47, h: 0.28, l: 0.49 },  // 11 bear — sigue cayendo
      { o: 0.47, c: 0.28, h: 0.26, l: 0.49 },  // 12 bull — LH: rebote claro < HH3
      // CHoCH ────────────────────────────────────────────────────────────────
      { o: 0.28, c: 0.67, h: 0.26, l: 0.69 },  // 13 bear — CHoCH: rompe HL2
      // DOWNTREND ────────────────────────────────────────────────────────────
      { o: 0.67, c: 0.79, h: 0.65, l: 0.81 },  // 14 bear — BOS
      { o: 0.79, c: 0.90, h: 0.77, l: 0.92 },  // 15 bear — LL (mínimo más bajo)
    ];

    function toY(frac) { return chartTop + frac * chartH; }
    function xOf(i)    { return padL + cSpace * (i + 0.5); }

    // Grid
    for (let i = 1; i <= 4; i++) {
      line(ctx, padL, chartTop + (chartH / 5) * i, W - padR, chartTop + (chartH / 5) * i, '#0d1421', 1);
    }

    // Candles
    candles.forEach((c, i) => {
      drawCandle(ctx, xOf(i), toY(c.o), toY(c.c), toY(c.h), toY(c.l), '#ef5350', '#26a69a', cW);
    });

    // Puntos clave de estructura (índice + fracción de precio)
    const pts = {
      hh1: { i: 1,  f: 0.58, label: 'HH' },
      hl1: { i: 3,  f: 0.77, label: 'HL' },
      hh2: { i: 5,  f: 0.36, label: 'HH' },
      hl2: { i: 7,  f: 0.61, label: 'HL' },
      hh3: { i: 9,  f: 0.12, label: 'HH' },
      lh:  { i: 12, f: 0.28, label: 'LH' },
    };

    // Zigzag alcista en orden temporal: inicio → HH1 → HL1 → HH2 → HL2 → HH3
    ctx.save();
    ctx.strokeStyle = '#26a69a';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 2]);
    ctx.beginPath();
    ctx.moveTo(xOf(0),           toY(0.93));
    ctx.lineTo(xOf(pts.hh1.i),  toY(pts.hh1.f));
    ctx.lineTo(xOf(pts.hl1.i),  toY(pts.hl1.f));
    ctx.lineTo(xOf(pts.hh2.i),  toY(pts.hh2.f));
    ctx.lineTo(xOf(pts.hl2.i),  toY(pts.hl2.f));
    ctx.lineTo(xOf(pts.hh3.i),  toY(pts.hh3.f));
    ctx.stroke();
    ctx.restore();

    // Zigzag bajista: HH3 → trough → LH (pico) → CHoCH → LL
    ctx.save();
    ctx.strokeStyle = '#ef5350';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 2]);
    ctx.beginPath();
    ctx.moveTo(xOf(pts.hh3.i), toY(pts.hh3.f));
    ctx.lineTo(xOf(11),        toY(0.47));
    ctx.lineTo(xOf(pts.lh.i),  toY(pts.lh.f));
    ctx.lineTo(xOf(13),        toY(0.67));
    ctx.lineTo(xOf(15),        toY(0.90));
    ctx.stroke();
    ctx.restore();

    // Labels HH / HL / LH
    Object.values(pts).forEach(p => {
      const x = xOf(p.i);
      const y = toY(p.f);
      const isHigh = p.label === 'HH' || p.label === 'LH';
      const col = p.label === 'HH' ? '#26a69a' : p.label === 'HL' ? '#60a5fa' : '#f97316';
      const offY = isHigh ? -14 : 10;
      ctx.save();
      ctx.fillStyle = col;
      ctx.fillRect(x - 10, y + offY - 7, 20, 14);
      ctx.restore();
      boldLabel(ctx, p.label, x, y + offY, '#000000', 8.5);
    });

    // Línea CHoCH: nivel HL2 que se rompe
    const chochY  = toY(pts.hl2.f);
    const chochX1 = xOf(pts.hl2.i);
    const chochX2 = xOf(13.6);
    line(ctx, chochX1, chochY, chochX2, chochY, '#fbbf24', 1.5, [5, 3]);

    ctx.save();
    ctx.fillStyle = '#78350f';
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1;
    const chochLblX = (chochX1 + chochX2) / 2;
    ctx.fillRect(chochLblX - 46, chochY + 6, 92, 18);
    ctx.strokeRect(chochLblX - 46, chochY + 6, 92, 18);
    ctx.restore();
    boldLabel(ctx, 'CHoCH — CAMBIO DE TENDENCIA', chochLblX, chochY + 15, '#fbbf24', 8.5);

    // Label BOS
    const bosX = xOf(14);
    const bosY  = toY(0.73) - 14;
    ctx.save();
    ctx.fillStyle = '#1a2850';
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1;
    ctx.fillRect(bosX - 20, bosY - 8, 40, 16);
    ctx.strokeRect(bosX - 20, bosY - 8, 40, 16);
    ctx.restore();
    boldLabel(ctx, 'BOS', bosX, bosY, '#3b82f6', 9);

    // Nota inferior
    label(ctx, 'CHoCH en H4 → cambia el sesgo de largo a corto', W / 2, H - 15, '#94a3b8', 9.5);
  }

  // ── 7. Liquidez y stop hunt ──────────────────────────────────────────────

  function drawLiquidityPools(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    ctx.save();
    ctx.shadowColor = 'rgba(251,191,36,0.2)';
    ctx.shadowBlur = 8;
    boldLabel(ctx, 'ZONAS DE LIQUIDEZ Y STOP HUNT', W / 2, 20, '#e2e8f0', 13);
    ctx.restore();

    const padL = 28, padR = 18;
    const chartTop = 42, chartBot = H - 52;
    const chartH = chartBot - chartTop;
    const chartW = W - padL - padR;
    const n = 18;
    const cSpace = chartW / n;
    const cW = cSpace * 0.6;

    function toY(f) { return chartTop + f * chartH; }
    function xOf(i)  { return padL + cSpace * (i + 0.5); }

    // EQL al 62% del canvas — cuerpos de velas en zona alta (0.10-0.35)
    // Las mechas de los toques EQL van desde ~0.25 hasta 0.62 = 120px de mecha
    // El sweep rompe hasta 0.90 = 185px de mecha — brutal y clarísimo
    const eqlFrac = 0.62;
    const eqlY = toY(eqlFrac);

    const candles = [
      // RANGING — cuerpos variados en zona alta, precio oscila con naturalidad
      { o: 0.34, c: 0.20, h: 0.17, l: 0.37 },  // 0  bull  cuerpo 0.14 = 46px
      { o: 0.20, c: 0.29, h: 0.17, l: 0.32 },  // 1  bear  cuerpo 0.09 = 29px
      { o: 0.29, c: 0.17, h: 0.14, l: 0.31 },  // 2  bull  cuerpo 0.12 = 39px

      // TOQUE 1 EQL — pin bar: cuerpo pequeño arriba, mecha larga exacta al EQL
      { o: 0.17, c: 0.23, h: 0.14, l: 0.62, eql: true },  // 3  bear  mecha 126px al EQL!

      { o: 0.23, c: 0.15, h: 0.12, l: 0.25 },  // 4  bull  rebote alcista
      { o: 0.15, c: 0.22, h: 0.12, l: 0.24 },  // 5  bear  consolidación
      { o: 0.22, c: 0.16, h: 0.13, l: 0.24 },  // 6  bull  nuevo intento alcista

      // TOQUE 2 EQL — misma mecha, MISMO nivel → EQUAL LOWS visualizados
      { o: 0.16, c: 0.23, h: 0.13, l: 0.62, eql: true },  // 7  bear  mecha idéntica!

      { o: 0.23, c: 0.14, h: 0.21, l: 0.25 },  // 8  bull  rebote
      { o: 0.14, c: 0.20, h: 0.11, l: 0.22 },  // 9  bear  presión bajista
      { o: 0.20, c: 0.27, h: 0.17, l: 0.29 },  // 10 bear  más presión

      // SWEEP — rompe por debajo de EQL (stops de todos los compradores activados)
      { o: 0.27, c: 0.35, h: 0.24, l: 0.90, sweep: true },  // 11 mecha 204px — brutal

      // RALLY EXPLOSIVO — precio revierte con fuerza desde el sweep
      { o: 0.35, c: 0.12, h: 0.09, l: 0.38 },  // 12 bull  cuerpo 0.23 = 75px
      { o: 0.12, c: 0.05, h: 0.03, l: 0.14 },  // 13 bull  cuerpo 0.07
      { o: 0.05, c: 0.02, h: 0.01, l: 0.07 },  // 14 bull
      { o: 0.02, c: 0.01, h: 0.01, l: 0.04 },  // 15 doji cima
      { o: 0.01, c: 0.02, h: 0.01, l: 0.03 },  // 16
      { o: 0.02, c: 0.01, h: 0.01, l: 0.03 },  // 17
    ];

    // Grid
    for (let i = 1; i <= 4; i++) {
      line(ctx, padL, chartTop + (chartH / 5) * i, W - padR, chartTop + (chartH / 5) * i, '#0d1421', 1);
    }

    candles.forEach((c, i) => {
      const x = xOf(i);
      drawCandle(ctx, x, toY(c.o), toY(c.c), toY(c.h), toY(c.l), '#ef5350', '#26a69a', cW);
    });

    // Equal lows dashed line
    ctx.save();
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(padL, eqlY);
    ctx.lineTo(W - padR, eqlY);
    ctx.stroke();
    ctx.restore();

    // EQL markers where price touched
    [3, 7].forEach(i => {
      const x = xOf(i);
      ctx.save();
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(x, eqlY, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // EQL label
    label(ctx, 'EQL — Mínimos iguales', padL + 4, eqlY - 12, '#fbbf24', 9.5, 'left');
    label(ctx, '(miles de stops acumulados aquí)', padL + 4, eqlY - 23, '#475569', 8.5, 'left');

    // Sweep annotation — tip clamped to chartBot so label stays visible
    const sweepX = xOf(11);
    const sweepTipY = Math.min(toY(1.05), chartBot - 2);

    ctx.save();
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(sweepX + cW, sweepTipY);
    ctx.lineTo(sweepX + cW + 36, sweepTipY - 10);
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.fillStyle = '#78350f';
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1;
    ctx.fillRect(sweepX + cW + 36, sweepTipY - 22, 76, 16);
    ctx.strokeRect(sweepX + cW + 36, sweepTipY - 22, 76, 16);
    ctx.restore();
    boldLabel(ctx, 'SWEEP — Activa stops', sweepX + cW + 74, sweepTipY - 14, '#fbbf24', 8.5);

    // Reversal arrow
    ctx.save();
    ctx.strokeStyle = '#26a69a';
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(xOf(12), toY(0.35));
    ctx.lineTo(xOf(14), toY(0.02));
    ctx.stroke();
    ctx.restore();
    // Arrow tip
    ctx.save();
    ctx.fillStyle = '#26a69a';
    ctx.beginPath();
    const ex = xOf(14), ey = toY(0.02);
    ctx.moveTo(ex, ey);
    ctx.lineTo(ex - 6, ey + 8);
    ctx.lineTo(ex + 2, ey + 5);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    label(ctx, 'REVERSIÓN', xOf(13), toY(0.07), '#26a69a', 9, 'center');

    // Bottom explanation
    line(ctx, 20, H - 28, W - 20, H - 28, '#1e2a3a', 0.8);
    label(ctx, 'El precio "va a buscar" los stops acumulados antes de moverse en la dirección real', W / 2, H - 16, '#94a3b8', 9.5);
  }

  // ── 8. Visualización de pips ─────────────────────────────────────────────

  function drawPipVisualization(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    ctx.save();
    ctx.shadowColor = 'rgba(251,191,36,0.25)';
    ctx.shadowBlur = 8;
    boldLabel(ctx, '¿QUÉ ES UN PIP Y LOS TAMAÑOS DE LOTE?', W / 2, 20, '#e2e8f0', 13);
    ctx.restore();

    const midY = H * 0.48;

    // ─── TOP: Pip explanation ────────────────────────────────────────────
    const priceX = W / 2;
    const priceY = H * 0.19;

    // Price display box
    ctx.save();
    ctx.fillStyle = '#0d1421';
    ctx.strokeStyle = '#1e2a3a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(priceX - 120, priceY - 28, 240, 54, 6);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // "1.0850" with highlighted pip digit
    const priceParts = [
      { text: '1.085', color: '#e2e8f0', size: 26, font: 'bold' },
      { text: '0', color: '#fbbf24', size: 30, font: 'bold' },
    ];
    let curX = priceX - 52;
    priceParts.forEach(p => {
      ctx.save();
      ctx.fillStyle = p.color;
      ctx.font = `${p.font} ${p.size}px 'Courier New', monospace`;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(p.text, curX, priceY);
      curX += ctx.measureText(p.text).width;
      ctx.restore();
    });

    // Arrow pointing to pip digit
    const pipX = priceX + 50;
    arrowDown(ctx, pipX, priceY + 36, priceY + 28, '#fbbf24', 5);
    label(ctx, '← Este dígito = 1 PIP', priceX, priceY + 49, '#fbbf24', 10);
    label(ctx, '0.0001 en decimales', priceX, priceY + 62, '#475569', 9.5);

    // Price change example
    const ex1X = W * 0.25, ex2X = W * 0.75, exY = H * 0.37;
    ctx.save();
    ctx.fillStyle = '#0d1421';
    ctx.strokeStyle = '#1e2a3a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(ex1X - 52, exY - 16, 104, 32, 5);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    boldLabel(ctx, '1.0850', ex1X, exY, '#e2e8f0', 16, 'center');

    arrowRight(ctx, ex1X + 52, exY, ex2X - 52, '#26a69a', 8);
    label(ctx, '+1 pip', W / 2, exY - 8, '#26a69a', 9.5);

    ctx.save();
    ctx.fillStyle = '#0d1421';
    ctx.strokeStyle = '#26a69a';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(ex2X - 52, exY - 16, 104, 32, 5);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    boldLabel(ctx, '1.0851', ex2X, exY, '#26a69a', 16, 'center');

    // ─── Divider ──────────────────────────────────────────────────────────
    line(ctx, 20, midY, W - 20, midY, '#1e2a3a', 1);
    boldLabel(ctx, 'TAMAÑOS DE LOTE — ¿Cuánto ganas/pierdes por pip?', W / 2, midY + 14, '#94a3b8', 10);

    // ─── BOTTOM: Lot size cubes ───────────────────────────────────────────
    const lots = [
      {
        name: 'MICRO', value: '0.01 lotes',
        pip: '$0.10 / pip', note: 'Para principiantes',
        color: '#1e3a5f', border: '#3b82f6', size: 0.22
      },
      {
        name: 'MINI', value: '0.10 lotes',
        pip: '$1.00 / pip', note: 'Intermedio',
        color: '#14342b', border: '#26a69a', size: 0.38
      },
      {
        name: 'STANDARD', value: '1.00 lotes',
        pip: '$10.00 / pip', note: 'Avanzado',
        color: '#3b1818', border: '#ef5350', size: 0.55
      },
    ];

    const bottomY = midY + 30;
    const availH = H - bottomY - 30;
    const spacing = W / 4;

    lots.forEach((lot, i) => {
      const x = spacing * (i + 1);
      const cubeSize = availH * lot.size;
      const cubeY = H - 48 - cubeSize;

      // Cube face (front)
      ctx.save();
      ctx.fillStyle = lot.color;
      ctx.strokeStyle = lot.border;
      ctx.lineWidth = 1.5;
      ctx.fillRect(x - cubeSize / 2, cubeY, cubeSize, cubeSize);
      ctx.strokeRect(x - cubeSize / 2, cubeY, cubeSize, cubeSize);

      // Cube top face (3D effect)
      const d = cubeSize * 0.2;
      ctx.fillStyle = lot.border + '44';
      ctx.beginPath();
      ctx.moveTo(x - cubeSize / 2, cubeY);
      ctx.lineTo(x - cubeSize / 2 + d, cubeY - d);
      ctx.lineTo(x + cubeSize / 2 + d, cubeY - d);
      ctx.lineTo(x + cubeSize / 2, cubeY);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = lot.border;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Cube right face
      ctx.fillStyle = lot.border + '22';
      ctx.beginPath();
      ctx.moveTo(x + cubeSize / 2, cubeY);
      ctx.lineTo(x + cubeSize / 2 + d, cubeY - d);
      ctx.lineTo(x + cubeSize / 2 + d, cubeY + cubeSize - d);
      ctx.lineTo(x + cubeSize / 2, cubeY + cubeSize);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = lot.border;
      ctx.stroke();
      ctx.restore();

      // Labels
      boldLabel(ctx, lot.name, x, cubeY + cubeSize / 2 - 12, '#ffffff', 10);
      label(ctx, lot.value, x, cubeY + cubeSize / 2 + 4, 'rgba(255,255,255,0.8)', 9.5);
      boldLabel(ctx, lot.pip, x, H - 38, lot.border, 10);
      label(ctx, lot.note, x, H - 24, '#94a3b8', 9);
    });
  }

  // ── 9. Curva de drawdown ─────────────────────────────────────────────────

  function drawDrawdownCurve(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    ctx.save();
    ctx.shadowColor = 'rgba(239,83,80,0.25)';
    ctx.shadowBlur = 8;
    boldLabel(ctx, 'POR QUÉ ARRIESGAR SIEMPRE EL 1%', W / 2, 20, '#e2e8f0', 13);
    ctx.restore();

    const midX = W / 2;
    const padL = 36, padR = 16;
    const chartTop = 44, chartBot = H - 52;
    const chartH = chartBot - chartTop;

    // Split into two halves
    const leftW = midX - padL - 8;
    const rightW = W - midX - padR - 8;

    // Center divider
    ctx.save();
    ctx.strokeStyle = '#1e2a3a';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(midX, chartTop - 10);
    ctx.lineTo(midX, chartBot + 10);
    ctx.stroke();
    ctx.restore();

    // Titles
    boldLabel(ctx, 'Riesgo 1% por trade', midX / 2 + padL / 2, 36, '#26a69a', 11);
    boldLabel(ctx, 'Riesgo 10% por trade', midX + (W - midX) / 2 - padR / 2, 36, '#ef5350', 11);

    // Seeded pseudo-random for reproducible candle sequences
    function seededRand(seed) {
      let s = seed;
      return function() {
        s = (s * 1664525 + 1013904223) & 0xffffffff;
        return (s >>> 0) / 0xffffffff;
      };
    }

    function simulateEquity(riskPct, nTrades, wr, seed) {
      const rand = seededRand(seed);
      let equity = 100;
      const points = [equity];
      for (let i = 0; i < nTrades; i++) {
        const win = rand() < wr;
        if (win) equity = equity * (1 + riskPct * 1.5 / 100);
        else equity = equity * (1 - riskPct / 100);
        points.push(equity);
      }
      return points;
    }

    const nTrades = 30;
    const eq1 = simulateEquity(1, nTrades, 0.45, 12345);
    const eq10 = simulateEquity(10, nTrades, 0.45, 99999);

    function drawEquityLine(points, startX, availW, color, showShading) {
      const all = points;
      const minV = Math.min(...all) * 0.96;
      const maxV = Math.max(...all) * 1.02;
      const range = maxV - minV;

      function toXY(i, v) {
        const x = startX + (i / (points.length - 1)) * availW;
        const y = chartBot - ((v - minV) / range) * chartH;
        return { x, y };
      }

      // Shading under curve
      if (showShading) {
        ctx.save();
        ctx.beginPath();
        points.forEach((v, i) => {
          const { x, y } = toXY(i, v);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
        const lastPt = toXY(points.length - 1, points[points.length - 1]);
        ctx.lineTo(lastPt.x, chartBot);
        ctx.lineTo(startX, chartBot);
        ctx.closePath();
        ctx.fillStyle = color + '18';
        ctx.fill();
        ctx.restore();
      }

      // Line
      ctx.save();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      points.forEach((v, i) => {
        const { x, y } = toXY(i, v);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.restore();

      // Start/end dots
      const start = toXY(0, points[0]);
      const end = toXY(points.length - 1, points[points.length - 1]);
      [start, end].forEach(pt => {
        ctx.save();
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Min equity label
      const minIdx = points.reduce((mi, v, i) => v < points[mi] ? i : mi, 0);
      const minPt = toXY(minIdx, points[minIdx]);
      const change = ((points[points.length - 1] - points[0]) / points[0] * 100).toFixed(1);
      return { end, change, minVal: points[points.length - 1].toFixed(1) };
    }

    // Draw left (1%)
    const res1 = drawEquityLine(eq1, padL + 4, leftW - 4, '#26a69a', true);

    // Draw right (10%)
    const res10 = drawEquityLine(eq10, midX + 8, rightW - 4, '#ef5350', true);

    // Axes labels
    label(ctx, '100%', padL - 2, chartTop + 2, '#475569', 8.5, 'right');
    label(ctx, 'inicio', padL - 2, chartBot, '#475569', 8.5, 'right');
    label(ctx, '0', padL - 2, chartBot, '#475569', 8.5, 'right');

    // Results labels
    const lossTag1 = ((eq1[eq1.length - 1] - 100)).toFixed(1);
    const sign1 = lossTag1 >= 0 ? '+' : '';
    boldLabel(ctx, `${sign1}${lossTag1}%`, midX / 2 + padL / 2, chartBot + 14, '#26a69a', 11);
    label(ctx, 'Drawdown controlado', midX / 2 + padL / 2, chartBot + 27, '#94a3b8', 9);
    label(ctx, '10 pérdidas seguidas → −10%', midX / 2 + padL / 2, chartBot + 40, '#475569', 9);

    const lossTag10 = ((eq10[eq10.length - 1] - 100)).toFixed(1);
    const sign10 = lossTag10 >= 0 ? '+' : '';
    boldLabel(ctx, `${sign10}${lossTag10}%`, midX + (W - midX) / 2 - padR / 2, chartBot + 14, '#ef5350', 11);
    label(ctx, 'Riesgo de ruina total', midX + (W - midX) / 2 - padR / 2, chartBot + 27, '#94a3b8', 9);
    label(ctx, '10 pérdidas seguidas → −65%+', midX + (W - midX) / 2 - padR / 2, chartBot + 40, '#475569', 9);
  }

  // ── 10. Comparativa R:R ──────────────────────────────────────────────────

  function drawRRComparison(canvas) {
    const { ctx, W, H } = setupCanvas(canvas);
    bg(ctx, W, H);

    ctx.save();
    ctx.shadowColor = 'rgba(59,130,246,0.2)';
    ctx.shadowBlur = 8;
    boldLabel(ctx, 'EL MISMO 45% WR — RESULTADOS RADICALMENTE DIFERENTES', W / 2, 20, '#e2e8f0', 12.5);
    ctx.restore();

    const padL = 44, padR = 16;
    const chartTop = 42, chartBot = H - 60;
    const chartH = chartBot - chartTop;
    const chartW = W - padL - padR;
    const nTrades = 20;

    function seededRand(seed) {
      let s = seed;
      return function() {
        s = (s * 1664525 + 1013904223) & 0xffffffff;
        return (s >>> 0) / 0xffffffff;
      };
    }

    // Generate win/loss sequence — same seed so all three use same trades
    function genWins(nTrades, wr, seed) {
      const rand = seededRand(seed);
      return Array.from({ length: nTrades }, () => rand() < wr);
    }

    const wins = genWins(nTrades, 0.45, 42);

    function calcEquity(wins, rr, risk) {
      let eq = 100;
      const pts = [eq];
      wins.forEach(win => {
        if (win) eq = eq * (1 + rr * risk / 100);
        else eq = eq * (1 - risk / 100);
        pts.push(eq);
      });
      return pts;
    }

    const risk = 1;
    const curves = [
      { label: 'R:R 1:1', rr: 1, color: '#ef5350', dash: [] },
      { label: 'R:R 1:2', rr: 2, color: '#3b82f6', dash: [] },
      { label: 'R:R 1:3', rr: 3, color: '#26a69a', dash: [] },
    ];

    const allPoints = curves.map(c => calcEquity(wins, c.rr, risk));
    const allVals = allPoints.flat();
    const minV = Math.min(...allVals) * 0.95;
    const maxV = Math.max(...allVals) * 1.04;
    const range = maxV - minV;

    function toXY(i, v) {
      const x = padL + (i / nTrades) * chartW;
      const y = chartBot - ((v - minV) / range) * chartH;
      return { x, y };
    }

    // Grid lines
    const gridValues = [100, 105, 110, 115, 95, 90];
    gridValues.forEach(v => {
      if (v < minV || v > maxV) return;
      const y = chartBot - ((v - minV) / range) * chartH;
      line(ctx, padL, y, W - padR, y, v === 100 ? '#1e2a3a' : '#0d1421', v === 100 ? 1 : 0.8);
      label(ctx, `${v}%`, padL - 4, y, '#475569', 8.5, 'right');
    });

    // Baseline 100%
    const y100 = chartBot - ((100 - minV) / range) * chartH;
    ctx.save();
    ctx.strokeStyle = '#1e2a3a';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(padL, y100);
    ctx.lineTo(W - padR, y100);
    ctx.stroke();
    ctx.restore();

    // X axis ticks
    for (let i = 0; i <= nTrades; i += 5) {
      const x = padL + (i / nTrades) * chartW;
      line(ctx, x, chartBot, x, chartBot + 5, '#2d3f55', 1);
      label(ctx, `${i}`, x, chartBot + 14, '#475569', 8.5);
    }
    label(ctx, 'Trades →', padL + chartW / 2, chartBot + 26, '#475569', 9);

    // Win/loss markers on x axis
    wins.forEach((win, i) => {
      const x = padL + ((i + 0.5) / nTrades) * chartW;
      ctx.save();
      ctx.fillStyle = win ? '#26a69a' : '#ef5350';
      ctx.globalAlpha = 0.6;
      ctx.fillRect(x - 2, chartBot + 1, 4, 4);
      ctx.restore();
    });

    // Draw curves
    allPoints.forEach((pts, ci) => {
      const c = curves[ci];
      ctx.save();
      ctx.strokeStyle = c.color;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      if (c.dash.length) ctx.setLineDash(c.dash);
      ctx.beginPath();
      pts.forEach((v, i) => {
        const { x, y } = toXY(i, v);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
      ctx.restore();

      // End label
      const endPt = toXY(pts.length - 1, pts[pts.length - 1]);
      const final = (pts[pts.length - 1] - 100).toFixed(1);
      const sign = final >= 0 ? '+' : '';
      boldLabel(ctx, `${sign}${final}%`, endPt.x + 4, endPt.y, c.color, 9.5, 'left');
    });

    // Legend
    const legX = padL + 8;
    const legY = chartTop + 10;
    curves.forEach((c, i) => {
      const ly = legY + i * 16;
      ctx.save();
      ctx.strokeStyle = c.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(legX, ly);
      ctx.lineTo(legX + 20, ly);
      ctx.stroke();
      ctx.restore();
      boldLabel(ctx, c.label, legX + 26, ly, c.color, 9.5, 'left');
    });

    // WR note
    label(ctx, 'WR = 45% (misma secuencia de trades)', padL + chartW - 4, chartTop + 8, '#475569', 8.5, 'right');

    // Bottom note
    line(ctx, 20, H - 24, W - 20, H - 24, '#1e2a3a', 0.8);
    label(ctx, 'Con 55-65% WR y R:R 1:2 → la cuenta crece de forma consistente y controlada', W / 2, H - 12, '#94a3b8', 9.5);
  }

  // ── Export ───────────────────────────────────────────────────────────────

  window.EduCharts = {
    drawParticipantsPyramid,
    drawCandleAnatomy,
    drawSessionsClock,
    drawCandleGallery,
    drawSupportResistance,
    drawMarketStructure,
    drawLiquidityPools,
    drawPipVisualization,
    drawDrawdownCurve,
    drawRRComparison,
  };

})();
