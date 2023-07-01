$(document).ready(function () {
    //var tem = [22,32,25,24,21,23,26,24,21,22,23,25,21,25,24,21,22,22,21,21,23];  

    $desdeGrafico = $('#desdeGrafico').val();
    $hastaGrafico = $('#hastaGrafico').val();
    dibujar($desdeGrafico,$hastaGrafico);

    $("#graficar").on("click", function(e) {
        e.preventDefault();
        $desdeGrafico = $('#desdeGrafico').val();
        $hastaGrafico = $('#hastaGrafico').val();
        //console.log($desdeGrafico,$hastaGrafico);
        dibujar($desdeGrafico,$hastaGrafico);

    });

    function dibujar($desdeGrafico,$hastaGrafico){
        var temperatura = traerDatosBd($desdeGrafico,$hastaGrafico);
        var humedad = traerDatosBd2($desdeGrafico,$hastaGrafico);
        //console.log(temperatura);
        //console.log(humedad);
        setTimeout(() => {
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
                        data: humedad,
                        pointStart: 1
                    }        
                ],
                });
            });
          }, 3000);
    }

    function traerDatosBd($desdeGrafico,$hastaGrafico){
        var parametros = {
            "desdeGrafico" : $desdeGrafico,
            "hastaGrafico" : $hastaGrafico
        };
        var temperatura = new Array();
        $.ajax({
            type: "GET",
            url: "model/ObtenerDatosGrafico.php",
            //async: false,
            data: parametros,
            dataType: "json", 
            success: function(response){
                //console.log(response)
                for(i=0;i<response.length;i++){
                    data11 = temperatura.push(parseInt(Object.values(response[i])));
                }                   
            }
        });
        return temperatura;
    }
    function traerDatosBd2($desdeGrafico,$hastaGrafico){
        var parametros = {
            "desdeGrafico" : $desdeGrafico,
            "hastaGrafico" : $hastaGrafico
        };
        var humedad = new Array();
        $.ajax({
            type: "GET",
            url: "model/ObtenerDatosGrafico2.php",
            //async: false,
            data: parametros,
            dataType: "json", 
            success: function(response){
                for(i=0;i<response.length;i++){
                    data11 = humedad.push(parseInt(Object.values(response[i])));
                }                   
            }
        });
        return humedad;
    }
});

