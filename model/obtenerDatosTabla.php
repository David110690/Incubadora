<?php
require('db.php');
//echo "mierda";
//function getDataTable(){
    $con = conectar_api();
    $con->query("START TRANSACTION");
    if($con != 'No conectado'){
        $sql = "SELECT id, temperatura, humedad, fecha, hora, nombre FROM datos dd
        inner join usuario uu on dd.usuario = uu.ID_USUARIO";
        if ($row = $con->query($sql)) {
            while($data = mysqli_fetch_assoc($row)){
                $arreglo["data"][] = $data;
            }
            echo json_encode($arreglo);
        }
        else{
            //echo "mierda";
            $con->query("ROLLBACK");
            return "Error";
        }
    }
    else{
        //echo "mierda";
        $con->query("ROLLBACK");
        return "Error";
    }
//}
?>