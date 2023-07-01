<?php
require('db.php');
//function getDataTable(){

$desdeGrafico = $_GET['desdeGrafico'];
$hastaGrafico = $_GET['hastaGrafico'];

if($desdeGrafico != "" && $hastaGrafico != ""){
    $sql = "SELECT temperatura FROM datos 
    WHERE DATE(fecha) BETWEEN DATE_FORMAT('$desdeGrafico', '%Y-%m-%d') AND DATE_FORMAT('$hastaGrafico', '%Y-%m-%d')
    order by id asc;";
}else{
    $sql = "SELECT temperatura FROM datos
    order by id asc;";
}  
    $con = conectar_api();
    $con->query("START TRANSACTION");
    if($con != 'No conectado'){
        
        if ($row = $con->query($sql)) {
            while($data = mysqli_fetch_assoc($row)){
                $arreglo[] = $data;
            }
            echo json_encode($arreglo);
        }
        else{
            $con->query("ROLLBACK");
            return "Error";
        }
    }
    else{
        $con->query("ROLLBACK");
        return "Error";
    }
//}
?>