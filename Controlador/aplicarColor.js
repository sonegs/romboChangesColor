// ******************************************************
// EN ESTE PRIMER BLOQUE, APARECE LA LLAMADA A LA BASE DE DATOS PARA QUE APAREZCA EL ÚLTIMO COLOR DE LA BASE DE DATOS
// ******************************************************

var randomColor; // he decidido declarar aquí la variable para poder utilizarla en las distintas partes del código

$(document).ready(function() { //se ejecuta este código cuando la página web esté cargada

    if (typeof randomColor == 'undefined') {
        $("#rombo").load("Modelo/BBDD/Consultas/devolverColor.php", function(colorDevuelto, statusTxt, xhr) { //al cargar el rombo, que llame al archivo devolverColor de PHP

            if (statusTxt == "success") { //si se ha realizado la comunicación correctamente

                document.getElementById('rombo').style.background = colorDevuelto; // cambia el color por el último color de la BBDD
                document.getElementById('rombo').style.color = colorDevuelto; // cambia el color del echo para que no aparezca

            }

            if (statusTxt == "error") { //si ha ocurrido un error en la comunicación con PHP lo imprime en consola

                console.log("Se ha producido el siguiente error: " + xhr.status + ": " + xhr.statusText); //indica el tipo de error en la comunicacion AJAX

            }

        });

    } else {

        cambiarColor(); // si no hay ningún color en la BBDD, invoca la función cambiarColor()

    }

    // ******************************************************
    // EN ESTE SEGUNDO BLOQUE, SE MUESTRA LA LLAMADA A LA FUNCION cambiarColor() Y LA LLAMADA A BASE DE DATOS PARA GUARDAR EL COLOR RANDOM
    // ******************************************************

    $("#rombo").click(function() { //al hacer click en el rombo

        cambiarColor(); // llamada a la función cambiarColor()

        //aqui pasamos la variable randomColor a PHP con ajax

        $.ajax({
            type: "POST", //tipo de método
            url: "Modelo/BBDD/Consultas/guardarColor.php", //url del archivo PHP con el que comunica
            data: { randomColor: randomColor }, //le enviamos la variable randomColor para que la guarde
            success: function() { // si la comunicación se produce correctamente, imprime un mensaje por consola

                console.log("Color cambiado y guardado en la base de datos!");

            },
            error: function() { // si se ha producido un error en la comunicación, imprime un mensaje por consola

                console.log("Ha ocurrido un error inesperado al cambiar el color");

            }

        });

    });

    // ******************************************************
    /* EN ESTE ULTIMO BLOQUE, APARECE LA FUNCION cambiarColor(), LA CUAL NOS PERMITE MODIFICAR EL COLOR DEL ROMBO. 
    HE DECIDIDO AGRUPAR TODO ESTE CÓDIGO EN UNA FUNCIÓN PARA PODER REUTILIZARLO FACILMENTE */
    // ******************************************************

    function cambiarColor() {

        /* Al hacer click en rombo, asigna un valor aleatorio a las variables x, y, z; y finalmente se añade 
            a la variable RandomColor para asignar el color del css -> background

        Se crean 3 variables y se les asignan números aleatorios a través de Math.random(). 
        Al ser decimal, se multiplica por 256 para adaptarlo al formato rgb
        A continuación, en la variable randomColor, se añaden los valores de las variables generadas de forma aleatoria
        y se aplica un formato para que encaje con el modelo rgb */

        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        randomColor = "rgb(" + x + "," + y + "," + z + ")";

        document.getElementById('rombo').style.background = randomColor; // da color al fondo de la figura
        document.getElementById('rombo').style.color = randomColor; // // da color al echo devuelvo por PHP para que no aparezca

        // me he permitido añadir este movimiento para hacer el cambio de color más dinámico. Sacude el rombo al hacer click en él
        $("#rombo").animate({ marginLeft: 0 }, 50).animate({ marginLeft: -15 }, 50).animate({ marginLeft: 0 }, 50);

    }
});