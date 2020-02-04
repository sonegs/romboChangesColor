<?php

// Parametros de conexión

$host = "localhost"; // Este es el servidor local o localhost
$bd = "Pause&Play"; // nombre de la base de datos
$user = "root"; // usuario que tiene acceso
$pass = ""; // la constraseña de la BBDD, ubicada en MAMP/bin/phpmyadmin/config.inc.php. Si tienen problemas con el password, por favor, contacten con el creador de la web

$con = new mysqli($host, $user, $pass); // Conexión a nuestro Sistema Gestor de Base de Datos (MySQL)

if (mysqli_connect_errno()) { // este if controla los errores en la conexión

    echo "Connection failed: ".$con->connect_error;
    echo "La conexión ha fallado";
    exit();

}

mysqli_select_db($con, $bd) or die("<h1>Error en la conexión a la base de datos</h1>"); // Conexión a nuestra base de datos

mysqli_set_charset($con, "UTF8"); // La conexión devuelve los datos con caracteres en español (acentos, tildes, etc)

?>