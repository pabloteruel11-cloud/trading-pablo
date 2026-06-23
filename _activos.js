// _activos.js — catálogo CURADO de la sección INVERSIÓN del "núcleo".
// Datos de fuentes oficiales/autoritativas. EDUCATIVO, no asesoramiento financiero.
// Regla de curado: NO se inventan cifras. Cada serie lleva fuente + fechaConsulta + status.
//   status 'curado'    = rentabilidad verificada en una fuente real (ver fuenteUrl).
//   status 'pendiente' = ficha lista, pero la serie histórica aún por verificar (fuente identificada).
// Formato de serie: { anio, r } donde r = rentabilidad TOTAL de ese año natural en %.
//   La calculadora capitaliza: valor = capital × Π(1 + r/100).
// Categorías de riesgo: SRI 1–7 (escala oficial PRIIPs; orientativa por tipo de activo).

window.ACTIVOS = {
  meta: {
    generado: '2026-06-23',
    moneda: 'EUR (salvo donde se indique)',
    nota: 'Datos curados de fuentes oficiales/autoritativas. Contenido educativo, NO asesoramiento ni recomendación de inversión. Rentabilidades pasadas no garantizan rentabilidades futuras.'
  },

  categorias: [
    { id: 'indices', nombre: 'Índices', emoji: '📈' },
    { id: 'etfs',    nombre: 'ETFs / fondos indexados', emoji: '🧺' },
    { id: 'acciones',nombre: 'Acciones', emoji: '🏢' },
    { id: 'bonos',   nombre: 'Bonos', emoji: '🏛️' },
    { id: 'oro',     nombre: 'Oro y materias primas', emoji: '🪙' },
    { id: 'cripto',  nombre: 'Criptomonedas', emoji: '₿' },
    { id: 'cuenta',  nombre: 'Cuenta remunerada / liquidez', emoji: '🏦' }
  ],

  activos: [
    // ───────────────────────── ÍNDICES ─────────────────────────
    {
      id: 'msci-world', nombre: 'MSCI World', categoria: 'indices', isin: null, ticker: 'MSCI World', moneda: 'EUR', sri: 4,
      descripcion: 'Índice de las ~1.300 mayores empresas de 23 países desarrollados. Es la apuesta "global" por excelencia: muy diversificado, riesgo medio-alto. Pensado para horizontes largos.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 20.01 }, { anio: 2015, r: 11.30 }, { anio: 2016, r: 10.22 }, { anio: 2017, r: 7.59 },
        { anio: 2018, r: -3.99 }, { anio: 2019, r: 30.51 }, { anio: 2020, r: 7.86 }, { anio: 2021, r: 31.43 },
        { anio: 2022, r: -14.34 }, { anio: 2023, r: 21.96 }, { anio: 2024, r: 28.02 }
      ],
      fuente: 'MSCI — Index Factsheet (MSCI World Index, EUR, Net Return)', fuenteUrl: 'https://www.msci.com/www/index-factsheets/msci-world-index/08490663', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'sp500', nombre: 'S&P 500', categoria: 'indices', isin: null, ticker: 'SPX', moneda: 'USD', sri: 5,
      descripcion: 'Las 500 mayores empresas de EE. UU. El índice de referencia mundial. Riesgo medio-alto; concentrado en EE. UU. y muy expuesto a tecnología. Horizonte largo. (Rentabilidad en USD, con dividendos.)',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 13.69 }, { anio: 2015, r: 1.38 }, { anio: 2016, r: 11.96 }, { anio: 2017, r: 21.83 },
        { anio: 2018, r: -4.38 }, { anio: 2019, r: 31.49 }, { anio: 2020, r: 18.40 }, { anio: 2021, r: 28.71 },
        { anio: 2022, r: -18.11 }, { anio: 2023, r: 26.29 }, { anio: 2024, r: 25.02 }
      ],
      fuente: 'S&P Dow Jones Indices — S&P 500 Total Return (recopilado en slickcharts.com/sp500/returns)', fuenteUrl: 'https://www.slickcharts.com/sp500/returns', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'eurostoxx50', nombre: 'EURO STOXX 50', categoria: 'indices', isin: null, ticker: 'SX5E', moneda: 'EUR', sri: 5,
      descripcion: 'Las 50 mayores empresas de la zona euro. Bolsa europea de gran capitalización; riesgo medio-alto, menos diversificado que el MSCI World.',
      returnType: 'total_return_anual_pct',
      serie: [],
      fuente: 'STOXX / Qontigo — Index Factsheet (EURO STOXX 50 Net Return EUR)', fuenteUrl: 'https://www.stoxx.com/index-details?symbol=SX5T', fechaConsulta: '2026-06-23', status: 'pendiente'
    },
    {
      id: 'ibex35', nombre: 'IBEX 35', categoria: 'indices', isin: null, ticker: 'IBEX', moneda: 'EUR', sri: 6,
      descripcion: 'Las 35 mayores empresas cotizadas en España. Muy concentrado (banca, energía); riesgo alto por poca diversificación. La versión "con dividendos" (IBEX 35 Total Return) es la comparable.',
      returnType: 'total_return_anual_pct',
      serie: [],
      fuente: 'BME (Bolsas y Mercados Españoles) — IBEX 35 con dividendos (Total Return)', fuenteUrl: 'https://www.bolsasymercados.es/bme-exchange/es/Indices/Ibex', fechaConsulta: '2026-06-23', status: 'pendiente'
    },

    // ───────────────────────── ETFs ─────────────────────────
    {
      id: 'swda', nombre: 'iShares Core MSCI World (SWDA)', categoria: 'etfs', isin: 'IE00B4L5Y983', ticker: 'SWDA', moneda: 'EUR', sri: 4,
      descripcion: 'ETF de acumulación que replica el MSCI World (mismo riesgo que el índice). De los más usados en Europa para invertir en "todo el mundo desarrollado" con un solo producto. Comisión (TER) ~0,20% al año.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 20.01 }, { anio: 2015, r: 11.30 }, { anio: 2016, r: 10.22 }, { anio: 2017, r: 7.59 },
        { anio: 2018, r: -3.99 }, { anio: 2019, r: 30.51 }, { anio: 2020, r: 7.86 }, { anio: 2021, r: 31.43 },
        { anio: 2022, r: -14.34 }, { anio: 2023, r: 21.96 }, { anio: 2024, r: 28.02 }
      ],
      nota: 'Serie = MSCI World (EUR Net) como aproximación del fondo; el ETF queda ~0,2%/año por debajo por la comisión.',
      fuente: 'iShares (BlackRock) — KID/ficha del fondo + MSCI World EUR Net como proxy', fuenteUrl: 'https://www.ishares.com/es/inversor-particular/es/productos/251882/', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'vuaa', nombre: 'Vanguard S&P 500 UCITS Acc (VUAA)', categoria: 'etfs', isin: 'IE00BFMXXD54', ticker: 'VUAA', moneda: 'USD', sri: 5,
      descripcion: 'ETF de acumulación que replica el S&P 500 (las 500 mayores de EE. UU.). Muy popular y barato (TER ~0,07%). Mismo riesgo que el índice; concentrado en EE. UU.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 13.69 }, { anio: 2015, r: 1.38 }, { anio: 2016, r: 11.96 }, { anio: 2017, r: 21.83 },
        { anio: 2018, r: -4.38 }, { anio: 2019, r: 31.49 }, { anio: 2020, r: 18.40 }, { anio: 2021, r: 28.71 },
        { anio: 2022, r: -18.11 }, { anio: 2023, r: 26.29 }, { anio: 2024, r: 25.02 }
      ],
      nota: 'Serie = S&P 500 Total Return (USD) como aproximación; el ETF queda ~0,07%/año por debajo por la comisión.',
      fuente: 'Vanguard — ficha/KID del fondo + S&P 500 TR como proxy', fuenteUrl: 'https://www.vanguard.es/', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'nasdaq100', nombre: 'Nasdaq-100 (ETF temático/tecnología)', categoria: 'etfs', isin: 'IE00B53SZB19', ticker: 'CSNDX', moneda: 'USD', sri: 6,
      descripcion: 'Las 100 mayores empresas no financieras del Nasdaq (muy tecnológico: Apple, Microsoft, Nvidia...). Más rentabilidad histórica pero más volátil que el S&P 500. Riesgo alto.',
      returnType: 'total_return_anual_pct',
      serie: [],
      fuente: 'iShares Nasdaq 100 UCITS ETF (Acc) — ficha/KID + Nasdaq-100 TR', fuenteUrl: 'https://www.ishares.com/es/inversor-particular/es/productos/253741/', fechaConsulta: '2026-06-23', status: 'pendiente'
    },

    // ───────────────────────── BONOS ─────────────────────────
    {
      id: 'bonos-euro', nombre: 'Bonos del Estado en euros', categoria: 'bonos', isin: 'IE00B4WXJJ64', ticker: 'IEGA', moneda: 'EUR', sri: 3,
      descripcion: 'Deuda pública de países de la zona euro (vía ETF iShares Core € Govt Bond). Riesgo bajo-medio: más estable que la bolsa, pero puede caer si suben los tipos de interés. Para la parte defensiva de la cartera.',
      returnType: 'total_return_anual_pct',
      serie: [],
      fuente: 'iShares Core € Govt Bond UCITS ETF — ficha/KID', fuenteUrl: 'https://www.ishares.com/es/inversor-particular/es/productos/251726/', fechaConsulta: '2026-06-23', status: 'pendiente'
    },

    // ───────────────────────── ORO ─────────────────────────
    {
      id: 'oro', nombre: 'Oro', categoria: 'oro', isin: null, ticker: 'XAU', moneda: 'EUR', sri: 4,
      descripcion: 'El refugio clásico. Suele aguantar (o subir) cuando la bolsa cae y protege frente a la inflación, pero no da intereses ni dividendos. Riesgo medio. Para diversificar.',
      returnType: 'total_return_anual_pct',
      serie: [],
      fuente: 'World Gold Council — Gold returns (EUR) / LBMA precio oficial', fuenteUrl: 'https://www.gold.org/goldhub/data/gold-returns', fechaConsulta: '2026-06-23', status: 'pendiente'
    },

    // ───────────────────────── CRIPTO ─────────────────────────
    {
      id: 'bitcoin', nombre: 'Bitcoin (BTC)', categoria: 'cripto', isin: null, ticker: 'BTC', moneda: 'USD', sri: 7,
      descripcion: 'La primera criptomoneda. Rentabilidad histórica enorme pero con caídas brutales (-65% en un año no es raro). Riesgo MÁXIMO (SRI 7): solo una pequeña parte de la cartera y dinero que puedas permitirte perder.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2015, r: 34 }, { anio: 2016, r: 124 }, { anio: 2017, r: 1369 }, { anio: 2018, r: -74 },
        { anio: 2019, r: 92 }, { anio: 2020, r: 303 }, { anio: 2021, r: 60 }, { anio: 2022, r: -64 },
        { anio: 2023, r: 155 }, { anio: 2024, r: 121 }
      ],
      nota: 'Rentabilidades anuales (base USD); varían algo según el exchange/fuente. Cifras redondeadas.',
      fuente: 'Recopilaciones públicas (World of Statistics / slickcharts.com/currency/BTC/returns)', fuenteUrl: 'https://www.slickcharts.com/currency/BTC/returns', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'ethereum', nombre: 'Ethereum (ETH)', categoria: 'cripto', isin: null, ticker: 'ETH', moneda: 'USD', sri: 7,
      descripcion: 'La segunda cripto por tamaño; la "plataforma" de las aplicaciones descentralizadas. Aún más volátil que Bitcoin. Riesgo máximo (SRI 7).',
      returnType: 'total_return_anual_pct',
      serie: [],
      fuente: 'CoinGecko — histórico de Ethereum', fuenteUrl: 'https://www.coingecko.com/en/coins/ethereum', fechaConsulta: '2026-06-23', status: 'pendiente'
    },

    // ───────────────────── CUENTA REMUNERADA ─────────────────────
    {
      id: 'cuenta-estr', nombre: 'Cuenta remunerada (€STR / BCE)', categoria: 'cuenta', isin: null, ticker: '€STR', moneda: 'EUR', sri: 1,
      descripcion: 'El dinero "sin riesgo" a corto plazo: cuentas remuneradas y fondos monetarios, que pagan en torno al tipo de referencia del BCE (€STR). Riesgo mínimo (SRI 1) pero rentabilidad baja y dependiente de los tipos.',
      returnType: 'tipo_anual_pct',
      serie: [],
      fuente: 'BCE — Euro short-term rate (€STR), ECB Data Portal', fuenteUrl: 'https://data.ecb.europa.eu/data/datasets/EST', fechaConsulta: '2026-06-23', status: 'pendiente'
    }
  ],

  // Matriz ORIENTATIVA de reparto por perfil (se usa en el Paso 4 — Motor de reparto).
  // [PROPUESTA educativa, NO recomendación de inversión]. Suma 100% por perfil.
  repartoPorPerfil: {
    Conservador: [ { categoria: 'cuenta', pct: 50 }, { categoria: 'bonos', pct: 30 }, { categoria: 'etfs', pct: 20 } ],
    Moderado:    [ { categoria: 'etfs', pct: 50 }, { categoria: 'bonos', pct: 25 }, { categoria: 'oro', pct: 15 }, { categoria: 'cuenta', pct: 10 } ],
    Arriesgado:  [ { categoria: 'etfs', pct: 50 }, { categoria: 'acciones', pct: 20 }, { categoria: 'oro', pct: 15 }, { categoria: 'cripto', pct: 10 }, { categoria: 'cuenta', pct: 5 } ]
  }
};
