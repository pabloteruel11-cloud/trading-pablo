// LESSONS DATA — Plan de estudios completo EUR/USD Trading



// 21 lecciones organizadas en 5 fases para principiantes absolutos



const LESSONS = [







// ═══════════════════════════════════════════════════════════════════════════



// FASE 0 — CÓMO FUNCIONA EL MERCADO (Lecciones 1-5)



// ═══════════════════════════════════════════════════════════════════════════







{



  id: 1,



  phase: 0,



  title: '¿Qué es Forex y por qué existe?',



  subtitle: 'El mercado más grande del mundo explicado con palabras simples',



  duration: 15,



  eduChart: 'drawParticipantsPyramid',



  eduChartHeight: 300,



  content: `



    <p>Imagina que viajas a Estados Unidos. Antes de irte, pasas por una casa de cambio y cambias tus euros por dólares. Esa transacción, a escala de millones de bancos, empresas y gobiernos alrededor del mundo, es lo que forma el mercado <strong>Forex</strong>.</p>







    <div class="concept-box"><strong>Forex</strong> (Foreign Exchange): el mercado global donde se intercambian divisas de distintos países. Con más de 7 billones de dólares negociados cada día, es el mercado financiero más grande del mundo.</div>







    <h3>¿Por qué sube y baja el precio?</h3>



    <p>El par <strong>EUR/USD</strong> te dice cuántos dólares vale 1 euro en este momento. Si EUR/USD = 1.0850, quiere decir que 1 euro compra 1.0850 dólares.</p>



    <p>¿Por qué cambia ese número? Por la oferta y la demanda, igual que cualquier cosa en la vida:</p>



    <ul>



      <li>Si Europa tiene buenas noticias económicas, muchos inversores quieren euros → el euro <strong>sube</strong> de valor → EUR/USD <strong>sube</strong>.</li>



      <li>Si hay una crisis en Europa, la gente huye del euro y compra dólares → el euro <strong>baja</strong> → EUR/USD <strong>baja</strong>.</li>



    </ul>







    <div class="tip-box">💡 Piensa en el precio como el "termómetro" de la salud económica de Europa frente a Estados Unidos. Si Europa va mejor que EE.UU., el EUR/USD sube. Si EE.UU. va mejor, baja.</div>







    <h3>¿Dónde se negocia? El mercado OTC</h3>



    <p>Forex <strong>no tiene una bolsa central</strong> como la Bolsa de Madrid o Wall Street. Es un mercado <strong>OTC</strong> (Over The Counter — literalmente "sobre el mostrador"), lo que significa que funciona como una red global de bancos, instituciones y brokers conectados entre sí.</p>







    <div class="concept-box"><strong>OTC (Over The Counter)</strong>: mercado descentralizado donde las transacciones se hacen directamente entre dos partes, sin pasar por una bolsa central. No hay un edificio físico "donde ocurre Forex" — ocurre en millones de ordenadores a la vez.</div>







    <p>Esta red nunca duerme. El mercado Forex sigue el recorrido del sol:</p>



    <ul>



      <li>🌏 <strong>Sesión de Asia</strong> (Tokyo, Singapur): noche española</li>



      <li>🌍 <strong>Sesión de Europa</strong> (Londres principalmente): mañana española</li>



      <li>🌎 <strong>Sesión de América</strong> (Nueva York): tarde española</li>



    </ul>







    <h3>Los participantes del mercado</h3>



    <p>El gráfico de abajo muestra la pirámide de participantes. En la cima están los que mueven el mercado. Tú, como trader retail, estás en la base — pero puedes aprender a seguir el rastro de los de arriba.</p>







    <div class="concept-box"><strong>Smart Money</strong>: nombre colectivo para los participantes más grandes e informados del mercado — bancos centrales, bancos de inversión, hedge funds. Tienen acceso a información y capital que los traders individuales no tienen. La estrategia que aprenderás busca identificar dónde están actuando el Smart Money para operar en la misma dirección.</div>







    <div class="tip-box">💡 No tienes que "vencer" al mercado. Solo tienes que aprender a leer las huellas que dejan los grandes jugadores y seguirles la corriente.</div>



  `,



  keyTerms: [



    { term: 'Forex', def: 'Foreign Exchange. Mercado global donde se intercambian divisas de distintos países. El más grande del mundo con ~7 billones de dólares diarios.' },



    { term: 'OTC', def: 'Over The Counter. Mercado descentralizado sin bolsa central. Las transacciones ocurren directamente entre participantes a través de redes informáticas globales.' },



    { term: 'EUR/USD', def: 'El par de divisas más operado del mundo. Indica cuántos dólares estadounidenses vale 1 euro. Si EUR/USD = 1.0850 → 1€ = 1.0850$.' },



    { term: 'Smart Money', def: 'Los grandes participantes del mercado: bancos centrales, bancos de inversión y hedge funds. Mueven precios con sus enormes operaciones.' }



  ],



  quiz: {



    question: '¿Qué significa que Forex es un mercado OTC?',



    options: [



      'Que tiene una bolsa central en Londres donde se negocian todas las divisas',



      'Que es un mercado descentralizado donde las transacciones ocurren directamente entre participantes, sin bolsa central',



      'Que solo se puede operar durante el horario de oficina'



    ],



    correct: 1,



    explanation: 'OTC significa Over The Counter. Forex no tiene bolsa central — funciona como una red global de bancos y brokers conectados entre sí, activa 24 horas seguidas de lunes a viernes.',



    homework: [
      {
        icon: "🌍",
        title: "Observa el EUR/USD en tiempo real",
        task: "Abre TradingView (tradingview.com) y busca el par EUR/USD. Observa el gráfico D1 durante 5 minutos. Anota: ¿cuánto ha cambiado el precio hoy? ¿Subió o bajó? ¿Cuántos pips?",
        tool: "TradingView",
        duration: 10,
        deliverable: "Saber leer el precio actual y el movimiento del día en EUR/USD."
      },
      {
        icon: "📝",
        title: "Identifica los 4 niveles de participantes",
        task: "Busca en Google: 'Banco Central Europeo EUR subida tipos'. Lee el titular. ¿Entiendes por qué esa noticia mueve el EUR/USD? Escribe en papel: quién tomó la decisión y cómo afectó al precio.",
        tool: "Papel",
        duration: 10,
        deliverable: "Entender que los bancos centrales mueven el mercado con sus decisiones de política monetaria."
      }
    ],
  resources: [



      {



        title: "Forex Trading for Beginners — Curso completo gratuito",



        channel: "Adam Khoo",



        url: "https://www.youtube.com/watch?v=dOrKGmQA0uU",



        desc: "El mejor punto de partida. Explica que es Forex, como funciona el mercado y los conceptos basicos con claridad absoluta."



      },
      { title: "¿Qué es el Forex trading? Aprende desde CERO", channel: "canal en español", url: "https://www.youtube.com/watch?v=GkJIX-CzMGw", desc: "Explica desde cero qué es el mercado Forex, por qué es rentable y cómo funciona." },
      { title: "Forex para Principiantes: ¿Qué es el Mercado de Divisas?", channel: "canal en español", url: "https://www.youtube.com/watch?v=u2gcbIe2BOM", desc: "Introducción visual al mercado de divisas explicando por qué el EUR/USD es el par más líquido." },




    ]



  }



},







{



  id: 2,



  phase: 0,



  title: 'Los pares de divisas — EUR/USD y sus amigos',



  subtitle: 'Qué es un par, cómo leerlo y por qué EUR/USD es el mejor para empezar',



  duration: 12,



  eduChart: null,



  eduChartHeight: 0,



  content: `



    <p>En Forex siempre operas con <strong>dos monedas a la vez</strong>. Cuando compras euros, automáticamente estás vendiendo dólares. Cuando vendes euros, estás comprando dólares. Eso es un <strong>par de divisas</strong>.</p>







    <div class="concept-box"><strong>Par de divisas</strong>: la expresión del valor de una moneda frente a otra. Siempre se escribe la primera moneda (base) seguida de la segunda (quote). Ejemplo: EUR/USD.</div>







    <h3>Cómo leer el precio de un par</h3>



    <p>Si EUR/USD = <strong>1.0850</strong>:</p>



    <ul>



      <li>La <strong>moneda base</strong> (la primera) es el EURO. Siempre vale 1 unidad.</li>



      <li>La <strong>moneda quote</strong> (la segunda) es el DÓLAR. Dice cuántos dólares vale 1 euro.</li>



      <li>Por tanto: <strong>1 euro = 1.0850 dólares</strong></li>



    </ul>



    <p>Si el precio <strong>sube</strong> a 1.0900 → el euro se <strong>fortaleció</strong> (ahora vale más dólares).<br>



    Si el precio <strong>baja</strong> a 1.0800 → el euro se <strong>debilitó</strong> (ahora vale menos dólares).</p>







    <div class="concept-box"><strong>Base currency (moneda base)</strong>: la primera moneda del par. En EUR/USD, el euro es la base. Siempre se considera que tienes 1 unidad de la moneda base.</div>



    <div class="concept-box"><strong>Quote currency (moneda cotizada)</strong>: la segunda moneda. En EUR/USD, el dólar es la quote. El precio te dice cuántas unidades de esta moneda vale 1 unidad de la base.</div>







    <h3>Los 5 pares más importantes</h3>



    <table>



      <thead>



        <tr><th>Par</th><th>Nombre</th><th>Qué representa</th></tr>



      </thead>



      <tbody>



        <tr><td><strong>EUR/USD</strong></td><td>Fiber</td><td>Euro frente al dólar estadounidense</td></tr>



        <tr><td>GBP/USD</td><td>Cable</td><td>Libra esterlina frente al dólar</td></tr>



        <tr><td>USD/JPY</td><td>Ninja</td><td>Dólar frente al yen japonés</td></tr>



        <tr><td>USD/CHF</td><td>Swissie</td><td>Dólar frente al franco suizo</td></tr>



        <tr><td>AUD/USD</td><td>Aussie</td><td>Dólar australiano frente al dólar</td></tr>



      </tbody>



    </table>







    <h3>¿Por qué EUR/USD es ideal para empezar?</h3>



    <ul>



      <li><strong>Más volumen del mundo</strong>: el 20-25% de todo el mercado Forex. Más volumen significa movimientos más predecibles y menos "ruido".</li>



      <li><strong>Spread más bajo</strong>: el costo de cada operación es mínimo (0.1-1.0 pips con buenos brokers). Te ahorras dinero en cada trade.</li>



      <li><strong>Más análisis disponible</strong>: más traders lo analizan → más niveles de referencia confiables.</li>



      <li><strong>Horario óptimo coincide con Europa</strong>: la sesión más activa es Londres (09:00-17:00 CET) — perfecta si estás en España.</li>



    </ul>







    <div class="concept-box"><strong>Spread</strong>: la diferencia entre el precio de compra (ask) y el precio de venta (bid). Es el costo que cobran los brokers por ejecutar tu operación. Un spread bajo = más barato operar. EUR/USD tiene de los spreads más bajos del mercado.</div>







    <div class="warning-box">⚠️ En este curso aprenderás a operar exclusivamente EUR/USD. Dominar un par es mucho más valioso que operar mal en diez pares diferentes.</div>



  `,



  keyTerms: [



    { term: 'Par de divisas', def: 'Dos monedas expresadas como ratio de valor. La primera es la base (siempre vale 1), la segunda es la quote (dice cuántas unidades de ella vale 1 de la base).' },



    { term: 'Base currency', def: 'La primera moneda del par. En EUR/USD, el euro. Siempre se considera 1 unidad.' },



    { term: 'Quote currency', def: 'La segunda moneda del par. En EUR/USD, el dólar. El número del precio indica cuántas unidades de esta moneda valen 1 de la base.' },



    { term: 'Spread', def: 'Diferencia entre precio de compra (ask) y venta (bid). Es el costo de cada operación. En EUR/USD suele ser 0.1-1.0 pips con brokers de calidad.' }



  ],



  quiz: {



    question: 'Si EUR/USD = 1.0850 y sube a 1.0920, ¿qué ha ocurrido?',



    options: [



      'El dólar se ha fortalecido frente al euro',



      'El euro se ha fortalecido frente al dólar — ahora 1 euro vale más dólares',



      'El precio ha bajado — el euro vale menos'



    ],



    correct: 1,



    explanation: 'En EUR/USD, el número indica cuántos dólares vale 1 euro. Si sube de 1.0850 a 1.0920, ahora 1 euro compra más dólares que antes → el euro se fortaleció.',



    homework: [
      {
        icon: "📊",
        title: "Compara 3 pares diferentes",
        task: "En TradingView, abre EUR/USD, GBP/USD y USD/JPY en gráfico D1. Observa los 3 durante 2 minutos cada uno. Anota: ¿cuál se mueve más? ¿Cuál parece más ordenado? ¿Cuál tiene las velas más grandes?",
        tool: "TradingView",
        duration: 15,
        deliverable: "Entender visualmente que cada par tiene su propio carácter y comportamiento."
      },
      {
        icon: "🧮",
        title: "Convierte EUR a USD mentalmente",
        task: "Si EUR/USD = 1.0850, ¿cuántos dólares obtienes por 1.000 euros? ¿Y por 10.000 euros? Hazlo sin calculadora. Luego verifica en TradingView el precio actual y recalcula con el precio real.",
        tool: "Papel",
        duration: 5,
        deliverable: "Entender qué representa el número del precio en la vida real."
      }
    ],
  resources: [



      { title: "Qué es el Spread, BID y ASK en trading (con ejemplo práctico)", channel: "canal en español", url: "https://www.youtube.com/watch?v=tQH-wAN4CRg", desc: "Explica bid, ask, spread y pips con ejemplos numéricos reales — los conceptos exactos de L2." },
      { title: "TRADING para NOVATOS — Velas japonesas y conceptos básicos", channel: "Novatos Trading Club", url: "https://www.youtube.com/watch?v=vP7ij4fZjPI", desc: "Cubre conceptos básicos del mercado incluyendo pares de divisas, pips y mecánica de operaciones." },
    ]



  }



},







{



  id: 3,



  phase: 0,



  title: 'Pips, lotes y apalancamiento — el lenguaje del dinero',



  subtitle: 'Los conceptos numéricos más importantes del trading, con ejemplos reales',



  duration: 20,



  eduChart: 'drawPipVisualization',



  eduChartHeight: 260,



  content: `



    <p>Estos tres conceptos definen cuánto dinero ganas o pierdes en cada operación. Entenderlos perfectamente es <strong>obligatorio antes de colocar cualquier trade</strong>.</p>







    <h3>1. El PIP — la unidad de medida</h3>



    <p>Un <strong>pip</strong> es el movimiento mínimo "estándar" de un par de divisas. En EUR/USD, es la <strong>cuarta cifra decimal</strong>:</p>







    <div class="concept-box">



      1.08<strong>5</strong>0 → 1.08<strong>5</strong>1 = movimiento de <strong>1 pip</strong><br>



      1.0850 → 1.0900 = movimiento de <strong>50 pips</strong><br>



      1.0850 → 1.0750 = movimiento de <strong>100 pips</strong>



    </div>







    <p>Nota: en los pares con JPY (como USD/JPY), el pip es la <strong>segunda</strong> decimal porque el yen vale mucho menos que el dólar.</p>







    <div class="concept-box"><strong>Pip</strong>: "Percentage In Point" o "Price Interest Point". La unidad mínima de movimiento de precio en Forex. En EUR/USD: la 4ª cifra decimal (0.0001).</div>

    <div class="concept-box"><strong>Pipette (fracción de pip)</strong>: en TradingView y MT5 verás EUR/USD con 5 decimales: por ejemplo <strong>1.08503</strong>. El último dígito (el 3) es un <em>pipette</em> — una décima de pip. Un movimiento de 1.08500 a 1.08510 es 1 pip. Un movimiento de 1.08500 a 1.08503 es 0.3 pips (3 pipettes). Para el análisis del día a día puedes ignorar los pipettes y trabajar con 4 decimales, pero es bueno saber que existen para no confundirte cuando veas los precios en el broker.</div>







    <h3>2. Los LOTES — el tamaño de tu operación</h3>



    <p>Saber cuántos pips se ha movido el precio no te dice cuánto dinero has ganado o perdido. Para eso necesitas saber el <strong>tamaño de tu posición</strong> (los lotes):</p>







    <table>



      <thead>



        <tr><th>Tipo de lote</th><th>Unidades</th><th>Valor por pip (EUR/USD)</th><th>Para cuentas de...</th></tr>



      </thead>



      <tbody>



        <tr><td><strong>Estándar</strong></td><td>100.000 unidades</td><td>~$10 / pip</td><td>50.000€+</td></tr>



        <tr><td><strong>Mini</strong></td><td>10.000 unidades</td><td>~$1 / pip</td><td>5.000€+</td></tr>



        <tr><td><strong>Micro</strong></td><td>1.000 unidades</td><td>~$0.10 / pip</td><td>500€+</td></tr>



      </tbody>



    </table>







    <div class="concept-box"><strong>Lote</strong>: la unidad estándar de tamaño de posición en Forex. 1 lote estándar = 100.000 unidades de la moneda base. En la práctica, con cuentas pequeñas siempre usarás lotes micro (0.01 lotes = 1.000 unidades).</div>







    <h3>Ejemplo REAL con números concretos</h3>



    <p>Tienes una cuenta de <strong>500€</strong>. Decides entrar LONG en EUR/USD con <strong>0.01 lotes</strong> (lote micro). Tu Stop Loss está 20 pips abajo de tu entrada.</p>



    <ul>



      <li>Con 0.01 lotes, cada pip vale aproximadamente <strong>$0.10</strong></li>



      <li>Si el precio va en tu contra 20 pips → pierdes 20 × $0.10 = <strong>$2 (~2€)</strong></li>



      <li>Eso es menos del <strong>0.4% de tu cuenta</strong> de 500€</li>



      <li>Puedes perder 250 trades seguidos así antes de arruinarte</li>



    </ul>







    <div class="tip-box">💡 Los lotes micro (0.01) son tu mejor amigo al empezar. Pierdes centavos mientras aprendes, no cientos de euros.</div>







    <h3>3. El APALANCAMIENTO — el arma de doble filo</h3>



    <p>El apalancamiento te permite controlar una posición más grande con menos capital. Tu broker te "presta" dinero temporalmente.</p>







    <div class="concept-box"><strong>Apalancamiento</strong>: la capacidad de controlar una posición mayor a tu capital real. Con apalancamiento 1:100, por cada 1€ de tu dinero controlas 100€ en el mercado. Amplifica tanto las ganancias como las pérdidas.</div>







    <p><strong>Ejemplo con una casa</strong> (para entenderlo sin jerga):</p>



    <ul>



      <li>Tienes 10.000€ y el banco te presta 90.000€ → controlas una casa de 100.000€ (apalancamiento 1:10)</li>



      <li>La casa sube un 5% → vale 105.000€ → ganas 5.000€ (un 50% de tu capital de 10.000€)</li>



      <li>La casa <em>baja</em> un 5% → vale 95.000€ → pierdes 5.000€ (también un 50% de tu capital)</li>



    </ul>







    <div class="warning-box">⚠️ El apalancamiento es como manejar un coche de Fórmula 1: te lleva muy lejos muy rápido, pero un error te puede costar todo. En esta estrategia usamos apalancamiento bajo y gestión de riesgo estricta para que nunca pierdas más del 1% de tu cuenta en un solo trade.</div>

    <div class="warning-box">⚠️ <strong>Apalancamiento real en Europa:</strong> Si operas desde España u otro país de la UE bajo regulación ESMA/CySEC, tu broker tiene limitado el apalancamiento máximo a <strong>1:30</strong> para pares de divisas principales (como EUR/USD). No podrás usar 1:100 aunque quieras. Esto es una protección para traders retail. En la práctica, para los ejercicios de esta estrategia usaremos siempre <strong>1:30 o menos</strong>.</div>

    <div class="concept-box"><strong>Margen (Margin)</strong>: la cantidad de dinero que tu broker bloquea como garantía cuando abres una posición. Con apalancamiento 1:30 y un lote estándar (100.000€), el margen requerido es aproximadamente 3.333€. Ese dinero no se pierde — solo queda "bloqueado" mientras la operación está abierta. Lo verás en MT5 como "Margen usado" en la pestaña de operaciones.</div>







    <h3>El SPREAD — el costo de operar</h3>



    <p>Cuando abres una posición, el precio de compra (<strong>Ask</strong>) es siempre un poco más alto que el precio de venta (<strong>Bid</strong>). Esa diferencia es el spread — lo que cobra el broker por ejecutar tu operación.</p>







    <div class="concept-box"><strong>Ask</strong>: el precio al que puedes <em>comprar</em> (siempre el más alto de los dos).<br><strong>Bid</strong>: el precio al que puedes <em>vender</em> (siempre el más bajo).<br><strong>Spread</strong> = Ask − Bid. Con buenos brokers en EUR/USD: 0.1 a 1.0 pips.</div>







    <p>Ejemplo: si el spread es 0.8 pips, en el momento en que abres un trade ya estás "0.8 pips en negativo". El precio tiene que moverse 0.8 pips a tu favor para llegar al punto de equilibrio. Por eso usamos targets de al menos 30-40 pips — el spread es insignificante comparado con el recorrido.</p>



  `,



  keyTerms: [



    { term: 'Pip', def: 'Unidad mínima de movimiento de precio. En EUR/USD: la cuarta cifra decimal (0.0001). Subir de 1.0850 a 1.0851 = 1 pip.' },



    { term: 'Lote', def: 'Unidad de tamaño de posición. 1 lote estándar = 100.000 unidades. Con cuentas pequeñas se usan micro lotes (0.01 = 1.000 unidades, ~$0.10 por pip).' },



    { term: 'Lote micro', def: '0.01 lotes = 1.000 unidades de la moneda base. En EUR/USD, cada pip vale aproximadamente $0.10. Ideal para cuentas pequeñas mientras se aprende.' },



    { term: 'Apalancamiento', def: 'Multiplicador que permite controlar una posición mayor a tu capital. Con 1:100, cada 1€ tuyo controla 100€ en el mercado. Amplifica ganancias Y pérdidas.' },



    { term: 'Spread', def: 'Diferencia entre el precio Ask (compra) y Bid (venta). Es el costo de abrir una operación. En EUR/USD con buenos brokers: 0.1-1.0 pips.' },



    { term: 'Ask', def: 'El precio al que puedes comprar. Siempre ligeramente más alto que el Bid.' },



    { term: 'Bid', def: 'El precio al que puedes vender. Siempre ligeramente más bajo que el Ask.' }



  ],



  quiz: {



    question: 'Tienes 0.01 lotes abiertos y el precio sube 30 pips a tu favor. ¿Cuánto ganas aproximadamente?',



    options: [



      '$30 dólares — 30 pips siempre son $30',



      '$3 dólares — con 0.01 lotes cada pip vale $0.10, y 30 × $0.10 = $3',



      '$0.30 dólares — los micro lotes valen muy poco'



    ],



    correct: 1,



    explanation: 'Con 0.01 lotes (lote micro) en EUR/USD, cada pip vale aproximadamente $0.10. 30 pips × $0.10 = $3. Para ganar $30 con 30 pips necesitarías 0.1 lotes (un mini lote).',



    homework: [
      {
        icon: "🧮",
        title: "Usa la calculadora de position sizing",
        task: "Abre la calculadora de esta lección. Calcula el tamaño de posición para estos 3 escenarios: (A) 500€ capital, SL 15 pips; (B) 1.000€ capital, SL 25 pips; (C) 2.000€ capital, SL 30 pips. Anota los lotes resultantes.",
        tool: "Calculadora",
        duration: 10,
        deliverable: "Saber calcular el tamaño de posición correcto para diferentes cuentas y stop losses."
      },
      {
        icon: "📊",
        title: "Mide el spread en tiempo real",
        task: "Abre EUR/USD en TradingView. Activa la herramienta 'Bid/Ask'. Anota el precio Bid y Ask durante 3 momentos diferentes del día (mañana, tarde, noche). Calcula el spread en cada momento. ¿Varía?",
        tool: "TradingView",
        duration: 15,
        deliverable: "Entender que el spread cambia según el momento del día y por qué es importante para el coste real de cada trade."
      }
    ],
  resources: [



      { title: "Tutorial COMPLETO MetaTrader 5 + Cuenta DEMO GRATIS", channel: "canal en español", url: "https://www.youtube.com/watch?v=Ch5xdGU8hMs", desc: "Cómo descargar MT5, abrir cuenta demo y ejecutar la primera operación." },
      { title: "METATRADER 5 — Aprende lo básico para comenzar", channel: "canal en español", url: "https://www.youtube.com/watch?v=xXF5bqgRF7s", desc: "Lo básico de MT5: gráficos, ventana de órdenes y navegación — base para usar el simulador." },
    ]



  }



},







{



  id: 4,



  phase: 0,



  title: 'Las sesiones de mercado — cuándo operar',



  subtitle: 'El mercado no es igual de activo las 24 horas — aprende cuándo hay oportunidades reales',



  duration: 12,



  eduChart: 'drawSessionsClock',



  eduChartHeight: 340,



  content: `



    <p>El mercado Forex está abierto 24 horas, de lunes a viernes. Pero esto no significa que siempre valga la pena operar. Hay horas donde el mercado está vivo y hay horas donde prácticamente está dormido.</p>







    <h3>Las 3 sesiones principales</h3>







    <table>



      <thead>



        <tr><th>Sesión</th><th>Horario (hora española CET)</th><th>Características</th></tr>



      </thead>



      <tbody>



        <tr>



          <td><strong>Tokyo</strong></td>



          <td>01:00 – 09:00 CET</td>



          <td>Baja volatilidad, movimientos lentos. Útil para ver el contexto general pero pocos setups de calidad en EUR/USD.</td>



        </tr>



        <tr>



          <td><strong>Londres</strong></td>



          <td>09:00 – 17:00 CET</td>



          <td>La más importante. La City londinense mueve el 30% del volumen diario de Forex. Los institucionales europeos construyen sus posiciones aquí.</td>



        </tr>



        <tr>



          <td><strong>Nueva York</strong></td>



          <td>15:00 – 23:00 CET</td>



          <td>Segunda en volumen. Mueve principalmente el dólar. Muchas decisiones macroeconómicas de EE.UU. salen en esta sesión.</td>



        </tr>



      </tbody>



    </table>







    <div class="concept-box"><strong>Volatilidad</strong>: qué tan rápido y cuánto se mueve el precio. Alta volatilidad = movimientos grandes y rápidos. Baja volatilidad = movimientos pequeños y lentos. Necesitamos volatilidad suficiente para que los trades lleguen a los objetivos.</div>







    <h3>El Overlap Londres-Nueva York — tu ventana principal</h3>



    <p>De <strong>15:00 a 17:00 CET</strong>, las dos sesiones más grandes del mundo coinciden. En esas 2 horas ocurre el <strong>40% del volumen diario</strong> de todo el mercado Forex.</p>







    <div class="concept-box"><strong>Overlap (solapamiento)</strong>: el periodo donde dos sesiones de mercado están activas al mismo tiempo. El overlap Londres-Nueva York (15:00-17:00 CET) es el momento de mayor liquidez y volatilidad del día.</div>







    <p>¿Por qué esto importa para tu estrategia?</p>



    <ul>



      <li>Los <strong>sweeps de liquidez</strong> ocurren con más frecuencia y con más fuerza</li>



      <li>Las <strong>zonas de Oferta/Demanda</strong> se respetan mejor porque hay más participantes</li>



      <li>Los movimientos son más "reales" y menos manipulados</li>



      <li>Los setups se completan más rápido → no tienes que esperar días</li>



    </ul>







    <div class="concept-box"><strong>Killzone</strong>: ventana de tiempo de alta probabilidad de setup. Las killzones principales son el apertura de Londres (09:00-11:00 CET) y el overlap London-NY (15:00-17:00 CET). Tu estrategia se centra en estas ventanas.</div>







    <h3>¿Cuándo NO operar?</h3>



    <ul>



      <li><strong>23:00 – 08:00 CET</strong>: mercado asiático bajo volumen, movimientos aleatorios, muchos falsos rompimientos.</li>



      <li><strong>Viernes después de las 18:00 CET</strong>: el mercado cierra. Los spreads se disparan. Nadie mueve precios significativos antes del fin de semana.</li>



      <li><strong>Días de noticias importantes</strong>: decisiones de tipos de interés del BCE o la Reserva Federal pueden mover 100+ pips en segundos. Si eres principiante, cierra posiciones antes y observa desde fuera.</li>



    </ul>







    <div class="concept-box"><strong>Volumen</strong>: en Forex OTC no existe volumen centralizado como en bolsa. Lo que vemos es el tick volume — cuántas veces cambió el precio en un periodo. Más ticks = más actividad real.</div>







    <div class="tip-box">💡 Resumen práctico: como principiante en España, tu mejor horario es de 09:00 a 11:00 CET (apertura Londres) y de 15:00 a 17:00 CET (overlap). Fuera de esas ventanas, mejor no operar.</div>

    <div class="tip-box">💡 <strong>Cambio de horario de verano:</strong> Los horarios indicados son en hora CET (invierno). En verano (horario CEST, aproximadamente de finales de marzo a finales de octubre), todos los horarios se adelantan 1 hora. El overlap London-NY pasa de las <strong>15:00-17:00 CET</strong> a las <strong>14:00-16:00 CEST</strong>. La apertura de Nueva York pasa de las 15:00 a las 14:00. Si empiezas a operar en verano, ajusta tus alarmas.</div>



  `,



  keyTerms: [



    { term: 'Sesión de trading', def: 'Periodo de actividad de un mercado financiero geográfico. Las principales en Forex: Tokyo (01-09 CET), Londres (09-17 CET), Nueva York (15-23 CET).' },



    { term: 'Volatilidad', def: 'Velocidad e intensidad de los movimientos de precio. Alta volatilidad = movimientos grandes. Necesaria para que los trades lleguen a objetivos.' },



    { term: 'Volumen', def: 'En Forex: tick volume (número de cambios de precio por periodo). Más volumen indica más participantes activos y movimientos más confiables.' },



    { term: 'Overlap', def: 'Solapamiento entre dos sesiones. El overlap Londres-Nueva York (15:00-17:00 CET) concentra el 40% del volumen diario y es la ventana de mayor calidad para operar EUR/USD.' },



    { term: 'Killzone', def: 'Ventana horaria de alta probabilidad de setup. Apertura de Londres (09-11 CET) y Overlap London-NY (15-17 CET) son las killzones principales.' }



  ],



  quiz: {



    question: '¿Cuál es el horario de mayor calidad para operar EUR/USD según esta estrategia?',



    options: [



      '02:00 – 06:00 CET (sesión asiática — mercado tranquilo)',



      '15:00 – 17:00 CET (overlap Londres-Nueva York — máximo volumen)',



      'Cualquier hora — el mercado está siempre igual de activo'



    ],



    correct: 1,



    explanation: 'El overlap Londres-Nueva York (15:00-17:00 CET) concentra el 40% del volumen diario. Los sweeps son más claros, las zonas se respetan mejor, y los movimientos son más confiables.',



    realChart: {
      img: 'sesiones_actividad.png',
      symbol: 'EUR/USD',
      timeframe: 'H1',
      label: 'Actividad real por sesiones — semana completa',
      caption: '<strong>Observa:</strong> Las velas más grandes aparecen durante la sesión de Londres (9-17h CET) y especialmente en el Overlap con Nueva York (15-17h CET). Las horas de Tokio (1-9h) tienen velas pequeñas y poco movimiento en EUR/USD.'
    },

    homework: [
      {
        icon: "⏰",
        title: "Observa el mercado en el Overlap",
        task: "A las 15:00 CET (hora española), abre TradingView con EUR/USD en H1. Observa durante 15 minutos. Anota: ¿el volumen (barras abajo) es mayor que a las 11:00? ¿El precio se mueve más? ¿Hay velas más grandes?",
        tool: "TradingView",
        duration: 20,
        deliverable: "Confirmar personalmente que el overlap Londres-NY (15:00-17:00) es el horario con más actividad."
      },
      {
        icon: "📝",
        title: "Compara actividad por horario",
        task: "Abre EUR/USD en H1. Mira velas de las 03:00, 10:00 y 15:30 del mismo día. ¿Cuál tiene el cuerpo más grande? ¿Cuál tiene más volumen? Anota tus observaciones.",
        tool: "TradingView",
        duration: 10,
        deliverable: "Visualmente confirmar qué sesión genera los movimientos más grandes."
      }
    ],
  resources: [



      { title: "Domina Asia, Londres y New York — Sesiones de Forex", channel: "canal en español", url: "https://www.youtube.com/watch?v=O4H_hbNL5vY", desc: "Explica las tres sesiones principales, sus horarios y qué esperar en cada una." },
      { title: "Horarios de Operativa — Killzones (Londres y NY)", channel: "canal SMC en español", url: "https://www.youtube.com/watch?v=7TB_6gGUsWE", desc: "Introduce el concepto de killzones conectando las sesiones con las ventanas de alta volatilidad." },
    ]



  }



},







{



  id: 5,



  phase: 0,



  title: 'Cómo leer una vela japonesa',



  subtitle: 'El lenguaje visual del precio — cada vela cuenta una historia',



  duration: 28,



  eduChart: 'drawCandleAnatomy',



  eduChartHeight: 300,



  content: `



    <p>Los gráficos de Forex muestran el precio usando <strong>velas japonesas</strong> (candlesticks). Cada vela representa un periodo de tiempo y te cuenta cuatro cosas clave sobre ese periodo.</p>







    <h3>La anatomía de una vela</h3>



    <p>Cada vela muestra exactamente 4 precios:</p>







    <table>



      <thead>



        <tr><th>Componente</th><th>Significado</th></tr>



      </thead>



      <tbody>



        <tr><td><strong>OPEN (Apertura)</strong></td><td>El precio al inicio del periodo</td></tr>



        <tr><td><strong>CLOSE (Cierre)</strong></td><td>El precio al final del periodo</td></tr>



        <tr><td><strong>HIGH (Máximo)</strong></td><td>El precio más alto alcanzado durante el periodo</td></tr>



        <tr><td><strong>LOW (Mínimo)</strong></td><td>El precio más bajo alcanzado durante el periodo</td></tr>



      </tbody>



    </table>







    <div class="concept-box"><strong>Open / High / Low / Close (OHLC)</strong>: los cuatro datos de precio de cada vela. Son la base de todo el análisis técnico.</div>







    <p>El <strong>cuerpo</strong> de la vela es el rectángulo entre el Open y el Close.<br>



    Las <strong>sombras</strong> (también llamadas wicks o mechas) son las líneas finas que sobresalen del cuerpo hacia arriba y hacia abajo.</p>







    <div class="concept-box"><strong>Cuerpo</strong>: la parte ancha de la vela, entre el Open y el Close. Muestra el movimiento neto del periodo.<br><br><strong>Wick / Sombra</strong>: las líneas finas. La sombra superior va del cuerpo al High. La inferior va del cuerpo al Low. Muestran hasta dónde llegó el precio antes de ser rechazado.</div>







    <h3>Velas verdes y rojas</h3>



    <ul>



      <li><strong>Vela verde (alcista)</strong>: el Close es más alto que el Open → el precio subió durante ese periodo.</li>



      <li><strong>Vela roja (bajista)</strong>: el Close es más bajo que el Open → el precio bajó durante ese periodo.</li>



    </ul>







    <h3>Los timeframes — la escala temporal</h3>



    <p>El <strong>timeframe</strong> (marco temporal) determina cuánto tiempo representa cada vela:</p>







    <div class="concept-box"><strong>Timeframe</strong>: la duración de cada vela en el gráfico. M1 = 1 minuto, H1 = 1 hora, D1 = 1 día. Cuanto mayor el timeframe, más significativo es cada movimiento.</div>







    <table>



      <thead>



        <tr><th>Timeframe</th><th>Cada vela =</th><th>Uso en esta estrategia</th></tr>



      </thead>



      <tbody>



        <tr><td><strong>M15</strong></td><td>15 minutos</td><td>Buscar señal de entrada (engulfing, pin bar)</td></tr>



        <tr><td><strong>H1</strong></td><td>1 hora</td><td>Identificar zonas de Oferta/Demanda</td></tr>



        <tr><td><strong>H4</strong></td><td>4 horas</td><td>Determinar el sesgo del día (alcista/bajista)</td></tr>



        <tr><td><strong>D1</strong></td><td>1 día (24h)</td><td>Tendencia macro y grandes niveles</td></tr>



      </tbody>



    </table>







    <div class="tip-box">💡 Tu flujo de análisis: empieza en D1 (¿cuál es la tendencia grande?) → H4 (¿cuál es el sesgo de hoy?) → H1 (¿dónde están las zonas de entrada?) → M15 (¿hay señal de confirmación?)</div>







    <h3>Las 3 velas de señal más importantes</h3>



    <p>Estas son las velas de confirmación que usarás en M15 para confirmar entradas:</p>







        <div class="warning-box">
      ⚠️ <strong>LA CONFUSIÓN MÁS IMPORTANTE QUE DEBES EVITAR:</strong><br>
      El Martillo y el Hombre Colgante son visualmente IDÉNTICOS. El Inverted Hammer y el Shooting
      Star son visualmente IDÉNTICOS. El contexto (¿dónde estás en el mercado?) es lo que diferencia
      señal alcista de señal bajista. Memoriza esto antes de leer los patrones.
    </div>

    <div class="concept-box">
      <strong>Engulfing (Vela Envolvente)</strong>: una vela cuyo cuerpo supera completamente al
      cuerpo de la vela anterior. Muestra que el bando opuesto tomó el control del precio de golpe
      y de forma decisiva.
      <br><br>
      <strong>Engulfing alcista:</strong> vela verde después de vela roja, con cuerpo verde mayor
      que el cuerpo rojo → los compradores tomaron el control.
      <br>
      <strong>Engulfing bajista:</strong> vela roja después de vela verde, con cuerpo rojo mayor
      que el cuerpo verde → los vendedores tomaron el control.
    </div>

    <div style="background:#131722;border-radius:10px;padding:8px;margin:16px 0;">
      <svg viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;max-width:560px;margin:16px auto;border-radius:10px;" font-family="Arial,sans-serif" font-size="11">
        <rect width="580" height="220" fill="#131722" rx="10"/>
        <!-- Título general -->
        <text x="290" y="16" text-anchor="middle" fill="#d4d4d4" font-size="12" font-weight="bold">Los 3 tipos de Engulfing</text>
        <!-- Separadores verticales -->
        <line x1="193" y1="22" x2="193" y2="205" stroke="#333" stroke-width="1"/>
        <line x1="387" y1="22" x2="387" y2="205" stroke="#333" stroke-width="1"/>

        <!-- GRUPO 1: Body Engulfing Alcista (centrado x=97) -->
        <text x="97" y="32" text-anchor="middle" fill="#d4d4d4" font-size="11" font-weight="bold">Body Engulfing</text>
        <text x="97" y="47" text-anchor="middle" fill="#26a69a" font-size="11">Alcista &#x2191;</text>
        <!-- Vela roja anterior -->
        <line x1="83" y1="72" x2="83" y2="82" stroke="#ef5350" stroke-width="1.5"/>
        <rect x="74" y="82" width="18" height="58" fill="#ef5350" rx="1"/>
        <line x1="83" y1="140" x2="83" y2="152" stroke="#ef5350" stroke-width="1.5"/>
        <!-- Vela verde envolvente -->
        <line x1="112" y1="55" x2="112" y2="62" stroke="#26a69a" stroke-width="1.5"/>
        <rect x="103" y="62" width="18" height="96" fill="#26a69a" rx="1"/>
        <line x1="112" y1="158" x2="112" y2="165" stroke="#26a69a" stroke-width="1.5"/>
        <!-- Flecha de superación -->
        <text x="97" y="195" text-anchor="middle" fill="#888" font-size="9">cuerpo verde &gt; cuerpo rojo</text>

        <!-- GRUPO 2: Body Engulfing Bajista (centrado x=290) -->
        <text x="290" y="32" text-anchor="middle" fill="#d4d4d4" font-size="11" font-weight="bold">Body Engulfing</text>
        <text x="290" y="47" text-anchor="middle" fill="#ef5350" font-size="11">Bajista &#x2193;</text>
        <!-- Vela verde anterior -->
        <line x1="276" y1="72" x2="276" y2="82" stroke="#26a69a" stroke-width="1.5"/>
        <rect x="267" y="82" width="18" height="58" fill="#26a69a" rx="1"/>
        <line x1="276" y1="140" x2="276" y2="152" stroke="#26a69a" stroke-width="1.5"/>
        <!-- Vela roja envolvente -->
        <line x1="305" y1="55" x2="305" y2="62" stroke="#ef5350" stroke-width="1.5"/>
        <rect x="296" y="62" width="18" height="96" fill="#ef5350" rx="1"/>
        <line x1="305" y1="158" x2="305" y2="165" stroke="#ef5350" stroke-width="1.5"/>
        <text x="290" y="195" text-anchor="middle" fill="#888" font-size="9">cuerpo rojo &gt; cuerpo verde</text>

        <!-- GRUPO 3: Full Engulfing (centrado x=483) -->
        <text x="483" y="32" text-anchor="middle" fill="#d4d4d4" font-size="11" font-weight="bold">Full Engulfing</text>
        <text x="483" y="47" text-anchor="middle" fill="#f9a825" font-size="11">M&#225;s potente &#9733;</text>
        <!-- Vela roja con wicks largos -->
        <line x1="469" y1="58" x2="469" y2="82" stroke="#ef5350" stroke-width="1.5"/>
        <rect x="460" y="82" width="18" height="56" fill="#ef5350" rx="1"/>
        <line x1="469" y1="138" x2="469" y2="165" stroke="#ef5350" stroke-width="1.5"/>
        <!-- Vela verde que cubre incluso las sombras -->
        <line x1="498" y1="48" x2="498" y2="50" stroke="#26a69a" stroke-width="1.5"/>
        <rect x="489" y="50" width="18" height="125" fill="#26a69a" rx="1"/>
        <line x1="498" y1="175" x2="498" y2="177" stroke="#26a69a" stroke-width="1.5"/>
        <text x="483" y="192" text-anchor="middle" fill="#888" font-size="9">cubre sombras</text>
        <text x="483" y="205" text-anchor="middle" fill="#888" font-size="9">de la vela anterior</text>
      </svg>
    </div>

    <h4>Dos versiones del engulfing — diferente potencia:</h4>

    <div class="concept-box">
      <strong>Engulfing de Cuerpo (Body Engulfing)</strong> — el más común:<br>
      El cuerpo nuevo supera el cuerpo anterior, pero las sombras de la vela previa pueden
      sobresalir. Condición mínima para llamarlo engulfing. Señal válida.<br>
      <em>Ejemplo: vela roja con cuerpo de 30 pips, seguida de vela verde con cuerpo de 45 pips
      → engulfing de cuerpo ✓</em>
    </div>

    <div class="concept-box">
      <strong>Engulfing Total (Full Engulfing)</strong> — el más potente:<br>
      El cuerpo nuevo supera no solo el cuerpo anterior, sino también sus sombras. La vela nueva
      envuelve completamente el rango high-to-low de la anterior. Cuando aparece en una zona clave,
      es una de las señales más fuertes del análisis técnico.<br>
      <em>Ejemplo: vela previa tiene rango total de High a Low = 60 pips. El cuerpo nuevo mide
      75 pips y supera tanto el high como el low anterior → engulfing total ✓✓</em>
    </div>

    <h4>Criterios de validez del Engulfing:</h4>

    <ul>
      <li>El cuerpo nuevo debe superar <em>claramente</em> al anterior — por al menos 5 pips, no por 1-2 pips.</li>
      <li>La vela previa debe tener un cuerpo definido (no ser un Doji).</li>
      <li>El engulfing debe aparecer en una zona de O/D, no en el medio de ninguna parte.</li>
      <li>El engulfing bajista es igual de válido que el alcista — tiene la misma lógica pero en dirección opuesta.</li>
    </ul>

    <div class="warning-box">
      ⚠️ <strong>Engulfing parcial: ¿cuándo es válido?</strong><br>
      Si el cuerpo nuevo casi alcanza pero no supera al anterior (un "near-engulfing"), solo es
      válido con contexto excepcional: zona de O/D clara + sweep reciente + cuerpo nuevo al menos
      80% del anterior + cierre más allá del punto medio del cuerpo previo. Si tienes que dudar
      si "cuenta", probablemente no cuente.
    </div>

    <div class="concept-box">
      <strong>Pin Bar</strong>: vela con cuerpo pequeño y sombra larga. La sombra larga muestra
      que el precio intentó moverse en una dirección con fuerza, pero fue completamente rechazado.
      El bando rechazado perdió la batalla de ese período.
      <br><br>
      <strong>Regla de ratio mínimo:</strong> la sombra larga debe medir al menos 2 veces el
      tamaño del cuerpo. Preferiblemente 3 veces o más. Si la sombra solo es ligeramente más larga
      que el cuerpo, no es un Pin Bar válido.
    </div>

    <h4>Los 4 patrones de Pin Bar — el mapa completo:</h4>

    <table>
      <thead>
        <tr>
          <th>Patrón</th>
          <th>Forma visual</th>
          <th>Dónde aparece</th>
          <th>Señal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Martillo</strong> (Hammer)</td>
          <td>Sombra larga ABAJO, cuerpo arriba (verde o rojo)</td>
          <td>Al FONDO de una caída, en zona de demanda</td>
          <td>ALCISTA — rechazo de precios bajos</td>
        </tr>
        <tr>
          <td><strong>Hombre Colgante</strong> (Hanging Man)</td>
          <td>Sombra larga ABAJO, cuerpo arriba (verde o rojo) — IDÉNTICO al Hammer</td>
          <td>En la CIMA de una subida, en zona de oferta</td>
          <td>BAJISTA — advertencia de posible caída</td>
        </tr>
        <tr>
          <td><strong>Martillo Invertido</strong> (Inverted Hammer)</td>
          <td>Sombra larga ARRIBA, cuerpo abajo (verde o rojo)</td>
          <td>Al FONDO de una caída, en zona de demanda</td>
          <td>ALCISTA (débil) — prueba de subida, necesita confirmación</td>
        </tr>
        <tr>
          <td><strong>Estrella Fugaz</strong> (Shooting Star)</td>
          <td>Sombra larga ARRIBA, cuerpo abajo (verde o rojo) — IDÉNTICO al Inverted Hammer</td>
          <td>En la CIMA de una subida, en zona de oferta</td>
          <td>BAJISTA — rechazo de precios altos</td>
        </tr>
      </tbody>
    </table>

    <div style="background:#131722;border-radius:10px;padding:8px;margin:16px 0;">
      <svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;max-width:560px;margin:16px auto;border-radius:10px;" font-family="Arial,sans-serif" font-size="11">
        <rect width="620" height="220" fill="#131722" rx="10"/>
        <!-- Título -->
        <text x="310" y="15" text-anchor="middle" fill="#d4d4d4" font-size="12" font-weight="bold">Los 4 Pin Bar &#8212; el contexto lo cambia todo</text>

        <!-- MARTILLO (x=75) — contexto bajista + vela verde sombra abajo -->
        <!-- Tendencia bajista: 3 líneas rojas hacia abajo-derecha -->
        <line x1="30" y1="45" x2="45" y2="60" stroke="#ef5350" stroke-width="2"/>
        <line x1="38" y1="55" x2="53" y2="70" stroke="#ef5350" stroke-width="2"/>
        <line x1="46" y1="65" x2="61" y2="80" stroke="#ef5350" stroke-width="2"/>
        <!-- Body verde -->
        <line x1="75" y1="46" x2="75" y2="52" stroke="#26a69a" stroke-width="1.5"/>
        <rect x="66" y="52" width="18" height="28" fill="#26a69a" rx="1"/>
        <!-- Wick bottom largo -->
        <line x1="75" y1="80" x2="75" y2="168" stroke="#26a69a" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="75" y="182" text-anchor="middle" fill="#26a69a" font-size="10" font-weight="bold">Martillo</text>
        <text x="75" y="196" text-anchor="middle" fill="#26a69a" font-size="10">&#x2191; Alcista</text>
        <text x="75" y="210" text-anchor="middle" fill="#888" font-size="9">Fondo de ca&#237;da</text>

        <!-- HOMBRE COLGANTE (x=205) — contexto alcista + vela roja sombra abajo -->
        <!-- Tendencia alcista: 3 líneas verdes hacia arriba-derecha -->
        <line x1="158" y1="100" x2="173" y2="85" stroke="#26a69a" stroke-width="2"/>
        <line x1="166" y1="92" x2="181" y2="77" stroke="#26a69a" stroke-width="2"/>
        <line x1="174" y1="84" x2="189" y2="69" stroke="#26a69a" stroke-width="2"/>
        <!-- Body rojo -->
        <line x1="205" y1="44" x2="205" y2="50" stroke="#ef5350" stroke-width="1.5"/>
        <rect x="196" y="50" width="18" height="28" fill="#ef5350" rx="1"/>
        <!-- Wick bottom largo -->
        <line x1="205" y1="78" x2="205" y2="168" stroke="#ef5350" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="205" y="182" text-anchor="middle" fill="#ef5350" font-size="10" font-weight="bold">H. Colgante</text>
        <text x="205" y="196" text-anchor="middle" fill="#ef5350" font-size="10">&#x2193; Bajista</text>
        <text x="205" y="210" text-anchor="middle" fill="#888" font-size="9">Cima de subida</text>

        <!-- Separador vertical -->
        <line x1="310" y1="22" x2="310" y2="215" stroke="#333" stroke-width="1" stroke-dasharray="4,3"/>
        <text x="310" y="110" text-anchor="middle" fill="#555" font-size="9" transform="rotate(-90,310,110)">CONTEXTO CAMBIA TODO</text>

        <!-- INVERTED HAMMER (x=385) — contexto bajista + vela verde sombra arriba -->
        <!-- Tendencia bajista: 3 líneas rojas hacia abajo-derecha -->
        <line x1="338" y1="65" x2="353" y2="80" stroke="#ef5350" stroke-width="2"/>
        <line x1="346" y1="73" x2="361" y2="88" stroke="#ef5350" stroke-width="2"/>
        <line x1="354" y1="81" x2="369" y2="96" stroke="#ef5350" stroke-width="2"/>
        <!-- Wick top largo -->
        <line x1="385" y1="45" x2="385" y2="132" stroke="#26a69a" stroke-width="1.5"/>
        <!-- Body verde -->
        <rect x="376" y="132" width="18" height="28" fill="#26a69a" rx="1"/>
        <!-- Wick bottom pequeño -->
        <line x1="385" y1="160" x2="385" y2="165" stroke="#26a69a" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="385" y="182" text-anchor="middle" fill="#26a69a" font-size="10" font-weight="bold">Inv. Hammer</text>
        <text x="385" y="196" text-anchor="middle" fill="#26a69a" font-size="10">&#x2191; Alcista</text>
        <text x="385" y="210" text-anchor="middle" fill="#888" font-size="9">Fondo de ca&#237;da</text>

        <!-- SHOOTING STAR (x=515) — contexto alcista + vela roja sombra arriba -->
        <!-- Tendencia alcista: 3 líneas verdes hacia arriba-derecha -->
        <line x1="468" y1="100" x2="483" y2="85" stroke="#26a69a" stroke-width="2"/>
        <line x1="476" y1="92" x2="491" y2="77" stroke="#26a69a" stroke-width="2"/>
        <line x1="484" y1="84" x2="499" y2="69" stroke="#26a69a" stroke-width="2"/>
        <!-- Wick top largo -->
        <line x1="515" y1="45" x2="515" y2="132" stroke="#ef5350" stroke-width="1.5"/>
        <!-- Body rojo -->
        <rect x="506" y="132" width="18" height="28" fill="#ef5350" rx="1"/>
        <!-- Wick bottom pequeño -->
        <line x1="515" y1="160" x2="515" y2="165" stroke="#ef5350" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="515" y="182" text-anchor="middle" fill="#ef5350" font-size="10" font-weight="bold">Shooting Star</text>
        <text x="515" y="196" text-anchor="middle" fill="#ef5350" font-size="10">&#x2193; Bajista</text>
        <text x="515" y="210" text-anchor="middle" fill="#888" font-size="9">Cima de subida</text>
      </svg>
    </div>

    <div class="tip-box">
      💡 <strong>¿Puede un Martillo ser de color ROJO y seguir siendo señal alcista?</strong><br>
      SÍ. El color del cuerpo en un Pin Bar tiene importancia secundaria. Si la sombra inferior
      es larga (al menos 2x el cuerpo), el patrón sigue siendo alcista aunque el cuerpo sea rojo.
      Un Hammer verde es ligeramente más fuerte (porque cerró por encima del open), pero un Hammer
      rojo en una zona de demanda sigue siendo una señal válida de compra.
      <br><br>
      Lo mismo aplica al Shooting Star verde: sigue siendo bajista aunque el cuerpo sea verde.
    </div>

    <h4>Cómo validar cada patrón:</h4>
    <ul>
      <li><strong>Martillo:</strong> sombra inferior ≥ 2x el cuerpo, sombra superior mínima o nula, aparece en zona de demanda.</li>
      <li><strong>Inverted Hammer:</strong> sombra superior ≥ 2x el cuerpo, sombra inferior mínima, aparece en zona de demanda, esperar vela verde confirmadora.</li>
      <li><strong>Hanging Man:</strong> sombra inferior ≥ 2x el cuerpo, sombra superior mínima, aparece en zona de oferta, esperar vela roja confirmadora.</li>
      <li><strong>Shooting Star:</strong> sombra superior ≥ 2x el cuerpo, sombra inferior mínima, aparece en zona de oferta.</li>
    </ul>

    <div class="concept-box">
      <strong>Doji</strong>: vela donde el Open y el Close son prácticamente idénticos → el cuerpo
      es una línea muy fina o un rectángulo muy estrecho. Indica que compradores y vendedores
      terminaron el período en empate. <em>Por sí solo no te dice hacia dónde irá el precio —
      siempre espera la siguiente vela para confirmar.</em>
    </div>

    <h4>Los 5 tipos de Doji que necesitas reconocer:</h4>

    <table>
      <thead>
        <tr><th>Tipo</th><th>Forma</th><th>Sombras</th><th>Señal implícita</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Estándar</strong></td>
          <td>Cuerpo fino, sombras moderadas iguales</td>
          <td>Similar arriba y abajo</td>
          <td>Indecisión neutra — espera confirmación</td>
        </tr>
        <tr>
          <td><strong>Piernas Largas</strong> (Long-Legged)</td>
          <td>Cuerpo fino, sombras muy largas iguales</td>
          <td>Muy largas en ambas direcciones</td>
          <td>Indecisión violenta — movimiento grande se aproxima</td>
        </tr>
        <tr>
          <td><strong>Libélula</strong> (Dragonfly)</td>
          <td>Cuerpo arriba, sombra larga solo abajo</td>
          <td>Solo inferior (larga)</td>
          <td>Alcista implícito — rechazo de precios bajos</td>
        </tr>
        <tr>
          <td><strong>Lápida</strong> (Gravestone)</td>
          <td>Cuerpo abajo, sombra larga solo arriba</td>
          <td>Solo superior (larga)</td>
          <td>Bajista implícito — rechazo de precios altos</td>
        </tr>
        <tr>
          <td><strong>Cuatro Precios</strong></td>
          <td>Solo una línea horizontal</td>
          <td>Sin sombras</td>
          <td>Sin señal — mercado sin liquidez</td>
        </tr>
      </tbody>
    </table>

    <div style="background:#131722;border-radius:10px;padding:8px;margin:16px 0;">
      <svg viewBox="0 0 550 195" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;max-width:560px;margin:16px auto;border-radius:10px;" font-family="Arial,sans-serif" font-size="11">
        <rect width="550" height="195" fill="#131722" rx="10"/>
        <!-- Título -->
        <text x="275" y="15" text-anchor="middle" fill="#d4d4d4" font-size="12" font-weight="bold">Los 5 tipos de Doji</text>

        <!-- DOJI ESTÁNDAR (x=55) -->
        <!-- Wick top -->
        <line x1="55" y1="30" x2="55" y2="90" stroke="#888888" stroke-width="1.5"/>
        <!-- Body (línea horizontal fina) -->
        <rect x="46" y="90" width="18" height="4" fill="#888888" rx="1"/>
        <!-- Wick bottom -->
        <line x1="55" y1="94" x2="55" y2="158" stroke="#888888" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="55" y="172" text-anchor="middle" fill="#d4d4d4" font-size="10">Est&#225;ndar</text>
        <text x="55" y="185" text-anchor="middle" fill="#888" font-size="9">Indecisi&#243;n</text>

        <!-- DOJI PIERNAS LARGAS (x=165) -->
        <!-- Wick top muy largo -->
        <line x1="165" y1="22" x2="165" y2="90" stroke="#888888" stroke-width="1.5"/>
        <!-- Body -->
        <rect x="156" y="90" width="18" height="4" fill="#888888" rx="1"/>
        <!-- Wick bottom muy largo -->
        <line x1="165" y1="94" x2="165" y2="168" stroke="#888888" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="165" y="172" text-anchor="middle" fill="#d4d4d4" font-size="10">Piernas Largas</text>
        <text x="165" y="185" text-anchor="middle" fill="#888" font-size="9">Volatilidad</text>

        <!-- DOJI LIBÉLULA / DRAGONFLY (x=275) -->
        <!-- Body en lo alto (sin wick top) -->
        <rect x="266" y="25" width="18" height="4" fill="#888888" rx="1"/>
        <!-- Wick bottom largo -->
        <line x1="275" y1="29" x2="275" y2="168" stroke="#888888" stroke-width="1.5"/>
        <!-- Labels -->
        <text x="275" y="172" text-anchor="middle" fill="#d4d4d4" font-size="10">Lib&#233;lula</text>
        <text x="275" y="185" text-anchor="middle" fill="#26a69a" font-size="9">&#x2191; Alcista</text>

        <!-- DOJI LÁPIDA / GRAVESTONE (x=385) -->
        <!-- Wick top largo -->
        <line x1="385" y1="22" x2="385" y2="158" stroke="#888888" stroke-width="1.5"/>
        <!-- Body en lo bajo (sin wick bottom) -->
        <rect x="376" y="158" width="18" height="4" fill="#888888" rx="1"/>
        <!-- Labels -->
        <text x="385" y="172" text-anchor="middle" fill="#d4d4d4" font-size="10">L&#225;pida</text>
        <text x="385" y="185" text-anchor="middle" fill="#ef5350" font-size="9">&#x2193; Bajista</text>

        <!-- DOJI 4 PRECIO (x=495) -->
        <!-- Solo línea horizontal gruesa -->
        <rect x="476" y="89" width="38" height="3" fill="#888888" rx="1"/>
        <!-- Labels -->
        <text x="495" y="172" text-anchor="middle" fill="#d4d4d4" font-size="10">4 Precio</text>
        <text x="495" y="185" text-anchor="middle" fill="#888" font-size="9">Sin se&#241;al</text>
      </svg>
    </div>

    <div class="tip-box">
      💡 <strong>¿Importa el color de un Doji?</strong> No de forma significativa. Un Doji "verde"
      (close un pip por encima del open) y uno "rojo" (close un pip por debajo del open) tienen
      prácticamente el mismo mensaje. Lo que importa son las SOMBRAS y el CONTEXTO, no el color.
    </div>

    <div class="warning-box">
      ⚠️ <strong>El Dragonfly Doji en zona de demanda</strong> es prácticamente idéntico al Martillo.
      El Gravestone Doji en zona de oferta es prácticamente idéntico al Shooting Star. La diferencia
      es que en el Doji el cuerpo es aún más pequeño — lo que lo hace ligeramente menos potente pero
      igual de válido como señal de rechazo.
    </div>







    <div class="warning-box">⚠️ Estas velas por sí solas no son señales de nada. Un engulfing en el medio de ninguna parte es ruido aleatorio. Solo tienen valor dentro de las zonas de tu estrategia, con los 3 pilares presentes. Aprenderás esto en la Fase 2.</div>



  `,



  keyTerms: [



    { term: 'Open', def: 'El precio de apertura de una vela — el primer precio negociado en ese periodo de tiempo.' },



    { term: 'High', def: 'El precio máximo alcanzado durante el periodo de la vela.' },



    { term: 'Low', def: 'El precio mínimo alcanzado durante el periodo de la vela.' },



    { term: 'Close', def: 'El precio de cierre de la vela — el último precio negociado en ese periodo.' },



    { term: 'Cuerpo', def: 'La parte rectangular de la vela entre el Open y el Close. Verde = subida, Rojo = bajada.' },



    { term: 'Wick / Sombra', def: 'Las líneas finas que sobresalen del cuerpo. Muestran hasta dónde llegó el precio antes de ser rechazado.' },



    { term: 'Timeframe', def: 'Duración de cada vela. M15=15 min, H1=1 hora, H4=4 horas, D1=1 día. Mayor timeframe = mayor importancia del movimiento.' },



    { term: 'Engulfing', def: 'Vela envolvente cuyo cuerpo supera al de la vela anterior. Señal de cambio de control entre compradores y vendedores. Principal señal de entrada en esta estrategia.' },



    { term: 'Pin bar', def: 'Vela con cuerpo pequeño y sombra muy larga. Indica rechazo de precio. Sombra hacia abajo = alcista (martillo). Sombra hacia arriba = bajista (shooting star).' },



    { term: 'Doji', def: 'Vela donde Open ≈ Close (cuerpo casi inexistente). Indica indecisión. Variantes: Estándar, Piernas Largas (Long-Legged), Libélula (Dragonfly), Lápida (Gravestone), Cuatro Precios. En zona de O/D, esperar confirmación.' },



    { term: 'Dragonfly Doji', def: 'Doji con sombra inferior muy larga y cuerpo en la parte alta. En zona de demanda, señal alcista implícita: el mercado rechazó precios bajos con fuerza.' },



    { term: 'Gravestone Doji', def: 'Doji con sombra superior muy larga y cuerpo en la parte baja. En zona de oferta, señal bajista implícita: el mercado rechazó precios altos con fuerza.' },



    { term: 'Long-Legged Doji', def: 'Doji con sombras muy largas en ambas direcciones. Indica indecisión extrema con violencia — el próximo movimiento suele ser grande.' },



    { term: 'Full Engulfing', def: 'Engulfing total donde el cuerpo nuevo supera no solo el cuerpo anterior sino también sus sombras — envuelve el rango completo High-to-Low. Más potente que el Body Engulfing.' },



    { term: 'Body Engulfing', def: 'Engulfing de cuerpo: el cuerpo nuevo supera el cuerpo anterior. Las sombras de la vela previa pueden sobresalir. Condición mínima de engulfing. Señal válida.' },



    { term: 'Hanging Man', def: 'Hombre Colgante: Pin Bar con sombra larga ABAJO que aparece en la CIMA de una subida. Visualmente idéntico al Martillo (Hammer) — la única diferencia es el contexto: techo vs suelo.' },



    { term: 'Inverted Hammer', def: 'Martillo Invertido: Pin Bar con sombra larga ARRIBA que aparece al FONDO de una caída. Señal alcista débil — necesita confirmación de vela verde posterior.' },



    { term: 'Shooting Star', def: 'Estrella Fugaz: Pin Bar con sombra larga ARRIBA en la CIMA de una subida. Señal bajista. Visualmente idéntico al Inverted Hammer — la diferencia es el contexto.' }



  ],



  quiz: {



    question: '¿Cuál es la diferencia entre un Martillo (Hammer) y un Hombre Colgante (Hanging Man)?',



    options: [



      'La forma de la vela: el martillo tiene sombra corta y el hombre colgante tiene sombra larga',



      'Son visualmente idénticos — la diferencia es el contexto: el martillo aparece al fondo de una caída (alcista) y el hombre colgante en la cima de una subida (bajista)',



      'El color: el martillo siempre es verde y el hombre colgante siempre es rojo'



    ],



    correct: 1,



    explanation: 'El Martillo y el Hombre Colgante tienen exactamente la misma forma: cuerpo pequeño arriba y sombra larga abajo. Lo único que los diferencia es su posición en el gráfico. Al fondo de una caída = Martillo (alcista). En la cima de una subida = Hombre Colgante (bajista). Esta confusión es la más peligrosa para principiantes.',



realChart: {
      img: 'velas_engulfing.png',
      symbol: 'EUR/USD',
      timeframe: 'H1',
      label: 'Engulfing alcista real en zona de soporte',
      caption: '<strong>Engulfing alcista real:</strong> La vela verde engloba completamente a la roja anterior. Fíjate que ocurre en una zona de soporte importante. Esto es exactamente la señal de entrada que aprenderás a reconocer.'
    },

    homework: [
      {
        icon: "🕯️",
        title: "Identifica 5 engulfing en el gráfico real",
        task: "Abre EUR/USD en H4 en TradingView. Retrocede 3 meses en el historial. Busca y marca con un rectángulo 3 engulfing alcistas y 2 engulfing bajistas. ¿Qué pasó con el precio después de cada uno?",
        tool: "TradingView",
        duration: 20,
        deliverable: "Saber reconocer engulfing candles en un gráfico real y entender su contexto."
      },
      {
        icon: "📝",
        title: "Dibuja las velas a mano",
        task: "Con papel y lápiz, dibuja: (1) una vela alcista con sombras largas, (2) una vela bajista con cuerpo grande y sombras cortas, (3) un doji, (4) un martillo. Etiqueta en cada una: open, close, high, low, cuerpo, sombra.",
        tool: "Papel",
        duration: 10,
        deliverable: "Internalizar los 4 precios de una vela al dibujarlos manualmente."
      }
    ],
  resources: [



      { title: "Patrones de Velas Japonesas — Pin bar y Doji | Winpips", channel: "Winpips", url: "https://www.youtube.com/watch?v=J9eyYZfo8vg", desc: "Cubre doji y pin bar en un solo vídeo en español — dos de los tres patrones clave." },
      { title: "What is a Hammer Candlestick — Rayner Teo", channel: "TradingwithRayner", url: "https://www.youtube.com/watch?v=zaCtPuQMEjs", desc: "Rayner Teo explica el hammer/pin bar: qué significa, cómo identificarlo y cómo operarlo." },
      { title: "What is a Bullish Engulfing Pattern — Rayner Teo", channel: "TradingwithRayner", url: "https://www.youtube.com/watch?v=k98oyKtGUns", desc: "Explica el patrón engulfing alcista paso a paso — la señal de entrada principal." },
    ]



  }



},







// ═══════════════════════════════════════════════════════════════════════════



// FASE 1 — LEER EL MERCADO (Lecciones 6-9)



// ═══════════════════════════════════════════════════════════════════════════







{



  id: 6,



  phase: 1,



  title: 'Soporte y Resistencia — la memoria del mercado',



  subtitle: 'Por qué el precio "recuerda" ciertos niveles y cómo usarlos',



  duration: 14,



  eduChart: 'drawSupportResistance',



  eduChartHeight: 280,



  content: `



    <p>El mercado tiene memoria. Los traders son humanos, y los humanos recordamos los niveles donde el precio hizo algo notable. Esa memoria colectiva crea los soportes y resistencias.</p>







    <div class="concept-box"><strong>Soporte</strong>: nivel de precio donde el precio ha rebotado hacia ARRIBA múltiples veces. En ese nivel hay compradores esperando. Cuantos más rebotes, más "fuerte" es el soporte.</div>







    <div class="concept-box"><strong>Resistencia</strong>: nivel de precio donde el precio ha rebotado hacia ABAJO múltiples veces. En ese nivel hay vendedores esperando. Igual que el soporte, más rebotes = más fuerte.</div>







    <h3>¿Por qué funcionan?</h3>



    <p>Imagina que el precio subió a 1.0900 dos veces y las dos veces bajó desde ahí. La tercera vez que se acerque a 1.0900, decenas de miles de traders van a pensar: "esto es resistencia, vendo aquí". Esa expectativa compartida se convierte en realidad porque todos actúan igual.</p>







    <h3>El fenómeno de la inversión de roles</h3>



    <p>Cuando el precio <strong>rompe</strong> un nivel con fuerza y convicción, ese nivel <strong>cambia de rol</strong>:</p>



    <ul>



      <li>Una resistencia rota → se convierte en <strong>soporte</strong></li>



      <li>Un soporte roto → se convierte en <strong>resistencia</strong></li>



    </ul>







    <div class="concept-box"><strong>Rotura (Breakout)</strong>: cuando el precio supera un nivel de soporte o resistencia con fuerza. Si el precio rompe la resistencia de 1.0900 y sigue subiendo, ese 1.0900 ahora actuará como soporte en la siguiente caída.</div>







    <p>Este fenómeno de inversión de roles es uno de los más confiables en el análisis técnico. El antiguo enemigo se convierte en aliado.</p>







    <h3>S/R clásico vs. Zonas de Oferta/Demanda</h3>



    <p>Aquí está la diferencia clave para tu estrategia:</p>







    <table>



      <thead>



        <tr><th></th><th>Soporte/Resistencia Clásico</th><th>Zonas de Oferta/Demanda (tu estrategia)</th></tr>



      </thead>



      <tbody>



        <tr>



          <td><strong>¿Quién lo usa?</strong></td>



          <td>Todo el mundo — lo ven todos</td>



          <td>Traders con metodología institucional (ICT, Smart Money)</td>



        </tr>



        <tr>



          <td><strong>Precisión</strong></td>



          <td>Es una línea genérica que muchos marcan igual</td>



          <td>Zona específica con origen en actividad institucional real</td>



        </tr>



        <tr>



          <td><strong>Probabilidad</strong></td>



          <td>Media — puede fallar porque "todo el mundo lo ve" y el Smart Money puede barrarlo</td>



          <td>Alta — tiene fundamento en órdenes reales aún sin ejecutar</td>



        </tr>



        <tr>



          <td><strong>En tu estrategia</strong></td>



          <td>Referencia de contexto general</td>



          <td>Tu herramienta principal de entrada</td>



        </tr>



      </tbody>



    </table>







    <div class="tip-box">💡 Conocer el S/R clásico te ayuda a leer el gráfico general y entender lo que "todo el mundo está viendo". Pero tu ventaja competitiva son las zonas de O/D — más precisas y con más probabilidad de respeto.</div>







    <div class="warning-box">⚠️ En trading, cuando todos ven lo mismo, los grandes jugadores saben exactamente dónde están los stops. Por eso los soportes y resistencias clásicos a veces se "perforan" levemente antes de rebotar — están barriendo los stops de los traders que pusieron sus órdenes justo en el nivel obvio.</div>



    <h3>¿Cómo saber si un nivel es fuerte o débil?</h3>
    <p>No todos los soportes y resistencias son iguales. Estos criterios ordenados de más a menos importante determinan la fuerza de un nivel:</p>
    <table>
      <thead><tr><th>Criterio</th><th>Señal fuerte</th><th>Señal débil</th></tr></thead>
      <tbody>
        <tr><td><strong>Número de rebotes</strong></td><td>3 o más rebotes confirmados</td><td>1-2 rebotes — puede ser coincidencia</td></tr>
        <tr><td><strong>Timeframe de origen</strong></td><td>Nivel visible en D1 o H4</td><td>Solo visible en M15 o H1</td></tr>
        <tr><td><strong>Tiempo entre rebotes</strong></td><td>Semanas o meses entre toques</td><td>Toques muy seguidos (horas)</td></tr>
        <tr><td><strong>Profundidad de las sombras</strong></td><td>Wicks largos en los rebotes (rechazo fuerte)</td><td>Cuerpos tocando el nivel (sin rechazo claro)</td></tr>
        <tr><td><strong>Visitas recientes</strong></td><td>No visitado recientemente (nivel fresco)</td><td>Visitado muchas veces (nivel gastado)</td></tr>
      </tbody>
    </table>
    <div class="tip-box">💡 Un nivel que aparece en D1, tiene 3 rebotes con wicks largos y no ha sido visitado en semanas vale más que 10 niveles H1 con un solo toque. Trabaja siempre de mayor a menor timeframe para encontrar los niveles que realmente importan.</div>
  `,



  keyTerms: [



    { term: 'Soporte', def: 'Nivel de precio donde el precio ha rebotado hacia arriba múltiples veces. Hay compradores concentrados en esa zona.' },



    { term: 'Resistencia', def: 'Nivel donde el precio ha rebotado hacia abajo múltiples veces. Hay vendedores concentrados en esa zona.' },



    { term: 'Rotura (Breakout)', def: 'Cuando el precio supera un nivel de S/R con fuerza. Después de la rotura, el nivel puede invertir su rol (resistencia → soporte o viceversa).' }



  ],



  quiz: {



    question: '¿Cuál es la diferencia principal entre soporte/resistencia clásico y las zonas de Oferta/Demanda de tu estrategia?',



    options: [



      'No hay diferencia — son exactamente lo mismo con distinto nombre',



      'El S/R clásico lo ven todos y es genérico; las zonas de O/D tienen origen en actividad institucional específica y son más precisas',



      'El S/R clásico es mejor porque tiene más probabilidad de funcionar'



    ],



    correct: 1,



    explanation: 'El S/R clásico es una referencia de contexto que todo el mundo ve. Las zonas de O/D tienen fundamento institucional específico — nacen de velas de impulso con origen claro. Son más precisas y tienen mayor probabilidad de respeto porque representan órdenes reales sin ejecutar.',



    realChart: {
      img: 'sr_eurusd.png',
      symbol: 'EUR/USD',
      timeframe: 'H4',
      label: 'Soporte y Resistencia reales — 2024',
      caption: '<strong>Línea roja = Resistencia:</strong> el precio rebotó hacia abajo varias veces. <strong>Línea verde = Soporte:</strong> el precio rebotó hacia arriba. Estos son niveles donde hay acumulación de órdenes institucionales.'
    },

    homework: [
      {
        icon: "📊",
        title: "Marca soporte y resistencia en EUR/USD",
        task: "Abre EUR/USD en H4. Busca al menos 2 niveles de soporte y 2 de resistencia en los últimos 3 meses. Márcalos con líneas horizontales. ¿Alguno se ha tocado más de 3 veces? Ese es el nivel más importante.",
        tool: "TradingView",
        duration: 20,
        deliverable: "Tener el EUR/USD en H4 con los niveles de S/R principales marcados y guardados."
      }
    ],
  resources: [



      { title: "Curso Gratis De Trading Con Soportes Y Resistencias", channel: "canal en español", url: "https://www.youtube.com/watch?v=0biqzA0VQNs", desc: "Curso completo y gratuito sobre S/R en español — identificación, rotura y retesteo." },
      { title: "Master Support & Resistance Levels — Rayner Teo", channel: "TradingwithRayner", url: "https://www.youtube.com/watch?v=5iftn9nI8KY", desc: "Cómo dibujar niveles de S/R con precisión y distinguir soportes fuertes de débiles." },
    ]



  }



},







{



  id: 7,



  phase: 1,



  title: 'Estructura de mercado — el mapa del precio',



  subtitle: 'HH, HL, LH, LL y cómo saber hacia dónde va el mercado',



  duration: 16,



  eduChart: 'drawMarketStructure',



  eduChartHeight: 300,



  content: `



    <p>El precio no se mueve en línea recta. Avanza en impulsos y retrocesos, creando máximos y mínimos sucesivos. La secuencia de esos máximos y mínimos es la <strong>estructura de mercado</strong> — el mapa que te dice hacia dónde va el precio.</p>







    <h3>Las 4 piezas del mapa</h3>



    <table>



      <thead>



        <tr><th>Sigla</th><th>Inglés</th><th>Significado</th></tr>



      </thead>



      <tbody>



        <tr><td><strong>HH</strong></td><td>Higher High</td><td>Máximo más alto que el anterior</td></tr>



        <tr><td><strong>HL</strong></td><td>Higher Low</td><td>Mínimo más alto que el anterior</td></tr>



        <tr><td><strong>LH</strong></td><td>Lower High</td><td>Máximo más bajo que el anterior</td></tr>



        <tr><td><strong>LL</strong></td><td>Lower Low</td><td>Mínimo más bajo que el anterior</td></tr>



      </tbody>



    </table>







    <ul>



      <li><strong>HH + HL</strong> = tendencia alcista (precio subiendo)</li>



      <li><strong>LH + LL</strong> = tendencia bajista (precio bajando)</li>



    </ul>







    <div class="tip-box">💡 Ya conoces esto del tutorial del simulador. Aquí profundizamos con dos conceptos nuevos que completan el cuadro.</div>







    <h3>Break of Structure (BOS) — la tendencia continúa</h3>



    <p>Un <strong>BOS</strong> ocurre cuando el precio rompe el último HH (en tendencia alcista) o el último LL (en tendencia bajista).</p>







    <div class="concept-box"><strong>Break of Structure (BOS)</strong>: cuando el precio supera el HH anterior en tendencia alcista, o perfora el LL anterior en tendencia bajista. Es una señal de que la tendencia continúa con fuerza. Confirma que el movimiento es real y no una trampa.</div>







    <p>Ejemplo: el precio hace HH en 1.0920. Luego retrocede y hace HL en 1.0870. Luego sube y supera 1.0920 → esto es un BOS. Confirma que la tendencia alcista sigue vigente.</p>







    <h3>Change of Character (CHoCH) — la tendencia cambia</h3>



    <p>Un <strong>CHoCH</strong> es la señal de alarma. Indica que la tendencia podría estar cambiando de dirección.</p>







    <div class="concept-box"><strong>Change of Character (CHoCH)</strong>: cuando el precio, en tendencia alcista, rompe hacia abajo el último HL con fuerza. O en tendencia bajista, cuando rompe hacia arriba el último LH. Es una alerta temprana de posible cambio de tendencia.</div>







    <p>Ejemplo: estás en tendencia alcista (HH+HL). El último HL estaba en 1.0870. De repente, el precio cae con fuerza y perfora 1.0870. Eso es un CHoCH. Señal para dejar de buscar LONGs y empezar a vigilar si se establece una nueva tendencia bajista.</p>







    <div class="warning-box">⚠️ Un solo CHoCH no confirma el cambio de tendencia. Necesitas ver la secuencia LH+LL establecerse para confirmar la tendencia bajista. El CHoCH es una alerta, no una orden de vender.</div>







    <h3>Mercado en rango</h3>



    <p>Cuando el precio oscila entre dos niveles sin romper ni para arriba ni para abajo, la estructura de HH+HL o LH+LL no se establece claramente. Esto se llama <strong>mercado en rango</strong> (o lateral).</p>







    <div class="concept-box"><strong>Mercado en rango (lateral)</strong>: el precio oscila entre soporte y resistencia sin tendencia definida. Los HH y LL no son consistentes. La estrategia que aprenderás NO opera en rango — espera la ruptura con confirmación.</div>







    <div class="tip-box">💡 Antes de cada sesión de trading, la primera pregunta es: "¿está el H4 en tendencia o en rango?" Si está en rango claro → no hay setup hoy. Espera a que la estructura defina la dirección.</div>







    <p>Cómo saber si estás en rango: los máximos y mínimos no siguen una secuencia clara de HH+HL o LH+LL. El precio "toca techo" y "toca suelo" repetidamente sin romper ninguno de los dos.</p>



  `,



  keyTerms: [



    { term: 'Break of Structure (BOS)', def: 'Cuando el precio supera el HH anterior (alcista) o perfora el LL anterior (bajista). Confirma continuación de tendencia.' },



    { term: 'Change of Character (CHoCH)', def: 'Cuando el precio rompe el HL anterior en tendencia alcista o el LH anterior en tendencia bajista. Señal de posible cambio de tendencia.' },



    { term: 'Mercado en rango', def: 'El precio oscila entre dos niveles sin tendencia definida. No hay secuencia clara de HH+HL o LH+LL. La estrategia no opera en este contexto.' }



  ],



  quiz: {



    question: 'El precio está en tendencia alcista (HH+HL). De repente cae con fuerza y perfora el último HL. ¿Qué es eso?',



    options: [



      'Un Break of Structure (BOS) — confirma que la tendencia alcista continúa',



      'Un Change of Character (CHoCH) — señal de alerta de posible cambio de tendencia a bajista',



      'Nada relevante — los HLs se perforan constantemente en tendencias sanas'



    ],



    correct: 1,



    explanation: 'Romper el HL anterior en una tendencia alcista es un CHoCH (Change of Character). Es una señal de alarma que indica que la dinámica alcista se está deteriorando. No confirma tendencia bajista todavía, pero debes dejar de buscar LONGs y esperar a ver si se establece LH+LL.',



    realChart: {
      img: 'estructura_alcista.png',
      symbol: 'EUR/USD',
      timeframe: 'H4',
      label: 'Tendencia alcista real — EUR/USD H4 (Ene–Jul 2023)',
      caption: '<strong>HH (Higher Highs):</strong> cada máximo más alto que el anterior. <strong>HL (Higher Lows):</strong> cada mínimo también más alto. Esta escalera ascendente ES la tendencia alcista. Solo buscas compras mientras se mantenga.'
    },
    realChart2: {
      img: 'estructura_choch.png',
      symbol: 'EUR/USD',
      timeframe: 'H4',
      label: 'CHoCH real — Cambio de tendencia (Jul–Dic 2023)',
      caption: '<strong>Línea amarilla = nivel CHoCH:</strong> el precio rompió por debajo del último HL de la tendencia alcista. Ese es el momento exacto en que el sesgo cambia de ALCISTA a BAJISTA. A partir de ahí, solo buscas ventas.'
    },

    homework: [
      {
        icon: "📊",
        title: "Determina la estructura actual de EUR/USD",
        task: "Abre EUR/USD en H4. Mira los últimos 30 días. ¿Hace HH y HL (alcista) o LH y LL (bajista)? ¿O está en rango? Marca con flechas los últimos 4 pivots. Escribe: 'Hoy el mercado está EN TENDENCIA ALCISTA / BAJISTA / RANGO porque...'",
        tool: "TradingView",
        duration: 20,
        deliverable: "Saber determinar el sesgo del mercado H4 en cualquier momento."
      },
      {
        icon: "📝",
        title: "Identifica un BOS y un ChoCH",
        task: "En el historial de EUR/USD H4, busca un momento donde el mercado cambió de tendencia (un ChoCH). ¿Cuándo fue? ¿Qué señal lo confirmó? Luego busca un BOS (ruptura de estructura que confirma la tendencia). Márcalos en el gráfico.",
        tool: "TradingView",
        duration: 20,
        deliverable: "Reconocer visualmente un BOS y un ChoCH en gráficos reales."
      }
    ],
  resources: [



      { title: "ESTRUCTURA DE MERCADO — SMC Trading Institucional — CLASE 1", channel: "canal SMC en español", url: "https://www.youtube.com/watch?v=DpVjXQ862u4", desc: "Explica HH, HL, LH, LL y BOS con terminología SMC/ICT — contenido exacto de L7." },
      { title: "Bootcamp Día 1 — ESTRUCTURA AVANZADA Smart Money", channel: "canal SMC en español", url: "https://www.youtube.com/watch?v=mWAhUvhTCFE", desc: "Sesión intensiva sobre estructura avanzada incluyendo BOS y sus implicaciones para el bias." },
    ]



  }



},







{



  id: 8,



  phase: 1,



  title: 'Volumen y liquidez — dónde está el dinero real',



  subtitle: 'Por qué el precio va a buscar ciertos niveles antes de moverse con fuerza',



  duration: 14,



  eduChart: 'drawLiquidityPools',



  eduChartHeight: 420,



  content: `



    <p>Para entender cómo se mueve realmente el precio, necesitas entender dónde está la liquidez. Es uno de los conceptos más poderosos — y menos conocidos por los traders principiantes.</p>







    <h3>El volumen en Forex</h3>



    <p>En Forex no existe un volumen centralizado como en la Bolsa de Madrid (donde puedes ver exactamente cuántas acciones se compraron y vendieron). Como el mercado es OTC, no hay un único "registro" de transacciones.</p>



    <p>Lo que usamos en los gráficos es el <strong>tick volume</strong>: cuántas veces cambió el precio en ese periodo. No es perfecto, pero se correlaciona bien con la actividad real del mercado.</p>







    <div class="concept-box"><strong>Tick volume</strong>: el número de veces que el precio cambió durante el periodo de una vela. En ausencia de volumen real, es el mejor proxy disponible en Forex para medir la actividad del mercado.</div>







    <h3>¿Qué es la liquidez?</h3>



    <p>La liquidez es la capacidad de ejecutar órdenes grandes sin que el precio se mueva demasiado. Para que un banco pueda comprar 500 millones de euros, necesita que haya suficientes vendedores en ese nivel. Si no los hay, el precio se dispara.</p>







    <div class="concept-box"><strong>Liquidez</strong>: la disponibilidad de órdenes contrarias en el mercado. Alta liquidez = puedes comprar o vender grandes cantidades sin mover mucho el precio. Los grandes participantes necesitan liquidez para ejecutar sus posiciones.</div>







    <h3>¿Dónde se acumula la liquidez?</h3>



    <p>Los stops de los traders retail se concentran en lugares predecibles. Y donde hay stops, hay liquidez — porque cuando se activa un stop de venta, automáticamente se ejecuta una orden de compra (o viceversa).</p>







    <ul>



      <li><strong>Máximos y mínimos previos</strong>: los traders ponen sus stops justo encima de un máximo o justo debajo de un mínimo. Es lo "lógico".</li>



      <li><strong>Números redondos</strong>: 1.0900, 1.1000, 1.0800. Concentran una enorme cantidad de stops y órdenes límite porque es donde el cerebro humano marca niveles.</li>



      <li><strong>Equal Highs (EQH) y Equal Lows (EQL)</strong>: cuando el precio toca el mismo nivel varias veces sin romperlo, se acumula una cantidad enorme de stops justo en ese nivel.</li>



    </ul>







    <div class="concept-box"><strong>Pool de liquidez</strong>: concentración de órdenes (especialmente stops) en un nivel de precio específico. Los grandes participantes van a buscar estos niveles para tener contraparte para sus propias órdenes grandes.</div>







    <h3>Stop Hunting — no es manipulación, es el mercado</h3>



    <p>Los <strong>stop hunts</strong> ocurren cuando el precio sube brevemente por encima de un máximo (o baja por debajo de un mínimo) para activar los stops de los traders que compraron ahí, recoge esa liquidez, y luego invierte la dirección.</p>







    <div class="concept-box"><strong>Stop Hunting</strong>: movimiento diseñado por los grandes participantes para activar los stops concentrados en niveles conocidos. El precio "barre" el nivel, recoge las órdenes de liquidez, y luego mueve en la dirección real.</div>







    <div class="tip-box">💡 Esto no es manipulación ilegal — es simplemente cómo funciona un mercado cuando hay participantes de distintos tamaños. Tu ventaja: saber que los sweeps van a ocurrir te permite prepararte para entrar después del sweep, en la dirección real del movimiento, en lugar de ser uno de los que pierden el stop.</div>







    <div class="warning-box">⚠️ El error del trader principiante: poner el stop en el nivel "obvio" (justo debajo del mínimo, justo en el número redondo). El precio lo barre, activa el stop, y luego sube como loco. La solución: entender los pools de liquidez y dar algo de margen extra al stop.</div>



  `,



  keyTerms: [



    { term: 'Tick volume', def: 'El número de cambios de precio en un periodo. Usado como proxy del volumen real en Forex (que es OTC y no tiene datos centralizados).' },



    { term: 'Liquidez', def: 'La disponibilidad de órdenes contrarias para ejecutar posiciones grandes sin mover el precio excesivamente.' },



    { term: 'Stop hunting', def: 'Movimiento donde el precio alcanza brevemente un nivel de concentración de stops, los activa para recoger liquidez, y luego invierte la dirección.' },



    { term: 'Pool de liquidez', def: 'Concentración de órdenes (stops principalmente) en un nivel específico. Máximos/mínimos previos, números redondos y Equal Highs/Lows son los más comunes.' }



  ],



  quiz: {



    question: '¿Por qué los grandes participantes (bancos, institucionales) hacen stop hunts?',



    options: [



      'Para arruinar a los traders pequeños por diversión',



      'Necesitan liquidez (órdenes contrarias) para ejecutar sus propias posiciones grandes, y los stops de los retail están en niveles predecibles',



      'Es una estrategia ilegal que los reguladores permiten'



    ],



    correct: 1,



    explanation: 'Para que un banco compre 500 millones de euros, necesita 500 millones de euros en órdenes de venta. Los stops de los traders retail concentrados en máximos/mínimos son esa liquidez. El sweep activa esas órdenes y permite al institucional ejecutar su posición grande a un precio específico.',



    realChart: {
      img: 'liquidez_sweep.png',
      symbol: 'EUR/USD',
      timeframe: 'H4',
      label: 'Equal Lows y Sweep real — EUR/USD H4',
      caption: '<strong>Línea amarilla = Equal Lows (EQL):</strong> mínimos al mismo precio, miles de stops acumulados. <strong>Rectángulo amarillo = Sweep:</strong> el wick largo perforó los stops y el precio revirtió inmediatamente. Eso es lo que buscas.'
    },

    homework: [
      {
        icon: "📊",
        title: "Busca 3 pools de liquidez en EUR/USD",
        task: "Abre EUR/USD en H4. Busca 3 zonas donde hay Equal Lows o Equal Highs visibles (2+ mínimos o máximos al mismo nivel). Márcalos con líneas amarillas discontinuas. ¿Alguno fue barrido (sweep) posteriormente?",
        tool: "TradingView",
        duration: 25,
        deliverable: "Identificar correctamente 3 pools de liquidez y marcarlos en el gráfico real."
      }
    ],
  resources: [






      { title: "Cómo identificar ZONAS DE LIQUIDEZ en TRADING | Institucional & Smart Money", channel: "SMC Trading en español", url: "https://www.youtube.com/watch?v=IbNH9JVq7k0", desc: "Paso a paso: cómo identificar pools de liquidez, equal highs/lows y dónde los institucionales van a buscar los stops." },
      { title: "Liquidity Sweep — Explicación Completa", channel: "ICT Español", url: "https://www.youtube.com/watch?v=pwdAJjFrY30", desc: "Explica qué es un sweep de liquidez, por qué ocurre y cómo anticiparlo antes de que el precio revierta con fuerza." },
    ]



  }



},







{



  id: 9,



  phase: 1,



  title: 'Las velas de señal — cómo confirmar la entrada',



  subtitle: 'Las 5 velas de confirmación y cuándo (y cuándo no) hacerles caso',



  duration: 15,



  eduChart: 'drawCandleGallery',



  eduChartHeight: 280,



  content: `



    <p>En la Lección 5 aprendiste a <em>reconocer</em> las velas de señal. En esta lección aprenderás a <em>aplicarlas</em>: cómo contextualizarlas dentro de la estrategia, qué hace que una vela de señal sea válida vs inválida, y los errores más comunes al usarlas.</p>
    <h3>Del reconocimiento a la aplicación</h3>
    <p>Una vela de señal por sí sola no es una señal de entrada. El 90% de los engulfings y pin bars que verás en el gráfico son irrelevantes. Solo el 10% ocurre en el contexto correcto para ser operables. ¿Qué diferencia uno de otro?</p>
    <ul>
      <li><strong>Contexto de estructura (H4):</strong> ¿el sesgo está a tu favor? Un engulfing alcista en tendencia bajista no vale nada.</li>
      <li><strong>Zona de O/D:</strong> ¿la vela aparece EN la zona o fuera de ella? Solo dentro de la zona tiene valor.</li>
      <li><strong>Timeframe correcto:</strong> en esta estrategia, las velas de señal se buscan en M15. Un engulfing en H4 es estructura, no señal de entrada.</li>
      <li><strong>Tamaño de la vela:</strong> un engulfing pequeño (5-10 pips de cuerpo) en una zona donde normalmente el precio se mueve 50 pips no tiene la misma fuerza que uno de 30 pips.</li>
    </ul>
    <p>Las velas de señal son la <strong>confirmación</strong> de que los institucionales están actuando en tu zona. Sin los 3 pilares de la estrategia ya presentes, estas velas no significan absolutamente nada — son señales falsas que te harán perder dinero.</p>







    <div class="warning-box">⚠️ Regla de oro: una vela de señal solo tiene valor cuando está dentro de una zona de O/D, después del sweep de liquidez, y en la dirección del sesgo H4. Los tres pilares primero. La vela de señal es la confirmación final, no el punto de partida.</div>







    <h3>1. Engulfing alcista — tu señal principal LONG</h3>



    <div class="concept-box"><strong>Engulfing alcista</strong>: una vela roja seguida de una vela verde cuyo cuerpo supera completamente al cuerpo de la vela anterior. Los compradores tomaron el control de golpe y sobrepasaron toda la presión vendedora del periodo anterior. En M15, dentro de una zona de demanda, después del sweep de EQL → señal de entrada LONG.</div>







    <h3>2. Engulfing bajista — tu señal principal SHORT</h3>



    <div class="concept-box"><strong>Engulfing bajista</strong>: una vela verde seguida de una vela roja cuyo cuerpo supera al de la vela anterior. Los vendedores tomaron el control. En M15, dentro de una zona de oferta, después del sweep de EQH → señal de entrada SHORT.</div>







    <h3>3. Pin Bar (Martillo) — señal alcista de rechazo</h3>



    <div class="concept-box"><strong>Pin Bar (Martillo)</strong>: vela con cuerpo pequeño en la parte superior y sombra larga hacia abajo. El precio intentó caer con fuerza pero fue completamente rechazado — los compradores devolvieron el precio al punto de partida. Señal alcista fuerte cuando aparece en zona de demanda.</div>







    <h3>4. Shooting Star — señal bajista de rechazo</h3>



    <div class="concept-box"><strong>Shooting Star (Estrella fugaz)</strong>: cuerpo pequeño en la parte inferior con sombra larga hacia arriba. El precio intentó subir pero fue rechazado con fuerza. Señal bajista cuando aparece en zona de oferta.</div>
    <div class="tip-box">💡 <strong>Nota terminológica:</strong> En la Lección 5 aprendiste que el Pin Bar bajista (sombra larga hacia arriba en zona de oferta) se llama <em>Shooting Star</em> o <em>Estrella Fugaz</em>. Es el mismo concepto — el nombre varía según el contexto donde aparece. En esta estrategia usaremos "Pin Bar bajista" o "Shooting Star" indistintamente.</div>







    <h3>5. Doji — espera más</h3>



    <div class="concept-box"><strong>Doji</strong>: Open y Close son casi idénticos → el cuerpo es prácticamente inexistente. Significa que compradores y vendedores están completamente equilibrados. En tu zona de O/D: no entres todavía. Espera la siguiente vela para ver quién gana la batalla. Si la siguiente es verde → compra. Si es roja → vende.</div>







    <h3>La regla de oro de las señales</h3>



    <p>Para que una señal sea válida en tu estrategia, deben cumplirse <strong>todos</strong> estos criterios:</p>



    <table>



      <thead>



        <tr><th>Criterio</th><th>Cómo verificarlo</th></tr>



      </thead>



      <tbody>



        <tr><td>✅ Dirección H4</td><td>El H4 tiene estructura HH+HL (alcista) o LH+LL (bajista)</td></tr>



        <tr><td>✅ Sweep de liquidez</td><td>El precio barrió EQH o EQL antes de la señal</td></tr>



        <tr><td>✅ Zona de O/D</td><td>La señal aparece dentro de una zona de demanda (LONG) o oferta (SHORT)</td></tr>



        <tr><td>✅ Timeframe M15</td><td>La vela de señal está en M15, no en M1 ni en H1</td></tr>



        <tr><td>✅ Coherencia de dirección</td><td>La señal apunta en la misma dirección que el sesgo H4</td></tr>



      </tbody>



    </table>







    <div class="tip-box">💡 Si todos los criterios se cumplen, tienes un setup de alta probabilidad. Si falta alguno, no entras. La paciencia para esperar el setup completo es lo que separa a los traders rentables de los que pierden dinero.</div>



  `,



  keyTerms: [



    { term: 'Engulfing', def: 'Vela envolvente. Su cuerpo supera completamente al cuerpo de la vela anterior. Alcista: verde después de roja. Bajista: roja después de verde.' },



    { term: 'Pin bar', def: 'Vela con cuerpo pequeño y sombra larga. Señal de rechazo de precio. Sombra hacia abajo = alcista (martillo). Sombra hacia arriba = bajista (shooting star).' },



    { term: 'Martillo', def: 'Pin bar alcista. Cuerpo pequeño en la parte alta, sombra larga hacia abajo. El precio cayó pero fue rechazado con fuerza. Señal de compra en zona de demanda.' },



    { term: 'Shooting Star', def: 'Pin bar bajista. Cuerpo pequeño en la parte baja, sombra larga hacia arriba. El precio subió pero fue rechazado. Señal de venta en zona de oferta.' },



    { term: 'Doji', def: 'Open ≈ Close. Indecisión total. En zona de O/D, esperar la siguiente vela para confirmar la dirección antes de entrar.' },



    { term: 'Señal de entrada', def: 'La vela de confirmación en M15 que indica que los institucionales están actuando en la zona. Solo válida con los 3 pilares de la estrategia presentes.' }



  ],



  quiz: {



    question: 'Aparece un engulfing alcista perfecto en M15, pero el sesgo H4 es bajista. ¿Qué haces?',



    options: [



      'Entras LONG — el engulfing es una señal muy fuerte y no se puede ignorar',



      'No entras — la señal va contra el sesgo H4. Sin los 3 pilares completos, la señal no es válida',



      'Entras con la mitad del tamaño habitual para reducir el riesgo'



    ],



    correct: 1,



    explanation: 'Un engulfing alcista en M15 cuando el H4 es bajista es una señal en contra de la tendencia principal. Las probabilidades están en tu contra. Tu estrategia requiere que los 3 pilares coincidan. Sin sesgo H4 favorable, no hay setup — sin importar cuán perfecta sea la vela de señal.',



    realChart: {
      img: 'velas_engulfing.png',
      symbol: 'EUR/USD',
      timeframe: 'H1',
      label: 'Señal de entrada real — Engulfing en zona clave',
      caption: '<strong>Contexto es todo:</strong> Un engulfing aislado no vale nada. Este vale porque ocurre en una zona de soporte importante, después de un sweep. Los 3 elementos juntos (dirección + liquidez + zona + señal) dan la alta probabilidad.'
    },

    homework: [
      {
        icon: "🕯️",
        title: "Encuentra señales de entrada en el historial",
        task: "En EUR/USD H1, busca en el último mes: 1 engulfing alcista en una zona importante, 1 pin bar bajista en una resistencia. Para cada uno: ¿cuál fue el resultado? ¿Subió o bajó el precio después?",
        tool: "TradingView",
        duration: 25,
        deliverable: "Ver con tus propios ojos cómo funcionan (y cuando no funcionan) las velas de señal en el mercado real."
      }
    ],
  resources: [



      { title: "Trading en Zonas de Oferta y Demanda Institucionales en Forex", channel: "canal en español", url: "https://www.youtube.com/watch?v=xnYiTyB5SXk", desc: "Cómo identificar zonas institucionales de oferta y demanda en el gráfico." },
      { title: "Order Blocks Trading Explained — ICT Concept Simplified", channel: "canal SMC en inglés", url: "https://www.youtube.com/watch?v=qec_z0PVxvA", desc: "Relaciona order blocks ICT con zonas O/D — perspectiva institucional complementaria." },
    ]



  }



},







// ═══════════════════════════════════════════════════════════════════════════



// FASE 2 — LOS 3 PILARES (Lecciones 10-13)



// ═══════════════════════════════════════════════════════════════════════════







{



  id: 10,



  phase: 2,



  title: 'Pilar 1 — Dirección del mercado (Paso a paso)',



  subtitle: 'Tutorial interactivo: cómo identificar el sesgo H4',



  duration: 20,



  eduChart: null,



  eduChartHeight: 0,



  content: `

    <p>Antes de abrir cualquier operación, necesitas saber una sola cosa: <strong>¿hacia dónde va el mercado en H4?</strong> Esa respuesta es tu sesgo. Todo lo demás — la liquidez, las zonas, la vela de entrada — solo tiene valor si apunta en la misma dirección que el sesgo.</p>

    <div class="tip-box">💡 El sesgo no te dice cuándo entrar. Te dice en qué <em>dirección</em> entrar. Si el sesgo es alcista, solo buscas compras. Si es bajista, solo buscas ventas. Así de simple — y así de poderoso.</div>

    <h3>1. ¿Qué es el sesgo (bias)?</h3>

    <div class="concept-box"><strong>Sesgo (Bias)</strong>: la dirección preferencial del mercado según la estructura de H4. Es el filtro más importante de tu estrategia. Si el sesgo es alcista, descartas cualquier señal de venta aunque parezca perfecta. Si el sesgo es bajista, descartás cualquier señal de compra. El sesgo te salva de operar contra la corriente.</div>

    <p>Imagina que el mercado es un río. El sesgo es la corriente. Puedes intentar nadar en contra, pero gastarás mucha energía y probablemente perderás. Los traders rentables siempre nadan a favor de la corriente.</p>

    <h3>2. Estructura de mercado alcista: Higher Highs (HH) + Higher Lows (HL)</h3>

    <p>Para entender la dirección del mercado, necesitas primero identificar los <strong>swings</strong> — los puntos de inflexión del precio.</p>

    <div class="concept-box"><strong>Swing High</strong>: un máximo local. Una vela (o grupo de velas) que forma un pico, con velas de precio más bajo a ambos lados. Es como la cima de una colina en el gráfico.<br><br><strong>Swing Low</strong>: un mínimo local. Una vela (o grupo de velas) que forma un valle, con velas de precio más alto a ambos lados. Es como el fondo de un valle en el gráfico.</div>

    <p>Una vez que puedes ver los swings, la tendencia alcista es sencilla de reconocer:</p>

    <ul>
      <li><strong>Higher High (HH)</strong>: el último máximo de swing es más alto que el máximo anterior. El precio "sube la escalera" por arriba.</li>
      <li><strong>Higher Low (HL)</strong>: el último mínimo de swing es más alto que el mínimo anterior. El precio "sube la escalera" por abajo también.</li>
    </ul>

    <div class="concept-box">📈 <strong>Tendencia alcista</strong> = HH + HL de forma repetida. Cada rebote es más alto que el anterior, y cada caída se detiene a un nivel más alto que la caída anterior. La regla es simple: <em>en tendencia alcista, solo buscas compras.</em> Las ventas, aunque tentadoras, van contra la corriente.</div>

    <h3>3. Estructura bajista: Lower Highs (LH) + Lower Lows (LL)</h3>

    <p>La imagen exactamente opuesta define una tendencia bajista:</p>

    <ul>
      <li><strong>Lower High (LH)</strong>: el último máximo de swing es más bajo que el máximo anterior. El precio "baja la escalera" por arriba.</li>
      <li><strong>Lower Low (LL)</strong>: el último mínimo de swing es más bajo que el mínimo anterior. El precio "baja la escalera" por abajo.</li>
    </ul>

    <div class="concept-box">📉 <strong>Tendencia bajista</strong> = LH + LL de forma repetida. Cada rebote es más débil que el anterior, y cada caída llega a un nivel más bajo. La regla: <em>en tendencia bajista, solo buscas ventas.</em></div>

    <h3>4. Mercado en rango (ranging market)</h3>

    <p>No siempre el mercado tiene una dirección clara. A veces el precio oscila entre dos niveles horizontales sin hacer ni HH/HL ni LH/LL consistentes. Esto es un mercado en rango.</p>

    <div class="warning-box">⚠️ <strong>Regla del rango</strong>: si el mercado está en rango, no operas hasta que haya un Break of Structure claro que confirme la dirección. En rango, las probabilidades son 50/50 — no hay ventaja estadística para ningún lado. Esperar es la decisión correcta.</div>

    <p>Un rango se identifica cuando los máximos de swing se mantienen aproximadamente en el mismo nivel y los mínimos de swing también se mantienen en el mismo nivel — el precio rebota entre un "techo" y un "piso" sin romper ninguno de los dos con convicción.</p>

    <h3>5. Break of Structure (BOS) vs Change of Character (CHoCH)</h3>

    <p>Estos dos conceptos te dicen cuándo una tendencia se está confirmando o cambiando:</p>

    <div class="concept-box"><strong>Break of Structure (BOS)</strong>: el precio supera el último Swing High (en tendencia alcista) o rompe el último Swing Low (en tendencia bajista). Es una <em>confirmación</em> de que la tendencia continúa. Si estás en tendencia alcista y el precio hace un nuevo HH (BOS), tu sesgo alcista se reafirma.</div>

    <div class="concept-box"><strong>Change of Character (CHoCH)</strong>: el precio rompe la estructura en la dirección <em>opuesta</em> a la tendencia. Por ejemplo: estás en tendencia alcista (HH/HL) y de repente el precio rompe por debajo del último HL. Eso es un CHoCH — señal de que la tendencia podría estar cambiando. Con un CHoCH, debes reconsiderar tu sesgo antes de operar.</div>

    <table>
      <thead><tr><th>Evento</th><th>¿Qué significa?</th><th>¿Qué haces?</th></tr></thead>
      <tbody>
        <tr><td>BOS alcista (nuevo HH)</td><td>Tendencia alcista confirmada</td><td>Sesgo alcista reafirmado — sigues buscando compras</td></tr>
        <tr><td>BOS bajista (nuevo LL)</td><td>Tendencia bajista confirmada</td><td>Sesgo bajista reafirmado — sigues buscando ventas</td></tr>
        <tr><td>CHoCH (rompe HL en alcista)</td><td>Posible cambio a bajista</td><td>Alerta — espera confirmación antes de cambiar sesgo</td></tr>
        <tr><td>CHoCH (rompe LH en bajista)</td><td>Posible cambio a alcista</td><td>Alerta — espera confirmación antes de cambiar sesgo</td></tr>
      </tbody>
    </table>

    <h3>6. Cómo determinarlo en H4: el timeframe de referencia</h3>

    <p>Tu estrategia usa H4 como el timeframe de sesgo. La razón es práctica: H4 filtra el "ruido" de los timeframes cortos (M15, H1) y captura la dirección real en la que están operando los actores institucionales durante el día.</p>

    <p><strong>El proceso para determinar el sesgo H4 cada día:</strong></p>
    <ul>
      <li>Paso 1: Abre el gráfico EUR/USD en H4.</li>
      <li>Paso 2: Identifica los últimos 3-5 swings (máximos y mínimos locales).</li>
      <li>Paso 3: ¿Los máximos son cada vez más altos? ¿Los mínimos también son cada vez más altos? → Sesgo alcista.</li>
      <li>Paso 4: ¿Los máximos son cada vez más bajos? ¿Los mínimos también son cada vez más bajos? → Sesgo bajista.</li>
      <li>Paso 5: ¿No hay dirección clara? → Mercado en rango. No operas hasta el BOS.</li>
    </ul>

    <h3>7. Tabla resumen: señales alcistas vs bajistas</h3>

    <table>
      <thead><tr><th>Estructura alcista</th><th>Estructura bajista</th></tr></thead>
      <tbody>
        <tr><td>HH: cada máximo supera el anterior</td><td>LH: cada máximo es más bajo que el anterior</td></tr>
        <tr><td>HL: cada mínimo es más alto que el anterior</td><td>LL: cada mínimo es más bajo que el anterior</td></tr>
        <tr><td>BOS = nuevo HH por encima del anterior</td><td>BOS = nuevo LL por debajo del anterior</td></tr>
        <tr><td>Solo buscas entradas LONG</td><td>Solo buscas entradas SHORT</td></tr>
        <tr><td>CHoCH: rompe el último HL → alerta</td><td>CHoCH: rompe el último LH → alerta</td></tr>
      </tbody>
    </table>

    <div class="tip-box">💡 <strong>Hábito diario:</strong> antes de abrir el simulador o TradingView para operar, lo primero que haces es abrir EUR/USD H4 y determinar el sesgo. Escríbelo. "Hoy el sesgo es alcista" o "Hoy el sesgo es bajista". Ese sesgo filtra todo lo que haces durante el día.</div>

    <div class="lesson-tutorial-embed" data-tab="direction"><p class="lesson-intro">Completa el tutorial interactivo de abajo. Usa los botones Siguiente para avanzar por cada concepto y practica con los ejemplos reales.</p></div>`,



  keyTerms: [
    { term: 'Sesgo (Bias)', def: 'La dirección preferencial del mercado en H4. Si el sesgo es alcista, solo buscas compras. Si es bajista, solo buscas ventas. Es el filtro más importante de la estrategia.' },
    { term: 'Swing High', def: 'Máximo local — un pico rodeado de velas de precio más bajo a ambos lados. Es el punto donde el precio dejó de subir y empezó a bajar.' },
    { term: 'Swing Low', def: 'Mínimo local — un valle rodeado de velas de precio más alto a ambos lados. Es el punto donde el precio dejó de bajar y empezó a subir.' },
    { term: 'Higher High (HH)', def: 'Nuevo máximo de swing más alto que el máximo anterior. Señal alcista: el mercado sigue subiendo.' },
    { term: 'Higher Low (HL)', def: 'Nuevo mínimo de swing más alto que el mínimo anterior. Señal alcista: incluso las caídas se detienen a niveles más altos.' },
    { term: 'Lower High (LH)', def: 'Nuevo máximo de swing más bajo que el máximo anterior. Señal bajista: los rebotes son cada vez más débiles.' },
    { term: 'Lower Low (LL)', def: 'Nuevo mínimo de swing más bajo que el mínimo anterior. Señal bajista: el precio sigue cayendo a nuevos mínimos.' },
    { term: 'Break of Structure (BOS)', def: 'El precio supera el último swing high (en alcista) o rompe el último swing low (en bajista). Confirma que la tendencia continúa.' },
    { term: 'Change of Character (CHoCH)', def: 'El precio rompe la estructura en la dirección opuesta a la tendencia. Señal de posible cambio de tendencia — hay que reconsiderar el sesgo.' },
  ],



  quiz: {
    question: '¿Cuándo está el mercado en tendencia alcista según la estructura de mercado?',
    options: [
      'Cuando el precio sube varias velas seguidas sin retroceder',
      'Cuando cada máximo de swing es más alto que el anterior Y cada mínimo de swing también es más alto que el anterior (HH + HL)',
      'Cuando el precio está por encima de la media móvil de 200 periodos',
    ],
    correct: 1,
    explanation: 'La estructura alcista se define por HH (Higher Highs) + HL (Higher Lows): cada rebote supera al anterior y cada corrección se detiene a un nivel más alto. No basta con que el precio suba varias velas — necesitas ver esa escalera ascendente en los swings de H4.',
  },



    homework: [
      {
        icon: "🎮",
        title: "Completa el tutorial de Dirección",
        task: "Completa todos los pasos del tutorial interactivo de esta lección (botón Siguiente hasta el final). Luego abre TradingView, EUR/USD H4, y determina: ¿el mercado de hoy es alcista, bajista o en rango? Escríbelo.",
        tool: "Simulador",
        duration: 20,
        deliverable: "Poder determinar el sesgo H4 actual del EUR/USD con confianza."
      }
    ],
      resources: [






              { title: "TRADING DESDE CERO con SMC — ESTRATEGIA RENTABLE 2024", channel: "canal SMC en español", url: "https://www.youtube.com/watch?v=UZ0LzQ3caLY", desc: "Cubre el pilar de dirección del mercado dentro de una estrategia SMC completa." },
              { title: "EL MEJOR MODELO DE ENTRADA EN EL TRADING — SMC X ICT", channel: "canal SMC en español", url: "https://www.youtube.com/watch?v=NRzP1nr1Eyg", desc: "Cómo determinar el bias direccional antes de buscar entradas." },
            ]



},







{



  id: 11,



  phase: 2,



  title: 'Pilar 2 — Liquidez y Sweeps (Paso a paso)',



  subtitle: 'Tutorial interactivo: cómo identificar y aprovechar los sweeps de liquidez',



  duration: 20,



  eduChart: null,



  eduChartHeight: 0,



  content: `

    <p>El precio no se mueve al azar. Los mercados financieros son un juego entre dos tipos de participantes: los traders <strong>retail</strong> (tú y yo, los pequeños) y los <strong>institucionales</strong> (bancos, fondos de inversión, market makers con millones o miles de millones de dólares). Entender cómo los institucionales usan la liquidez es la diferencia entre ser cazado y ser el que caza.</p>

    <div class="tip-box">💡 Cuando entiendes la liquidez, dejas de preguntarte "¿por qué el precio fue exactamente hasta ese nivel?" y empiezas a anticiparlo antes de que ocurra.</div>

    <h3>1. ¿Qué es la liquidez en trading?</h3>

    <div class="concept-box"><strong>Liquidez</strong>: en trading, la liquidez son las órdenes pendientes en el mercado — especialmente los <em>stops</em> de los traders retail. Para que un comprador institucional pueda comprar 100 millones de euros, necesita que haya alguien dispuesto a venderle. Los stops de los traders que están en posiciones cortas son exactamente eso: órdenes de compra esperando ser activadas.</div>

    <p>Los institucionales no pueden ejecutar sus órdenes gigantes de golpe — moverían el precio demasiado en su contra. En cambio, <strong>mueven el precio hacia donde están los stops</strong> de los traders retail para usarlos como contraparte de sus propias operaciones. Cuando activan esos stops, los retail salen (pérdida para ellos) y los institucionales entran (con toda la liquidez que necesitaban).</p>

    <p>Este proceso es lo que la gente llama "stop hunt" o "stop fishing". No es manipulación ilegal — es la mecánica real del mercado.</p>

    <h3>2. Equal Highs (EQH) y Equal Lows (EQL)</h3>

    <div class="concept-box"><strong>Equal Highs (EQH)</strong>: dos o más máximos de swing que se forman aproximadamente en el mismo nivel de precio. Son imanes para el precio porque ahí están acumulados los stops de los vendedores en corto (que pusieron su stop loss por encima de esos máximos).</div>

    <div class="concept-box"><strong>Equal Lows (EQL)</strong>: dos o más mínimos de swing que se forman aproximadamente en el mismo nivel de precio. Son imanes para el precio porque ahí están acumulados los stops de los compradores (que pusieron su stop loss por debajo de esos mínimos).</div>

    <p><strong>Por qué atraen el precio:</strong> cuando el mercado forma dos máximos en el mismo nivel, hay miles de traders que ven ese "doble techo" como resistencia y abren ventas cortas, poniendo su stop loss justo por encima. Eso crea una concentración de stops en esa zona. Los institucionales lo saben y dirigen el precio hasta ahí para activarlos.</p>

    <p><strong>Cómo marcarlos visualmente:</strong> busca en el gráfico dos o más máximos (o mínimos) que estén al mismo nivel — que visualmente formen una línea horizontal. Traza esa línea. Esa es tu zona de liquidez.</p>

    <h3>3. El Sweep (Barrido de Liquidez)</h3>

    <div class="concept-box"><strong>Sweep (Barrido)</strong>: el precio perfora brevemente un nivel de liquidez (EQH o EQL) y luego cierra de vuelta al otro lado. La señal visual es una vela con un wick (sombra) largo que supera el nivel, pero cuyo <em>cuerpo</em> cierra de vuelta. Lo que sucedió: los institucionales empujaron el precio hasta los stops, los activaron y tomaron esas posiciones como contraparte de su propia operación. Una vez que tomaron la liquidez que necesitaban, el precio se revierte con fuerza.</div>

    <p>Piénsalo así: los institucionales necesitaban comprar. Para comprar a gran escala, necesitaban vendedores. Empujaron el precio hacia abajo hasta los EQL (stops de los compradores retail), activaron esas órdenes de venta automática y usaron esas ventas para llenar sus propias órdenes de compra. Una vez que terminaron de comprar, el precio ya no tiene presión bajista — y sube con fuerza.</p>

    <h3>4. ¿Por qué es útil para ti?</h3>

    <p>El sweep es una de las señales más poderosas del mercado porque marca el punto exacto donde los institucionales han tomado su posición. Después de un sweep:</p>

    <ul>
      <li>La liquidez que atraía el precio ya fue tomada — el precio ya no tiene razón para volver ahí.</li>
      <li>Los institucionales ya tienen su posición abierta y van a defender su precio de entrada.</li>
      <li>El movimiento posterior suele ser rápido y sostenido — exactamente lo que quieres ver antes de entrar.</li>
    </ul>

    <div class="concept-box">🎯 <strong>La combinación ganadora</strong>: sweep de EQL (barrido de mínimos) + zona de demanda fresca + sesgo H4 alcista = setup de alta probabilidad LONG. Los tres elementos juntos dicen que los institucionales acabaron de comprar exactamente en tu zona y en la dirección de la tendencia.</div>

    <h3>5. Cómo distinguir un sweep de una ruptura real</h3>

    <p>Esta distinción es crítica. Si confundes un sweep con una ruptura, entrarás en la dirección equivocada:</p>

    <table>
      <thead><tr><th>Sweep (barrido)</th><th>Ruptura real (breakout)</th></tr></thead>
      <tbody>
        <tr><td>La vela perfora el nivel con el wick</td><td>La vela perfora el nivel con el cuerpo</td></tr>
        <tr><td>El cuerpo de la vela cierra AL OTRO LADO del nivel</td><td>El cuerpo cierra más allá del nivel, en la nueva dirección</td></tr>
        <tr><td>Señal de reversión — espera entrada en la dirección opuesta</td><td>Señal de continuación — espera retesteo y entrada en la dirección del break</td></tr>
        <tr><td>Vela con wick largo y cuerpo pequeño en el nivel</td><td>Vela de cuerpo grande que cierra claramente al otro lado</td></tr>
      </tbody>
    </table>

    <div class="warning-box">⚠️ La clave es el <strong>cierre de la vela</strong>. Si el cuerpo cierra de vuelta al otro lado del nivel → sweep (reversión). Si el cuerpo cierra al otro lado del nivel → ruptura (continuación). Mira siempre el cierre, no el wick.</div>

    <h3>6. Liquidez interna vs liquidez externa</h3>

    <p>No toda la liquidez es igual en importancia:</p>

    <ul>
      <li><strong>Liquidez externa</strong>: los EQH y EQL de los swing highs y lows más grandes y visibles. Son los targets más importantes y los que atraen movimientos más grandes. Márcalos siempre en H4.</li>
      <li><strong>Liquidez interna</strong>: máximos y mínimos menores dentro de un rango o tendencia. Útiles para afinar la entrada en timeframes más cortos (H1, M15), pero menos importantes que la liquidez externa.</li>
    </ul>

    <p>Para tu estrategia en EUR/USD, enfócate primero en los EQH y EQL de H4 — son los que mueven el precio con más fuerza y crean los mejores setups.</p>

    <div class="lesson-tutorial-embed" data-tab="liquidity"><p class="lesson-intro">Completa el tutorial interactivo de abajo. Aprenderás a identificar los Equal Highs, Equal Lows y los sweeps de liquidez que preceden a los grandes movimientos.</p></div>`,



  keyTerms: [
    { term: 'Liquidez', def: 'En trading, los stops de los traders retail. Las instituciones necesitan esta liquidez para ejecutar sus órdenes de gran tamaño sin mover demasiado el precio en su contra.' },
    { term: 'Equal Highs (EQH)', def: 'Dos o más máximos de swing en el mismo nivel de precio. Señalan acumulación de stops de vendedores en corto. El precio los usa como imán antes de revertir.' },
    { term: 'Equal Lows (EQL)', def: 'Dos o más mínimos de swing en el mismo nivel de precio. Señalan acumulación de stops de compradores. El precio los usa como imán antes de revertir al alza.' },
    { term: 'Sweep (Barrido)', def: 'Movimiento rápido del precio que perfora un nivel de liquidez con el wick de la vela y cierra de vuelta al otro lado. Indica que los institucionales tomaron la liquidez y ahora el precio se revierte.' },
    { term: 'Stop Hunt', def: 'Cuando el precio alcanza deliberadamente un nivel donde hay muchos stops acumulados, los activa y luego se revierte. Es la mecánica del sweep explicada en términos de lo que le ocurre a los traders retail.' },
    { term: 'Liquidez Externa', def: 'Los EQH y EQL de los swings más grandes y visibles en H4. Son los targets más importantes y crean los movimientos más potentes al ser barridos.' },
  ],



  quiz: {
    question: '¿Qué indica una vela con wick largo que perfora un mínimo previo y cierra de vuelta por encima de ese nivel?',
    options: [
      'Una ruptura bajista confirmada — el precio seguirá cayendo',
      'Un sweep de liquidez (barrido de EQL) — los institucionales tomaron los stops de los compradores y el precio podría revertirse al alza',
      'Una señal de indecisión — no hay información útil en esa vela',
    ],
    correct: 1,
    explanation: 'Una vela que perfora un mínimo con el wick pero cierra por encima de él es el sello del sweep. El wick largo muestra que el precio llegó hasta los stops, los activó (barra a los compradores que tenían su SL ahí) y luego fue rechazado de vuelta. El cuerpo cerrando por encima del nivel es la confirmación. En presencia de sesgo alcista y zona de demanda, este es el setup de entrada LONG de mayor probabilidad.',
  },



    homework: [
      {
        icon: "🎮",
        title: "Completa el tutorial de Liquidez + busca un sweep real",
        task: "Completa el tutorial interactivo. Luego en TradingView EUR/USD H4, busca en el último mes un sweep real (una vela con wick largo que perfora un mínimo o máximo previo y cierra al otro lado). Márcalo.",
        tool: "Simulador",
        duration: 25,
        deliverable: "Haber identificado al menos 1 sweep real en el historial de EUR/USD."
      }
    ],
      resources: [






              { title: "Equal Lows, Equal Highs — ICT Concepts en español", channel: "canal ICT/SMC en español", url: "https://www.youtube.com/watch?v=0N-gbIIiMus", desc: "Explica equal highs/lows y cómo usarlos para anticipar sweeps de liquidez." },
              { title: "Liquidity — ICT Smart Money Concept — Equal Highs and Lows", channel: "canal ICT en inglés", url: "https://www.youtube.com/watch?v=NxVGpRKjW8g", desc: "Conceptualiza la liquidez como combustible del mercado con ejemplos prácticos." },
            ]



},







{



  id: 12,



  phase: 2,



  title: 'Pilar 3 — Zonas de Oferta y Demanda (Paso a paso)',



  subtitle: 'Tutorial interactivo: cómo marcar e interpretar las zonas institucionales',



  duration: 20,



  eduChart: null,



  eduChartHeight: 0,



  content: `

    <p>Si la dirección (sesgo H4) te dice <em>hacia dónde</em> va el mercado y la liquidez (sweep) te dice <em>cuándo</em> los institucionales están actuando, las zonas de Oferta y Demanda te dicen <em>dónde exactamente</em> entrar. Son las coordenadas precisas de tu entrada.</p>

    <div class="tip-box">💡 Una zona de Oferta y Demanda no es una línea arbitraria que dibujas porque "el precio rebotó ahí". Es la huella digital que dejaron los institucionales cuando ejecutaron una orden enorme. Si puedes identificar esa huella, puedes estar ahí la próxima vez que vuelvan a defender su posición.</div>

    <h3>1. ¿Qué son las zonas de Oferta y Demanda?</h3>

    <p>El Soporte y Resistencia clásico es un concepto reactivo: el precio rebotó ahí antes, entonces es un nivel importante. Las zonas de O/D van un paso más allá — explican <em>por qué</em> el precio rebotó ahí.</p>

    <div class="concept-box"><strong>La diferencia clave</strong>: el soporte/resistencia clásico marca un <em>nivel</em> (una línea). Las zonas de O/D marcan una <em>zona con lógica institucional</em> — el rango exacto donde un actor grande dejó órdenes sin ejecutar. Cuando el precio vuelve a esa zona, esas órdenes se activan de nuevo y el precio reacciona.</div>

    <p>Los bancos y fondos de inversión no pueden ejecutar sus posiciones de una sola vez — el volumen es demasiado grande. Cuando una institución quiere comprar 500 millones de euros, pone órdenes en un rango de precios. Las que no se ejecutan inmediatamente quedan activas. Cuando el precio vuelve a esa zona semanas o meses después, esas órdenes se ejecutan de nuevo — y eso es exactamente lo que ves en el gráfico como un "rebote".</p>

    <h3>2. Zona de Demanda (Demand Zone)</h3>

    <div class="concept-box"><strong>Zona de Demanda</strong>: un nivel de precio donde los compradores institucionales tienen órdenes activas. Se identifica por una zona de consolidación (velas pequeñas, precio lateral) seguida de un impulso alcista fuerte (vela de cuerpo grande verde). La lógica: los institucionales acumularon posiciones de compra en esa zona y luego el precio salió disparado al alza cuando terminaron de comprar.</div>

    <p><strong>Visualmente, una zona de demanda se ve así:</strong></p>
    <ul>
      <li>Un período de consolidación — el precio se mueve lateral con velas pequeñas.</li>
      <li>Seguido de una o más velas alcistas de cuerpo grande que salen con fuerza.</li>
      <li>El precio se aleja rápidamente — no hay duda, hay presión compradora fuerte.</li>
    </ul>

    <p>La zona de demanda es el rango de esas velas de consolidación — desde el mínimo más bajo hasta el máximo más alto de esa base antes del impulso. Ahí es donde las órdenes de compra institucionales siguen esperando.</p>

    <h3>3. Zona de Oferta (Supply Zone)</h3>

    <div class="concept-box"><strong>Zona de Oferta</strong>: un nivel de precio donde los vendedores institucionales tienen órdenes activas. Se identifica por una zona de consolidación seguida de un impulso bajista fuerte (vela de cuerpo grande roja). Los institucionales distribuyeron posiciones de venta en esa zona y el precio cayó con fuerza cuando terminaron.</div>

    <p>Exactamente lo mismo que la demanda, pero en espejo. Consolidación → impulso bajista = zona de oferta. Cuando el precio vuelve a esa zona, las órdenes de venta institucionales se activan de nuevo.</p>

    <h3>4. Cómo identificarlas paso a paso</h3>

    <p>El proceso para marcar una zona de O/D tiene tres pasos:</p>

    <ul>
      <li><strong>Paso 1</strong>: Busca un impulso — una vela (o grupo de velas) de cuerpo grande que se mueve con fuerza y rapidez. Si puedes ver ese movimiento a simple vista desde lejos, es un impulso.</li>
      <li><strong>Paso 2</strong>: Identifica de dónde salió ese impulso. Mueve el cursor hacia la izquierda del impulso. ¿Qué había justo antes? Unas velas pequeñas, laterales, consolidando. Esa es la base.</li>
      <li><strong>Paso 3</strong>: Marca la zona. El rango de la zona es exactamente el rango de esa base de consolidación — desde el precio de apertura de la primera vela de la base hasta el máximo o mínimo extremo del impulso inicial.</li>
    </ul>

    <div class="warning-box">⚠️ <strong>Error común</strong>: marcar el mínimo o máximo absoluto de la vela del impulso como la zona. La zona no es el extremo del impulso — es la base de donde salió. Ahí es donde estaban las órdenes. Si marcas el extremo, estarás esperando que el precio llegue demasiado lejos y perderás la entrada.</div>

    <h3>5. Criterios de frescura: zona fresca vs zona gastada</h3>

    <p>No todas las zonas son iguales. El factor más importante es la <strong>frescura</strong>:</p>

    <div class="concept-box"><strong>Zona Fresca</strong>: el precio no ha vuelto a entrar en la zona desde que se creó. Las órdenes institucionales que crearon esa zona siguen ahí, sin ser ejecutadas. Primera visita = mayor potencial de reacción. Es la zona que quieres.</div>

    <div class="concept-box"><strong>Zona Gastada</strong>: el precio ha entrado en la zona una o más veces desde su creación. Cada visita ejecuta algunas de las órdenes institucionales, reduciendo la "potencia" de la zona. Múltiples visitas = la zona pierde fuerza. Evita zonas que el precio ha tocado más de 2-3 veces.</div>

    <table>
      <thead><tr><th>Criterio</th><th>Zona Fresca ✅</th><th>Zona Gastada ⚠️</th></tr></thead>
      <tbody>
        <tr><td>Visitas del precio</td><td>0 — el precio no ha vuelto</td><td>2 o más visitas</td></tr>
        <tr><td>Potencial de reacción</td><td>Alto — órdenes intactas</td><td>Reducido — órdenes ya ejecutadas</td></tr>
        <tr><td>¿Operas en ella?</td><td>Sí, con todos los pilares</td><td>Solo si los 3 pilares son muy fuertes</td></tr>
        <tr><td>Señal visual</td><td>El precio no ha "mordido" la zona</td><td>El precio entró y salió en visitas previas</td></tr>
      </tbody>
    </table>

    <h3>6. Cómo marcarlas: el rango exacto de la zona</h3>

    <p>Para marcar la zona con precisión en TradingView:</p>
    <ul>
      <li>Zona de demanda: el rango va desde el <strong>open de la primera vela de la base</strong> hasta el <strong>mínimo más bajo de la base</strong>.</li>
      <li>Zona de oferta: el rango va desde el <strong>open de la primera vela de la base</strong> hasta el <strong>máximo más alto de la base</strong>.</li>
      <li>Usa el rectángulo de TradingView para marcar el rango. Extiéndelo hacia la derecha para ver cuándo el precio llega a la zona.</li>
      <li>Colorea las zonas de demanda en verde claro y las de oferta en rojo claro — así las distingues de un vistazo.</li>
    </ul>

    <div class="tip-box">💡 <strong>Proceso semanal recomendado</strong>: cada domingo, abre EUR/USD H4 y H1. Marca todas las zonas de demanda y oferta frescas que ves. Actualiza las que ya fueron visitadas. Esas zonas son tus "zonas de espera" para la semana — cuando el precio llegue a una zona fresca con sesgo a favor y sweep, ese es tu setup.</div>

    <div class="lesson-tutorial-embed" data-tab="zones"><p class="lesson-intro">Completa el tutorial interactivo de abajo. Aprenderás a identificar y trazar las zonas de Oferta y Demanda de origen institucional.</p></div>`,



  keyTerms: [
    { term: 'Zona de Demanda', def: 'Nivel de precio donde compradores institucionales tienen órdenes activas. Se identifica por una consolidación seguida de un impulso alcista fuerte. El precio rebota al volver porque esas órdenes se ejecutan de nuevo.' },
    { term: 'Zona de Oferta', def: 'Nivel de precio donde vendedores institucionales tienen órdenes activas. Consolidación seguida de impulso bajista. El precio cae al volver a esa zona.' },
    { term: 'Impulso', def: 'Movimiento brusco y rápido del precio, representado por una vela de cuerpo grande. Señala la presencia de órdenes institucionales ejecutándose con urgencia.' },
    { term: 'Base', def: 'Las velas de consolidación (pequeñas, laterales) justo antes del impulso. Es el rango exacto donde marcar la zona — ahí estaban las órdenes que crearon el movimiento.' },
    { term: 'Zona Fresca', def: 'Zona de O/D que el precio no ha revisitado desde su creación. Todas las órdenes institucionales siguen activas. Mayor potencial de reacción — es la zona que buscas.' },
    { term: 'Zona Gastada', def: 'Zona visitada una o más veces. Cada visita ejecuta algunas órdenes, reduciendo la potencia de la zona. Evita zonas con múltiples visitas previas.' },
  ],



  quiz: {
    question: '¿Qué distingue una zona de demanda "fresca" de una "gastada"?',
    options: [
      'La zona fresca es más antigua — lleva más tiempo en el gráfico',
      'La zona fresca no ha sido revisitada por el precio desde que se creó, mientras que la gastada ha recibido visitas previas que ejecutaron parte de las órdenes',
      'La zona fresca tiene un impulso más grande que la zona gastada',
    ],
    correct: 1,
    explanation: 'La frescura se refiere a si el precio ha vuelto a entrar en la zona o no. Una zona fresca tiene todas sus órdenes institucionales intactas — nadie las ha activado todavía. Cuando el precio llega por primera vez, esas órdenes se ejecutan y crean el rebote. Una zona gastada ya tiene muchas de esas órdenes ejecutadas de visitas anteriores, por lo que tiene menos "combustible" para reaccionar.',
  },



    homework: [
      {
        icon: "🎮",
        title: "Completa el tutorial de Zonas + dibuja 2 zonas reales",
        task: "Completa el tutorial. Luego en EUR/USD H1, dibuja al menos 1 zona de demanda fresca y 1 zona de oferta fresca. Para cada zona: ¿cuántas veces ha sido visitada? ¿Está fresca o gastada?",
        tool: "Simulador",
        duration: 30,
        deliverable: "Tener 2 zonas de O/D marcadas en EUR/USD H1 con criterio de frescura evaluado."
      }
    ],
      resources: [



              { title: "Estrategia institucional — Zonas de OFERTA y DEMANDA en FOREX", channel: "canal en español", url: "https://www.youtube.com/watch?v=EH3CRUeioCQ", desc: "Estrategia completa basada en zonas de oferta y demanda institucional." },
              { title: "FULL Smart Money Concepts — Trading Course (master in 2 hours)", channel: "canal SMC en inglés", url: "https://www.youtube.com/watch?v=ucZII84ec6Y", desc: "Curso completo SMC de 2 horas que integra los tres pilares en un flujo de análisis." },
            ]



},







{



  id: 13,



  phase: 2,



  title: 'El Setup Completo — Los 3 pilares juntos',



  subtitle: 'Tutorial interactivo: cuando todo se alinea en un setup de alta probabilidad',



  duration: 25,



  eduChart: null,



  eduChartHeight: 0,



  content: `

    <p>Llegaste al corazón de la estrategia. Las lecciones 10, 11 y 12 te enseñaron los tres pilares por separado. Esta lección te enseña cómo funcionan <strong>juntos</strong> — y por qué la confluencia de los tres es lo que convierte una señal promedio en una operación de alta probabilidad.</p>

    <div class="warning-box">⚠️ Un solo pilar no es suficiente. Dos pilares tampoco. Esta estrategia requiere los tres para que entres. Si falta alguno, esperas. La paciencia no es pasividad — es tu ventaja competitiva más grande.</div>

    <h3>1. Por qué los 3 pilares juntos, y no uno solo</h3>

    <p>Cada pilar por separado tiene un problema:</p>

    <ul>
      <li><strong>Solo el sesgo</strong>: el mercado puede ser alcista durante semanas pero con correcciones brutales. El sesgo solo no te dice cuándo entrar ni dónde — y entrar en el momento equivocado significa que tu stop te saca antes de que el precio vaya a tu favor.</li>
      <li><strong>Solo la liquidez (sweep)</strong>: un sweep sin sesgo puede ser una trampa — el precio barrió pero la tendencia principal es contraria y el precio seguirá cayendo después del rebote.</li>
      <li><strong>Solo la zona de O/D</strong>: una zona fresca sin sweep puede que el precio nunca llegue a ella, o que la perfore directamente. Sin el sweep, no tienes confirmación de que los institucionales actuaron ahí.</li>
    </ul>

    <div class="concept-box">🎯 <strong>La confluencia es la clave</strong>: cuando los 3 pilares apuntan al mismo lugar al mismo tiempo, la probabilidad del trade se multiplica. No es que cada pilar aporte un 33% — es que se potencian mutuamente. Un sesgo alcista + zona de demanda fresca + sweep de EQL juntos son exponencialmente más poderosos que cada uno por separado.</div>

    <h3>2. El checklist de entrada</h3>

    <p>Antes de entrar en cualquier operación, recorres este checklist. Si algún ítem no está marcado, no entras:</p>

    <table>
      <thead><tr><th>Pilar</th><th>Pregunta</th><th>Condición requerida</th></tr></thead>
      <tbody>
        <tr><td>Pilar 1 — Dirección</td><td>¿El sesgo H4 está definido?</td><td>HH/HL (alcista) o LH/LL (bajista) — no en rango</td></tr>
        <tr><td>Pilar 2 — Liquidez</td><td>¿Ha habido un sweep reciente?</td><td>Sweep de EQL (para LONG) o EQH (para SHORT) en H1/H4</td></tr>
        <tr><td>Pilar 3 — Zona</td><td>¿El precio está en una zona fresca?</td><td>Zona de demanda (LONG) o oferta (SHORT) no revisitada</td></tr>
        <tr><td>Confirmación</td><td>¿Hay una vela de señal en M15?</td><td>Engulfing o pin bar en la dirección del sesgo, dentro de la zona</td></tr>
      </tbody>
    </table>

    <h3>3. Ejemplo completo: un trade de compra (LONG) alcista</h3>

    <p>Así se ve un setup con los 3 pilares en EUR/USD paso a paso:</p>

    <div class="concept-box">
      <strong>Escenario completo — Setup LONG:</strong><br><br>
      <strong>H4 — Pilar 1 (Sesgo):</strong> El EUR/USD lleva 3 semanas haciendo Higher Highs y Higher Lows. El último swing low (HL) está en 1.0820. Sesgo claramente alcista. Solo buscas compras.<br><br>
      <strong>H1 — Pilar 3 (Zona):</strong> Identificas una zona de demanda fresca en 1.0840-1.0855, formada hace 10 días cuando el precio subió con fuerza desde esa zona por primera vez. El precio no ha vuelto desde entonces — zona fresca.<br><br>
      <strong>H1/M15 — Pilar 2 (Liquidez):</strong> El precio baja hacia la zona. Cuando llega a 1.0845, hace un spike a 1.0838 (por debajo de los EQL visibles en 1.0840) con una vela de wick largo, y cierra de vuelta por encima de 1.0840. Sweep de EQL confirmado.<br><br>
      <strong>M15 — Confirmación:</strong> En la siguiente vela de M15, aparece un engulfing alcista — vela roja pequeña seguida de vela verde que supera su cuerpo. La señal está dentro de la zona, después del sweep, en dirección del sesgo.<br><br>
      → <strong>Entras LONG</strong> al cierre del engulfing. SL: 5-10 pips por debajo del mínimo del sweep (1.0832). Target: el siguiente EQH en H4 (1.0920). Ratio riesgo/beneficio: 1:3 o mejor.
    </div>

    <h3>4. Lo que pasa cuando solo hay 2 de 3 pilares</h3>

    <p>Este es el momento donde la mayoría de los traders cometen el error que más daña su cuenta — entrar con setup incompleto:</p>

    <table>
      <thead><tr><th>Situación</th><th>Lo que podrías pensar</th><th>Lo que debes hacer</th></tr></thead>
      <tbody>
        <tr><td>Sesgo + zona, sin sweep</td><td>"La zona está ahí y el sesgo es bueno, entro ahora"</td><td>Esperas el sweep. Sin sweep, no hay confirmación institucional. El precio puede seguir cayendo y perforar tu zona.</td></tr>
        <tr><td>Sesgo + sweep, sin zona</td><td>"Hubo sweep y el mercado sube, entro LONG"</td><td>No entras. Sin zona institucional, no sabes si el sweep fue en un nivel significativo o aleatorio. Riesgo demasiado alto.</td></tr>
        <tr><td>Zona + sweep, sin sesgo claro</td><td>"El rebote fue perfecto y la zona es real, entro"</td><td>No entras. Ir contra el sesgo H4 es ir contra la corriente. La tendencia principal puede aplastarte aunque el rebote parezca perfecto.</td></tr>
      </tbody>
    </table>

    <h3>5. La paciencia como ventaja competitiva</h3>

    <p>Aquí hay una verdad incómoda sobre esta estrategia: los setups con los 3 pilares alineados son <strong>raros</strong>. En EUR/USD, puedes esperar 1-3 setups por semana. Algunos días no hay ninguno.</p>

    <p>Esto incomoda a los traders nuevos, que sienten la necesidad de "hacer algo" cuando el mercado está abierto. Pero la matemática es clara:</p>

    <ul>
      <li>Un trader que opera 5 veces por semana con setups de 2/3 pilares: tasa de acierto baja, pierde dinero lentamente.</li>
      <li>Un trader que opera 1-2 veces por semana solo cuando los 3 pilares coinciden: tasa de acierto alta, crece consistentemente.</li>
    </ul>

    <div class="concept-box">📊 <strong>La matemática del trading selectivo</strong>: si tus setups completos tienen un 65% de tasa de acierto con ratio R:R de 1:2, y operas 2 veces por semana, tu expectativa matemática es positiva semana tras semana. Si operas 5 veces con setups incompletos al 40% de acierto, pierdes dinero sin importar cuánto gestiones el riesgo.</div>

    <div class="tip-box">💡 <strong>El mantra del trader disciplinado:</strong> "Sin los 3 pilares, no hay trade. El mercado siempre tendrá otra oportunidad mañana. Mi cuenta no se recupera si la destruyo hoy." Repite esto cada vez que sientas el impulso de forzar una entrada con setup incompleto.</div>

    <div class="lesson-tutorial-embed" data-tab="setup"><p class="lesson-intro">Este tutorial combina los 3 pilares en un setup completo. Es el tutorial más importante — aquí ves cómo encajan todos los elementos antes de abrir una posición real.</p></div>`,



  keyTerms: [
    { term: 'Setup', def: 'Configuración de mercado donde todos los criterios de la estrategia están presentes simultáneamente. Solo entras cuando hay setup completo — sesgo + sweep + zona + vela de señal.' },
    { term: 'Confluencia', def: 'Cuando múltiples factores independientes apuntan en la misma dirección al mismo tiempo. A mayor confluencia (más pilares alineados), mayor probabilidad del trade.' },
    { term: 'Checklist de entrada', def: 'Lista de verificación que recorres antes de cada operación. Previene decisiones emocionales y entradas impulsivas asegurando que todos los criterios estén presentes.' },
    { term: 'Gestión de riesgo integrada', def: 'El Stop Loss siempre se coloca por debajo de la zona de demanda (en LONG) o por encima de la zona de oferta (en SHORT), nunca de forma arbitraria. La zona define el nivel de riesgo.' },
  ],



  quiz: {
    question: '¿Qué hacer si tienes sesgo alcista en H4 y una zona de demanda fresca en H1, pero no ha habido sweep de liquidez?',
    options: [
      'Entrar LONG inmediatamente — el sesgo y la zona son suficientes para un buen setup',
      'Esperar a que ocurra el sweep de EQL antes de entrar — sin sweep el setup está incompleto y el precio podría seguir cayendo',
      'Entrar con la mitad del tamaño para compensar la falta del tercer pilar',
    ],
    correct: 1,
    explanation: 'Aunque tengas sesgo + zona (dos de tres pilares), sin sweep el setup está incompleto. El sweep es la confirmación de que los institucionales actuaron en esa zona. Sin él, el precio podría seguir cayendo y perforar la zona completamente. Entrar antes del sweep reduce drásticamente la probabilidad del trade. La regla es clara: los 3 pilares o no entras.',
  },



    homework: [
      {
        icon: "🎮",
        title: "Completa el tutorial del Setup + busca 1 setup real",
        task: "Completa el tutorial de Setup Completo. Luego en EUR/USD H4+H1, busca un setup completo (los 3 elementos juntos) en el historial de los últimos 2 meses. Puede ser uno que ya ocurrió. Márcalo y anota si fue ganador o perdedor.",
        tool: "Simulador",
        duration: 35,
        deliverable: "Haber identificado un setup real con los 3 pilares en el historial de EUR/USD."
      }
    ],
      resources: [






              { title: "OPERACIONAL DE SMART MONEY CONCEPT — Setup completo SMC", channel: "canal SMC en español", url: "https://www.youtube.com/watch?v=qUwOroCAzxE", desc: "Muestra un setup SMC completo integrando los 3 pilares: dirección, liquidez y zona de entrada." },
              { title: "FULL Smart Money Concepts — Trading Course (master in 2 hours)", channel: "canal SMC en inglés", url: "https://www.youtube.com/watch?v=ucZII84ec6Y", desc: "Curso completo SMC uniendo los tres pilares en un flujo de análisis top-down." },
            ]



},







// ═══════════════════════════════════════════════════════════════════════════



// FASE 3 — GESTIÓN DE RIESGO (Lecciones 14-16)



// ═══════════════════════════════════════════════════════════════════════════







{



  id: 14,



  phase: 3,



  title: 'La regla del 1% — tu escudo contra la ruina',



  subtitle: 'Por qué los traders profesionales nunca arriesgan más del 1% por operación',



  duration: 18,



  eduChart: 'drawDrawdownCurve',



  eduChartHeight: 260,



  content: `



    <p>Hay una sola regla que, si sigues siempre sin excepción, hace casi imposible arruinarte: <strong>nunca arriesgar más del 1% de tu capital en un solo trade</strong>.</p>







    <div class="concept-box"><strong>Riesgo por trade</strong>: el porcentaje máximo de tu cuenta que puedes perder si el trade va en tu contra y el Stop Loss se activa. La regla profesional es nunca superar el 1%.</div>







    <h3>¿Por qué el 1%? Los números hablan</h3>



    <table>



      <thead>



        <tr><th>Riesgo por trade</th><th>Pérdidas para perder el 50%</th><th>Pérdidas para arruinarte</th></tr>



      </thead>



      <tbody>



        <tr><td><strong>1%</strong></td><td>~69 pérdidas seguidas</td><td>~459 pérdidas seguidas</td></tr>



        <tr><td>2%</td><td>~35 pérdidas seguidas</td><td>~228 pérdidas seguidas</td></tr>



        <tr><td>5%</td><td>~14 pérdidas seguidas</td><td>~89 pérdidas seguidas</td></tr>



        <tr><td>10%</td><td>~7 pérdidas seguidas</td><td>~44 pérdidas seguidas</td></tr>



        <tr><td>50%</td><td>1 pérdida</td><td>2 pérdidas seguidas</td></tr>



      </tbody>



    </table>







    <p>Con 1% de riesgo, necesitas <strong>459 pérdidas seguidas</strong> para perder todo. Eso es prácticamente imposible si sigues la estrategia. Con 10%, solo necesitas 44 pérdidas seguidas — algo que puede ocurrir en una mala racha perfectamente real.</p>







    <div class="concept-box"><strong>Drawdown máximo</strong>: el porcentaje de pérdida desde el punto más alto de tu cuenta hasta el punto más bajo. Con 1% de riesgo por trade, incluso 10 pérdidas seguidas solo te llevan a un drawdown de ~9.6%. Recuperable. Con 10% de riesgo, 10 pérdidas = drawdown del 65%. Devastador psicológicamente.</div>







    <h3>Ejemplo con números REALES</h3>



    <p>Tienes una cuenta de <strong>1.000€</strong>:</p>



    <ul>



      <li>1% de 1.000€ = <strong>10€</strong> máximo de pérdida por trade</li>



      <li>10 trades perdedores seguidos → pierdes 100€ → te quedan <strong>900€</strong></li>



      <li>Sigues con capital suficiente para continuar operando</li>



    </ul>







    <h3>Cómo calcular el tamaño de posición</h3>



    <p>La fórmula es simple:</p>



    <div class="concept-box">



      <strong>Lotes = Riesgo en € ÷ (Pips de SL × Valor por pip)</strong><br><br>



      Ejemplo: capital 1.000€, riesgo 1% = 10€ máximo.<br>



      Tu SL está 20 pips de la entrada.<br>



      Con 0.01 lotes: 1 pip = $0.10<br>



      Si quieres arriesgar 10€ con SL de 20 pips:<br>



      → 10€ ÷ 20 pips = 0.50€ por pip<br>



      → 0.50€ por pip ÷ 0.10 (valor de 0.01 lotes) = <strong>0.05 lotes</strong><br>



      → Con 0.05 lotes y SL de 20 pips: 20 × $0.50 = <strong>$10 de riesgo máximo ✅</strong>



    </div>







    <div class="warning-box">⚠️ Nunca ajustes el Stop Loss para que "quede" dentro del 1% de riesgo. El SL se coloca donde el setup deja de ser válido (detrás del sweep, fuera de la zona). El tamaño de posición se ajusta para que ESE SL no supere el 1%. Orden correcto: primero el SL, luego el tamaño.</div>







    <div class="tip-box">💡 Con cuentas pequeñas (menos de 2.000€), usar 0.01 lotes siempre como punto de partida está bien. A esos tamaños, el riesgo por pip es tan pequeño que puedes gestionar intuitivamente. Conforme tu cuenta crezca, la fórmula se vuelve esencial.</div>







    <div class="calc-box">



      <h3>Calculadora de tamaño de posición</h3>



      <p class="calc-desc">Introduce tus valores para calcular el tamaño correcto de posición:</p>



      <div class="calc-row">



        <label>Capital de la cuenta (€):</label>



        <input type="number" id="calc-capital" value="1000" min="1" step="100">



      </div>



      <div class="calc-row">



        <label>Riesgo por trade (%):</label>



        <input type="number" id="calc-risk-pct" value="1" min="0.1" max="5" step="0.1">



      </div>



      <div class="calc-row">



        <label>Stop Loss (pips):</label>



        <input type="number" id="calc-sl-pips" value="20" min="1" step="1">



      </div>



      <button class="calc-btn" onclick="(function(){



        const cap = parseFloat(document.getElementById('calc-capital').value) || 1000;



        const riskPct = parseFloat(document.getElementById('calc-risk-pct').value) || 1;



        const sl = parseFloat(document.getElementById('calc-sl-pips').value) || 20;



        const riskEur = cap * riskPct / 100;



        const pipValueNeeded = riskEur / sl;



        const lots = (pipValueNeeded / 10).toFixed(4);



        const miniLots = (pipValueNeeded).toFixed(4);



        document.getElementById('calc-result').innerHTML =



          '<strong>Riesgo máximo: ' + riskEur.toFixed(2) + '€</strong><br>' +



          'Tamaño sugerido: <strong>' + lots + ' lotes estándar</strong><br>' +



          '(' + (lots*100).toFixed(2) + ' micro-lotes de 0.01)<br>' +



          'Valor por pip con ese tamaño: ~$' + (parseFloat(lots)*10).toFixed(2);



      })()">Calcular</button>



      <div id="calc-result" class="calc-result"></div>



    </div>



  `,



  keyTerms: [



    { term: 'Position sizing', def: 'El proceso de calcular cuántos lotes operar para no superar el porcentaje de riesgo definido. Depende del capital, el % de riesgo y la distancia al Stop Loss.' },



    { term: 'Riesgo por trade', def: 'El porcentaje máximo de tu cuenta que puedes perder si el Stop Loss se activa. La regla profesional es 1%.' },



    { term: 'Drawdown máximo', def: 'Caída desde el punto más alto de la cuenta hasta el punto más bajo. Con 1% de riesgo, incluso 10 pérdidas seguidas producen solo ~9.6% de drawdown.' }



  ],



  quiz: {



    question: 'Con 2.000€ de capital y 1% de riesgo, ¿cuánto puedes perder como máximo en un solo trade?',



    options: [



      '200€ — el 10% de 2.000€',



      '20€ — el 1% de 2.000€',



      '2€ — el 0.1% de 2.000€'



    ],



    correct: 1,



    explanation: '1% de 2.000€ = 20€. Si tu Stop Loss se activa, el máximo que puedes perder es 20€. Eso te permite soportar decenas de pérdidas seguidas antes de agotar el capital.',



    homework: [
      {
        icon: "🧮",
        title: "Calcula tu position sizing para 5 escenarios",
        task: "Con la calculadora de esta lección, calcula el tamaño correcto para: (A) 500€ / 20 pip SL, (B) 1.000€ / 15 pip SL, (C) 2.000€ / 25 pip SL, (D) 500€ / 10 pip SL, (E) 1.500€ / 30 pip SL. Guarda los resultados.",
        tool: "Calculadora",
        duration: 15,
        deliverable: "Poder calcular de memoria el tamaño de posición aproximado para cualquier combinación capital/SL."
      }
    ],
  resources: [



      { title: "La Mejor Gestión de Riesgo De Trading (Para Principiantes)", channel: "canal en español", url: "https://www.youtube.com/watch?v=lxwG4pBF-iI", desc: "Explica position sizing, regla del 1-2% y cómo calcular el tamaño de posición en Forex." },
      { title: "CÓMO USAR POSITION SIZE CALCULATOR — GESTIÓN DE RIESGO", channel: "canal en español", url: "https://www.youtube.com/watch?v=U0IWsfAZDuI", desc: "Tutorial práctico sobre calculadora de tamaño de posición — ejercicio directo." },
      { title: "LA MEJOR GESTIÓN DE RIESGO en TRADING (forex, futuros...)", channel: "canal en español", url: "https://www.youtube.com/watch?v=wS_aXMnQwrA", desc: "Enfoque profesional de la gestión de riesgo con cálculo de R:R por operación." },
    ]



  }



},







{



  id: 15,



  phase: 3,



  title: 'R:R (Risk/Reward) — por qué el 1:2 es mágico',



  subtitle: 'La matemática que hace rentable un sistema incluso con menos del 50% de aciertos',



  duration: 16,



  eduChart: 'drawRRComparison',



  eduChartHeight: 260,



  content: `



    <p>La mayoría de la gente cree que para ganar dinero en trading necesitas acertar más del 50% de las veces. <strong>Eso es falso</strong>. Con una buena relación riesgo/recompensa, puedes ser rentable ganando solo 1 de cada 3 trades.</p>







    <div class="concept-box"><strong>Risk/Reward (R:R)</strong>: la relación entre lo que arriesgas en un trade y lo que puedes ganar. R:R 1:2 significa que arriesgas 1 parte para ganar 2 partes. Si tu SL son 20 pips, tu TP serían 40 pips.</div>







    <h3>La tabla que lo cambia todo</h3>



    <table>



      <thead>



        <tr><th>R:R</th><th>Win Rate mínimo para ser rentable</th><th>Interpretación</th></tr>



      </thead>



      <tbody>



        <tr><td>1:1</td><td>50%+</td><td>Necesitas acertar la mitad. Difícil mantener a largo plazo.</td></tr>



        <tr><td>1:1.5</td><td>40%+</td><td>Ya puedes fallar 6 de 10 veces y seguir ganando.</td></tr>



        <tr><td><strong>1:2</strong></td><td><strong>34%+</strong></td><td><strong>Con 1 acierto de cada 3, ya eres rentable. El mágico.</strong></td></tr>



        <tr><td>1:3</td><td>25%+</td><td>Solo necesitas 1 acierto de cada 4.</td></tr>



        <tr><td>1:4</td><td>20%+</td><td>1 acierto de cada 5 ya te da beneficios.</td></tr>



      </tbody>



    </table>







    <h3>¿Por qué funciona?</h3>



    <p>La lógica es simple. Con R:R 1:2:</p>



    <ul>



      <li>Pierdes 3 trades seguidos: −1R −1R −1R = <strong>−3R</strong></li>



      <li>Ganas el cuarto trade: <strong>+2R</strong></li>



      <li>Resultado: −3R + 2R = <strong>−1R</strong></li>



      <li>Con 5 trades (3 pérdidas, 2 ganancias): −3R + 4R = <strong>+1R</strong> → ¡Rentable!</li>



    </ul>







    <div class="concept-box"><strong>Win Rate (WR)</strong>: el porcentaje de trades ganadores sobre el total. Con la estrategia de este curso, el objetivo es WR ≥ 55-65% combinado con R:R ≥ 1:2. Esa combinación produce resultados muy sólidos a largo plazo.</div>







    <div class="concept-box"><strong>Breakeven win rate</strong>: el porcentaje mínimo de aciertos para no perder ni ganar dinero con un R:R determinado. Con R:R 1:2, el breakeven es 33.3%. Por encima de eso, eres rentable.</div>







    <h3>Cómo aplicarlo en tus trades</h3>



    <p>Cada vez que identifiques un setup, antes de entrar pregúntate: ¿dónde va mi TP para que el R:R sea al menos 1:1.5?</p>



    <ul>



      <li>Tu SL es 20 pips → TP1 mínimo: <strong>30 pips</strong> (R:R 1:1.5)</li>



      <li>Tu SL es 20 pips → TP2 ideal: <strong>40-60 pips</strong> (R:R 1:2 o 1:3)</li>



      <li>Si el "techo" del mercado (próxima resistencia fuerte) está a solo 15 pips → <strong>no entras</strong>. No hay espacio para el recorrido.</li>



    </ul>







    <div class="warning-box">⚠️ Si el R:R calculado no llega a 1:1.5, el trade no merece el riesgo. No importa cuán perfectos sean los 3 pilares. Una entrada con R:R 0.5:1 es siempre una mala decisión matemática.</div>







    <h3>Cómo calcularlo en TradingView</h3>



    <p>TradingView tiene una herramienta específica para esto:</p>



    <ul>



      <li>En el menú lateral izquierdo, busca la herramienta <strong>"Long Position"</strong> o <strong>"Short Position"</strong>.</li>



      <li>Haz clic en tu precio de entrada, luego arrastra para marcar el SL y el TP.</li>



      <li>TradingView calcula automáticamente el R:R y te muestra las zonas en verde (ganancia) y rojo (pérdida).</li>



      <li>Si el R:R mostrado es menor de 1.5 → busca otro setup o ajusta el TP.</li>



    </ul>







    <div class="tip-box">💡 Usa SIEMPRE la herramienta de TradingView antes de entrar. Es el chequeo final antes de ejecutar la orden. Si el gráfico no te "da" el R:R, el mercado te está diciendo que no hay espacio suficiente para ese trade.</div>



  `,



  keyTerms: [



    { term: 'Risk/Reward (R:R)', def: 'Relación entre riesgo y recompensa. R:R 1:2 = arriesgas 20 pips para ganar 40 pips. Cuanto mayor el R:R, menos aciertos necesitas para ser rentable.' },



    { term: 'Win Rate (WR)', def: 'Porcentaje de trades ganadores sobre el total. Con R:R 1:2, solo necesitas WR >34% para ser rentable.' },



    { term: 'Breakeven win rate', def: 'El WR mínimo para no ganar ni perder dinero con un R:R dado. Con R:R 1:2 es 33.3%. Con R:R 1:3 es 25%.' }



  ],



  quiz: {



    question: 'Si tu Stop Loss está 25 pips de tu entrada y quieres un R:R de 1:2, ¿dónde debe estar tu Take Profit?',



    options: [



      'A 25 pips de la entrada (igual que el SL)',



      'A 50 pips de la entrada — el doble del SL para R:R 1:2',



      'A 12.5 pips — la mitad del SL'



    ],



    correct: 1,



    explanation: 'R:R 1:2 significa que el TP debe ser el doble del SL. Si el SL son 25 pips, el TP debe estar a 50 pips de la entrada. Así, si el trade gana, ganas el doble de lo que arriesgaste.',



    homework: [
      {
        icon: "📊",
        title: "Calcula el R:R de 3 trades históricos",
        task: "En el simulador de esta app, abre 3 casos válidos (LONG o SHORT). Para cada uno, calcula manualmente el R:R: distancia al SL en pips ÷ distancia al TP1 en pips. ¿Todos son ≥ 1:1.5? Anota los resultados.",
        tool: "Simulador",
        duration: 20,
        deliverable: "Calcular el R:R de cualquier setup antes de entrar, como hábito."
      }
    ],
  resources: [



      { title: "Aprende a colocar correctamente un Stop Loss en trading", channel: "canal en español", url: "https://www.youtube.com/watch?v=RzDhc3bFQFM", desc: "Enseña los principios para colocar un SL con criterio técnico, no arbitrariamente." },
      { title: "¿Dónde poner el STOP LOSS? (Las 5 zonas clave)", channel: "canal en español", url: "https://www.youtube.com/watch?v=grdysWzASjw", desc: "5 zonas estratégicas para el SL incluyendo más allá de S/R y zonas de liquidez." },
    ]



  }



},







{



  id: 16,



  phase: 3,



  title: 'Psicología y drawdown — la batalla más difícil',



  subtitle: 'Por qué el 90% de los traders pierden dinero (y no es por la estrategia)',



  duration: 20,



  eduChart: null,



  eduChartHeight: 0,



  content: `



    <p>Tienes la estrategia. Tienes la gestión de riesgo. Y aun así, hay traders que lo saben todo en teoría y pierden dinero en la práctica. ¿Por qué? Por la psicología.</p>







    <div class="warning-box">⚠️ El 90% de los traders que pierden dinero no lo pierden por mala estrategia — lo pierden porque no pueden controlar sus emociones: el miedo, la codicia y el ego. Esta lección puede ser la más valiosa de todas.</div>







    <h3>¿Qué es el Drawdown?</h3>



    <div class="concept-box"><strong>Drawdown</strong>: el porcentaje de caída desde el punto más alto de tu cuenta hasta el punto más bajo en un periodo. Si llegaste a 1.100€ y ahora tienes 950€, tu drawdown es (1.100 - 950) / 1.100 = 13.6%. El drawdown es INEVITABLE. Todos los traders, incluso los mejores del mundo, tienen periodos de drawdown.</div>







    <p>La pregunta no es si tendrás drawdown — es si tu gestión de riesgo te permite sobrevivir a él y recuperarte. Con 1% de riesgo por trade, incluso 10 pérdidas seguidas = ~9.6% de drawdown. Recuperable.</p>







    <h3>Las rachas de pérdidas son normales</h3>



    <p>Estadísticamente, con un sistema que gana el 60% de las veces, la probabilidad de tener 5 pérdidas seguidas es del 1%. Parece pequeña, pero si operas 200 días al año, eso significa que <strong>probablemente tendrás al menos una racha de 5 pérdidas seguidas cada año</strong>. Es inevitable, y está dentro de lo esperado.</p>







    <p>El error no es tener la racha. El error es reaccionar incorrectamente a ella.</p>







    <h3>Revenge Trading — el enemigo número uno</h3>



    <div class="concept-box"><strong>Revenge Trading</strong>: operar impulsivamente para "recuperar" lo perdido después de un trade o racha negativa. Es la trampa psicológica más común y más destructiva del trading.</div>







    <p>Lo que ocurre en tu cerebro durante el revenge trading:</p>



    <ol>



      <li>Pierdes un trade → tu amígdala se activa → modo pánico/lucha</li>



      <li>Quieres recuperar el dinero AHORA → tomas setups que no cumplen los criterios</li>



      <li>Aumentas el tamaño de posición para "recuperar más rápido"</li>



      <li>Vuelves a perder → el ciclo se acelera → puedes perder 10 trades en una tarde</li>



    </ol>







    <div class="warning-box">⚠️ Regla inquebrantable: después de 3 pérdidas seguidas en un día, para. Cierra el ordenador. No vuelvas a operar hasta el día siguiente. Esta regla te ha salvado de más ruinas de las que puedes imaginar.</div>

    <div class="concept-box"><strong>FOMO (Fear Of Missing Out — Miedo a Perderse el Movimiento)</strong>: entrar en una operación tarde porque el precio ya se movió y tienes miedo de "perderte" el trade. El FOMO te lleva a comprar en techos y vender en suelos — exactamente al revés de lo correcto. <br><br>El FOMO dice: "El precio ya subió 50 pips, si no entro ahora lo pierdo."<br>La realidad: si el precio ya se movió 50 pips sin tu entrada, ese trade ya no cumple tu criterio de riesgo/recompensa. <strong>No entres tarde.</strong></div>

    <div class="warning-box">⚠️ <strong>La trampa del FOMO vs el Revenge Trading:</strong><br>
— <em>FOMO</em>: entras en un trade que no cumple tu setup porque tienes miedo de perder la oportunidad. El trade no estaba en tu plan.<br>
— <em>Revenge Trading</em>: entras en un trade para "recuperar" pérdidas. La rabia reemplaza el análisis.<br><br>
Ambos tienen el mismo origen: las emociones tomaron el control en lugar del proceso. El antídoto es idéntico para los dos: si el trade no está en tu checklist, no existe.</div>

    <div class="tip-box">💡 <strong>Cómo eliminar el FOMO:</strong> antes de cada sesión de trading, escribe en papel los niveles exactos donde buscarás entrada. Si el precio llega a esos niveles y hay señal → entras. Si el precio ya pasó por ahí sin señal → esperas el siguiente setup. La preparación previa convierte el FOMO en indiferencia.</div>





    <h3>Mark Douglas y la independencia de trades</h3>



    <div class="quote-box">"Cada trade es un evento único e independiente. El resultado del último trade no predice el siguiente. Las probabilidades funcionan en series largas, no en el próximo trade individual." — Mark Douglas, "Trading in the Zone"</div>







    <p>Esto es fundamental: si pierdes 3 trades seguidos, el cuarto no tiene "más probabilidades" de ganar. Cada trade es independiente. La estrategia te da ventaja estadística a lo largo de 100-200 trades. Un solo trade no dice nada.</p>







    <div class="concept-box"><strong>Psicología de trading</strong>: la disciplina mental necesaria para seguir las reglas del sistema sin importar las emociones del momento. Es la habilidad más difícil de desarrollar y la que más diferencia a traders rentables de los que pierden.</div>







    <h3>Checklist mental antes de operar</h3>



    <p>Antes de abrir cualquier gráfico, hazte estas preguntas en voz alta (o por escrito en tu diario):</p>



    <ul>



      <li>❓ ¿Estoy en buen estado de ánimo hoy?</li>



      <li>❓ ¿Quiero recuperar algo de lo que perdí ayer?</li>



      <li>❓ ¿Estoy operando por aburrimiento o porque genuinamente veo un setup?</li>



      <li>❓ ¿Estoy dispuesto a perder este trade sin alterarme?</li>



    </ul>



    <p>Si cualquier respuesta indica que estás en un estado emocional alterado → <strong>cierra el ordenador</strong>. No hay ningún setup que valga el riesgo de operar con la psicología comprometida.</p>







    <div class="tip-box">💡 Los traders profesionales no operan todos los días. Operan cuando el mercado presenta un setup de calidad Y cuando su estado mental es el adecuado. La selectividad es una ventaja, no una debilidad.</div>



  `,



  keyTerms: [



    { term: 'Drawdown', def: 'Caída porcentual desde el máximo hasta el mínimo de la cuenta en un periodo. Inevitable en todo trader. Con 1% de riesgo por trade, es manejable incluso en rachas malas.' },



    { term: 'Revenge trading', def: 'Operar impulsivamente para recuperar pérdidas recientes. La trampa psicológica más destructiva. Regla: 3 pérdidas seguidas = para y descansa hasta mañana.' },



    { term: 'Psicología de trading', def: 'La disciplina mental para seguir las reglas del sistema independientemente de las emociones. Más importante que la estrategia técnica para la rentabilidad a largo plazo.' }



  ],



  quiz: null,
    homework: [
      {
        icon: "📝",
        title: "Diario de estado mental — 7 días",
        task: "Durante los próximos 7 días, cada vez que abras TradingView anota en el diario (journal/index.html): (1) ¿cómo estás hoy del 1 al 10?, (2) ¿tienes ganas de recuperar algo?, (3) ¿estás cansado/estresado? Al final de la semana, busca patrones.",
        tool: "Diario",
        duration: 5,
        deliverable: "Identificar en qué momentos del día/semana estás en mejor estado mental para analizar."
      }
    ],
  resources: [
    { title: "Psicología de Trading: ¿CÓMO MANEJAR EL FOMO?", channel: "MDC Trading Academy", url: "https://www.youtube.com/watch?v=zJ8p8a0jy0Q", desc: "Aborda el FOMO directamente: qué lo causa, cómo reconocerlo y manejarlo en tiempo real." },
    { title: "TRADING EN LA ZONA (Audiolibro) — Mark Douglas", channel: "canal en español", url: "https://www.youtube.com/watch?v=CGYxx-KtdRk", desc: "Audiolibro completo de Mark Douglas sobre la psicología del trader ganador." },
    { title: "Mentalidad GANADORA en el Trading — Discurso de Mark Douglas", channel: "canal en español", url: "https://www.youtube.com/watch?v=dXyCQLzfSZI", desc: "Las 5 verdades del trading de Mark Douglas: cómo pensar en probabilidades como un profesional." },
  ]






},







// ═══════════════════════════════════════════════════════════════════════════



// FASE 4 — SOFTWARE Y HERRAMIENTAS (Lecciones 17-18)



// ═══════════════════════════════════════════════════════════════════════════







{



  id: 17,



  phase: 4,



  title: 'TradingView — tu cockpit de análisis',



  subtitle: 'La plataforma de gráficos más usada del mundo y cómo dominarla desde cero',



  duration: 18,



  eduChart: null,



  eduChartHeight: 0,



  content: `



    <p>TradingView es la plataforma de análisis de gráficos más usada del mundo. Más de 50 millones de traders la usan diariamente. Es donde harás todo tu análisis técnico antes de ejecutar operaciones.</p>







    <div class="concept-box"><strong>TradingView</strong>: plataforma web y de escritorio de análisis técnico. Permite ver gráficos de cualquier activo en múltiples timeframes, dibujar análisis, poner alertas y compartir ideas. URL: tradingview.com.</div>







    <div class="warning-box">⚠️ Importante: TradingView solo es para análisis. NO ejecuta trades. Para abrir y cerrar operaciones reales necesitas la plataforma de tu broker (MetaTrader 5, cTrader, etc.).</div>







    <h3>Plan gratuito vs. de pago</h3>



    <p>El plan gratuito de TradingView <strong>es suficiente para empezar</strong> y para los primeros 6 meses al menos. Estas son las limitaciones:</p>







    <table>



      <thead>



        <tr><th>Función</th><th>Plan Gratuito</th><th>Plan Pro ($14.95/mes)</th></tr>



      </thead>



      <tbody>



        <tr><td>Gráficos simultáneos</td><td>1</td><td>2-8 según plan</td></tr>



        <tr><td>Indicadores por gráfico</td><td>3</td><td>5-25 según plan</td></tr>



        <tr><td>Alertas activas</td><td>1</td><td>20-400</td></tr>



        <tr><td>Datos en tiempo real</td><td>✅ Sí</td><td>✅ Sí</td></tr>



        <tr><td>Guardar análisis</td><td>✅ Sí</td><td>✅ Sí</td></tr>



      </tbody>



    </table>







    <div class="tip-box">💡 Recomendación: usa el plan gratuito durante los primeros 6 meses. Cuando empieces el demo trading y necesites múltiples alertas activas, considera el Pro Basic. Nunca pagues por tools que no necesitas todavía.</div>







    <h3>Las 5 herramientas esenciales</h3>







    <div class="concept-box"><strong>1. Cambiar timeframe</strong>: botones en la barra superior del gráfico. Los más usados: 15 (M15), 1H, 4H, 1D. También puedes escribir el número directamente con el teclado cuando el gráfico está seleccionado.</div>







    <div class="concept-box"><strong>2. Línea horizontal</strong>: la herramienta más usada en trading. Para marcar niveles de soporte, resistencia y precios de entrada/SL/TP. Shortcut de teclado: Alt+H. Haz doble clic en la línea para cambiar color y estilo.</div>







    <div class="concept-box"><strong>3. Rectángulo</strong>: para trazar zonas de Oferta/Demanda. En la barra lateral izquierda → sección "Formas". Arrastra del borde superior al inferior de la zona. Usa color semitransparente (azul para demanda, rojo para oferta).</div>







    <div class="concept-box"><strong>4. Alerta de precio</strong>: el icono de campana o clic derecho en el gráfico → "Add Alert". Configura "Price crossing" con el precio del tope de tu zona. Cuando el precio llegue ahí, recibes una notificación en el móvil y por email. Esto te permite alejarte del ordenador sin perder la oportunidad.</div>







    <div class="concept-box"><strong>5. Guardar análisis (Layout)</strong>: TradingView guarda automáticamente tus dibujos si tienes cuenta. También puedes crear múltiples "layouts" para distintos pares o estrategias.</div>







    <div class="concept-box"><strong>Layout</strong>: la configuración guardada de un gráfico en TradingView, incluyendo timeframe, indicadores, dibujos y alertas. Puedes tener distintos layouts para distintas estrategias o activos.</div>







    <h3>Tu flujo diario en TradingView</h3>



    <ol>



      <li>Abre EUR/USD en <strong>D1</strong> → ¿cuál es la tendencia macro? ¿HH+HL o LH+LL?</li>



      <li>Cambia a <strong>H4</strong> → ¿alcista o bajista hoy? ¿BOS reciente o CHoCH?</li>



      <li>Cambia a <strong>H1</strong> → marca las zonas de O/D relevantes con rectángulos</li>



      <li>Pon <strong>alertas</strong> en el tope/fondo de tus zonas</li>



      <li>Cierra TradingView → espera la notificación</li>



      <li>Cuando salta la alerta → abre M15 → busca señal de confirmación</li>



    </ol>







    <div class="tip-box">💡 Este flujo te permite hacer el análisis en 15-20 minutos por la mañana y esperar tranquilamente. No necesitas estar pegado a la pantalla todo el día — las alertas hacen el trabajo por ti.</div>







    <div class="concept-box"><strong>Alerta de precio</strong>: notificación automática cuando el precio alcanza un nivel específico. En TradingView, las alertas se envían por email y a la app móvil. Esenciales para operar sin estar delante del ordenador constantemente.</div>



  `,



  keyTerms: [



    { term: 'TradingView', def: 'La plataforma de análisis gráfico más usada del mundo. Solo para análisis — no ejecuta trades. Plan gratuito suficiente para empezar.' },



    { term: 'Layout', def: 'Configuración guardada de un gráfico en TradingView: timeframe, indicadores, dibujos y alertas. Permite retomar el análisis exactamente donde lo dejaste.' },



    { term: 'Alerta de precio', def: 'Notificación automática (email/móvil) cuando el precio alcanza un nivel. Fundamental para no estar pegado al ordenador todo el día.' },



    { term: 'Timeframe', def: 'La duración de cada vela en el gráfico. En TradingView: botones M15, 1H, 4H, 1D en la barra superior del gráfico.' }



  ],



  quiz: null,
    homework: [
      {
        icon: "📊",
        title: "Análisis completo de EUR/USD — rutina diaria completa",
        task: "Haz tu primera rutina de análisis completa: (1) Abre EUR/USD D1 → anota la tendencia. (2) H4 → determina sesgo. (3) H1 → marca zonas O/D y pools de liquidez. (4) Pon una alerta de precio en la zona más importante. Guarda el análisis con un screenshot.",
        tool: "TradingView",
        duration: 30,
        deliverable: "Completar la rutina de análisis de principio a fin sin ayuda."
      }
    ],
    resources: [
      { title: "Así Es Un Plan De Trading Profesional", channel: "canal en español", url: "https://www.youtube.com/watch?v=gJRWIn6kQCk", desc: "Modelo de plan de trading profesional real que los alumnos pueden replicar." },
      { title: "Cómo crear un Plan de Trading en pocos pasos", channel: "canal en español", url: "https://www.youtube.com/watch?v=7qV_CpOU3yw", desc: "Tutorial para construir el propio plan con reglas de entrada, SL y registro de trades." },
    ]
},







{



  id: 18,



  phase: 4,



  title: 'MetaTrader 5 — cómo ejecutar una operación',



  subtitle: 'Paso a paso para abrir, gestionar y cerrar trades en la plataforma de tu broker',



  duration: 20,



  eduChart: null,



  eduChartHeight: 0,



  content: `



    <p>MetaTrader 5 (MT5) es el software que te proporciona tu broker para ejecutar operaciones reales (o demo). Mientras TradingView es para analizar, MT5 es para actuar.</p>







    <div class="concept-box"><strong>MetaTrader 5 (MT5)</strong>: la plataforma de trading más usada del mundo para Forex y CFDs. La mayoría de brokers la ofrecen de forma gratuita. Disponible para Windows, Mac, iOS y Android.</div>







    <h3>Tipos de órdenes principales</h3>







    <div class="concept-box"><strong>Market Order (Orden a mercado)</strong>: la orden se ejecuta inmediatamente al precio actual. Usas esto cuando el precio ya está en tu zona y quieres entrar ahora. El riesgo: el precio puede moverse ligeramente entre que pulsas y se ejecuta (slippage).</div>







    <div class="concept-box"><strong>Pending Order / Limit Order (Orden limitada)</strong>: la orden queda esperando hasta que el precio llegue al nivel que especificas. Ideal cuando identificas la zona con antelación y quieres que la orden se ejecute automáticamente cuando el precio llegue. No tienes que estar delante del ordenador.</div>







    <h3>Cómo poner una orden en MT5 — Escritorio</h3>



    <ol>



      <li>Doble clic en el par EUR/USD en el <strong>Market Watch</strong> (panel izquierdo)</li>



      <li>Se abre la ventana de nueva orden</li>



      <li>Selecciona el tipo: <strong>Market Execution</strong> (ahora) o <strong>Pending Order</strong></li>



      <li>Introduce el <strong>Volume</strong>: los lotes calculados (ej: 0.05)</li>



      <li>Introduce el <strong>Stop Loss</strong> como PRECIO absoluto (no pips). Si entras LONG a 1.0850 con SL 20 pips → precio SL = 1.0850 − 0.0020 = <strong>1.0830</strong></li>



      <li>Introduce el <strong>Take Profit</strong> como PRECIO. Si TP son 40 pips → 1.0850 + 0.0040 = <strong>1.0890</strong></li>



      <li>Pulsa <strong>BUY</strong> (largo/compra) o <strong>SELL</strong> (corto/venta)</li>



    </ol>







    <div class="concept-box"><strong>Volume (lotes)</strong>: el tamaño de la posición en MT5. Se introduce como número de lotes estándar. 0.01 = micro lote. 0.10 = mini lote. 1.00 = lote estándar. Siempre calcula con la fórmula de gestión de riesgo antes de introducir este valor.</div>







    <h3>Cómo poner una orden en MT5 — Móvil</h3>



    <ol>



      <li>Toca el par EUR/USD en la lista de quotes</li>



      <li>Toca el icono de trade (flecha) o "Trade"</li>



      <li>Selecciona el tipo: Market o Pending</li>



      <li>Introduce el Volume (lotes)</li>



      <li>Introduce SL y TP como precios absolutos</li>



      <li>Toca <strong>BUY</strong> o <strong>SELL</strong></li>



    </ol>







    <h3>La orden Limit — el aliado de las personas ocupadas</h3>



    <p>Imagina que identificas una zona de demanda en 1.0820-1.0840 pero el precio está ahora en 1.0880. No tienes que esperar delante del ordenador hasta que el precio llegue. Pones una <strong>Buy Limit</strong> a 1.0835 (dentro de la zona) con tu SL y TP ya configurados. Si el precio baja hasta 1.0835, la orden se activa automáticamente — con todos tus parámetros de riesgo ya definidos.</p>







    <div class="concept-box"><strong>Limit Order</strong>: orden de compra (Buy Limit) o venta (Sell Limit) que se ejecuta solo cuando el precio llega al nivel que especificaste. Perfecta para setups identificados con antelación. El SL y TP se configuran al crear la orden.</div>







    <div class="tip-box">💡 Workflow ideal: análisis en TradingView → alerta cuando el precio se acerca a la zona → abres MT5 → si la señal M15 confirma → ejecutas la orden (o ya tenías una Limit Order esperando).</div>

    <h3>Tipos de órdenes pendientes — diferencia clave</h3>
    <table>
      <thead><tr><th>Orden</th><th>Se activa cuando...</th><th>Cuándo usarla</th></tr></thead>
      <tbody>
        <tr><td><strong>Buy Limit</strong></td><td>El precio baja hasta tu nivel y luego sube</td><td>Compras anticipando rebote desde una zona de demanda</td></tr>
        <tr><td><strong>Sell Limit</strong></td><td>El precio sube hasta tu nivel y luego baja</td><td>Ventas anticipando rechazo desde una zona de oferta</td></tr>
        <tr><td><strong>Buy Stop</strong></td><td>El precio sube y supera tu nivel (breakout)</td><td>Compras en ruptura de resistencia — NO es lo que usa esta estrategia</td></tr>
        <tr><td><strong>Sell Stop</strong></td><td>El precio baja y rompe tu nivel (breakout)</td><td>Ventas en ruptura de soporte — tampoco se usa aquí</td></tr>
      </tbody>
    </table>
    <div class="tip-box">💡 En esta estrategia usarás principalmente <strong>Buy Limit</strong> y <strong>Sell Limit</strong> (entras en zona, esperas el precio) o <strong>Market Orders</strong> después de confirmar la señal en M15. Los Buy/Sell Stop son para estrategias de breakout — no para esta.</div>

    <h3>Mover el Stop Loss a Breakeven</h3>
    <p>Una vez que el trade está en positivo por una cantidad suficiente, puedes mover el Stop Loss a tu precio de entrada (breakeven). Así, en el peor caso, el trade cierra en 0 en lugar de en pérdida.</p>
    <p><strong>Cómo hacerlo en MT5:</strong></p>
    <ol>
      <li>En la pestaña "Operaciones" (Trade), localiza tu posición abierta.</li>
      <li>Haz doble click sobre la línea del Stop Loss en el gráfico.</li>
      <li>Arrastra la línea de SL hasta tu precio de entrada (o clic derecho → "Modificar o Cerrar Orden").</li>
      <li>En el campo "Stop Loss", introduce exactamente el precio al que compraste/vendiste.</li>
      <li>Confirma con "Modificar".</li>
    </ol>
    <div class="concept-box"><strong>Breakeven</strong>: el punto en que el SL se iguala al precio de entrada. Si el precio retrocede, el trade cierra con 0 pips de ganancia/pérdida en lugar de pérdida. Es la forma más simple de gestión de riesgo una vez el trade está a tu favor.</div>





    <h3>Cómo cerrar una posición</h3>



    <ul>



      <li><strong>Escritorio</strong>: pestaña "Trade" en el panel inferior → clic derecho en la posición → "Close Position"</li>



      <li><strong>Móvil</strong>: sección "Trade" → toca la posición abierta → botón "Close"</li>



      <li><strong>Cierre automático</strong>: si configuraste SL y TP correctamente, MT5 cierra la posición automáticamente cuando el precio los alcanza — sin que hagas nada</li>



    </ul>







    <div class="warning-box">⚠️ Nunca abras una posición sin Stop Loss. En el mercado siempre puede ocurrir un movimiento inesperado (noticias, eventos geopolíticos). El SL es tu red de seguridad. Sin él, una sola operación puede borrar toda tu cuenta.</div>



  `,



  keyTerms: [



    { term: 'Market order', def: 'Orden que se ejecuta inmediatamente al precio actual. Usada cuando el precio ya está en la zona de entrada.' },



    { term: 'Pending order', def: 'Orden que queda esperando hasta que el precio llegue a un nivel específico. Permite ejecutar trades sin estar delante del ordenador.' },



    { term: 'Limit order', def: 'Tipo de pending order. Buy Limit: comprar cuando el precio baje a X. Sell Limit: vender cuando el precio suba a X.' },



    { term: 'Volume (lotes)', def: 'El tamaño de posición en MT5. Introducido como número de lotes. 0.01 = micro lote (~$0.10/pip en EUR/USD).' }



  ],



  quiz: null,
    homework: [
      {
        icon: "💻",
        title: "Abre una cuenta demo y coloca tu primera orden",
        task: "Busca en Google 'Pepperstone demo account' o 'OANDA demo account'. Abre una cuenta demo gratuita. Descarga MT5. Conecta la cuenta demo. Coloca una orden LIMIT de compra en EUR/USD con SL y TP. Luego cancélala. El objetivo es que el proceso te resulte familiar.",
        tool: "MT5",
        duration: 30,
        deliverable: "Haber colocado y cancelado una orden en MT5 con SL y TP sin errores."
      }
    ],
    resources: [
      { title: "BUY LIMIT, BUY STOP, SELL LIMIT, SELL STOP — Órdenes en MetaTrader", channel: "canal en español", url: "https://www.youtube.com/watch?v=DPXp0m38jF0", desc: "Los 4 tipos de órdenes pendientes en MetaTrader con ejemplos visuales." },
      { title: "Cómo crear órdenes pendientes en Metatrader 5", channel: "canal en español", url: "https://www.youtube.com/watch?v=jGbj2uoMpuM", desc: "Tutorial práctico para colocar Buy Limit, Sell Limit y Stop orders en MT5." },
    ]
},







// ═══════════════════════════════════════════════════════════════════════════



// FASE 5 — PRÁCTICA (Lecciones 19-21)



// ═══════════════════════════════════════════════════════════════════════════







{



  id: 19,



  phase: 5,



  title: 'El simulador — practica sin dinero real',



  subtitle: 'Entrena tu ojo con 100 setups reales de EUR/USD antes de arriesgar capital',



  duration: 60,



  eduChart: null,



  eduChartHeight: 0,



  content: `<div class="lesson-sim-link">



    <p>El simulador contiene 100 casos reales de EUR/USD con setups de la estrategia que has aprendido. Tu misión: decidir en cada caso si el setup es válido para entrar o no, y justificar tu decisión con los 3 pilares.</p>



    <button class="btn-primary" onclick="window.showSection && window.showSection('simulator')">Ir al Simulador →</button>



    <div class="lesson-objective">



      <strong>Objetivo antes de pasar a demo trading:</strong>



      <ul>



        <li>Completar al menos 60 casos</li>



        <li>Mantener 70%+ de aciertos en los últimos 20 casos</li>



        <li>Ser capaz de explicar por qué cada setup es válido o inválido</li>



      </ul>



    </div>



  </div>`,



  keyTerms: [],



  quiz: null,



    homework: [
      {
        icon: "🎮",
        title: "Completa 20 casos del simulador",
        task: "Haz los primeros 20 casos del simulador. Para cada caso: (1) analiza los 3 pilares, (2) responde el quiz ANTES de ver la respuesta, (3) escribe en el diario si acertaste y por qué. Objetivo: 70%+ de aciertos.",
        tool: "Simulador",
        duration: 45,
        deliverable: "Completar 20 casos con 70%+ de aciertos y entender por qué fallaste en los que no acertaste."
      }
    ],
      resources: [
        { title: "MEGA TUTORIAL METATRADER 5 — EN ESPAÑOL", channel: "canal en español", url: "https://www.youtube.com/watch?v=1s-MJ1lF7pY", desc: "Tutorial mega completo de MT5 en español — todas las funciones necesarias para operar." },
        { title: "Metatrader 5 Tutorial Español: MT5 configuración desde Cero", channel: "canal en español", url: "https://www.youtube.com/watch?v=VzFIsg3K1MI", desc: "Configuración desde cero de MT5 incluyendo indicadores, gráficos y gestión de posiciones." },
      ]



},







{



  id: 20,



  phase: 5,



  title: 'Demo trading real — con tu broker',



  subtitle: 'El puente obligatorio entre el simulador y el dinero real',



  duration: 30,



  eduChart: null,



  eduChartHeight: 0,



  content: `



    <p>El demo trading es el paso más importante antes de arriesgar dinero real. Usas precios reales del mercado, movimientos reales, y las mismas herramientas que en una cuenta real — pero con dinero virtual. El mercado no sabe que es demo. Tú sí.</p>







    <div class="concept-box"><strong>Cuenta demo</strong>: cuenta de práctica con dinero virtual pero precios reales. El mercado se comporta exactamente igual. La única diferencia con el real: cuando pierdes, no duele de verdad — lo que hace que algunas personas sean menos disciplinadas. Trata el demo como si fuera dinero real.</div>







    <h3>Cómo abrir una cuenta demo</h3>



    <ol>



      <li>Ve al sitio web de un broker regulado (IG, Pepperstone, OANDA, FOREX.com...)</li>



      <li>Busca "Open demo account" o "Cuenta práctica"</li>



      <li>Introduce tu email y crea una contraseña</li>



      <li>Recibes credenciales de MT5 demo en minutos</li>



      <li>Descarga MT5, introduce las credenciales y empieza</li>



    </ol>







    <div class="concept-box"><strong>Broker regulado</strong>: empresa que opera bajo supervisión de autoridades financieras (FCA en UK, CySEC en Europa, CNMV en España). La regulación garantiza que los fondos estén segregados, que el broker no pueda desaparecer con tu dinero y que haya mecanismos de reclamación.</div>







    <h3>Los 3 objetivos obligatorios del demo trading</h3>



    <p>No pases a cuenta real hasta cumplir los TRES:</p>







    <table>



      <thead>



        <tr><th>Objetivo</th><th>Criterio</th><th>Por qué</th></tr>



      </thead>



      <tbody>



        <tr>



          <td><strong>1. Cantidad de trades</strong></td>



          <td>Mínimo 30 trades cerrados</td>



          <td>Menos de 30 no tiene validez estadística — podrías tener suerte</td>



        </tr>



        <tr>



          <td><strong>2. Win Rate</strong></td>



          <td>≥ 50% en esos 30 trades</td>



          <td>Con R:R 1:2 y WR 50%, la estrategia es muy rentable. Si no llegas al 50%, revisas qué falla antes de pasar a real.</td>



        </tr>



        <tr>



          <td><strong>3. Sin errores de riesgo</strong></td>



          <td>Nunca más del 1% por trade, SL siempre configurado</td>



          <td>Si rompes las reglas en demo, las romperás en real con consecuencias reales</td>



        </tr>



      </tbody>



    </table>







    <div class="warning-box">⚠️ El tiempo mínimo recomendado en demo es de 2 meses. No es una sugerencia — es un requisito. En 2 meses verás mercados alcistas, bajistas, rangos, noticias de alto impacto, y aprenderás a navegar cada uno sin dinero de por medio.</div>







    <div class="tip-box">💡 Consejo: configura tu cuenta demo con el mismo capital con el que empezarás en real. Si empezarás con 500€, configura la demo a 500€. Así los tamaños de posición que practicas son los mismos que usarás en real.</div>







    <h3>La transición al real</h3>



    <p>Cuando hayas cumplido los 3 objetivos:</p>



    <ol>



      <li>Abre una cuenta real con el broker donde estás en demo</li>



      <li>Empieza con el capital que tienes disponible (no pidas prestado)</li>



      <li>Los primeros 30 trades reales: mismos criterios que el demo</li>



      <li>Si los 30 trades reales van bien → ya eres trader operativo</li>



    </ol>







    <div class="concept-box"><strong>Demo trading</strong>: práctica con dinero virtual en condiciones de mercado reales. Obligatorio antes de operar con dinero real. Permite cometer errores sin consecuencias financieras, pero con la misma experiencia técnica.</div>



  `,



  keyTerms: [



    { term: 'Cuenta demo', def: 'Cuenta de práctica con dinero virtual pero precios de mercado reales. Idéntica a una cuenta real en todos los aspectos técnicos.' },



    { term: 'Broker regulado', def: 'Empresa supervisada por una autoridad financiera (FCA, CySEC, CNMV). La regulación protege los fondos del trader y garantiza prácticas justas.' }



  ],



  quiz: null,
    homework: [
      {
        icon: "💻",
        title: "30 trades en demo — el desafío final antes del real",
        task: "Con tu cuenta demo, opera durante al menos 4 semanas antes de pasar al dinero real. Cada trade: (1) verifica los 3 pilares, (2) calcula el position sizing, (3) coloca SL y TP, (4) regístralo en el diario. Objetivo: 30 trades, WR ≥ 50%.",
        tool: "MT5",
        duration: 0,
        deliverable: "30 trades completados con WR ≥ 50% y sin errores de gestión de riesgo."
      }
    ],
    resources: [
      { title: "Hice Backtesting de la Estrategia Más Simple del Trading", channel: "canal en español", url: "https://www.youtube.com/watch?v=TddSFIgCPG0", desc: "Demostración real de backtesting con resultados honestos — el proceso completo." },
      { title: "Backtesting — valide su estrategia de trading en Forex", channel: "FXCM", url: "https://www.youtube.com/watch?v=hQTm8-V1XAM", desc: "Explica el proceso de backtesting con datos históricos — introducción metodológica." },
    ]
},







{



  id: 21,



  phase: 5,



  title: 'El diario de trading — tu espejo',



  subtitle: 'La herramienta que convierte errores en aprendizaje y te hace mejorar sistemáticamente',



  duration: 15,



  eduChart: null,



  eduChartHeight: 0,



  content: `<div class="lesson-journal-link">



    <p>El diario de trading es la herramienta más subestimada del trading. Los mejores traders del mundo llevan diarios detallados. No es opcional — es parte del sistema.</p>



    <p>Un diario de trading registra cada operación: el setup técnico, el resultado numérico, y — lo más importante — tu estado mental antes, durante y después del trade.</p>



    <a href="../journal/index.html" target="_blank" class="btn-primary">Abrir Diario de Trading →</a>



    <div class="lesson-objective">



      <strong>Uso obligatorio:</strong>



      <ul>



        <li>Registra cada trade el mismo día que lo ejecutas — no después, los detalles se olvidan</li>



        <li>Incluye siempre: screenshot del setup, por qué entraste, cómo te sentías, resultado, lección aprendida</li>



        <li>Revisa el diario completo cada domingo antes de empezar la nueva semana</li>



        <li>Busca patrones: ¿en qué tipo de setups cometes errores? ¿A qué hora del día cometes más revenge trading? ¿Qué emociones te llevan a saltarte las reglas?</li>



      </ul>



    </div>



  </div>`,



  keyTerms: [],



  quiz: null,



    homework: [
      {
        icon: "📝",
        title: "Revisa tu diario semanalmente",
        task: "Cada domingo: abre el diario de trading (journal/index.html). Revisa todos los trades de la semana. Identifica: (1) ¿En qué tipo de setups ganas más?, (2) ¿Cuándo cometes más errores de plan?, (3) ¿Qué emociones tuviste antes de las pérdidas? Escribe 3 cosas que mejorarás la próxima semana.",
        tool: "Diario",
        duration: 20,
        deliverable: "Un resumen semanal escrito con 3 mejoras concretas para la semana siguiente."
      }
    ],
      resources: [
        { title: "Así Es Un Plan De Trading Profesional", channel: "canal en español", url: "https://www.youtube.com/watch?v=gJRWIn6kQCk", desc: "Plan de trading profesional completo — cierre natural del simulador." },
        { title: "RESUMEN — TRADING en la ZONA de Mark Douglas", channel: "canal en español", url: "https://www.youtube.com/watch?v=IR9xnbN7nkE", desc: "Resumen de Trading en la Zona — cierre psicológico ideal para el plan de trading final." },
      ]



}







]; // fin del array LESSONS







window.LESSONS = LESSONS;



