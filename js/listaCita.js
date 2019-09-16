function fecha()
{
    $('#txtNombre').text('Nombre');
    
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
      document.getElementById('fechaActualListar').value=ano+"-"+mes+"-"+dia;
}

function listaHoras()
{
    $.ajax({
        type: "GET",
        url: "DB/hora/listaHora.php",
        async : false,
        success: function(response) {
            let datos = JSON.parse(response);
            let row = "";


            for (const i in datos) 
            {            
                row += '<option value="'+ datos[i].hora +'">' + datos[i].hora + "</option>";
            }

            $("#selHorasListar").html(row);
        }
    });
}


function listarCitas()
{
    $.ajax({
        type: "GET",
        url: "DB/cita/listarCita.php",
        success: function(response) {
            let datos = JSON.parse(response);
            let row = "";

            for (const i in datos) 
            {
                if(datos[i].entregado == 1)
                {
                    $("#btnEntregado"+i).prop('disabled', true); 
                }

                row += "<tr>";
                row += "<td>" +  (parseInt(i) + 1)+ "</td>";
                row += "<td>" + datos[i].Matricula + "</td>";
                row += "<td> " + datos[i].Nombre + "</td>";
                row += "<td> " + datos[i].Fecha + "</td>";
                row += "<td> " + datos[i].hora + "</td>";
                row +=  '<td>' + (datos[i].entregado == 0 ? '<button id="btnEntregado'+i+'" class="btn btn-success btn-sm" style = "padding-left : 14px; padding-right : 14px; " onclick="entregarCarnet('+ "'" + datos[i].Matricula + "'"+ ')" data-toggle="modal" data-target="#modalRegistro" >Entregar</button>' 
                                                      : '<button  class="btn btn-danger btn-sm" style = "opacity : 1"  onclick="" disabled>Entregado</button>') + ' </td>' ; 
            }

            $("#tbodyListaCitas").html(row);
        }
    });
}

function listarFiltro()
{
    let variables = {
        fecha: $("#fechaActualListar").val(),
        hora: $("#selHorasListar").val()
    }
    $.ajax({
        type: "POST",
        url: "DB/cita/listarCitaFiltro.php",
        data: variables,
        success: function(response) 
        {
            let datos = JSON.parse(response);
            let row = "";
            

            for (const i in datos) 
            {  
                let matricula =
                row += "<tr>";
                row += "<td>" + (parseInt(i) + 1) + "</td>";
                row += "<td>" + datos[i].Matricula + "</td>";
                row += "<td> " + datos[i].Nombre + "</td>";
                row += "<td> " + datos[i].Fecha + "</td>";
                row += "<td> " + datos[i].hora + "</td>";
                row +=  '<td>' + (datos[i].entregado == 0 ? '<button id="btnEntregado'+i+'" class="btn btn-success btn-sm" style = "padding-left : 14px; padding-right : 14px; " onclick="entregarCarnet('+ "'" + datos[i].Matricula + "'"+ ')" data-toggle="modal" data-target="#modalRegistro" >Entregar</button>' 
                                                      : '<button  class="btn btn-danger btn-sm" style = "opacity : 1"  onclick="" disabled>Entregado</button>') + ' </td>' ; 
            } 
            $("#tbodyListaCitas").html(row);
        }
    });
}

function entregarCarnet(matricula)
{ 
    if (confirm("¿Está seguro de que este es el CARNET a entregar?"))
    {
            $.ajax({
            type: "GET",
            url: "DB/cita/entregarCarnet.php",
            data: "id="+matricula,
            success: function(response) 
            {
                if(response == 1)
                {
                    alert("Registro exitoso!");
                    location.reload();

                }else{
                    alert("Error al registrar al entrega de este carnet!");
                }
            }     

        });
    }
}


function checkTodosEvento () {

     let isChecked = $("#checkTodos").is(":checked");

    $("#fechaActualListar").prop ("disabled" , isChecked);
    $("#selHorasListar").prop ("disabled", isChecked);
    $("#txtBusqueda").val ("");

    if (isChecked)
    {
        listarCitas();

    }

    else
     {
       listarFiltro();

     }
  
    
}

$("#selHorasListar").change(function(){

    listarFiltro();

});

$("#fechaActualListar").change(function(){

    listarFiltro();

});



$(() => {

    
    fecha();
    listaHoras();
    checkTodosEvento();

   $("#txtBusqueda").keyup( function () {

   let value = $(this).val().toLowerCase();

    $("#tbodyListaCitas tr").filter (function () {

        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)


    });

   });


   $("#checkTodos").click (checkTodosEvento );


});
