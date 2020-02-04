<?php

// ESTE ARCHIVO REALIZA LA PETICIÓN A LA BBDD PARA QUE DEVUELVA EL ÚLTIMO COLOR AL ROMBO

require_once "../conexion.php"; //añade el archivo de conexión

    $ultimoColor = ""; //declaramos la variable que nos va a devolver este archivo

    $query = "SELECT color_code FROM Colores ORDER BY ID DESC LIMIT 1"; // Sentencia SQL para seleccionar el último color de la base de datos

    if ( $sentencia = $con->prepare($query)){

        $devolverColor = mysqli_query($con, $query); //asigna la query a una variable

        while ($color = mysqli_fetch_row($devolverColor)) { //recorre la bbdd en forma de array

            $ultimoColor = $color[0]; //asigna el último color de la BBDD a la variable $ultimoColor
                
            echo $ultimoColor; //nos devuelve la variable final

        }

    } 
    
    $con->close(); //cierra la conexión con base de datos


?>
