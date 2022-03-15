// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>Suena el despertador</h1>\
        <img src='media/games/tutorial/despertador.png' class='float_right' width=300>\
        <p>Suena el despertador de Juan una mañana de un Sábado 5 de marzo de 2022. Juan es un gran aficionado del Atlético de Madrid y hoy va  ir a Madrid desde Jaén a ver un partido de su equipo junto a su padre, o eso es lo que ellos piensan.</p>\
        \
        <p>Su padre ayer le dijo que debían salir a las 12 de la mañana como muy tarde para estar a la hora justa en el partido de las 4 de la tarde. Juan decide entonces levantarse a las 11 y va a la cocina a desayunar y duda entre comer <a href='galletas'>unas galletas con leche un vaso de leche</a> o <a href='pizza'>un trozo de pizza frío</a> que sobró de la cena de anoche. Parece que el día va sobre ruedas.</p>\
        \
        "
    ),
    
galletas: new undum.SimpleSituation(
    "<p>Finalmente, Juan decide ir a lo seguro y desayunar las galletas con una pinta increíble.</p>\
    \
    <p>Más tarde, ya preparados, Juan y su padre parten hacia Madrid con el coche tranquilamente escuchando su música favorita.</p>\
    \
    <p>Se han olvidado de antes de salir a carretera recargar la gasolina del coche y se dan cuenta a mitad de trayecto. Pero tienen la gasolina justa para llegar a Madrid y ya allí echar gasolina. </p>\
    \
    <p>Juan y su padre entonces debaten si deben <a href='gasolinaya'>pararse ya a echar gasolina</a> o <a href='gasolinadespues'>arriesgarse y echar en Madrid</a>.</p>",
    
    {
        heading: "Desayuna galletas",
        diplayOrder: 2,
        tags: ["topic"]
    }
),
    
gasolinaya: new undum.SimpleSituation(
    "<p>Deciden parar ya a echar gasolina y no arriesgar a un mal cálculo y quedarse tirados en la carretera.</p>\
    \
     <p>Después de tres horas y varios minutos de viaje, por fin <a href='partido'>llegan al estadio para ver el partido</a>.</p>",
    
    {
        heading: "Echan gasolina",
        diplayOrder: 2,
        tags: ["topic"],
        enter: function(character, system, from) {
            system.setQuality("gasolinacoche", 100);
        }
    }
),
    
gasolinadespues: new undum.SimpleSituation(
    "<img src='media/games/tutorial/grua.jpeg' class='float_right' width=300>\
     <p>Juan y su padre deciden esperar y parar a echar gasolina en Madrid porque calculan que queda suficiente como para llegar.</p>\
     <p>Cuando llevan un tiempo más de viaje, el coche se queda sin gasolina. No habían calculado bien la gasolina restante.</p>\
     <p>Tienen que llamar a una grúa porque se han quedado tirados en mitad de la carretera y no llegarán a tiempo al partido. De hecho cuando llega la grúa ya quedan 30 minutos de partido y no merece la pena ir hasta allí, por lo que piden un taxi y <a href='casa'>se van hacia casa</a>.</p>\
    ",
    
    {
        heading: "Esperan",
        diplayOrder: 2,
        tags: ["topic"],
        enter: function(character, system, from) {
            system.setQuality("gasolinacoche", 0);
        }
    }
),
    
partido: new undum.SimpleSituation(
    "<img src='media/games/tutorial/estadio.jpeg' class='float_right' width=300>\
     <p>Cuando entran al estadio y miran a su alrededor quedan absolutamente impresionados con lo grande que es y como cambia de verlo en la tele a verlo en persona con sus propios ojos.</p>\
    \
     <p>Pero al tiempo se dan cuenta de que hay unos sitios delante aparentemente libres desde los cuáles se ve mucho mejor que desde donde ellos están sentados, entonces se piensan si <a href='asientosdelante'>cambiarse a los asientos de delante</a> o <a href='mismosasientos'>quedarse en sus asientos </a> por si algún responsable de seguridad del estadio les puede decir algo.</p>\
    ",
    
    {
        heading: "Llegan al partido",
        diplayOrder: 2,
        tags: ["topic"]
    }
),
    
asientosdelante: new undum.SimpleSituation(
    "<p>Finalmente deciden cambiarse de asientos para ver mejor, pero lo peor está por venir.</p>\
     <p>Cuando un guardia de seguridad de la zona donde estaban sentados los ve, se acerca hacia ellos para decirles que si ese no era su asiento no podían sentarse ahí ya que era más caro del que ellos habían comprado. El de seguridad debió tener un mal día porque decidió echar del estadio a la mitad del partido a Juan y su padre sin alguna razón de peso.</p>\
     <p>Los dos se tuvieron que <a href='casa'>ir hacia casa</a> muy enfadados ya que piensan que con devolverles a sus asientos hubiera sido suficiente.</p>\
    ",
    
    {
        heading: "Se cambian de asiento",
        diplayOrder: 2,
        tags: ["topic"]
    }
),
    
mismosasientos: new undum.SimpleSituation(
    "<p>Deciden no jugársela y se quedan en sus asientos iniciales y disfrutar del partido sin problemas.</p>\
     <p>El partido termina y su equipo se hace con una victoria épica en el último minuto de partido.</p>\
     <p>Juan y su padre se <a href='casa'>van a casa</a> muy alegres y eufóricos por la victoria de su equipo.</p>\
    ",
    
    {
        heading: "Se quedan en sus asientos",
        diplayOrder: 2,
        tags: ["topic"]
    }
),
    
pizza: new undum.SimpleSituation(
    "<p>Juan decide desayunar el trozo de pizza que sobró de anoche.</p>\
     <p>Una vez terminan de desayunar todos, cogen el coche para irse hacia Madrid. A mitad del viaje Juan se empieza a encontrar mal y todo parece indicar que el desayuno le ha podido sentar mal.</p>\
     <p>Tienen que <a href='motel'>parar en un motel</a>.</p>\
    ",
    {
        heading: "Desayuna pizza",
        diplayOrder: 2,
        tags: ["topic"]
    }
),
    
motel: new undum.SimpleSituation(
    "<p>Van a un motel cercano de donde estaban para comprar algo para que Juan se sintiera mejor y descansara un poco aunque iban un poco justos de tiempo.</p>\
     <p>Allí su padre le compra zumo de naranja, pero Juan no muestra mejora alguna. Finalmente deciden <a href='casa'>volver a casa</a> ya que Juan empeora, con malestar general e incluso fiebre. Esperan que sea una simple indigestión y no algo más serio...</p>\
     ",
    {
        heading: "Van al motel",
        diplayOrder: 2,
        tags: ["topic"]
    }
),
    
casa: new undum.SimpleSituation(
    "<p>Juan y su padre se van hacia casa con total normalidad.</p>\
     <p>Cuando llegan a Jaén, Juan le cuenta la experiencia a su madre que no había podido ir ya que estaba enferma.</p>\
    ",
    
    {
        heading: "Se van a casa",
        diplayOrder: 2,
        tags: ["topic"]
    }
),
    

    // NB: The 'hub' situation which is the main list of topics, is
    // defined wholly in the HTML file, and doesn't have an entry in
    // the game.situations dictionary in this file.

    // For variety, here we define a situation using the top-level
    // Situation type. This is a neat approach to generate text by
    // looking it up in the HTML document. For static text that makes
    // more sense than writing it longhand.
    situations: new undum.Situation({
        enter: function(character, system, from) {
            system.write($("#s_situations").html());
        },
        tags: ["topic"],
        optionText: "What Undum Games are Made Of",
        displayOrder: 1
    }),
    
};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    gasolinacoche: new undum.IntegerQuality(
        "Gasolina", {priority:"0001", group:'stats'}
    ),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.gasolinacoche = 50;
    system.setCharacterText("<p>Gasolina actual del coche.</p>");
};

