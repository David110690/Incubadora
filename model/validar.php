<?php

require('db.php');

/*if($filas){
    header("location:home.html");

}else{
    header("location:error.html");
    
}*/

$USUARIO=$_POST['usuario'];
$PASSWORD=$_POST['password'];

$con = conectar_api();
    $con->query("START TRANSACTION");
    if($con != 'No conectado'){
        $sql = "SELECT* FROM usuario where Usuario = '$USUARIO' and contraseña ='$PASSWORD'";
        $row = $con->query($sql);
        $filas = mysqli_num_rows($row);
        if ($filas) {          
            /*while($data = mysqli_fetch_assoc($row)){
                $arreglo["data"][] = $data;
            }
            echo json_encode($arreglo);
            header("location:home.html");*/
            echo $filas;
        }
        else{
            /*$con->query("ROLLBACK");
            return "Error";
            header("location:error.html");*/
            echo $filas;
        }
    }
    else{
        $con->query("ROLLBACK");
        return "Error";
    }
?>