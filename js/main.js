const delay = ms => new Promise(res => setTimeout(res, ms));
const allEqual = arr => arr.every(val => JSON.stringify(val) == JSON.stringify(arr[0]));

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

        // { local: equipos["Ñublense"], visitante: equipos["Aucas"] },
        // { local: equipos["Racing"], visitante: equipos["Flamengo"] },

        // { local: equipos["Aucas"], visitante: equipos["Racing"] },
        // { local: equipos["Ñublense"], visitante: equipos["Flamengo"] },

        // { local: equipos["Aucas"], visitante: equipos["Ñublense"] },
        // { local: equipos["Flamengo"], visitante: equipos["Racing"] },

        // { local: equipos["Flamengo"], visitante: equipos["Aucas"] },
        // { local: equipos["Racing"], visitante: equipos["Ñublense"] }
    ],
    B = [
        { local: equipos["DIM"], visitante: equipos["Internacional"] },
        { local: equipos["Metropolitanos"], visitante: equipos["Nacional"] },

        { local: equipos["Internacional"], visitante: equipos["Metropolitanos"] },
        { local: equipos["Nacional"], visitante: equipos["DIM"] },

        // { local: equipos["Internacional"], visitante: equipos["Nacional"] },
        // { local: equipos["DIM"], visitante: equipos["Metropolitanos"] },

        // { local: equipos["DIM"], visitante: equipos["Nacional"] },
        // { local: equipos["Metropolitanos"], visitante: equipos["Internacional"] },

        // { local: equipos["Nacional"], visitante: equipos["Internacional"] },
        // { local: equipos["Metropolitanos"], visitante: equipos["DIM"] },

        // { local: equipos["Nacional"], visitante: equipos["Metropolitanos"] },
        // { local: equipos["Internacional"], visitante: equipos["DIM"] }
    ],
    C = [
        { local: equipos["CCP"], visitante: equipos["Barcelona"] },
        { local: equipos["Bolivar"], visitante: equipos["Palmeiras"] },

        { local: equipos["Barcelona"], visitante: equipos["Bolivar"] },
        { local: equipos["Palmeiras"], visitante: equipos["CCP"] },

        // { local: equipos["CCP"], visitante: equipos["Bolivar"] },
        // { local: equipos["Barcelona"], visitante: equipos["Palmeiras"] },

        // { local: equipos["Bolivar"], visitante: equipos["Barcelona"] },
        // { local: equipos["CCP"], visitante: equipos["Palmeiras"] },

        // { local: equipos["Bolivar"], visitante: equipos["CCP"] },
        // { local: equipos["Palmeiras"], visitante: equipos["Barcelona"] },

        // { local: equipos["Palmeiras"], visitante: equipos["Bolivar"] },
        // { local: equipos["Barcelona"], visitante: equipos["CCP"] }
    ],
    D = [
        { local: equipos["Strongest"], visitante: equipos["River"] },
        { local: equipos["SCP"], visitante: equipos["Fluminense"] },

        { local: equipos["Fluminense"], visitante: equipos["Strongest"] },
        { local: equipos["River"], visitante: equipos["SCP"] },

        // { local: equipos["Fluminense"], visitante: equipos["River"] },
        // { local: equipos["SCP"], visitante: equipos["Strongest"] },

        // { local: equipos["Strongest"], visitante: equipos["Fluminense"] },
        // { local: equipos["SCP"], visitante: equipos["River"] },

        // { local: equipos["River"], visitante: equipos["Fluminense"] },
        // { local: equipos["Strongest"], visitante: equipos["SCP"] },

        // { local: equipos["Fluminense"], visitante: equipos["SCP"] },
        // { local: equipos["River"], visitante: equipos["Strongest"] }
    ],
    E = [
        { local: equipos["Argentinos"], visitante: equipos["IDV"] },
        { local: equipos["Liverpool"], visitante: equipos["Corinthians"] },

        { local: equipos["IDV"], visitante: equipos["Liverpool"] },
        { local: equipos["Corinthians"], visitante: equipos["Argentinos"] },

        // { local: equipos["Liverpool"], visitante: equipos["Argentinos"] },
        // { local: equipos["Corinthians"], visitante: equipos["IDV"] },

        // { local: equipos["Liverpool"], visitante: equipos["IDV"] },
        // { local: equipos["Argentinos"], visitante: equipos["Corinthians"] },

        // { local: equipos["Argentinos"], visitante: equipos["Liverpool"] },
        // { local: equipos["IDV"], visitante: equipos["Corinthians"] },

        // { local: equipos["IDV"], visitante: equipos["Argentinos"] },
        // { local: equipos["Corinthians"], visitante: equipos["Liverpool"] }
    ],
    F = [
        { local: equipos["DPP"], visitante: equipos["ColoColo"] },
        { local: equipos["Monagas"], visitante: equipos["Boca"] },

        { local: equipos["Boca"], visitante: equipos["DPP"] },
        { local: equipos["ColoColo"], visitante: equipos["Monagas"] },

        // { local: equipos["ColoColo"], visitante: equipos["Boca"] },
        // { local: equipos["DPP"], visitante: equipos["Monagas"] },

        // { local: equipos["Monagas"], visitante: equipos["ColoColo"] },
        // { local: equipos["DPP"], visitante: equipos["Boca"] },

        // { local: equipos["Monagas"], visitante: equipos["DPP"] },
        // { local: equipos["Boca"], visitante: equipos["ColoColo"] },

        // { local: equipos["Boca"], visitante: equipos["Monagas"] },
        // { local: equipos["ColoColo"], visitante: equipos["DPP"] }
    ],
    G = [
        { local: equipos["AlianzaLima"], visitante: equipos["Paranaense"] },
        { local: equipos["Mineiro"], visitante: equipos["Libertad"] },

        { local: equipos["Paranaense"], visitante: equipos["Mineiro"] },
        { local: equipos["Libertad"], visitante: equipos["AlianzaLima"] },

        // { local: equipos["Mineiro"], visitante: equipos["AlianzaLima"] },
        // { local: equipos["Libertad"], visitante: equipos["Paranaense"] },

        // { local: equipos["Mineiro"], visitante: equipos["Paranaense"] },
        // { local: equipos["AlianzaLima"], visitante: equipos["Libertad"] },

        // { local: equipos["Paranaense"], visitante: equipos["Libertad"] },
        // { local: equipos["AlianzaLima"], visitante: equipos["Mineiro"] },

        // { local: equipos["Paranaense"], visitante: equipos["AlianzaLima"] },
        // { local: equipos["Libertad"], visitante: equipos["Mineiro"] }
    ],
    H = [
        { local: equipos["Patronato"], visitante: equipos["ATN"] },
        { local: equipos["Melgar"], visitante: equipos["Olimpia"] },

        { local: equipos["Olimpia"], visitante: equipos["Patronato"] },
        { local: equipos["ATN"], visitante: equipos["Melgar"] },

        // { local: equipos["ATN"], visitante: equipos["Olimpia"] },
        // { local: equipos["Patronato"], visitante: equipos["Melgar"] },

        // { local: equipos["Patronato"], visitante: equipos["Olimpia"] },
        // { local: equipos["Melgar"], visitante: equipos["ATN"] },

        // { local: equipos["Melgar"], visitante: equipos["Patronato"] },
        // { local: equipos["Olimpia"], visitante: equipos["ATN"] },

        // { local: equipos["ATN"], visitante: equipos["Patronato"] },
        // { local: equipos["Olimpia"], visitante: equipos["Melgar"] }
    ]
]
const bombosEliminatorias = [
    bombo1 = [
        equipos["Palmeiras"], equipos["Boca"], equipos["Olimpia"], equipos["Corinthians"], 
        equipos["Fluminense"], equipos["Internacional"], equipos["Libertad"], equipos["Racing"]
    ],
    bombo2 = [
        equipos["Flamengo"], equipos["River"], equipos["IDV"], equipos["Nacional"], 
        equipos["ATN"], equipos["Barcelona"], equipos["ColoColo"], equipos["Mineiro"]
    ]
]

$(document).ready(function () {
    //Carga header
    //Carga funcionalidad: sorteo fase de grupos
    $.each(bombosGrupos, function(bombo, equipos) {
        $.each(equipos, function(index, equipo) {
            agregarEquipoHeader(+(bombo > 1), equipo.abreviacion);
            agregarEquipoBombo("#sorteo-fase-grupos", bombo+1, equipo);
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

    //Carga funcionalidad: sorteo fase eliminatoria
    $.each(bombosEliminatorias, function(bombo, equipos) {
        $.each(equipos, function(index, equipo) {
            agregarEquipoBomboEliminatorias("#sorteo-fase-eliminatoria", bombo+1, equipo);
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
        sortearFaseDeGrupos();
    });

    //Simulación fase de grupos
    $("#selector-funcionalidades .cards .grupos button").on("click", function () {
        $("#selector-funcionalidades").hide();
        $("section#funcionalidades h1.titulo").text("Simular Fase de Grupos");
        $("section#funcionalidades").show();
        $("section#funcionalidades #fase-grupos").show();
    });

    $("#fase-grupos .fixture .grupo .partido .resultado input").on("change", function () {
        //Obtenemos el resultado ingresado
        var resultadoLocal = "";
        var resultadoVisitante = "";

        //Buscamos el resultado del rival
        if($(this).hasClass("local")) {
            resultadoLocal = $(this).val();
            resultadoVisitante = $(this).parent().find("input.visitante").val();
        } else {
            resultadoVisitante = $(this).val();
            resultadoLocal = $(this).parent().find("input.local").val();
        }
        
        //Comparamos los resultados y marcamos el resultado en los equipos
        if(resultadoLocal != "" && resultadoVisitante != "") {
            const local = $(this).parent().parent().find(".equipo[data-parcialidad='local']");
            const visitante = $(this).parent().parent().find(".equipo[data-parcialidad='visitante']");
            
            if(resultadoLocal > resultadoVisitante) {
                $(local).attr("data-resultado", "G");
                $(local).attr("data-difGol", resultadoLocal-resultadoVisitante);
                $(visitante).attr("data-resultado", "P");
                $(visitante).attr("data-difGol", resultadoVisitante-resultadoLocal);   
            } else if(resultadoLocal == resultadoVisitante) {
                $(local).attr("data-resultado", "E");
                $(local).attr("data-difGol", 0);
                $(visitante).attr("data-resultado", "E");
                $(visitante).attr("data-difGol", 0);
            } else {
                $(local).attr("data-resultado", "P");
                $(local).attr("data-difGol", resultadoLocal-resultadoVisitante);
                $(visitante).attr("data-resultado", "G");
                $(visitante).attr("data-difGol", resultadoVisitante-resultadoLocal);
            }
        }
    });

    $("#fase-grupos #simularGrupos").on("click", function() {
        const grupo = $(this).attr("data-grupo");
        const equiposGrupo = $("#fase-grupos .grupos .grupo" + grupo + " .equipos .equipo");
        
        $.each(equiposGrupo, function(index, equipo) {
            obtenerPuntosGrupos(grupo, equipo);
        });
        ordenarGrupo(grupo);
        
        $("#fase-grupos .fixture .grupo" + grupo).hide();
        setTimeout(() => {
            $("#fase-grupos .grupos .grupo" + grupo).hide();
            $("#fase-grupos .filtro-grupos #grupo" + grupo).removeClass("active");
            
            $("#fase-grupos .filtro-grupos #grupo" + (parseInt(grupo)+1)).addClass("active");
            $("#fase-grupos .grupos .grupo" + (parseInt(grupo)+1)).show();
            $("#fase-grupos .fixture .grupo" + (parseInt(grupo)+1)).css("display", "flex");

            if(grupo < 8) {
                $(this).attr("data-grupo", parseInt(grupo)+1);
            } else {
                $("#fase-grupos #simularGrupos").hide();

                $("#fase-grupos .grupos .grupo .equipos .equipo:nth-last-child(-n+2)").remove();
                $("#fase-grupos .grupos .grupo").show();
                $("#fase-grupos .grupos").addClass("vista-final");
            }
        }, 2000);
    });
    
    //Sorteo fase eliminatoria
    $("#selector-funcionalidades .cards .sorteo-eliminatorias button").on("click", function () {
        $("#selector-funcionalidades").hide();
        $("section#funcionalidades h1.titulo").text("Simular sorteo Eliminatorias");
        $("section#funcionalidades").show();
        $("section#funcionalidades #sorteo-fase-eliminatoria").show();
    });

    $("#sorteo-fase-eliminatoria #sortear").on("click", function () {
        sortearFaseEliminatoria();
    });
});

//Creación de header
function agregarEquipoHeader(fila, abreviacionEquipo) {
    const divEquipo = $("<div>");
    $(divEquipo).addClass("equipo");
    $(divEquipo).css("background-image", `url('img/equipos/${abreviacionEquipo}.png')`);

    $(`header .equipos .fila${fila}`).append(divEquipo);
}

//Creación de bombos
function agregarEquipoBombo(parent, bombo, equipo) {
    const imagen = $("<img>");
    $(imagen).attr("src", "img/equipos/" + equipo.abreviacion + ".PNG");

    const titulo = $("<h6>");
    $(titulo).text(equipo.nombre);

    const divEquipo = $("<div>");
    $(divEquipo).addClass("equipo");
    $(divEquipo).append(imagen);
    $(divEquipo).append(titulo);
    $(divEquipo).attr("data-campeon", equipo.campeon);
    $(divEquipo).attr("data-fasePrevia", equipo.fasePrevia);
    $(divEquipo).attr("data-pais", equipo.pais);

    $(`${parent} .bombo${bombo}`).append(divEquipo);
}

function agregarEquipoBomboEliminatorias(parent, bombo, equipo) {
    const imagen = $("<img>");
    $(imagen).attr("src", "img/equipos/" + equipo.abreviacion + ".PNG");

    const divEquipo = $("<div>");
    $(divEquipo).addClass("equipo");
    $(divEquipo).append(imagen);
    
    $(`${parent} .bombo${bombo}`).append(divEquipo);
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
    $(diferenciaGol).html("Dif. de gol: <span class='goles'>0</span>");
    const divEstadisticas = $("<div>");
    $(divEstadisticas).addClass("estadisticas");
    $(divEstadisticas).append(puntos);
    $(divEstadisticas).append(diferenciaGol);


    const divEquipo = $("<div>");
    $(divEquipo).addClass("equipo");
    $(divEquipo).attr("data-equipo", abreviacion);
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
    $(divLocal).attr("data-parcialidad", "local");
    $(divLocal).attr("data-equipo", local.abreviacion);
    $(divLocal).append(imagenLocal);
    $(divLocal).append(tituloLocal);

    const resultadoLocal = $("<input>");
    $(resultadoLocal).attr("type", "number");
    $(resultadoLocal).addClass("local");
    const separadorResultado = $("<span>");
    $(separadorResultado).text("-");
    const resultadoVisitante = $("<input>");
    $(resultadoVisitante).attr("type", "number");
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
    $(divVisitante).attr("data-parcialidad", "visitante");
    $(divVisitante).attr("data-equipo", visitante.abreviacion);
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
/** Fase de grupos **/
function sortearFaseDeGrupos() {    
    const sorteo = {
        grupo0: new Array(),
        grupo1: new Array(),
        grupo2: new Array(),
        grupo3: new Array(),
        grupo4: new Array(),
        grupo5: new Array(),
        grupo6: new Array(),
        grupo7: new Array()
    };

    sortearBombos(sorteo, 0);
    sortearBombos(sorteo, 1);
    sortearBombos(sorteo, 2);
    sortearBombos(sorteo, 3);

    acomodarEquipos(sorteo);
}

function sortearBombos(sorteo, bombo) {
    var grupoInicial = 0;
    const equiposBombo = [...bombosGrupos[bombo]];

    //Si es el bombo 0, agregamos el campeón al grupo A
    if(bombo == 0) {
        grupoInicial = 1;
        
        const campeon = equiposBombo.filter(equipo => equipo.campeon)[0];
        sorteo[`grupo0`].push(campeon);
        equiposBombo.splice(equiposBombo.indexOf(campeon), 1);
    }
    
    //Realizamos el sorteo de cada grupo
    for(var i=grupoInicial; i<8;) {
        i = sortearEquipoParaGrupo(i, sorteo, equiposBombo);
    }

    console.log("Bombo " + bombo + " sorteado!");
}

function acomodarEquipos(sorteo) {
    $(`#sorteo-fase-grupos .sorteo .grupo .equipo`).remove();
    
    const sorteoOrdenado = new Array();
    for(var i=0; i<4; i++) {
        sorteoOrdenado.push({grupo: 0, datos: sorteo[`grupo0`][i]});
        sorteoOrdenado.push({grupo: 1, datos: sorteo[`grupo1`][i]});
        sorteoOrdenado.push({grupo: 2, datos: sorteo[`grupo2`][i]});
        sorteoOrdenado.push({grupo: 3, datos: sorteo[`grupo3`][i]});
        sorteoOrdenado.push({grupo: 4, datos: sorteo[`grupo4`][i]});
        sorteoOrdenado.push({grupo: 5, datos: sorteo[`grupo5`][i]});
        sorteoOrdenado.push({grupo: 6, datos: sorteo[`grupo6`][i]});
        sorteoOrdenado.push({grupo: 7, datos: sorteo[`grupo7`][i]});
    }

    for(var i=0; i<sorteoOrdenado.length; i++) {
        asignarGrupo(sorteoOrdenado[i], i);
    }
}

function sortearEquipoParaGrupo(grupo, equiposSorteados, equiposBombo) {
    var intentos = 0;
    
    var equipoSorteado = equiposBombo[generateRandom(equiposBombo.length)];
    while(!equipoPuedeEntrarEnGrupo(equiposSorteados[`grupo${grupo}`], equipoSorteado) || !sorteoNoArriesgaOtroGrupo(grupo, equiposSorteados, equiposBombo, equipoSorteado)) {
        if(intentos > 20) {
            resetearSorteoBombo(equiposSorteados, equiposBombo);
            return 0;
        }
        
        equipoSorteado = equiposBombo[generateRandom(equiposBombo.length)];
        intentos++;
    }

    equiposSorteados[`grupo${grupo}`].push(equipoSorteado);
    equiposBombo.splice(equiposBombo.indexOf(equipoSorteado), 1);

    return grupo+1;
}

function equipoPuedeEntrarEnGrupo(equiposGrupo, equipoSorteado) {
    if(!equipoSorteado.fasePrevia) {
        const paisesEquiposGrupo = $.map(equiposGrupo, function(equipo, i) {
            return equipo.pais;
        });
        return !paisesEquiposGrupo.includes(equipoSorteado.pais);
    }

    return true;
}

function sorteoNoArriesgaOtroGrupo(grupo, equiposSorteados, equiposBombo, equipoSorteado) {
    if(grupo == 7) {
        return true;
    }
    
    equiposSorteados[`grupo${grupo}`].push(grupo);
    equiposBombo.splice(equiposBombo.indexOf(equipoSorteado), 1);

    var minimoOtrosGrupos = 8;
    const listaEquiposPosiblesPorGrupo = {
        grupo0: new Array(),
        grupo1: new Array(),
        grupo2: new Array(),
        grupo3: new Array(),
        grupo4: new Array(),
        grupo5: new Array(),
        grupo6: new Array(),
        grupo7: new Array()
    }
    for(var i=grupo+1; i<8; i++) {
        const equiposPorGrupo = equiposBombo.filter(equipo => equipoPuedeEntrarEnGrupo(equiposSorteados[`grupo${i}`], equipo));
        listaEquiposPosiblesPorGrupo[`grupo${i}`] = equiposPorGrupo;

        const equiposPosibles = equiposBombo.filter(equipo => equipoPuedeEntrarEnGrupo(equiposSorteados[`grupo${i}`], equipo)).length;
        if(equiposPosibles < minimoOtrosGrupos) {
            minimoOtrosGrupos = equiposPosibles;
        }
    }
    
    equiposSorteados[`grupo${grupo}`].pop();
    equiposBombo.push(equipoSorteado);

    if(grupo < 6 && minimoOtrosGrupos == 1) {
        const listasEquiposPosibles = new Array();
        $.each(listaEquiposPosiblesPorGrupo, function(i, equiposPosiblesGrupo) {
            if(equiposPosiblesGrupo.length) {
                listasEquiposPosibles.push($.map(equiposPosiblesGrupo, function(equipo, i) {
                    return equipo.nombre;
                }));
            } else {
                delete listaEquiposPosiblesPorGrupo[`${i}`];
            }
        });

        return !allEqual(listasEquiposPosibles); 
    }

    return minimoOtrosGrupos>0 && minimoOtrosGrupos<8;
}

function resetearSorteoBombo(equiposSorteados, equiposBombo) {
    const bomboActual = equiposSorteados["grupo0"].length;
    
    var contadorGrupo = 0;
    while(equiposSorteados[`grupo${contadorGrupo}`].length == bomboActual) {
        equiposBombo.push(equiposSorteados[`grupo${contadorGrupo}`].pop());
        contadorGrupo++;
    }
}

function asignarGrupo(equipo, nroEquipo) {
    setTimeout(() => {
        //Creación del equipo
        const imagen = $("<img>");
        $(imagen).attr("src", "img/equipos/" + equipo.datos.abreviacion + ".PNG");
    
        const titulo = $("<h6>");
        $(titulo).text(equipo.datos.nombre);
    
        const divEquipo = $("<div>");
        $(divEquipo).addClass("equipo");
        $(divEquipo).append(imagen);
        $(divEquipo).append(titulo);
    
        //Acomodo al equipo en el grupo correspondiente
        const grupoHtml = $(`#sorteo-fase-grupos .sorteo .grupo${equipo.grupo}`);
        $(divEquipo).slideUp("slow", function(){
            $(divEquipo).appendTo(grupoHtml).hide(); 		
            $(divEquipo).slideDown(); 	
        });
    }, 1000 * nroEquipo);
}

/** Eliminatorias **/
function sortearFaseEliminatoria() {
    const sorteo = {
        bombo1: new Array(),
        bombo2: new Array()
    };   

    for(var bombo=1; bombo>=0; bombo--) {
        const equiposBombo = [...bombosEliminatorias[bombo]];

        //Realizamos el sorteo de cada bombo
        for(var i=1; i<=8; i++) {
            sortearEquipoParaEliminatorias(bombo, i, sorteo, equiposBombo);
        }

        console.log("Bombo " + bombo + " sorteado!");
    }
    
    $(`#sorteo-fase-eliminatoria .equipo p`).remove();
    
    const sorteoOrdenado = sorteo["bombo2"].concat(sorteo["bombo1"]);
    for(var i=0; i<sorteoOrdenado.length; i++) {
        acomodarEquipoEliminatorias(sorteoOrdenado[i], i)
    }
}

function sortearEquipoParaEliminatorias(bombo, partido, equiposSorteados, equiposBombo) {    
    var equipoSorteado = equiposBombo[generateRandom(equiposBombo.length)];
    equiposSorteados[`bombo${bombo+1}`].push(equipoSorteado);
    equiposBombo.splice(equiposBombo.indexOf(equipoSorteado), 1);
}

function acomodarEquipoEliminatorias(equipo, nroEquipo) {
    setTimeout(() => {
        const nombre = $("<p>");
        $(nombre).text(equipo.nombre);
        
        $(nombre).slideUp("slow", function(){
            $(nombre).appendTo(`#sorteo-fase-eliminatoria .equipo${nroEquipo}`).hide(); 		
            $(nombre).slideDown(); 	
        });
    }, 1000 * nroEquipo);
}

//Simulaciones
function obtenerPuntosGrupos(grupo, equipo) {
    const abreviacionEquipo = $(equipo).attr("data-equipo");
    
    var puntosObtenidos = 0;
    var diferenciaGol = 0;

    const partidosEquipo = $(`#fase-grupos .fixture .grupo${grupo} .equipo[data-equipo='${abreviacionEquipo}']`);
    $.each(partidosEquipo, function(index, partido) {
        if($(partido).attr("data-resultado") != undefined) {
            puntosObtenidos += mapearPuntosResultado($(partido).attr("data-resultado"));
            diferenciaGol += parseInt($(partido).attr("data-difGol"));
        }
    });

    $(equipo).find(".estadisticas .pts span").text(puntosObtenidos);
    $(equipo).find(".estadisticas .difGol span").text(diferenciaGol);
}

function mapearPuntosResultado(resultado) {
    switch(resultado) {
        case "G":
            return 3;
        case "E":
            return 1;
        case "P":
            return 0;
    }
}
            
function ordenarGrupo(grupo) {
    var equipos = $(`#fase-grupos .grupos .grupo${grupo} .equipo`);
    equipos = $(equipos).toArray().sort(ordenGrupos);

    $(`#fase-grupos .grupos .grupo${grupo} .equipos`).html(equipos);
}

function ordenGrupos(a, b) {
    //Ordeno por puntos
    if(parseInt($(a).find(".estadisticas p.pts span").text()) > parseInt($(b).find(".estadisticas p.pts span").text())) {
        return -1;
    }
    
    if(parseInt($(a).find(".estadisticas p.pts span").text()) < parseInt($(b).find(".estadisticas p.pts span").text())) {
        return 1;
    }

    //Si los puntos son iguales, comparo por diferencia de gol
    if(parseInt($(a).find(".estadisticas p.difGol span").text()) > parseInt($(b).find(".estadisticas p.difGol span").text())) {
        return -1;
    }

    if(parseInt($(a).find(".estadisticas p.difGol span").text()) < parseInt($(b).find(".estadisticas p.difGol span").text())) {
        return 1;
    }

    //Si empatan en diferencia de gol, son iguales
    return 0;
}

//Adicional
function generateRandom(maxLimit = 100){
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
}