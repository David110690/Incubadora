<?php
include ("home.html");
?>
<div>
<div class="input-group mb-3 mt-2">
    <div class="col-1">
    <input type="date" id="desdeGrafico" class="form-control">
    </div>
  <span class="m-3"></span>
  <div class="col-1">
    <input type="date" id="hastaGrafico" class="form-control">
    </div>
</div>
    <button id="graficar">Graficar</button>
</div>

<div id="container1" style="width: 100%; height: 400px;" class="mt-2"></div>
<script type="text/javascript" src="graficos.js"> 
//var data3 = [22.5,22.6,22.8,22.9,22.3,22.5,22.6,22.3,22.4,22.6,22.8,22.9,22.3];
//var data2 = [22,32,25,24,21,23,26,24,21,22,23,25,21,25,24,21,22,22,21,21,23];
//dibujar(data2);

/*$.ajax({
    type: "GET",
    url: "ObtenerDatosGrafico.php",
    //async: true,
    dataType: "json",
    success: function(response){
        //console.log(JSON.stringify(response));
        //var obj = JSON.stringify(response);
        //console.log(Object.values(response[0]));
        //console.log(response.length);
        //console.log(JSON.parse(response));
        var data1 = new Array();
        for(i=0;i<response.length;i++){
            data11 = data1.push(Object.values(response[i]).toString());
        }  
        dibujar(data1);
                         
    },
    error: function(){
        alert('Error en la peticiòn');
    },    
});*/

/*$.ajax({
    type: "GET",
    url: "ObtenerDatosGrafico.php",
    //async: true,
    dataType: "json", 
}).then(function(response){
    var temperatura = new Array();
    for(i=0;i<response.length;i++){
        data11 = temperatura.push(Object.values(response[i]).toString());
    }  
    console.log(temperatura);
    $(function () {
    $('#container1').highcharts({
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        colors: ['#337ab7', '#cc3c1a'],
        title: {
            text: 'Incubadora UTP'
        },
        xAxis: {
             type: 'id',
             tickInterval: 1
             
        },
        yAxis: {
            title: {
                text: 'Temperatura',
                tickInterval: 1,
                minorTickInterval: 0.1,
            }
        },

        
        series: [{
            name: 'Temp',
            data: [2,1],
            pointStart: 1
        }, 
        {
            name: 'Hum',
            data: [2,1],
            pointStart: 1
        }
      
    ],
    });
});
});

function digujar(temperatura){
    console.log("mierda");
    $(function () {
    $('#container1').highcharts({
        chart: {
            type: 'line',
            zoomType: 'x'
        },
        colors: ['#337ab7', '#cc3c1a'],
        title: {
            text: 'Incubadora UTP'
        },
        xAxis: {
             type: 'id',
             tickInterval: 1
             
        },
        yAxis: {
            title: {
                text: 'Temperatura',
                tickInterval: 1,
                minorTickInterval: 0.1,
            }
        },

        
        series: [{
            name: 'Temp',
            data: temperatura,
            pointStart: 1
        }, 
        {
            name: 'Hum',
            data: temperatura,
            pointStart: 1
        }
      
    ],
    });
});
}*/  
</script>
