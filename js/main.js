const delay = ms => new Promise(res => setTimeout(res, ms));

const equipos = {
    "AlianzaLima": { nombre: "Alianza Lima", abreviacion: "ALI", pais: "PER" },
    "Argentinos": { nombre: "Argentinos Juniors", abreviacion: "ARG", pais: "ARG" },
    "ATN": { nombre: "Atlético Nacional", abreviacion: "ATN", pais: "COL" },
    "Aucas": { nombre: "Aucas", abreviacion: "AUC", pais: "ECU" },
    "Barcelona": { nombre: "Barcelona SC", abreviacion: "BSC", pais: "ECU" },
    "Boca": { nombre: "Boca Juniors", abreviacion: "BOC", pais: "ARG" },
    "Bolivar": { nombre: "Bolívar", abreviacion: "BOL", pais: "BOL" },
    "ColoColo": { nombre: "Colo Colo", abreviacion: "COL", pais: "CHI" },
    "Corinthians": { nombre: "Corinthians", abreviacion: "COR", pais: "BRA" },
    "Flamengo": { nombre: "Flamengo", abreviacion: "FLA", campeon: true, pais: "BRA" },
    "Fluminense": { nombre: "Fluminense", abreviacion: "FLU", pais: "BRA" },
    "IDV": { nombre: "Independiente del Valle", abreviacion: "IDV", pais: "ECU" },
    "Internacional": { nombre: "Internacional", abreviacion: "INT", pais: "BRA" },
    "Libertad": { nombre: "Libertad", abreviacion: "LIB", pais: "PAR" },
    "Melgar": { nombre: "Melgar", abreviacion: "MEL", pais: "PER" },
    "Metropolitanos": { nombre: "Metropolitanos", abreviacion: "MET", pais: "VEN" },
    "Monagas": { nombre: "Monagas", abreviacion: "MON", pais: "VEN" },
    "Nacional": { nombre: "Nacional", abreviacion: "NAC", pais: "URU" },
    "Olimpia": { nombre: "Olimpia", abreviacion: "OLI", pais: "PAR" },
    "Palmeiras": { nombre: "Palmeiras", abreviacion: "PAL", pais: "BRA" },
    "Paranaense": { nombre: "Athletico Paranaense", abreviacion: "CAP", pais: "BRA" },
    "Racing": { nombre: "Racing Club", abreviacion: "RAC", pais: "ARG" },
    "River": { nombre: "River Plate", abreviacion: "RIV", pais: "ARG" },
    "Strongest": { nombre: "The Strongest", abreviacion: "STR", pais: "BOL" },

    "Mineiro": { nombre: "Atlético Mineiro", abreviacion: "CAM", fasePrevia: true, pais: "BRA" },
    "CCP": { nombre: "Cerro Porteño", abreviacion: "CCP", fasePrevia: true, pais: "PAR" },
    "DPP": { nombre: "Deportivo Pereira", abreviacion: "DPP", pais: "COL" },
    "DIM": { nombre: "Independiente Medellín", abreviacion: "DIM", fasePrevia: true, pais: "COL" },
    "Liverpool": { nombre: "Liverpool", abreviacion: "LIV", pais: "URU" },
    "Ñublense": { nombre: "Ñublense", abreviacion: "NUB", pais: "CHI" },
    "Patronato": { nombre: "Patronato", abreviacion: "PAT", pais: "ARG" },
    "SCP": { nombre: "Sporting Cristal", abreviacion: "SCL", fasePrevia: true, pais: "PER" }
}
const bombosGrupos = [
    bombo1 = [
        equipos["Flamengo"], equipos["Palmeiras"], equipos["Boca"], equipos["River"], 
        equipos["IDV"], equipos["Nacional"], equipos["Olimpia"], equipos["Paranaense"]
    ],
    bombo2 = [
        equipos["ATN"], equipos["Barcelona"], equipos["ColoColo"], equipos["Corinthians"],
        equipos["Fluminense"], equipos["Internacional"], equipos["Libertad"], equipos["Racing"]
    ],
    bombo3 = [
        equipos["AlianzaLima"], equipos["Argentinos"], equipos["Aucas"], equipos["Bolivar"],
        equipos["Melgar"], equipos["Metropolitanos"], equipos["Monagas"], equipos["Strongest"]
    ],
    bombo4 = [
        equipos["Mineiro"], equipos["CCP"], equipos["DPP"], equipos["DIM"],
        equipos["Liverpool"], equipos["Ñublense"], equipos["Patronato"], equipos["SCP"]
    ]
]
const grupos = [
    A = [
        equipos["Flamengo"],
        equipos["Racing"],
        equipos["Aucas"],
        equipos["Ñublense"]
    ],
    B = [
        equipos["Nacional"],
        equipos["Internacional"],
        equipos["Metropolitanos"],
        equipos["DIM"]
    ],
    C = [
        equipos["Palmeiras"],
        equipos["Barcelona"],
        equipos["Bolivar"],
        equipos["CCP"]
    ],
    D = [
        equipos["River"],
        equipos["Fluminense"],
        equipos["Strongest"],
        equipos["SCP"]
    ],
    E = [
        equipos["IDV"],
        equipos["Corinthians"],
        equipos["Argentinos"],
        equipos["Liverpool"]
    ],
    F = [
        equipos["Boca"],
        equipos["ColoColo"],
        equipos["Monagas"],
        equipos["DPP"]
    ],
    G = [
        equipos["Paranaense"],
        equipos["Libertad"],
        equipos["AlianzaLima"],
        equipos["Mineiro"]
    ],
    H = [
        equipos["Olimpia"],
        equipos["ATN"],
        equipos["Melgar"],
        equipos["Patronato"]
    ]
]
const fixtureGrupos = [
    A = [
        { local: equipos["Aucas"], visitante: equipos["Flamengo"] },
        { local: equipos["Ñublense"], visitante: equipos["Racing"] },

        { local: equipos["Flamengo"], visitante: equipos["Ñublense"] },
        { local: equipos["Racing"], visitante: equipos["Aucas"] },

        { local: equipos["Ñublense"], visitante: equipos["Aucas"] },
        { local: equipos["Racing"], visitante: equipos["Flamengo"] },

        { local: equipos["Aucas"], visitante: equipos["Racing"] },
        { local: equipos["Ñublense"], visitante: equipos["Flamengo"] },

        { local: equipos["Aucas"], visitante: equipos["Ñublense"] },
        { local: equipos["Flamengo"], visitante: equipos["Racing"] },

        { local: equipos["Flamengo"], visitante: equipos["Aucas"] },
        { local: equipos["Racing"], visitante: equipos["Ñublense"] }
    ],
    B = [
        { local: equipos["DIM"], visitante: equipos["Internacional"] },
        { local: equipos["Metropolitanos"], visitante: equipos["Nacional"] },

        { local: equipos["Internacional"], visitante: equipos["Metropolitanos"] },
        { local: equipos["Nacional"], visitante: equipos["DIM"] },

        { local: equipos["Internacional"], visitante: equipos["Nacional"] },
        { local: equipos["DIM"], visitante: equipos["Metropolitanos"] },

        { local: equipos["DIM"], visitante: equipos["Nacional"] },
        { local: equipos["Metropolitanos"], visitante: equipos["Internacional"] },

        { local: equipos["Nacional"], visitante: equipos["Internacional"] },
        { local: equipos["Metropolitanos"], visitante: equipos["DIM"] },

        { local: equipos["Nacional"], visitante: equipos["Metropolitanos"] },
        { local: equipos["Internacional"], visitante: equipos["DIM"] }
    ]
]

$(document).ready(function () {
    //Carga header
    const equipos = $("header .equipos .equipo");
    $.each(equipos, function(index, equipo) {
        const imagen = $(equipo).attr("data-equipo") + ".png";
        $(equipo).css("background-image", `url('img/equipos/${imagen}')`);
    });

    //Carga funcionalidad: sorteo fase de grupos
    $.each(bombosGrupos, function(bombo, equipos) {
        $.each(equipos, function(index, equipo) {
            agregarEquipoBombo(bombo+1, equipo.nombre, equipo.abreviacion, equipo.campeon, equipo.fasePrevia, equipo.pais);
        });
    });

    //Carga funcionalidad: simulación fase de grupos
    $.each(grupos, function(grupo, equipos) {
        $.each(equipos, function(index, equipo) {
            agregarEquipoGrupo(grupo+1, equipo.nombre, equipo.abreviacion);
        });
    });
    $.each(fixtureGrupos, function(grupo, partidos) {
        $.each(partidos, function(index, partido) {
            agregarPartidoGrupo(grupo+1, partido.local, partido.visitante);
        });
    });

    //Sorteo fase de grupos
    $("#selector-funcionalidades .cards .sorteo-grupos button").on("click", function () {
        $("#selector-funcionalidades").hide();
        $("section#funcionalidades h1.titulo").text("Simular sorteo Fase de Grupos");
        $("section#funcionalidades").show();
        $("section#funcionalidades #sorteo-fase-grupos").show();
    });

    $("#sorteo-fase-grupos #sortear").on("click", function () {
        $(this).parent().remove();
        sortearFaseDeGrupos();
    });

    //Simulación fase de grupos
    $("#selector-funcionalidades .cards .grupos button").on("click", function () {
        $("#selector-funcionalidades").hide();
        $("section#funcionalidades h1.titulo").text("Simular Fase de Grupos");
        $("section#funcionalidades").show();
        $("section#funcionalidades #fase-grupos").show();
    });
});

//Creación de bombos
function agregarEquipoBombo(bombo, equipo, abreviacion, esCampeon, vieneDeFasePrevia, pais) {
    const imagen = $("<img>");
    $(imagen).attr("src", "img/equipos/" + abreviacion + ".PNG");

    const titulo = $("<h6>");
    $(titulo).text(equipo);

    const divEquipo = $("<div>");
    $(divEquipo).addClass("equipo");
    $(divEquipo).append(imagen);
    $(divEquipo).append(titulo);
    $(divEquipo).attr("data-campeon", esCampeon);
    $(divEquipo).attr("data-fasePrevia", vieneDeFasePrevia);
    $(divEquipo).attr("data-pais", pais);

    $("#sorteo-fase-grupos .bombo" + bombo).append(divEquipo);
}

//Creación de grupos
function agregarEquipoGrupo(grupo, equipo, abreviacion) {
    const imagen = $("<img>");
    $(imagen).attr("src", "img/equipos/" + abreviacion + ".PNG");
    const titulo = $("<h3>");
    $(titulo).text(equipo);
    const divDatos = $("<div>");
    $(divDatos).addClass("datos");
    $(divDatos).append(imagen);
    $(divDatos).append(titulo);

    const puntos = $("<p>");
    $(puntos).addClass("pts");
    $(puntos).html("Puntos: <span>0<span>");
    const diferenciaGol = $("<p>");
    $(diferenciaGol).addClass("difGol");
    $(diferenciaGol).html("Dif. de gol: <span class='signo'>+</span> <span class='goles'>0</span>");
    const divEstadisticas = $("<div>");
    $(divEstadisticas).addClass("estadisticas");
    $(divEstadisticas).append(puntos);
    $(divEstadisticas).append(diferenciaGol);


    const divEquipo = $("<div>");
    $(divEquipo).addClass("equipo");
    $(divEquipo).append(divDatos);
    $(divEquipo).append(divEstadisticas);

    $("#fase-grupos .grupos .grupo" + grupo + " .equipos").append(divEquipo);
}

function agregarPartidoGrupo(grupo, local, visitante) {
    const imagenLocal = $("<img>");
    $(imagenLocal).attr("src", "img/equipos/" + local.abreviacion + ".PNG");
    const tituloLocal = $("<h3>");
    $(tituloLocal).text(local.nombre);
    const divLocal = $("<div>");
    $(divLocal).addClass("equipo");
    $(divLocal).append(imagenLocal);
    $(divLocal).append(tituloLocal);

    const resultadoLocal = $("<input>");
    $(resultadoLocal).attr("type", "text");
    $(resultadoLocal).addClass("local");
    const separadorResultado = $("<span>");
    $(separadorResultado).text("-");
    const resultadoVisitante = $("<input>");
    $(resultadoVisitante).attr("type", "text");
    $(resultadoVisitante).addClass("visitante");
    const divResultado = $("<div>");
    $(divResultado).addClass("resultado");
    $(divResultado).append(resultadoLocal);
    $(divResultado).append(separadorResultado);
    $(divResultado).append(resultadoVisitante);

    const imagenVisitante = $("<img>");
    $(imagenVisitante).attr("src", "img/equipos/" + visitante.abreviacion + ".PNG");
    const tituloVisitante = $("<h3>");
    $(tituloVisitante).text(visitante.nombre);
    const divVisitante = $("<div>");
    $(divVisitante).addClass("equipo");
    $(divVisitante).append(imagenVisitante);
    $(divVisitante).append(tituloVisitante);

    const divPartido = $("<div>");
    $(divPartido).addClass("partido");
    $(divPartido).append(divLocal);
    $(divPartido).append(divResultado);
    $(divPartido).append(divVisitante);

    $("#fase-grupos .fixture .grupo" + grupo).append(divPartido);
}

//Sorteos
function sortearFaseDeGrupos() {
    //Acomodamos al campeón como cabeza de serie del grupo A
    const campeon = $("#sorteo-fase-grupos .bombos .bombo1 .equipo[data-campeon=true]");
    asignarGrupo(campeon, $("#sorteo-fase-grupos .sorteo .grupo0"));
    
    //Sorteamos los equipos del bombo 1
    setTimeout(() => {    
        const equiposBombo1 = $("#sorteo-fase-grupos .bombos .bombo1 .equipo");
        for (let i=1; i<8; i++) {
            sortearBombo("1", i, equiposBombo1, 7);
        }
    }, 1000);
    
    //Sorteamos los equipos del bombo 2
    setTimeout(() => {    
        const equiposBombo2 = $("#sorteo-fase-grupos .bombos .bombo2 .equipo");
        for (let i=0; i<8; i++) {
            sortearBombo("2", i, equiposBombo2, 8);
        }
    }, 9000);

    //Sorteamos los equipos del bombo 3
    setTimeout(() => {    
        const equiposBombo3 = $("#sorteo-fase-grupos .bombos .bombo3 .equipo");
        for (let i=0; i<8; i++) {
            sortearBombo("3", i, equiposBombo3, 8);
        }
    }, 17000);

    //Sorteamos los equipos del bombo 4
    setTimeout(() => {    
        const equiposBombo4 = $("#sorteo-fase-grupos .bombos .bombo4 .equipo");
        for (let i=0; i<8; i++) {
            sortearBombo("4", i, equiposBombo4, 8);
        }
    }, 25000);
}

function sortearBombo(bombo, grupo, equipos, equiposSorteados) {
    setTimeout(() => {
        var intentos = 0;
        var equipo = equipos[generateRandom(equiposSorteados)];    
        while($(equipo).attr("data-sorteado") != undefined || !puedeIngresarEnGrupo(bombo, grupo, equipo)) {
            if(intentos > 100) {
                break;
            }
            equipo = equipos[generateRandom(equiposSorteados)];
            intentos++;
        }

        if(intentos > 100) {
            location.reload();
        }

        asignarGrupo(equipo, $(`#sorteo-fase-grupos .sorteo .grupo${grupo}`));
        
        if(grupo == 7) {
            $(`#sorteo-fase-grupos .bombo${bombo}`).remove();
        }
    }, 1000 * grupo);
}

function puedeIngresarEnGrupo(bombo, grupo, equipo) {
    const equiposGrupo = $(`#sorteo-fase-grupos .sorteo .grupo${grupo} .equipo`).length;
    if(equiposGrupo >= bombo) return false;

    const entroPorFasePrevia = $(equipo).attr("data-faseprevia");
    if(!entroPorFasePrevia) {
        const equiposGrupoMismoPais = $(`#sorteo-fase-grupos .sorteo .grupo${grupo} .equipo[data-pais='${$(equipo).attr("data-pais")}']`).length;
        if(equiposGrupoMismoPais >= 1) return false;
    }

    return true;
}

function asignarGrupo(equipo, grupo) {
    $(equipo).slideUp("slow", function(){
        $(equipo).appendTo(grupo).hide(); 		
        $(equipo).slideDown(); 	
    });

    $(equipo).attr("data-sorteado", true);
}

//Adicional
function generateRandom(maxLimit = 100){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
}