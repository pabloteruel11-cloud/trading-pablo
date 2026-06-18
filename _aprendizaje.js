// _aprendizaje.js — Contenido pedagógico de la sección APRENDIZAJE del "núcleo".
// Convierte la estrategia real del bot BotflowSweep_v3 (order flow, sweep + reclaim sobre MES)
// en lecciones digeribles para Pablo, que está aprendiendo.
//
// CONTRATO (no tocar la forma; el render de index.html lo consume):
//   window.APRENDIZAJE = { fases:[...], lecciones:[...] }
//
// Los números y parámetros citados reflejan los DEFAULTS del código vigente
// (BotflowSweep_v3.cs, bloque State.SetDefaults). Si algo discrepaba con los planes,
// gana el código (ver resumen del agente).
//
// Tipos de 'chart' válidos (los dibuja ChartEngine.drawTutorialChart):
//   'eql_sweep', 'eqh_sweep', 'full_setup_long', 'full_setup_short',
//   'demand_zone', 'supply_zone', 'hh_hl', 'lh_ll'   (o null si no aplica)

window.APRENDIZAJE = {

  // ---------------------------------------------------------------------------
  // FASES
  // ---------------------------------------------------------------------------
  fases: [
    { id: 'A', titulo: 'El mercado donde operamos', descripcion: 'Qué es el MES, los futuros, el tick, el horario y las sesiones.' },
    { id: 'B', titulo: 'Order flow básico',          descripcion: 'El flujo de órdenes, el bid/ask y el delta: quién es el agresor.' },
    { id: 'C', titulo: 'La estrategia del bot',      descripcion: 'Sweep + reclaim paso a paso: niveles, penetración, delta y por qué es un fader.' },
    { id: 'D', titulo: 'Gestión y régimen',          descripcion: 'Stop y target en R, dónde brilla la estrategia y la disciplina anti-curve-fitting.' },
    { id: 'E', titulo: 'Psicología (Mark Douglas)',  descripcion: 'Pensar en probabilidades, ejecución mecánica y por qué un bot ayuda a la disciplina.' }
  ],

  // ---------------------------------------------------------------------------
  // LECCIONES
  // ---------------------------------------------------------------------------
  lecciones: [

    // ===================== FASE A — El mercado =====================
    {
      fase: 'A',
      id: 'a1',
      titulo: 'Qué es el MES',
      subtitulo: 'Micro E-mini S&P 500',
      duracion: '5 min',
      chart: null,
      contenido:
        '<p>El bot opera un <strong>futuro</strong> llamado <strong>MES</strong>, que significa <em>Micro E-mini S&amp;P 500</em>. Suena complicado, pero la idea es sencilla: es un contrato que sube y baja exactamente igual que el índice S&amp;P 500 (las 500 empresas más grandes de EE.UU.).</p>' +
        '<p>Si oyes en las noticias que "Wall Street sube", ese movimiento se refleja al instante en el precio del MES. Cuando hablamos de niveles, usamos números realistas del S&amp;P, por ejemplo <strong>5300</strong> o <strong>5325</strong> puntos.</p>' +
        '<p>¿Por qué el MES y no el grande? Existe el <strong>ES</strong> (E-mini) y el <strong>MES</strong> (Micro). Son el mismo índice, pero el MES vale <strong>10 veces menos</strong>. Eso significa que con poco dinero puedes operar sin arriesgar cantidades enormes en cada movimiento. Es el contrato ideal para empezar y para una cuenta pequeña.</p>' +
        '<p>El bot lee las señales y ejecuta las órdenes sobre el MES. Todo lo que veas en este curso gira alrededor de este contrato.</p>',
      claves: [
        'MES — Micro futuro del S&P 500, el contrato que opera el bot',
        'S&P 500 — índice de las 500 mayores empresas de EE.UU.',
        'Futuro — contrato cuyo precio sigue al de un activo (aquí, el S&P 500)'
      ],
      quiz: {
        pregunta: '¿Qué representa el precio del MES?',
        opciones: ['El precio del oro', 'El valor del índice S&P 500 (las 500 mayores empresas de EE.UU.)', 'El tipo de cambio del euro'],
        correcta: 1,
        explicacion: 'El MES sigue al índice S&P 500. Cuando Wall Street se mueve, el MES se mueve con él.'
      }
    },
    {
      fase: 'A',
      id: 'a2',
      titulo: 'El tick y el valor del punto',
      subtitulo: 'Cómo se mide el dinero en el MES',
      duracion: '6 min',
      chart: null,
      contenido:
        '<p>El precio del MES no se mueve de céntimo en céntimo, sino a saltos fijos llamados <strong>ticks</strong>. En el MES, un tick es de <strong>0,25 puntos</strong>. Es el salto mínimo: el precio puede ir de 5300,00 a 5300,25, luego a 5300,50, pero nunca a 5300,10.</p>' +
        '<p>¿Cuánto dinero es eso? Aquí está la clave:</p>' +
        '<ul>' +
        '<li><strong>1 punto entero = 5$</strong> por contrato.</li>' +
        '<li><strong>1 tick (0,25 puntos) = 1,25$</strong> por contrato.</li>' +
        '</ul>' +
        '<p>Ejemplo concreto: si entras comprando en 5300 y el precio sube a 5310, has ganado 10 puntos. 10 puntos × 5$ = <strong>50$</strong> por cada contrato. Si en cambio baja a 5292, has perdido 8 puntos = <strong>40$</strong>.</p>' +
        '<p>Esto importa muchísimo para el riesgo. Cuando el bot pone un stop (su red de seguridad) de 8 puntos, sabe que arriesga 40$ en esa operación. Por eso más adelante hablaremos siempre en puntos: traducir puntos a dólares es solo multiplicar por 5.</p>',
      claves: [
        'Tick — el salto mínimo de precio: 0,25 puntos en el MES',
        'Valor del punto — 1 punto = 5$ por contrato en el MES',
        'Valor del tick — 0,25 puntos = 1,25$ por contrato'
      ],
      quiz: {
        pregunta: 'Si compras MES en 5300 y lo vendes en 5306, ¿cuánto ganas por contrato?',
        opciones: ['6$', '30$', '60$'],
        correcta: 1,
        explicacion: 'Son 6 puntos de subida. 6 puntos × 5$ por punto = 30$ por contrato.'
      }
    },
    {
      fase: 'A',
      id: 'a3',
      titulo: 'El horario: Globex vs RTH',
      subtitulo: 'Cuándo hay mercado de verdad',
      duracion: '7 min',
      chart: null,
      contenido:
        '<p>El MES cotiza casi <strong>23 horas al día</strong> (esta sesión casi continua se llama <strong>Globex</strong>). Pero no todas esas horas valen lo mismo. La mayoría del día hay poca gente operando: el mercado está "fino", los movimientos son bruscos y engañosos.</p>' +
        '<p>La hora buena es la <strong>RTH</strong> (<em>Regular Trading Hours</em>, el horario regular): de <strong>9:30 a 16:00 hora del Este de EE.UU. (ET)</strong>, que es cuando abre la bolsa de Nueva York. En esas horas hay muchísimos participantes, el volumen es real y el order flow (lo que estudiaremos) tiene sentido.</p>' +
        '<p><strong>Truco de hora:</strong> en España siempre vas <strong>+6 horas</strong> sobre Nueva York (cambiáis la hora a la vez). Así que las 9:30 ET son las <strong>15:30</strong> en España.</p>' +
        '<p>El bot solo busca operaciones dentro de la RTH, y de hecho aún más afinado: su ventana por defecto es de <strong>9:30 a 11:00 ET</strong> (15:30 a 17:00 en España), la franja de mayor volumen y mejores señales del día. Fuera de esas horas, el bot mira pero no entra.</p>',
      claves: [
        'Globex — la sesión casi 24h; libro fino, ruido fuera de la RTH',
        'RTH — horario regular 9:30-16:00 ET, cuando el mercado tiene liquidez de verdad',
        'ET — hora del Este de EE.UU.; España va siempre +6 horas'
      ],
      quiz: {
        pregunta: '¿A qué hora española abre la sesión RTH (9:30 ET)?',
        opciones: ['Las 12:30', 'Las 15:30', 'Las 9:30'],
        correcta: 1,
        explicacion: 'España va +6 horas sobre Nueva York: 9:30 ET = 15:30 en España.'
      }
    },
    {
      fase: 'A',
      id: 'a4',
      titulo: 'Sesiones y vencimiento del contrato',
      subtitulo: 'Overnight, RTH y el "roll" trimestral',
      duracion: '6 min',
      chart: null,
      contenido:
        '<p>El bot divide el día en dos sesiones que usará para construir sus niveles:</p>' +
        '<ul>' +
        '<li><strong>RTH (sesión regular):</strong> 9:30-16:00 ET. La sesión "principal".</li>' +
        '<li><strong>Overnight (nocturna):</strong> desde las 18:00 ET hasta las 9:30 ET del día siguiente. Es lo que pasa "mientras EE.UU. duerme".</li>' +
        '</ul>' +
        '<p>De cada sesión, el bot guarda el máximo y el mínimo. Esos extremos se convertirán en los niveles que vigila (lo verás en la Fase C). Por eso es importante saber que existen dos sesiones distintas.</p>' +
        '<p><strong>El vencimiento y el roll:</strong> un futuro no es eterno. Cada contrato de MES "vence" en una fecha (los hay trimestrales: marzo, junio, septiembre, diciembre). Cuando se acerca el vencimiento, los operadores se cambian al contrato del trimestre siguiente; a ese cambio se le llama <strong>roll</strong>. Para el bot esto significa que cada pocos meses opera un contrato distinto (por ejemplo, MES JUN26 y luego MES SEP26), aunque la estrategia es idéntica.</p>',
      claves: [
        'Overnight — sesión nocturna (18:00 ET → 9:30 ET); de ella salen ONH y ONL',
        'Vencimiento — fecha en la que un contrato de futuro caduca (trimestral)',
        'Roll — el cambio al contrato del trimestre siguiente cuando vence el actual'
      ],
      quiz: null
    },

    // ===================== FASE B — Order flow básico =====================
    {
      fase: 'B',
      id: 'b1',
      titulo: 'Qué es el order flow',
      subtitulo: 'Ver quién empuja el precio',
      duracion: '6 min',
      chart: null,
      contenido:
        '<p><strong>Order flow</strong> significa "flujo de órdenes". Es una forma de mirar el mercado que va más allá del precio: te muestra <strong>quién está empujando</strong>, si los compradores o los vendedores, y con cuánta fuerza.</p>' +
        '<p>El gráfico normal solo te dice <em>el efecto</em> (el precio subió o bajó). El order flow te enseña <em>la causa</em>: el volumen real negociado y de qué lado vino la agresividad. Es como pasar de ver olas en el mar a ver el viento que las provoca.</p>' +
        '<p>Esto solo se puede hacer bien en mercados <strong>centralizados</strong> como los futuros (CME), donde cada operación queda registrada de verdad con su volumen y su lado. Por eso operamos futuros del S&amp;P (MES) y no, por ejemplo, Forex al contado, donde el "volumen" no es real.</p>' +
        '<p>El bot no "mira" gráficos: reconstruye el order flow con números, operación a operación, y aplica reglas exactas. Pero para entender sus reglas, primero tú tienes que entender qué mide.</p>',
      claves: [
        'Order flow — flujo de órdenes: el volumen real y de qué lado vino la presión',
        'Volumen — cantidad de contratos negociados (la "fuerza" del movimiento)',
        'Mercado centralizado — futuros (CME): registran volumen y agresor de verdad'
      ],
      quiz: {
        pregunta: '¿Qué ventaja da el order flow frente al gráfico de precio normal?',
        opciones: ['Predice el futuro con certeza', 'Muestra la causa (quién empuja y con qué fuerza), no solo el efecto', 'Elimina todo el riesgo'],
        correcta: 1,
        explicacion: 'El order flow revela la causa del movimiento (la agresión real), mientras el gráfico desnudo solo enseña el resultado. No adivina el futuro: mejora la probabilidad.'
      }
    },
    {
      fase: 'B',
      id: 'b2',
      titulo: 'Bid, ask y el agresor',
      subtitulo: 'Quién cruza el spread',
      duracion: '7 min',
      chart: null,
      contenido:
        '<p>En cada instante hay dos precios pegados:</p>' +
        '<ul>' +
        '<li><strong>Bid:</strong> el mejor precio al que alguien está dispuesto a <em>comprar</em> ahora mismo (la demanda en espera).</li>' +
        '<li><strong>Ask:</strong> el mejor precio al que alguien está dispuesto a <em>vender</em> ahora mismo (la oferta en espera).</li>' +
        '</ul>' +
        '<p>La diferencia entre ambos se llama <strong>spread</strong> (la horquilla). En el MES en horario bueno suele ser de 1 tick.</p>' +
        '<p>La clave es entender quién es el <strong>agresor</strong>: el que tiene prisa y cruza el spread para ejecutar ya.</p>' +
        '<ul>' +
        '<li>Si alguien <strong>compra de mercado</strong>, ejecuta contra el <strong>ask</strong>. Es una <strong>compra agresiva</strong> (empuja el precio hacia arriba).</li>' +
        '<li>Si alguien <strong>vende de mercado</strong>, ejecuta contra el <strong>bid</strong>. Es una <strong>venta agresiva</strong> (empuja hacia abajo).</li>' +
        '</ul>' +
        '<p>Las órdenes <em>pasivas</em> (limitadas, que esperan) frenan el precio; las <em>agresivas</em> (de mercado) lo mueven. El bot clasifica cada operación: si el precio se ejecutó en el ask es compra agresiva, si fue en el bid es venta agresiva. Con eso construye su medida estrella: el delta.</p>',
      claves: [
        'Bid — mejor precio de compra en espera (demanda)',
        'Ask — mejor precio de venta en espera (oferta)',
        'Spread — diferencia entre bid y ask (1 tick en MES con liquidez)',
        'Agresor — el que cruza el spread y ejecuta ya; mueve el precio'
      ],
      quiz: {
        pregunta: 'Alguien manda una orden de venta a mercado. ¿Contra qué se ejecuta y qué presión genera?',
        opciones: ['Contra el ask; presión compradora', 'Contra el bid; presión vendedora (agresión vendedora)', 'Contra el spread; presión neutra'],
        correcta: 1,
        explicacion: 'Una venta de mercado cruza el spread y se ejecuta contra el bid. Es agresión vendedora: empuja el precio hacia abajo.'
      }
    },
    {
      fase: 'B',
      id: 'b3',
      titulo: 'El DELTA',
      subtitulo: 'Compras agresivas menos ventas agresivas',
      duracion: '7 min',
      chart: null,
      contenido:
        '<p>El <strong>delta</strong> es la medida más importante del order flow, y la que el bot usa para decidir. Su fórmula es simple:</p>' +
        '<p><strong>Delta = volumen comprador agresivo − volumen vendedor agresivo</strong></p>' +
        '<p>En palabras: de todo lo que se negoció en un trozo de tiempo, ¿cuánto fue compra de mercado y cuánto fue venta de mercado? Si dominaron los compradores agresivos, el delta es <strong>positivo</strong>. Si dominaron los vendedores agresivos, es <strong>negativo</strong>.</p>' +
        '<p>Ejemplo: en una vela se negociaron 1.000 contratos como compras agresivas y 700 como ventas agresivas. El delta es +300: hubo presión compradora neta.</p>' +
        '<p>El delta revela la <strong>intención</strong> que el precio por sí solo esconde. A veces el precio apenas se mueve pero el delta es enorme: eso significa que hubo muchísima agresión que alguien estaba <em>absorbiendo</em> con órdenes pasivas. Otras veces un nuevo mínimo se hace con poco delta: señal de que la presión vendedora se está agotando.</p>' +
        '<p>El bot calcula el delta él mismo, operación a operación, sin pagar herramientas caras. Es su forma de "sentir" la fuerza real detrás de cada movimiento.</p>',
      claves: [
        'Delta — compras agresivas menos ventas agresivas en un periodo',
        'Delta positivo — dominan compradores agresivos',
        'Delta negativo — dominan vendedores agresivos',
        'Intención — lo que el delta revela y el precio esconde'
      ],
      quiz: {
        pregunta: 'En una vela hubo 800 contratos de compra agresiva y 1.100 de venta agresiva. ¿Cuál es el delta?',
        opciones: ['+1.900 (positivo)', '−300 (negativo)', '0 (neutro)'],
        correcta: 1,
        explicacion: '800 − 1.100 = −300. Delta negativo: dominó la agresión vendedora en esa vela.'
      }
    },
    {
      fase: 'B',
      id: 'b4',
      titulo: 'Por qué el delta revela intención',
      subtitulo: 'Iniciativa contra respuesta',
      duracion: '6 min',
      chart: null,
      contenido:
        '<p>Hay un detalle que confunde a casi todos los principiantes: en CADA operación hay un comprador y un vendedor. Siempre. Entonces, ¿cómo puede "ganar" un lado?</p>' +
        '<p>La respuesta es la <strong>agresividad</strong>. No importa cuántos compradores y vendedores hay (siempre son los mismos a cada lado del cruce), sino <strong>quién tiene prisa</strong>. El que cruza el spread para ejecutar ya es el que mueve el precio. El delta mide exactamente eso: el saldo de quién está siendo agresivo.</p>' +
        '<p>Hay investigación académica seria detrás de esto (Cont, Kukanov y Stoikov). En horizontes cortos, el desequilibrio del flujo de órdenes <strong>precede</strong> al movimiento del precio. No es magia ni intuición: es microestructura medible. El flujo agresivo empuja, y el precio responde.</p>' +
        '<p>Por eso el delta es tan útil para un fader como nuestro bot: cuando aparece un <strong>delta extremo</strong> (una avalancha de agresión de golpe contra un nivel) y el precio no logra seguir avanzando, es la huella de que esa agresión se está quedando sin combustible. Justo el momento que el bot busca para apostar a la reversión.</p>',
      claves: [
        'Agresividad — quién cruza el spread; lo que de verdad mueve el precio',
        'Delta extremo — avalancha de agresión de golpe; señal de posible agotamiento',
        'OFI — el desequilibrio de flujo precede al precio en horizontes cortos (base académica)'
      ],
      quiz: {
        pregunta: 'Si en cada operación hay siempre un comprador y un vendedor, ¿qué hace subir el precio?',
        opciones: ['Que haya más compradores que vendedores', 'La agresividad: que los compradores crucen el spread con prisa', 'El azar'],
        correcta: 1,
        explicacion: 'Siempre hay los mismos a cada lado del cruce. Lo que mueve el precio es la agresividad: quién ejecuta de mercado con prisa. Eso es lo que mide el delta.'
      }
    },

    // ===================== FASE C — La estrategia del bot =====================
    {
      fase: 'C',
      id: 'c1',
      titulo: 'Qué es un sweep (barrido)',
      subtitulo: 'La trampa de liquidez',
      duracion: '7 min',
      chart: 'eql_sweep',
      contenido:
        '<p>Un <strong>sweep</strong> (barrido) es el corazón de la estrategia. Para entenderlo, primero piensa dónde pone la gente sus stops.</p>' +
        '<p>Justo por debajo de un mínimo importante (un suelo, un soporte) se acumulan montones de órdenes stop de quien va comprado y quiere protegerse. Es un charco de <strong>liquidez</strong>. Lo mismo ocurre justo por encima de un máximo (una resistencia): ahí están los stops de quien va vendido.</p>' +
        '<p>Un <strong>barrido de mínimos</strong> ocurre cuando el precio rompe ese suelo unos pocos ticks, dispara todos esos stops... y enseguida vuelve a subir. Ha "barrido" la liquidez: ha cazado a los que vendieron en la ruptura y los ha dejado atrapados.</p>' +
        '<p>El diagrama muestra <strong>mínimos iguales</strong> (un suelo claro) y cómo el precio lo perfora brevemente. Ese pinchazo hacia abajo seguido de un regreso es la trampa. Cuanto más obvio sea el nivel, más stops hay debajo y más jugoso es el barrido.</p>' +
        '<p>Es un patrón con casi un siglo de historia: Wyckoff lo llamaba "spring", Dalton "look below and fail". El order flow moderno solo le ha puesto números.</p>',
      claves: [
        'Sweep (barrido) — el precio rompe un nivel obvio, caza stops y revierte',
        'Liquidez — el charco de órdenes (stops) acumuladas tras un nivel',
        'Mínimos iguales — un suelo claro donde se agrupan stops debajo'
      ],
      quiz: {
        pregunta: '¿Qué busca un sweep de mínimos?',
        opciones: ['Romper el suelo y seguir cayendo para siempre', 'Pinchar el suelo brevemente, cazar stops y luego revertir al alza', 'Quedarse exactamente en el suelo sin moverse'],
        correcta: 1,
        explicacion: 'El sweep perfora el nivel solo unos ticks para disparar los stops acumulados y luego revierte, dejando atrapados a los que entraron en la ruptura.'
      }
    },
    {
      fase: 'C',
      id: 'c2',
      titulo: 'Sweep + reclaim paso a paso',
      subtitulo: 'La señal completa del bot',
      duracion: '9 min',
      chart: 'full_setup_long',
      contenido:
        '<p>El barrido por sí solo no basta: hace falta que el precio <strong>recupere</strong> el nivel. A esa recuperación se le llama <strong>reclaim</strong>. La señal completa del bot, para un largo, son tres pasos:</p>' +
        '<ul>' +
        '<li><strong>1. Penetración:</strong> el precio rompe un nivel-soporte hacia abajo. Tiene que ser una perforación de verdad pero no una fuga: entre <strong>2 y 8 ticks</strong> (lo veremos en la próxima lección).</li>' +
        '<li><strong>2. Delta extremo:</strong> durante ese barrido aparece una agresión vendedora muy fuerte (delta muy negativo). Es la avalancha que caza los stops.</li>' +
        '<li><strong>3. Reclaim:</strong> el precio vuelve a subir por encima del nivel barrido en menos de <strong>120 segundos</strong>. La trampa se cierra: los vendedores quedan atrapados.</li>' +
        '</ul>' +
        '<p>Cuando se cumplen los tres, el bot entra <strong>comprado</strong> (a favor del reclaim, contra el barrido). Para un corto todo es simétrico: el precio perfora una resistencia hacia arriba con delta comprador extremo y luego cae de nuevo por debajo.</p>' +
        '<p>El diagrama muestra el setup de largo completo: el suelo, el pinchazo con el delta negativo, y el regreso por encima del nivel que dispara la entrada. Si el precio NO recupera el nivel a tiempo (pasan los 120 s) o se va demasiado lejos, no hay trampa: el nivel se "quema" y el bot lo descarta por hoy.</p>',
      claves: [
        'Reclaim — el precio recupera el nivel barrido; cierra la trampa',
        'ReclaimSeconds — el reclaim debe ocurrir en ≤120 segundos (valor del bot)',
        'Nivel quemado — si no hay reclaim a tiempo, el bot descarta ese nivel ese día'
      ],
      quiz: {
        pregunta: '¿Cuál es el orden correcto de la señal de largo?',
        opciones: ['Reclaim, luego penetración, luego delta', 'Penetración del soporte + delta vendedor extremo + reclaim en ≤120 s', 'Solo penetración profunda, sin que vuelva el precio'],
        correcta: 1,
        explicacion: 'Primero el precio perfora el soporte (penetración) con agresión vendedora extrema (delta), y luego lo recupera (reclaim) dentro de 120 segundos. Ahí entra el bot, comprado.'
      }
    },
    {
      fase: 'C',
      id: 'c3',
      titulo: 'La penetración: ni poco ni demasiado',
      subtitulo: 'MinPenetrationTicks y MaxPenetrationTicks',
      duracion: '7 min',
      chart: 'eqh_sweep',
      contenido:
        '<p>No vale cualquier perforación de un nivel. El bot exige que el barrido tenga una profundidad concreta, controlada por dos parámetros:</p>' +
        '<ul>' +
        '<li><strong>MinPenetrationTicks = 2:</strong> el precio debe perforar el nivel al menos 2 ticks (0,5 puntos). Si solo lo roza, es ruido, no un barrido de verdad.</li>' +
        '<li><strong>MaxPenetrationTicks = 8:</strong> el precio no puede perforar más de 8 ticks (2 puntos). Si se va más allá, ya no es una trampa: es una <strong>ruptura real</strong> (breakout), y fadear una ruptura real es peligroso.</li>' +
        '</ul>' +
        '<p>Piensa en una resistencia en <strong>5325,00</strong> (el diagrama muestra un barrido de máximos iguales sobre una resistencia). Para que sea un sweep válido al alza, el precio tiene que asomar entre 5325,50 (2 ticks) y 5327,00 (8 ticks) por encima. Si dispara hasta 5330, el nivel se considera "quemado": el bot entiende que se ha roto de verdad y no entra.</p>' +
        '<p>Esta es la diferencia clave entre un <em>fader</em> (que opera contra barridos falsos) y un seguidor de tendencias. El bot solo quiere las perforaciones que <strong>fracasan</strong>, no las que tienen éxito. La ventana 2-8 ticks es justo ese punto dulce.</p>',
      claves: [
        'MinPenetrationTicks = 2 — perforación mínima para que cuente como barrido',
        'MaxPenetrationTicks = 8 — más allá es ruptura real; el nivel se quema',
        'Breakout — una ruptura real (no una trampa); el bot NO la fadea'
      ],
      quiz: {
        pregunta: 'El bot vigila una resistencia. El precio la supera por 12 ticks de golpe. ¿Qué hace el bot?',
        opciones: ['Entra corto inmediatamente', 'Considera el nivel quemado (es una ruptura real, no una trampa) y no entra', 'Espera a que suba aún más'],
        correcta: 1,
        explicacion: 'Superar el máximo permitido (8 ticks) significa ruptura real, no barrido. El bot quema ese nivel y no opera contra él: fadear una ruptura de verdad es peligroso.'
      }
    },
    {
      fase: 'C',
      id: 'c4',
      titulo: 'Los niveles que vigila el bot',
      subtitulo: 'PDH/PDL, ONH/ONL, sesión y Opening Range',
      duracion: '8 min',
      chart: 'supply_zone',
      contenido:
        '<p>El bot no barre cualquier sitio: vigila <strong>niveles de referencia</strong> concretos, porque ahí es donde se acumulan los stops. Estos son los que usa el código v3:</p>' +
        '<ul>' +
        '<li><strong>PDH / PDL</strong> (<em>Previous Day High / Low</em>): el máximo y el mínimo de la sesión RTH de <strong>ayer</strong>. Son los niveles más respetados.</li>' +
        '<li><strong>ONH / ONL</strong> (<em>Overnight High / Low</em>): el máximo y el mínimo de la sesión <strong>nocturna</strong> (lo que pasó mientras EE.UU. dormía).</li>' +
        '<li><strong>Máximo / mínimo de la sesión</strong> en curso (un nivel opcional que el bot puede usar).</li>' +
        '<li><strong>Opening Range (ORH / ORL)</strong>: el máximo y el mínimo de los <strong>primeros 15 minutos</strong> de la RTH. Es un imán clásico del inicio del día.</li>' +
        '</ul>' +
        '<p>Ejemplo: si ayer el S&amp;P hizo máximo en <strong>5325</strong> (PDH) y mínimo en <strong>5290</strong> (PDL), hoy el bot tendrá esos dos precios marcados. Un barrido sobre 5325 sería candidato a corto; un barrido bajo 5290, candidato a largo.</p>' +
        '<p>Cada nivel solo da <strong>una señal por día</strong>: una vez usado (o quemado), el bot no vuelve a operarlo hasta mañana. Cuantos más niveles vigila, más oportunidades aparecen, pero todas pasan los mismos filtros de calidad.</p>',
      claves: [
        'PDH / PDL — máximo y mínimo de la sesión RTH del día anterior',
        'ONH / ONL — máximo y mínimo de la sesión overnight (nocturna)',
        'Opening Range — máximo y mínimo de los primeros 15 minutos de la RTH',
        'Un nivel = una señal por día — usado o quemado, no se repite hasta mañana'
      ],
      quiz: {
        pregunta: '¿Qué son el PDH y el PDL?',
        opciones: ['El máximo y mínimo de la sesión nocturna', 'El máximo y mínimo de la sesión RTH del día anterior', 'El primer y último precio de hoy'],
        correcta: 1,
        explicacion: 'PDH = Previous Day High y PDL = Previous Day Low: el máximo y el mínimo de la sesión regular de ayer. Son los niveles más vigilados.'
      }
    },
    {
      fase: 'C',
      id: 'c5',
      titulo: 'El filtro de delta por percentil',
      subtitulo: 'Solo barridos con agresión extrema',
      duracion: '8 min',
      chart: null,
      contenido:
        '<p>No basta con que haya un sweep y un reclaim: el bot exige que el barrido se haya hecho con una agresión <strong>realmente extrema</strong>. Para eso usa un <strong>filtro de delta por percentil</strong>.</p>' +
        '<p>¿Qué es un percentil? Imagina que apuntas el delta (en valor absoluto) de las últimas <strong>200 velas</strong> de 5 minutos. El bot las ordena de menor a mayor. El <strong>percentil 90</strong> es el valor que supera al 90% de ellas: solo el 10% más extremo lo pasa.</p>' +
        '<p>El parámetro <strong>DeltaPercentile = 90</strong> significa exactamente eso: el delta del barrido tiene que estar entre el <strong>10% más fuerte</strong> de los últimos tiempos. Si la agresión es normalita, no entra: probablemente no haya stops disparándose en masa.</p>' +
        '<p>Además, el signo tiene que ser coherente. Para un largo (barrido de soporte), el delta debe ser <strong>vendedor</strong> (negativo): son las ventas en pánico que el bot quiere ver agotarse. Para un corto, comprador (positivo).</p>' +
        '<p>Este filtro es lo que separa esta estrategia de "comprar cualquier dip". El bot solo apuesta cuando la avalancha de agresión es tan grande que probablemente sea capitulación... justo antes de revertir.</p>',
      claves: [
        'Percentil 90 — el valor que supera al 90% de las medidas; solo el 10% más extremo',
        'DeltaPercentile = 90 — el delta del barrido debe estar entre el 10% más fuerte',
        'PercentileWindow = 200 — se comparan las últimas 200 velas de 5 min',
        'Signo del delta — vendedor para largos, comprador para cortos'
      ],
      quiz: {
        pregunta: 'Con DeltaPercentile = 90, ¿qué barridos deja pasar el filtro de delta?',
        opciones: ['Todos los barridos', 'Solo aquellos cuyo delta está entre el 10% más extremo de las últimas velas', 'Solo barridos con delta cero'],
        correcta: 1,
        explicacion: 'El percentil 90 deja pasar únicamente el 10% más extremo. El bot quiere agresión de capitulación, no movimientos normales.'
      }
    },
    {
      fase: 'C',
      id: 'c6',
      titulo: 'Por qué es un FADER',
      subtitulo: 'Operar contra el barrido',
      duracion: '6 min',
      chart: 'full_setup_short',
      contenido:
        '<p>Toda la estrategia se resume en una palabra: el bot es un <strong>fader</strong>. "To fade" en inglés es operar <strong>en contra</strong> de un movimiento, apostando a que se gira.</p>' +
        '<p>Cuando el precio barre un máximo con una avalancha de compras agresivas, la mayoría de la gente piensa "ruptura, voy largo". El fader hace lo contrario: si esa ruptura <strong>fracasa</strong> (el precio no aguanta arriba y vuelve a caer), el fader entra <strong>corto</strong>, contra el barrido. El diagrama muestra justo eso: un barrido de resistencia que falla y se convierte en una entrada corta.</p>' +
        '<p>¿Por qué tiene sentido? Porque ese barrido fallido deja a un montón de operadores <strong>atrapados</strong> en el lado equivocado. Cuando se den cuenta y cierren sus posiciones (comprando para cerrar sus cortos, o vendiendo para cerrar sus largos), empujarán el precio justo en la dirección del fader.</p>' +
        '<p>Por eso es tan importante todo lo anterior: la penetración controlada (2-8 ticks), el reclaim rápido (120 s) y el delta extremo (percentil 90). Sin ellos, el fader estaría apostando contra movimientos de verdad, que es la forma más rápida de perder. Con ellos, solo fadea las <strong>trampas</strong>.</p>',
      claves: [
        'Fader — opera CONTRA el barrido, apostando a que la ruptura fracasa',
        'Trapped traders — los atrapados en el lado equivocado; su cierre empuja a favor del fader',
        'Fade selectivo — solo trampas (penetración, reclaim y delta lo garantizan)'
      ],
      quiz: {
        pregunta: '¿Qué significa que el bot sea un "fader"?',
        opciones: ['Que sigue la tendencia y compra rupturas', 'Que opera contra el barrido, apostando a que la ruptura falsa se gira', 'Que solo opera de noche'],
        correcta: 1,
        explicacion: 'Un fader opera en contra del movimiento de ruptura, apostando a que es una trampa que se revertirá. Por eso entra en dirección del reclaim, no del barrido.'
      }
    },

    // ===================== FASE D — Gestión y régimen =====================
    {
      fase: 'D',
      id: 'd1',
      titulo: 'El stop estructural',
      subtitulo: 'Dónde se sale si la trampa falla',
      duracion: '7 min',
      chart: null,
      contenido:
        '<p>Cada operación necesita una red de seguridad: el <strong>stop loss</strong> (la orden que cierra la posición con una pérdida controlada si el mercado va en contra). El bot no lo pone en un sitio arbitrario, sino en un punto con sentido: el <strong>stop estructural</strong>.</p>' +
        '<p>La lógica: si la idea era "el barrido fracasó y el precio revierte", entonces el punto que <strong>invalida</strong> esa idea es el extremo del propio barrido. Si el precio vuelve allí, la trampa no era tal. Por eso el stop se coloca en el <strong>extremo del sweep, más un pequeño colchón</strong> (StopBufferTicks = 2 ticks).</p>' +
        '<p>El bot además controla que ese stop tenga un tamaño razonable:</p>' +
        '<ul>' +
        '<li><strong>MinStopPoints = 4:</strong> si el stop sale demasiado pequeño (menos de 4 puntos), el barrido era muy superficial; el bot lo descarta (sería puro ruido y los costes se lo comerían).</li>' +
        '<li><strong>MaxStopPoints = 10:</strong> si sale demasiado grande (más de 10 puntos), el riesgo es desproporcionado; también lo descarta.</li>' +
        '</ul>' +
        '<p>Como extra de seguridad, el bot tampoco acepta un stop mayor que <strong>2 veces el ATR</strong> (una medida de la volatilidad reciente). Así el riesgo siempre está adaptado a cómo de movido está el mercado ese día.</p>',
      claves: [
        'Stop loss — orden que cierra con pérdida controlada si el mercado va en contra',
        'Stop estructural — colocado en el extremo del sweep + colchón (StopBufferTicks = 2)',
        'MinStopPoints = 4 / MaxStopPoints = 10 — el stop debe estar en ese rango de puntos',
        'ATR — medida de volatilidad reciente; el stop no puede superar 2× ATR'
      ],
      quiz: {
        pregunta: '¿Por qué el stop se coloca en el extremo del barrido?',
        opciones: ['Porque es un número redondo', 'Porque es el punto que invalida la idea: si el precio vuelve ahí, la trampa no era real', 'Porque lo elige al azar'],
        correcta: 1,
        explicacion: 'El extremo del sweep es el nivel que, si se vuelve a alcanzar, demuestra que el barrido no fracasó. Es el punto lógico para admitir que la idea estaba equivocada.'
      }
    },
    {
      fase: 'D',
      id: 'd2',
      titulo: 'El target en múltiplos de R',
      subtitulo: 'Cuánto se busca ganar por trade',
      duracion: '6 min',
      chart: null,
      contenido:
        '<p>Una vez fijado el stop, el bot ya sabe cuánto arriesga. A esa cantidad de riesgo se le llama <strong>R</strong> (de "riesgo"). Es la unidad con la que se mide todo.</p>' +
        '<p>El objetivo de beneficio (<strong>target</strong>) se fija como un <strong>múltiplo de R</strong>. El parámetro es <strong>TargetR = 1,5</strong>: el bot busca ganar 1,5 veces lo que arriesga.</p>' +
        '<p>Ejemplo concreto: entras largo en 5300 con el stop en 5294 (riesgo de 6 puntos = 1R = 30$). El target se pone a 1,5R por encima: 6 × 1,5 = 9 puntos, o sea en 5309 (ganancia de 45$). Riesgas 30 para ganar 45.</p>' +
        '<p>¿Por qué medir en R y no en puntos fijos? Porque hace todas las operaciones <strong>comparables</strong>. Un trade que gana 1,5R es igual de bueno tanto si arriesgaba 4 puntos como 9. Y permite calcular fácil cuándo la estrategia es rentable: con TargetR = 1,5, el bot puede equivocarse en bastantes operaciones y aun así ganar, porque cada acierto vale más que cada fallo.</p>' +
        '<p>Detalle fino: el bot recalcula el target con el precio de entrada <strong>real</strong> (no el teórico), para mantener el 1,5R exacto aunque haya una pequeña diferencia en el llenado de la orden.</p>',
      claves: [
        'R — la cantidad arriesgada en un trade (la distancia al stop)',
        'TargetR = 1,5 — el objetivo es ganar 1,5 veces lo arriesgado',
        'Medir en R — hace todos los trades comparables y el sistema evaluable'
      ],
      quiz: {
        pregunta: 'Si arriesgas 8 puntos (1R) y TargetR es 1,5, ¿a cuántos puntos está tu objetivo?',
        opciones: ['8 puntos', '12 puntos', '4 puntos'],
        correcta: 1,
        explicacion: '1,5R sobre un riesgo de 8 puntos = 8 × 1,5 = 12 puntos de objetivo.'
      }
    },
    {
      fase: 'D',
      id: 'd3',
      titulo: 'Dónde brilla y dónde se aparta',
      subtitulo: 'Rango/chop sí, tendencia violenta no',
      duracion: '8 min',
      chart: 'lh_ll',
      contenido:
        '<p>Ninguna estrategia funciona en todas las condiciones. Lo honesto es saber <strong>cuándo</strong> tiene ventaja la nuestra. El bot es un fader (reversión a la media), así que su terreno natural es muy claro:</p>' +
        '<ul>' +
        '<li><strong>Rango / chop (mercado lateral):</strong> aquí <strong>BRILLA</strong>. El precio rebota entre niveles, los barridos fracasan una y otra vez. Es donde la estrategia consigue su mejor tasa de acierto.</li>' +
        '<li><strong>Tendencia suave:</strong> se <strong>degrada</strong> pero sigue positiva. Algunos fades fallan porque el precio continúa, pero los filtros recortan el daño.</li>' +
        '<li><strong>Tendencia violenta / crash:</strong> el bot <strong>se aparta</strong>. Sus filtros anti-tendencia detectan el peligro y dejan de operar casi del todo.</li>' +
        '</ul>' +
        '<p>El diagrama muestra una tendencia bajista (máximos y mínimos cada vez más bajos). Fadear ahí, comprando cada nuevo suelo, sería comprar cuchillos cayendo. Por eso el bot tiene dos guardianes:</p>' +
        '<ul>' +
        '<li><strong>Anti-trend-day:</strong> si el día abre fuera del rango del día anterior (señal de tendencia fuerte), bloquea los fades hasta que el mercado demuestre que se ha calmado.</li>' +
        '<li><strong>One-time-framing (OTF):</strong> mira las velas de 30 minutos; si detecta una tendencia clara y persistente, bloquea las operaciones que irían en su contra.</li>' +
        '</ul>' +
        '<p>La lección más importante: el bot no intenta ganar en todos los regímenes. En los malos, su mayor virtud es <strong>saber no jugar</strong> y preservar el capital.</p>',
      claves: [
        'Reversión a la media — la estrategia apuesta a que los extremos se giran',
        'Chop / rango — el terreno donde el fader brilla',
        'Anti-trend-day — bloquea fades si el día abre en modo tendencia fuerte',
        'One-time-framing (OTF) — bloquea operar contra una tendencia clara de 30 min'
      ],
      quiz: {
        pregunta: '¿En qué tipo de mercado funciona mejor esta estrategia de fade?',
        opciones: ['En una tendencia bajista violenta', 'En rango / chop (mercado lateral donde los barridos fracasan)', 'En cualquier mercado por igual'],
        correcta: 1,
        explicacion: 'El fader brilla en rango/chop, donde el precio rebota entre niveles y los barridos fallan. En tendencia violenta se aparta para no comprar cuchillos cayendo.'
      }
    },
    {
      fase: 'D',
      id: 'd4',
      titulo: 'Frecuencia y disciplina',
      subtitulo: 'Pocos trades buenos, sin curve-fitting',
      duracion: '7 min',
      chart: null,
      contenido:
        '<p>El objetivo del bot es ser un <strong>day-trader real</strong>: 1-2 operaciones al día, priorizando calidad. No se trata de operar mucho, sino de operar bien. Un día sin setups claros, no pasa nada por no operar.</p>' +
        '<p>Para evitar excesos, el bot tiene un tope: <strong>MaxTradesPerDay = 3</strong>. Como mucho 3 operaciones al día. Esto protege de los días raros y de encadenar pérdidas por insistir.</p>' +
        '<p>La parte más importante de la disciplina es invisible pero crítica: evitar el <strong>curve-fitting</strong> (sobreoptimización). Curve-fitting es ajustar tanto los parámetros a los datos del pasado que el sistema parece perfecto... pero solo en ese pasado concreto. En cuanto llega un mercado nuevo, se desmorona.</p>' +
        '<p>La regla de oro contra esto: <strong>un solo cambio por backtest</strong>, y se anota siempre el resultado. Si cambias cinco cosas a la vez y mejora, no sabrás cuál funcionó. Y cada cambio debe tener una <strong>razón</strong>, no hacerse "porque el número queda bonito".</p>' +
        '<p>Mejorar de verdad no es encontrar números mágicos: es confirmar que la ventaja es <strong>robusta</strong>, que aguanta en mercados distintos (alcista, bajista, lateral) y con muchas operaciones. Una muestra pequeña de 8 o 12 trades no demuestra nada; el objetivo son cientos.</p>',
      claves: [
        'MaxTradesPerDay = 3 — tope de operaciones diarias',
        'Curve-fitting — sobreoptimizar a los datos del pasado; el enemigo a evitar',
        'Un cambio por backtest — para saber qué funcionó de verdad',
        'Robustez — que la ventaja aguante en varios regímenes y con muchos trades'
      ],
      quiz: {
        pregunta: '¿Qué es el curve-fitting y por qué es peligroso?',
        opciones: ['Operar muchas veces al día; cansa al trader', 'Sobreajustar los parámetros al pasado; el sistema parece perfecto pero se rompe en mercados nuevos', 'Usar un stop demasiado grande'],
        correcta: 1,
        explicacion: 'El curve-fitting ajusta tanto el sistema a datos históricos concretos que deja de funcionar fuera de ellos. Por eso se cambia una cosa por test, con razón, y se valida en varios regímenes.'
      }
    },

    // ===================== FASE E — Psicología =====================
    {
      fase: 'E',
      id: 'e1',
      titulo: 'Pensar en probabilidades',
      subtitulo: 'El núcleo de Mark Douglas',
      duracion: '7 min',
      chart: null,
      contenido:
        '<p>Mark Douglas, autor de <em>Trading in the Zone</em>, dejó una idea que lo cambia todo: el trading no va de tener razón en cada operación, sino de pensar en <strong>probabilidades</strong>.</p>' +
        '<p>Su frase clave: "cualquier cosa puede pasar". Aunque la señal sea perfecta, esta operación concreta puede perder. Y no pasa nada, porque la ventaja no está en un trade, sino en la <strong>serie</strong> de muchos trades. Igual que un casino no sabe si ganará la próxima mano, pero sabe que tras miles de manos su ventaja se impone.</p>' +
        '<p>Esto encaja perfectamente con nuestro bot. La estrategia no acierta siempre; busca acertar más veces de las que falla y, gracias al target de 1,5R, ganar más en los aciertos que lo que pierde en los fallos. El resultado de <strong>una</strong> operación es prácticamente aleatorio; el de <strong>cientos</strong>, no.</p>' +
        '<p>El error psicológico más común es lo contrario: dar demasiada importancia al trade de ahora. Si pierdes uno, no significa que la estrategia esté rota. Si ganas uno, no significa que seas un genio. Solo es una muestra de una distribución. Pensar así te libera de la montaña rusa emocional y te deja ejecutar con calma.</p>',
      claves: [
        'Probabilidades — la ventaja vive en la serie de trades, no en uno solo',
        '"Cualquier cosa puede pasar" — una señal perfecta puede perder igualmente',
        'Mentalidad de casino — ventaja consistente aplicada muchas veces'
      ],
      quiz: {
        pregunta: 'Según Mark Douglas, ¿dónde está la ventaja de un trader?',
        opciones: ['En acertar cada operación individual', 'En la serie de muchas operaciones, pensando en probabilidades', 'En predecir el próximo movimiento con certeza'],
        correcta: 1,
        explicacion: 'La ventaja se manifiesta en la serie, no en el trade aislado. Cualquier operación puede perder; lo que importa es el resultado del conjunto.'
      }
    },
    {
      fase: 'E',
      id: 'e2',
      titulo: 'Ejecución mecánica y aceptar el riesgo',
      subtitulo: 'Definir la pérdida antes de entrar',
      duracion: '7 min',
      chart: null,
      contenido:
        '<p>Otra enseñanza de Mark Douglas: para operar sin miedo, hay que <strong>aceptar el riesgo de verdad</strong> antes de entrar. Eso significa saber exactamente cuánto puedes perder y estar en paz con ello <em>antes</em> de que ocurra.</p>' +
        '<p>El bot hace esto de forma perfecta y automática. En cada operación, antes de entrar, ya tiene definido su stop (la pérdida máxima) y su target. No improvisa, no mueve el stop por miedo, no se queda "a ver si recupera". La pérdida está aceptada de antemano, codificada en una orden.</p>' +
        '<p>A esto se le llama <strong>ejecución mecánica</strong>: seguir las reglas exactamente, sin dudar, operación tras operación. Es lo que más le cuesta a un humano y lo que mejor hace una máquina.</p>' +
        '<p>El humano duda: corta ganancias por miedo, deja correr pérdidas por esperanza, se salta señales tras una racha mala, se vuelve temerario tras una buena. Cada una de esas decisiones emocionales rompe la ventaja estadística. El bot, en cambio, ejecuta la regla número 50 igual que la número 1.</p>' +
        '<p>Aceptar el riesgo no es resignarse: es la condición para tener la mente despejada y dejar que la probabilidad trabaje a tu favor.</p>',
      claves: [
        'Aceptar el riesgo — saber y asumir la pérdida posible antes de entrar',
        'Ejecución mecánica — seguir las reglas sin dudar, trade tras trade',
        'Errores emocionales — cortar ganancias, dejar correr pérdidas, saltarse señales'
      ],
      quiz: {
        pregunta: '¿Qué significa "aceptar el riesgo" antes de entrar en una operación?',
        opciones: ['Esperar no perder nunca', 'Saber y asumir de antemano cuánto puedes perder, con el stop ya definido', 'Mover el stop si el trade va mal'],
        correcta: 1,
        explicacion: 'Aceptar el riesgo es definir y asumir la pérdida posible antes de entrar. Así no hay improvisación emocional: el stop está fijado de antemano.'
      }
    },
    {
      fase: 'E',
      id: 'e3',
      titulo: 'Por qué un bot ayuda a la disciplina',
      subtitulo: 'Quitar la emoción de la ecuación',
      duracion: '6 min',
      chart: null,
      contenido:
        '<p>Llegamos a la razón profunda por la que automatizar esta estrategia tiene tanto sentido. La mayor parte de lo que separa a un trader rentable de uno que pierde no es la estrategia: es la <strong>disciplina</strong> para ejecutarla. Y ahí el ser humano es su peor enemigo.</p>' +
        '<p>Un bot no siente miedo cuando va perdiendo, ni codicia cuando va ganando. No se salta una señal porque "tiene una corazonada". No mueve el stop "solo esta vez". No opera de más un viernes por aburrimiento. Hace, exactamente, lo que las reglas dicen. Siempre.</p>' +
        '<p>Esto es la materialización de todo lo que enseña Mark Douglas: pensar en probabilidades, aceptar el riesgo, ejecutar de forma mecánica. El bot <em>es</em> esa mentalidad ideal, convertida en código. No porque sea más listo, sino porque no tiene emociones que le saboteen.</p>' +
        '<p>Pero ojo: el bot no te libera de la psicología, solo cambia dónde se aplica. Tu disciplina ahora consiste en <strong>dejarlo trabajar</strong>: no apagarlo tras una racha de pérdidas (que estadísticamente llegan), no toquetear sus parámetros por nervios, confiar en la validación que hiciste con datos. El reto psicológico se traslada del "ejecutar cada trade" al "respetar el sistema".</p>' +
        '<p>Por eso aprendes todo esto: para confiar en el bot con criterio, no a ciegas. Entender por qué hace lo que hace es lo que te dará la calma para dejarlo operar.</p>',
      claves: [
        'Disciplina — el factor que más separa a quien gana de quien pierde',
        'El bot como mentalidad ideal — probabilidades + riesgo aceptado + ejecución mecánica, sin emoción',
        'Tu nuevo reto — respetar el sistema: no apagarlo ni toquetearlo por nervios'
      ],
      quiz: {
        pregunta: 'Con un bot operando, ¿en qué se convierte tu principal reto psicológico?',
        opciones: ['En ejecutar cada trade a mano con rapidez', 'En respetar el sistema: no apagarlo ni cambiarlo por nervios tras una racha mala', 'En desaparece por completo el reto psicológico'],
        correcta: 1,
        explicacion: 'El bot ejecuta sin emoción, pero tú debes resistir la tentación de interferir. La disciplina se traslada de ejecutar cada trade a respetar y confiar en el sistema validado.'
      }
    }
  ],
};
