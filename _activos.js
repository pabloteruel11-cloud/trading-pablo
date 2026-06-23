// _activos.js — catálogo CURADO de la sección INVERSIÓN del "núcleo".
// Datos de fuentes oficiales/autoritativas. EDUCATIVO, no asesoramiento financiero.
// Regla de curado: NO se inventan cifras. Cada serie lleva fuente + fechaConsulta + status.
//   status 'curado'    = serie histórica verificada en una fuente real (ver fuenteUrl).
//   status 'pendiente' = FICHA lista (nombre/categoría/riesgo/descripción), serie aún por curar (fuente identificada).
// Formato de serie: { anio, r } donde r = rentabilidad TOTAL de ese año natural en %.
//   La calculadora capitaliza: valor = capital × Π(1 + r/100).
// Riesgo: SRI 1–7 (escala oficial PRIIPs; orientativa por tipo de activo).

window.ACTIVOS = {
  meta: {
    generado: '2026-06-23',
    moneda: 'EUR (salvo donde se indique USD)',
    nota: 'Datos curados de fuentes oficiales/autoritativas. Contenido educativo, NO asesoramiento ni recomendación de inversión. Rentabilidades pasadas no garantizan rentabilidades futuras. Las fichas marcadas "pendiente" tendrán su serie histórica cuando se verifique en la fuente oficial indicada.'
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
    // ═══════════════════════ ÍNDICES ═══════════════════════
    {
      id: 'msci-world', nombre: 'MSCI World', categoria: 'indices', isin: null, ticker: 'MSCI World', moneda: 'EUR', sri: 4,
      descripcion: 'Las ~1.300 mayores empresas de 23 países desarrollados. La apuesta "global" por excelencia: muy diversificado, riesgo medio-alto. Horizontes largos.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 20.01 }, { anio: 2015, r: 11.30 }, { anio: 2016, r: 10.22 }, { anio: 2017, r: 7.59 },
        { anio: 2018, r: -3.99 }, { anio: 2019, r: 30.51 }, { anio: 2020, r: 7.86 }, { anio: 2021, r: 31.43 },
        { anio: 2022, r: -14.34 }, { anio: 2023, r: 21.96 }, { anio: 2024, r: 28.02 }
      ],
      fuente: 'MSCI — Index Factsheet (MSCI World, EUR Net Return)', fuenteUrl: 'https://www.msci.com/www/index-factsheets/msci-world-index/08490663', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'sp500', nombre: 'S&P 500', categoria: 'indices', isin: null, ticker: 'SPX', moneda: 'USD', sri: 5,
      descripcion: 'Las 500 mayores empresas de EE. UU. El índice de referencia mundial. Concentrado en EE. UU. y tecnología. (USD, con dividendos.)',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 13.69 }, { anio: 2015, r: 1.38 }, { anio: 2016, r: 11.96 }, { anio: 2017, r: 21.83 },
        { anio: 2018, r: -4.38 }, { anio: 2019, r: 31.49 }, { anio: 2020, r: 18.40 }, { anio: 2021, r: 28.71 },
        { anio: 2022, r: -18.11 }, { anio: 2023, r: 26.29 }, { anio: 2024, r: 25.02 }
      ],
      fuente: 'S&P Dow Jones Indices — S&P 500 Total Return (slickcharts)', fuenteUrl: 'https://www.slickcharts.com/sp500/returns', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'eurostoxx50', nombre: 'EURO STOXX 50', categoria: 'indices', isin: null, ticker: 'SX5E', moneda: 'EUR', sri: 5,
      descripcion: 'Las 50 mayores empresas de la zona euro. Bolsa europea de gran capitalización; menos diversificado que el MSCI World. (Con dividendos, EUR.)',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2015, r: 7.66 }, { anio: 2016, r: 3.20 }, { anio: 2017, r: 10.07 }, { anio: 2018, r: -12.05 },
        { anio: 2019, r: 30.01 }, { anio: 2020, r: -3.03 }, { anio: 2021, r: 23.19 }, { anio: 2022, r: -9.02 },
        { anio: 2023, r: 22.46 }, { anio: 2024, r: 10.91 }
      ],
      fuente: 'STOXX / curvo.eu (EURO STOXX 50, total return EUR)', fuenteUrl: 'https://curvo.eu/backtest/en/market-index/euro-stoxx-50', fechaConsulta: '2026-06-23', status: 'curado'
    },
    { id: 'ibex35', nombre: 'IBEX 35', categoria: 'indices', isin: null, ticker: 'IBEX', moneda: 'EUR', sri: 6,
      descripcion: 'Las 35 mayores cotizadas de España. Muy concentrado (banca, energía); poca diversificación. La versión "con dividendos" es la comparable.',
      returnType: 'total_return_anual_pct', serie: [],
      nota: 'Pendiente: cifras públicas inconsistentes (precio vs total return). Tomar del factsheet oficial de BME (IBEX 35 con Dividendos).',
      fuente: 'BME — IBEX 35 con dividendos', fuenteUrl: 'https://www.bolsasymercados.es/bme-exchange/es/Indices/Ibex', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'msci-em', nombre: 'MSCI Emerging Markets', categoria: 'indices', isin: null, ticker: 'MSCI EM', moneda: 'EUR', sri: 5,
      descripcion: 'Empresas de países emergentes (China, India, Brasil, Taiwán...). Más potencial pero más riesgo y volatilidad que los desarrollados.',
      returnType: 'total_return_anual_pct',
      serie: [ { anio: 2014, r: 11.38 }, { anio: 2015, r: -5.23 }, { anio: 2016, r: 14.51 }, { anio: 2017, r: 20.59 }, { anio: 2018, r: -10.26 }, { anio: 2019, r: 20.60 }, { anio: 2020, r: 8.54 }, { anio: 2021, r: 4.86 }, { anio: 2022, r: -14.85 }, { anio: 2023, r: 6.11 }, { anio: 2024, r: 14.68 } ],
      fuente: 'MSCI — Index Factsheet (MSCI Emerging Markets, EUR Net)', fuenteUrl: 'https://www.msci.com/documents/10199/255599/msci-emerging-markets-index-eur-net.pdf', fechaConsulta: '2026-06-23', status: 'curado' },
    { id: 'msci-europe', nombre: 'MSCI Europe', categoria: 'indices', isin: null, ticker: 'MSCI Europe', moneda: 'EUR', sri: 5,
      descripcion: 'Las grandes y medianas empresas de 15 países desarrollados de Europa. La "bolsa europea" amplia.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'MSCI — Index Factsheet (MSCI Europe, EUR Net)', fuenteUrl: 'https://www.msci.com/documents/10199/255599/msci-europe-index-eur-net.pdf', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'dax', nombre: 'DAX 40', categoria: 'indices', isin: null, ticker: 'DAX', moneda: 'EUR', sri: 6,
      descripcion: 'Las 40 mayores empresas de Alemania. Es un índice "de rentabilidad total" (incluye dividendos por definición).',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Deutsche Börse / STOXX — DAX', fuenteUrl: 'https://www.stoxx.com/index-details?symbol=DAX', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'nasdaq-comp', nombre: 'Nasdaq Composite', categoria: 'indices', isin: null, ticker: 'IXIC', moneda: 'USD', sri: 6,
      descripcion: 'Casi todas las empresas del mercado Nasdaq (3.000+), muy tecnológico. Más amplio que el Nasdaq-100.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Nasdaq — Composite (macrotrends)', fuenteUrl: 'https://www.macrotrends.net/2623/nasdaq-by-year-historical-annual-returns', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'msci-acwi', nombre: 'MSCI ACWI (mundo entero)', categoria: 'indices', isin: null, ticker: 'MSCI ACWI', moneda: 'EUR', sri: 4,
      descripcion: 'Todo el mundo invertible: desarrollados + emergentes (~2.600 empresas). El índice global más completo.',
      returnType: 'total_return_anual_pct',
      serie: [ { anio: 2014, r: 18.61 }, { anio: 2015, r: 8.76 }, { anio: 2016, r: 11.09 }, { anio: 2017, r: 8.89 }, { anio: 2018, r: -4.85 }, { anio: 2019, r: 28.93 }, { anio: 2020, r: 6.65 }, { anio: 2021, r: 27.54 }, { anio: 2022, r: -13.01 }, { anio: 2023, r: 18.06 }, { anio: 2024, r: 25.33 } ],
      fuente: 'MSCI — Index Factsheet (MSCI ACWI, EUR Net)', fuenteUrl: 'https://www.msci.com/www/fact-sheet/msci-acwi-index/010001866', fechaConsulta: '2026-06-23', status: 'curado' },
    { id: 'ftse100', nombre: 'FTSE 100', categoria: 'indices', isin: null, ticker: 'UKX', moneda: 'GBP', sri: 5,
      descripcion: 'Las 100 mayores empresas de la bolsa de Londres. Mucha materia prima, banca y dividendo. (En libras.)',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'FTSE Russell — FTSE 100', fuenteUrl: 'https://www.londonstockexchange.com/indices/ftse-100', fechaConsulta: '2026-06-23', status: 'pendiente' },

    // ═══════════════════════ ETFs ═══════════════════════
    {
      id: 'swda', nombre: 'iShares Core MSCI World (SWDA)', categoria: 'etfs', isin: 'IE00B4L5Y983', ticker: 'SWDA', moneda: 'EUR', sri: 4,
      descripcion: 'ETF de acumulación que replica el MSCI World. De los más usados en Europa para invertir en "todo el mundo desarrollado" con un producto. TER ~0,20%.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 20.01 }, { anio: 2015, r: 11.30 }, { anio: 2016, r: 10.22 }, { anio: 2017, r: 7.59 },
        { anio: 2018, r: -3.99 }, { anio: 2019, r: 30.51 }, { anio: 2020, r: 7.86 }, { anio: 2021, r: 31.43 },
        { anio: 2022, r: -14.34 }, { anio: 2023, r: 21.96 }, { anio: 2024, r: 28.02 }
      ],
      nota: 'Serie = MSCI World (EUR Net) como proxy; el ETF queda ~0,2%/año por debajo por la comisión.',
      fuente: 'iShares (BlackRock) + MSCI World EUR Net como proxy', fuenteUrl: 'https://www.ishares.com/es/inversor-particular/es/productos/251882/', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'vuaa', nombre: 'Vanguard S&P 500 UCITS Acc (VUAA)', categoria: 'etfs', isin: 'IE00BFMXXD54', ticker: 'VUAA', moneda: 'USD', sri: 5,
      descripcion: 'ETF de acumulación que replica el S&P 500. Muy popular y barato (TER ~0,07%). Concentrado en EE. UU.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 13.69 }, { anio: 2015, r: 1.38 }, { anio: 2016, r: 11.96 }, { anio: 2017, r: 21.83 },
        { anio: 2018, r: -4.38 }, { anio: 2019, r: 31.49 }, { anio: 2020, r: 18.40 }, { anio: 2021, r: 28.71 },
        { anio: 2022, r: -18.11 }, { anio: 2023, r: 26.29 }, { anio: 2024, r: 25.02 }
      ],
      nota: 'Serie = S&P 500 Total Return (USD) como proxy; el ETF queda ~0,07%/año por debajo.',
      fuente: 'Vanguard + S&P 500 TR como proxy', fuenteUrl: 'https://www.vanguard.es/', fechaConsulta: '2026-06-23', status: 'curado'
    },
    {
      id: 'nasdaq100', nombre: 'iShares Nasdaq-100 (CSNDX)', categoria: 'etfs', isin: 'IE00B53SZB19', ticker: 'CSNDX', moneda: 'USD', sri: 6,
      descripcion: 'Las 100 mayores empresas no financieras del Nasdaq (Apple, Microsoft, Nvidia...). Más rentabilidad histórica pero más volátil que el S&P 500. (USD, con dividendos.)',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: 19.4 }, { anio: 2015, r: 9.8 }, { anio: 2016, r: 7.3 }, { anio: 2017, r: 33.0 },
        { anio: 2018, r: -0.1 }, { anio: 2019, r: 39.5 }, { anio: 2020, r: 48.9 }, { anio: 2021, r: 27.5 },
        { anio: 2022, r: -32.4 }, { anio: 2023, r: 55.1 }, { anio: 2024, r: 25.9 }
      ],
      fuente: 'Nasdaq-100 Total Return (slickcharts)', fuenteUrl: 'https://www.slickcharts.com/nasdaq100/returns', fechaConsulta: '2026-06-23', status: 'curado'
    },
    { id: 'vwce', nombre: 'Vanguard FTSE All-World Acc (VWCE)', categoria: 'etfs', isin: 'IE00BK5BQT80', ticker: 'VWCE', moneda: 'EUR', sri: 4,
      descripcion: 'ETF "todo en uno": ~3.700 empresas de todo el mundo, desarrollados + emergentes. El más popular para la cartera global de un solo fondo. TER ~0,22%.',
      returnType: 'total_return_anual_pct',
      serie: [ { anio: 2014, r: 18.61 }, { anio: 2015, r: 8.76 }, { anio: 2016, r: 11.09 }, { anio: 2017, r: 8.89 }, { anio: 2018, r: -4.85 }, { anio: 2019, r: 28.93 }, { anio: 2020, r: 6.65 }, { anio: 2021, r: 27.54 }, { anio: 2022, r: -13.01 }, { anio: 2023, r: 18.06 }, { anio: 2024, r: 25.33 } ],
      nota: 'Serie = MSCI ACWI (EUR Net) como proxy; VWCE replica FTSE All-World (casi idéntico), menos ~0,22% de comisión.',
      fuente: 'Vanguard FTSE All-World + MSCI ACWI EUR Net como proxy', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BK5BQT80', fechaConsulta: '2026-06-23', status: 'curado' },
    { id: 'emim', nombre: 'iShares Core MSCI EM IMI (EMIM)', categoria: 'etfs', isin: 'IE00BKM4GZ66', ticker: 'EMIM', moneda: 'EUR', sri: 5,
      descripcion: 'ETF de mercados emergentes (China, India, Taiwán, Brasil...). La parte "emergente" de una cartera global. TER ~0,18%.',
      returnType: 'total_return_anual_pct',
      serie: [ { anio: 2014, r: 11.38 }, { anio: 2015, r: -5.23 }, { anio: 2016, r: 14.51 }, { anio: 2017, r: 20.59 }, { anio: 2018, r: -10.26 }, { anio: 2019, r: 20.60 }, { anio: 2020, r: 8.54 }, { anio: 2021, r: 4.86 }, { anio: 2022, r: -14.85 }, { anio: 2023, r: 6.11 }, { anio: 2024, r: 14.68 } ],
      nota: 'Serie = MSCI EM (EUR Net) como proxy; EMIM replica MSCI EM IMI (incluye small caps), muy similar, menos ~0,18% de comisión.',
      fuente: 'iShares Core MSCI EM IMI + MSCI EM EUR Net como proxy', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BKM4GZ66', fechaConsulta: '2026-06-23', status: 'curado' },
    { id: 'veur', nombre: 'Vanguard FTSE Developed Europe (VEUR)', categoria: 'etfs', isin: 'IE00B945VV12', ticker: 'VEUR', moneda: 'EUR', sri: 5,
      descripcion: 'ETF de la bolsa europea desarrollada. Exposición amplia a Europa con un fondo. TER ~0,10%.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Vanguard — FTSE Developed Europe UCITS ETF', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00B945VV12', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'sgln', nombre: 'iShares Physical Gold (SGLN)', categoria: 'etfs', isin: 'IE00B4ND3602', ticker: 'SGLN', moneda: 'USD', sri: 4,
      descripcion: 'ETC respaldado por oro físico: la forma sencilla de tener oro sin guardarlo. Sigue el precio del oro. TER ~0,12%.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'iShares Physical Gold ETC', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00B4ND3602', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'inrg', nombre: 'iShares Global Clean Energy (INRG)', categoria: 'etfs', isin: 'IE00B1XNHC34', ticker: 'INRG', moneda: 'USD', sri: 6,
      descripcion: 'ETF temático de energías limpias (solar, eólica...). Tendencia de futuro pero volátil y concentrado. Riesgo alto.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'iShares Global Clean Energy UCITS ETF', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00B1XNHC34', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'rbot', nombre: 'iShares Automation & Robotics (RBOT)', categoria: 'etfs', isin: 'IE00BYZK4552', ticker: 'RBOT', moneda: 'USD', sri: 6,
      descripcion: 'ETF temático de automatización y robótica. Apuesta por la tecnología que automatiza la economía. Riesgo alto.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'iShares Automation & Robotics UCITS ETF', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BYZK4552', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'iwda-small', nombre: 'SPDR MSCI World Small Cap (WOSC)', categoria: 'etfs', isin: 'IE00BCBJG560', ticker: 'WOSC', moneda: 'USD', sri: 5,
      descripcion: 'ETF de pequeñas empresas mundiales (small caps). Históricamente más rentables a largo plazo pero más volátiles que las grandes.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'SPDR MSCI World Small Cap UCITS ETF', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BCBJG560', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'xdwd', nombre: 'Xtrackers MSCI World (XDWD)', categoria: 'etfs', isin: 'IE00BJ0KDQ92', ticker: 'XDWD', moneda: 'USD', sri: 4,
      descripcion: 'Otro ETF de acumulación del MSCI World (alternativa a SWDA, de Xtrackers/DWS). Mismo índice, misma idea. TER ~0,19%.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Xtrackers MSCI World UCITS ETF', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BJ0KDQ92', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'ishares-japan', nombre: 'iShares MSCI Japan', categoria: 'etfs', isin: null, ticker: 'IJPA', moneda: 'USD', sri: 5,
      descripcion: 'ETF de la bolsa japonesa. Diversifica fuera de EE. UU. y Europa. Riesgo medio-alto.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'iShares MSCI Japan UCITS ETF', fuenteUrl: 'https://www.justetf.com/en/search.html?query=iShares+MSCI+Japan', fechaConsulta: '2026-06-23', status: 'pendiente' },

    // ═══════════════════════ ACCIONES ═══════════════════════
    { id: 'aapl', nombre: 'Apple', categoria: 'acciones', isin: null, ticker: 'AAPL', moneda: 'USD', sri: 6,
      descripcion: 'El iPhone, Mac, servicios. Una de las mayores empresas del mundo. Acción individual: más riesgo que un índice.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Precio/total return de Apple (NASDAQ)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/AAPL/apple/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'msft', nombre: 'Microsoft', categoria: 'acciones', isin: null, ticker: 'MSFT', moneda: 'USD', sri: 6,
      descripcion: 'Windows, Office, Azure (nube) e IA. Gigante tecnológico. Acción individual.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Microsoft (NASDAQ)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/MSFT/microsoft/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'nvda', nombre: 'Nvidia', categoria: 'acciones', isin: null, ticker: 'NVDA', moneda: 'USD', sri: 7,
      descripcion: 'Los chips que mueven la inteligencia artificial. Subidas espectaculares y caídas fuertes. Riesgo muy alto.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Nvidia (NASDAQ)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/NVDA/nvidia/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'amzn', nombre: 'Amazon', categoria: 'acciones', isin: null, ticker: 'AMZN', moneda: 'USD', sri: 6,
      descripcion: 'Comercio electrónico y la nube (AWS). Gigante. Acción individual.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Amazon (NASDAQ)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/AMZN/amazon/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'googl', nombre: 'Alphabet (Google)', categoria: 'acciones', isin: null, ticker: 'GOOGL', moneda: 'USD', sri: 6,
      descripcion: 'Google, YouTube, Android, IA. Dueña del buscador. Acción individual.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Alphabet (NASDAQ)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/GOOGL/alphabet/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'meta', nombre: 'Meta (Facebook)', categoria: 'acciones', isin: null, ticker: 'META', moneda: 'USD', sri: 6,
      descripcion: 'Facebook, Instagram, WhatsApp. Publicidad y metaverso. Acción individual.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Meta Platforms (NASDAQ)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/META/meta-platforms/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'tsla', nombre: 'Tesla', categoria: 'acciones', isin: null, ticker: 'TSLA', moneda: 'USD', sri: 7,
      descripcion: 'Coches eléctricos y energía. Acción muy volátil (grandes subidas y caídas). Riesgo muy alto.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Tesla (NASDAQ)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/TSLA/tesla/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'brk', nombre: 'Berkshire Hathaway', categoria: 'acciones', isin: null, ticker: 'BRK.B', moneda: 'USD', sri: 5,
      descripcion: 'El holding de Warren Buffett: seguros, ferrocarril, participaciones. Más estable que la tecnología.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Berkshire Hathaway B (NYSE)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/BRK.B/berkshire-hathaway/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'jpm', nombre: 'JPMorgan Chase', categoria: 'acciones', isin: null, ticker: 'JPM', moneda: 'USD', sri: 5,
      descripcion: 'El mayor banco de EE. UU. Sector financiero. Acción individual.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'JPMorgan (NYSE)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/JPM/jpmorgan-chase/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'ko', nombre: 'Coca-Cola', categoria: 'acciones', isin: null, ticker: 'KO', moneda: 'USD', sri: 4,
      descripcion: 'Bebidas. Clásica acción "defensiva" que paga dividendo estable. Menos volátil.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Coca-Cola (NYSE)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/KO/cocacola/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'lvmh', nombre: 'LVMH', categoria: 'acciones', isin: null, ticker: 'MC', moneda: 'EUR', sri: 5,
      descripcion: 'El mayor grupo de lujo del mundo (Louis Vuitton, Dior...). La gran acción europea de consumo de lujo.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'LVMH (Euronext París)', fuenteUrl: 'https://www.boerse-frankfurt.de/equity/lvmh', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'asml', nombre: 'ASML', categoria: 'acciones', isin: null, ticker: 'ASML', moneda: 'EUR', sri: 6,
      descripcion: 'Holandesa: fabrica las máquinas que hacen los chips más avanzados. Clave de la tecnología mundial.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'ASML (Euronext Ámsterdam)', fuenteUrl: 'https://www.boerse-frankfurt.de/equity/asml-holding-nv', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'nestle', nombre: 'Nestlé', categoria: 'acciones', isin: null, ticker: 'NESN', moneda: 'CHF', sri: 4,
      descripcion: 'La mayor alimentaria del mundo. Acción defensiva suiza con dividendo estable.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Nestlé (SIX Suiza)', fuenteUrl: 'https://www.boerse-frankfurt.de/equity/nestle-sa', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'novo', nombre: 'Novo Nordisk', categoria: 'acciones', isin: null, ticker: 'NOVO-B', moneda: 'DKK', sri: 6,
      descripcion: 'Danesa: líder en diabetes y fármacos de adelgazamiento (Ozempic). Subió mucho y luego corrigió.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Novo Nordisk (Nasdaq Copenhague)', fuenteUrl: 'https://www.boerse-frankfurt.de/equity/novo-nordisk-as', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'sap', nombre: 'SAP', categoria: 'acciones', isin: null, ticker: 'SAP', moneda: 'EUR', sri: 5,
      descripcion: 'Alemana: el software de gestión que usan las grandes empresas. La mayor tecnológica europea.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'SAP (Xetra)', fuenteUrl: 'https://www.boerse-frankfurt.de/equity/sap-se', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'itx', nombre: 'Inditex (Zara)', categoria: 'acciones', isin: null, ticker: 'ITX', moneda: 'EUR', sri: 5,
      descripcion: 'La dueña de Zara. La mayor empresa de moda del mundo y una de las grandes del IBEX 35.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Inditex (BME)', fuenteUrl: 'https://www.bolsasymercados.es/', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'san', nombre: 'Banco Santander', categoria: 'acciones', isin: null, ticker: 'SAN', moneda: 'EUR', sri: 6,
      descripcion: 'El mayor banco de España, muy internacional (Brasil, Reino Unido...). Acción del IBEX, sensible a tipos.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Banco Santander (BME)', fuenteUrl: 'https://www.bolsasymercados.es/', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'ibe', nombre: 'Iberdrola', categoria: 'acciones', isin: null, ticker: 'IBE', moneda: 'EUR', sri: 4,
      descripcion: 'Eléctrica española líder en renovables. Acción del IBEX más defensiva, con buen dividendo.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Iberdrola (BME)', fuenteUrl: 'https://www.bolsasymercados.es/', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'visa', nombre: 'Visa', categoria: 'acciones', isin: null, ticker: 'V', moneda: 'USD', sri: 5,
      descripcion: 'La mayor red de pagos del mundo. Negocio muy rentable y estable. Acción individual.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Visa (NYSE)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/V/visa/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'jnj', nombre: 'Johnson & Johnson', categoria: 'acciones', isin: null, ticker: 'JNJ', moneda: 'USD', sri: 4,
      descripcion: 'Farmacéutica y salud. Acción defensiva clásica con dividendo creciente. Menos volátil.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Johnson & Johnson (NYSE)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/JNJ/johnson-johnson/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'lly', nombre: 'Eli Lilly', categoria: 'acciones', isin: null, ticker: 'LLY', moneda: 'USD', sri: 6,
      descripcion: 'Farmacéutica de EE. UU., líder en fármacos de adelgazamiento y diabetes. Subió mucho los últimos años.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'Eli Lilly (NYSE)', fuenteUrl: 'https://www.macrotrends.net/stocks/charts/LLY/eli-lilly/stock-price-history', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'tte', nombre: 'TotalEnergies', categoria: 'acciones', isin: null, ticker: 'TTE', moneda: 'EUR', sri: 5,
      descripcion: 'Petrolera y energética francesa. Buen dividendo; ligada al precio de la energía.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'TotalEnergies (Euronext París)', fuenteUrl: 'https://www.boerse-frankfurt.de/equity/totalenergies-se', fechaConsulta: '2026-06-23', status: 'pendiente' },

    // ═══════════════════════ BONOS ═══════════════════════
    {
      id: 'bonos-euro', nombre: 'Bonos del Estado en euros', categoria: 'bonos', isin: 'IE00B4WXJJ64', ticker: 'IEGA', moneda: 'EUR', sri: 3,
      descripcion: 'Deuda pública de la zona euro (ETF iShares Core € Govt Bond). Más estable que la bolsa, pero baja si suben los tipos (como en 2022). La parte defensiva.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2018, r: 0.85 }, { anio: 2019, r: 6.76 }, { anio: 2020, r: 4.72 }, { anio: 2021, r: -3.38 },
        { anio: 2022, r: -18.32 }, { anio: 2023, r: 6.83 }, { anio: 2024, r: 1.52 }
      ],
      fuente: 'iShares Core € Govt Bond UCITS ETF (IEGA)', fuenteUrl: 'https://www.ishares.com/es/inversor-particular/es/productos/251726/', fechaConsulta: '2026-06-23', status: 'curado'
    },
    { id: 'bonos-corp', nombre: 'Bonos de empresas (euro)', categoria: 'bonos', isin: 'IE00BF11F565', ticker: 'IEAC', moneda: 'EUR', sri: 3,
      descripcion: 'Deuda de empresas en euros con buena calificación (ETF iShares € Corp Bond). Algo más de interés que la deuda pública, a cambio de algo más de riesgo.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'iShares Core € Corp Bond UCITS ETF', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BF11F565', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'bonos-us', nombre: 'Bonos del Tesoro de EE. UU.', categoria: 'bonos', isin: 'IE00BFM6TC58', ticker: 'IBTM', moneda: 'USD', sri: 4,
      descripcion: 'Deuda pública de EE. UU. (en USD). El activo "refugio" por excelencia, aunque añade riesgo de tipo de cambio €/$.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'iShares US Treasury Bond UCITS ETF', fuenteUrl: 'https://www.justetf.com/en/etf-profile.html?isin=IE00BFM6TC58', fechaConsulta: '2026-06-23', status: 'pendiente' },

    // ═══════════════════════ ORO Y MATERIAS ═══════════════════════
    {
      id: 'oro', nombre: 'Oro', categoria: 'oro', isin: null, ticker: 'XAU', moneda: 'USD', sri: 4,
      descripcion: 'El refugio clásico. Suele aguantar o subir cuando la bolsa cae y protege de la inflación, pero no da intereses. Para diversificar. (USD; en EUR varía por el cambio.)',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2014, r: -1.8 }, { anio: 2015, r: -10.4 }, { anio: 2016, r: 8.4 }, { anio: 2017, r: 13.1 },
        { anio: 2018, r: -1.6 }, { anio: 2019, r: 18.3 }, { anio: 2020, r: 25.0 }, { anio: 2021, r: -3.6 },
        { anio: 2022, r: -0.3 }, { anio: 2023, r: 13.1 }, { anio: 2024, r: 27.2 }
      ],
      nota: 'Rentabilidad anual del oro en USD. En EUR difiere por el tipo de cambio.',
      fuente: 'World Gold Council / recopilaciones de mercado (USD)', fuenteUrl: 'https://www.gold.org/goldhub/data/gold-returns', fechaConsulta: '2026-06-23', status: 'curado'
    },
    { id: 'plata', nombre: 'Plata', categoria: 'oro', isin: null, ticker: 'XAG', moneda: 'USD', sri: 5,
      descripcion: 'Metal precioso e industrial. Parecida al oro pero más volátil. Para diversificar.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'LBMA / recopilaciones (plata, USD)', fuenteUrl: 'https://www.lbma.org.uk/prices-and-data/precious-metal-prices', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'petroleo', nombre: 'Petróleo (Brent)', categoria: 'oro', isin: null, ticker: 'BRENT', moneda: 'USD', sri: 6,
      descripcion: 'La materia prima energética de referencia. Muy volátil y cíclica; depende de la geopolítica. Riesgo alto.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'EIA / mercado (Brent, USD)', fuenteUrl: 'https://www.eia.gov/dnav/pet/hist/RBRTED.htm', fechaConsulta: '2026-06-23', status: 'pendiente' },

    // ═══════════════════════ CRIPTO ═══════════════════════
    {
      id: 'bitcoin', nombre: 'Bitcoin (BTC)', categoria: 'cripto', isin: null, ticker: 'BTC', moneda: 'USD', sri: 7,
      descripcion: 'La primera criptomoneda. Rentabilidad histórica enorme pero con caídas brutales (-65% en un año no es raro). Riesgo MÁXIMO: solo una pequeña parte de la cartera y dinero que puedas permitirte perder.',
      returnType: 'total_return_anual_pct',
      serie: [
        { anio: 2015, r: 34 }, { anio: 2016, r: 124 }, { anio: 2017, r: 1369 }, { anio: 2018, r: -74 },
        { anio: 2019, r: 92 }, { anio: 2020, r: 303 }, { anio: 2021, r: 60 }, { anio: 2022, r: -64 },
        { anio: 2023, r: 155 }, { anio: 2024, r: 121 }
      ],
      nota: 'Rentabilidades anuales (base USD); varían según el exchange. Redondeadas.',
      fuente: 'Recopilaciones públicas (World of Statistics / slickcharts)', fuenteUrl: 'https://www.slickcharts.com/currency/BTC/returns', fechaConsulta: '2026-06-23', status: 'curado'
    },
    { id: 'ethereum', nombre: 'Ethereum (ETH)', categoria: 'cripto', isin: null, ticker: 'ETH', moneda: 'USD', sri: 7,
      descripcion: 'La segunda cripto por tamaño; la "plataforma" de las aplicaciones descentralizadas. Aún más volátil que Bitcoin. Riesgo máximo.',
      returnType: 'total_return_anual_pct', serie: [],
      nota: 'Pendiente: recopilaciones públicas contradictorias. Tomar serie limpia de CoinGecko.',
      fuente: 'CoinGecko — Ethereum', fuenteUrl: 'https://www.coingecko.com/en/coins/ethereum', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'solana', nombre: 'Solana (SOL)', categoria: 'cripto', isin: null, ticker: 'SOL', moneda: 'USD', sri: 7,
      descripcion: 'Cripto de alto rendimiento, competidora de Ethereum. Muy volátil y joven. Riesgo máximo.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'CoinGecko — Solana', fuenteUrl: 'https://www.coingecko.com/en/coins/solana', fechaConsulta: '2026-06-23', status: 'pendiente' },
    { id: 'bnb', nombre: 'BNB', categoria: 'cripto', isin: null, ticker: 'BNB', moneda: 'USD', sri: 7,
      descripcion: 'La cripto del exchange Binance. Riesgo máximo.',
      returnType: 'total_return_anual_pct', serie: [],
      fuente: 'CoinGecko — BNB', fuenteUrl: 'https://www.coingecko.com/en/coins/bnb', fechaConsulta: '2026-06-23', status: 'pendiente' },

    // ═══════════════════════ CUENTA REMUNERADA ═══════════════════════
    {
      id: 'cuenta-estr', nombre: 'Cuenta remunerada (€STR / BCE)', categoria: 'cuenta', isin: null, ticker: '€STR', moneda: 'EUR', sri: 1,
      descripcion: 'El dinero "sin riesgo" a corto plazo: cuentas remuneradas y fondos monetarios, que pagan en torno al tipo del BCE (€STR). Riesgo mínimo pero rentabilidad baja: casi 0 (o negativa) hasta 2022, ~3-4% desde 2023.',
      returnType: 'tipo_anual_pct',
      serie: [
        { anio: 2020, r: -0.55 }, { anio: 2021, r: -0.57 }, { anio: 2022, r: 0.0 },
        { anio: 2023, r: 3.2 }, { anio: 2024, r: 3.6 }
      ],
      nota: 'Medias anuales APROXIMADAS del €STR (BCE). 2020-2021 confirmados; 2022-2024 aproximados. Exactos en el ECB Data Portal.',
      fuente: 'BCE — Euro short-term rate (€STR)', fuenteUrl: 'https://data.ecb.europa.eu/data/datasets/EST', fechaConsulta: '2026-06-23', status: 'curado'
    }
  ],

  // Matriz ORIENTATIVA de reparto por perfil (Paso 4 — Motor de reparto).
  // [PROPUESTA educativa, NO recomendación de inversión]. Suma 100% por perfil.
  repartoPorPerfil: {
    Conservador: [ { categoria: 'cuenta', pct: 50 }, { categoria: 'bonos', pct: 30 }, { categoria: 'etfs', pct: 20 } ],
    Moderado:    [ { categoria: 'etfs', pct: 50 }, { categoria: 'bonos', pct: 25 }, { categoria: 'oro', pct: 15 }, { categoria: 'cuenta', pct: 10 } ],
    Arriesgado:  [ { categoria: 'etfs', pct: 50 }, { categoria: 'acciones', pct: 20 }, { categoria: 'oro', pct: 15 }, { categoria: 'cripto', pct: 10 }, { categoria: 'cuenta', pct: 5 } ]
  }
};
