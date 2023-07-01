<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Consulta MySQL- Tutorial 18</title>
</head>
<body>
<?php
include('db.php'); 

$query = "SELECT temperatura FROM datos";
$resultado= mysqli_query($conexion, $query);

?>
<form action="respuesta.php" method="POST">
  <select name="usuario">
  <?php
    while ($row=mysql_fetch_array($resultado))
      {
       echo "<option>";
        echo $row[0];
        echo "</option>";
      }
      mysqli_free_result($resultado);
      mysqli_close($conexion);
  ?>
  </select><br>
  <input type="date" name="fecha" ><br>
  <input type="submit" name="Enviar" >
</form>
</body> 
</html>



<!DOCTYPE html>
<html>
<head>
    <title>Respuesta MySQLL - Tutorial 18</title>
    <meta charset="UTF-8">
</head>
<body>
<?php

function temperatura_diaria ($usuario,$ano,$mes,$dia) {
    include('db.php');

$query = "SELECT temperatura, humedad FROM datos";

 $resultado=mysql_query($conexion, $query)

 while ($row=mysql_fetch_array($resultado))
 {
  echo "[";
  echo ($row[0]*1000)-10800000; //le resto 3 horas = 10800000 mill
  echo ",";
  echo $row[1];
  echo "],";
 }
}
?>

<div id="container1" style="width: 100%; height: 400px;"></div>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>

<script> 

$(function () {
    $('#container1').highcharts({
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        colors: ['#337ab7', '#cc3c1a'],
        title: {
            text: 'Temperatura'
        },
        xAxis: {
             type: 'datetime',
             
        },
        yAxis: {
            title: {
                text: 'Temperatura'
            }
        },

        
        series: [{
            name: 'Temp',
            data: [<?php 
                $usuario = $_POST ['usuario'];
                $fecha = $_POST ['fecha'];
                $ano = substr("$fecha", 0, 4);
                $mes = substr("$fecha", 5, 2);
                $dia = substr("$fecha", 8, 2);
                temperatura_diaria($usuario, $ano , $mes, $dia);
                ?>     
        ]}, 
      
    ],
    });
});
</script>
</body>
</html>