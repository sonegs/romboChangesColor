<?php

// Cookie para que se guarde el autor de la prueba

if(isset($_COOKIE["Copyright"])){

} else{

    setcookie("Copyright", "Prueba realizada por Miguel Cobo Martinez - 2020");
    
}

// Enlaza con el archivo HTML para mostrarlo en el navegador

include "Vista/cuerpo.html"; 

?>
