<?php



require_once "../conexion.php";

// se recoge el valor de la variable de jquery randomColor en la variable $color_rombo

$color_rombo = $_POST['randomColor']; //recoge la variable enviada por AJAX en la variable $color_rombo

$query = "INSERT INTO Colores (color_code) VALUES ('$color_rombo');"; //sentencia para añadir los campos a la base de datos

    if (mysqli_query($con, $query)) { // aplica la sentencia y controla algun posible error al hacer la sentencia
        
          die(); //sal del condicional

    } else{

        echo "Se ha producido un error en la consulta";

    }

    $con -> close(); //cierra la conexión con base de datos

?>