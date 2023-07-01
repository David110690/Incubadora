/*var dataSet = [
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],
    ['1', '21', '32', '2011/04/25', '03:50', 'David Travezaño'],

];*/

 
/*$(document).ready(function () {
    $('#example1').DataTable({
        ajax: 'datatable.php',
        //data: dataSet,
        columns: [
            { title: 'Id' },
            { title: 'Temperatura' },
            { title: 'Humedad' },
            { title: 'Fecha' },
            { title: 'Hora' },
            { title: 'Responsable' },
        ],
    });
});*/

/*$(document).ready(function(){
    $("#mostrar").click(function(){
        $('#target').show(3000);
        $('.target').show("slow");
     });
    $("#ocultar").click(function(){
        $('#target').hide(3000);
        $('.target').hide("fast");
     });
});*/

$(document).ready(function () {
    $("#login").on("click", function(e) {
        e.preventDefault();
        //var usuario = $("#usuario").val();
        //var password = $("#password").val();
        //alert(usuario);
        //style="display: none" -> para ocultar un div
        var usuario = $('input[type=number]').val();
        var password = $('input[type=password]').val();
        if(usuario == ''){
            $('#modalText').text("Favor de ingresar un Dni");
            $('#error').show(1000);
            $('#error').hide(3000);
        }else if(password == ''){
            $('#modalText').text("Favor de ingresar una contraseña");
            $('#error').show(1000);
            $('#error').hide(3000);
        }else{
            var parametros = {
                "usuario" : usuario,
                "password" : password
        };
        console.log(parametros); 
            $.ajax({
                type: "POST",
                url: "model/validar.php",
                data: parametros,
                dataType: "json",
                success: function(response){
                    console.log(response);
                    if(response == 1){
                        //console.log("Bien!!");
                        $(window).attr('location','inicio.php');
                        //$('#usuarioLogeado').text("David Travezaño");                                           
                        $('input[type=number]').val('');
                        $('input[type=password]').val('');
                    }else{
                        $('#modalText').text("Error de Autenticacion, vuelva a intentarlo!!");
                        $('#error').show(1000);
                        $('#error').hide(3000);
                        $('input[type=number]').val('');
                        $('input[type=password]').val('');
                    }
                },
                error: function(){
                    alert('Error en la peticiòn');
                },
                /* código a ejecutar sin importar si la petición falló o no
                complete : function(xhr, status) {
                    alert('Petición realizada');
                }*/
    
            });
        }
    }); 
    
    $("#registrate").on("click", function(e) {
        e.preventDefault();
        //var usuario = $("#usuario").val();
        //var password = $("#password").val();
        //alert(usuario);
        //style="display: none" -> para ocultar un div
        var nombre = $('#nombreReg').val();
        var tipoUsuario = $('#tipoUsuarioReg').val();
        var dni = $('#dniReg').val();
        var password = $('#passwordReg').val();
        if(nombre == ''){
            $('#modalText').text("Favor de ingresar un Nombre");
            $('#error').show(1000);
            $('#error').hide(3000);
        }else if(tipoUsuario == ''){
            $('#modalText').text("Favor de ingresar un tipo de usuario");
            $('#error').show(1000);
            $('#error').hide(3000);
        }else if(dni == ''){
            $('#modalText').text("Favor de ingresar un Dni");
            $('#error').show(1000);
            $('#error').hide(3000);
        }else if(password == ''){
            $('#modalText').text("Favor de ingresar un password");
            $('#error').show(1000);
            $('#error').hide(3000);
        }else{
            var parametros = {
                "nombre" : nombre,
                "tipoUsuario" : tipoUsuario,
                "dni" : dni,
                "password" : password
        };
        //console.log(parametros); 
        $.ajax({
            type: "POST",
            url: "model/registrar.php",
            data: parametros,
            dataType: "json",
            success: function(response){
                console.log(response);
                if(response == 1){
                    $('#modalText').text("Registro exitoso!!");
                    $('#error').show(1000);
                    $('#error').hide(3000);
                    $('#nombreReg').val('');
                    $('#tipoUsuarioReg').val('');
                    $('#dniReg').val('');
                    $('#passwordReg').val('');
                }else{
                    $('#modalText').text("Error de registro, vuelva a intentarlo!!");
                    $('#error').show(1000);
                    $('#error').hide(3000);
                    $('#nombreReg').val('');
                    $('#tipoUsuarioReg').val('');
                    $('#dniReg').val('');
                    $('#passwordReg').val('');
                }
            },
            error: function(){
                alert('Error en la peticiòn');
            },
            /* código a ejecutar sin importar si la petición falló o no
            complete : function(xhr, status) {
                alert('Petición realizada');
            }*/

        });
            
        }
    });

    var table = $('#example').DataTable({
        autoWidth: true,
        searching: true,
        //"paging":   false,
        //"ordering": false,
        //"info":     false,
        dom: 'rtip',
        columnDefs: [
            {
                targets: ['_all'],
                className: 'mdc-data-table__cell',
            },
        ],
        buttons:[ 
            {
                    extend:    'excelHtml5',
                    text:      'Exportar a Excel',
                    titleAttr: 'Exportar a Excel',
                    title:     'Título del documento',
                    exportOptions: {
                        columns: [2,3,4,5]
                    }
            },
            {
                    extend:    'pdfHtml5',
                    text:      'Exportar a PDF',
                    titleAttr: 'Exportar a PDF',
                    className: 'btn btn-danger',
                    title:     'Título del documento',
                    exportOptions: {
                        columns: [2,3,4,5]
                    }                    
            },
            {
                    extend:    'print',
                    text:      'Imprimir',
                    titleAttr: 'Imprimir',
                    className: 'btn btn-info',
                    exportOptions: {
                        columns: [2,3,4,5]
                    }
            }
        ],
    "ajax": {
        "url":"model/obtenerDatosTabla.php",
        "method":"POST"
        //"dataSrc":""
    },
    //data: dataSet,
    "columns": [
        { "data": "id" },
        { "data": "temperatura" },
        { "data": "humedad" },
        { "data": "fecha" },
        { "data": "hora" },
        { "data": "nombre" }
        ],
    });
    
});
