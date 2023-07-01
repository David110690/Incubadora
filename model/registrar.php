<?php

require('db.php');

$nombre=$_POST['nombre'];
$tipoUsuario=$_POST['tipoUsuario'];
$dni=$_POST['dni'];
$password=$_POST['password'];

$con = conectar_api();
    if($con != 'No conectado'){
        $sql = "INSERT INTO usuario
        (Nombre, Tipo_usuario, Usuario, contraseña)
        VALUES('$nombre', '$tipoUsuario', '$dni', '$password')";
        $result = $con->query($sql);
        echo $result;
    }
    else{
        $con->query("ROLLBACK");
        return "Error";
    }
?>