<?php
/*include('db.php');

$query = "SELECT * FROM datos";


$resultado= mysqli_query($conexion, $query);

if(!$resultado){
    die("Error");
}else{
    while($data = mysqli_fetch_assoc($resultado)){
        $arreglo["data"][] = $data;
    }
    echo json_encode($arreglo);
}
mysqli_free_result($resultado);
mysqli_close($conexion);*/
include ("home.html");
?>
<div>
<div class="input-group mb-3 mt-2">
    <div class="col-1">
    <input type="date" id="desdeTabla" class="form-control">
    </div>
  <span class="m-3"></span>
  <div class="col-1">
    <input type="date" id="hastaTabla" class="form-control">
    </div>
</div>
    <button id="tabular">Tabular</button>
</div>

<div class="row" >
    <div clas="col-12">
    <table id="example" class="table mdl-data-table tabla" style="width:100%">
    <thead>
    <tr>
        <th>Id</th>
        <th>Temperatura</th>
        <th>Humedad</th>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Usuario</th>
    </tr>
    </thead>
    <tfoot>        
    </tfoot>
</table>
    </div>
</div>
