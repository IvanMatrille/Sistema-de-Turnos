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
                row += "<td>" + datos[i].id + "</td>";
                row += "<td>" + datos[i].Matricula + "</td>";
                row += "<td> " + datos[i].Nombre + "</td>";
                row += "<td> " + datos[i].Fecha + "</td>";
                row += "<td> " + datos[i].hora + "</td>";
                //row +=
                  //  '<td> <button id="btnEntregado'+i+'" class="btn btn-success btn-sm" onclick="entregarCarnet(' + datos[i].Matricula + ')" data-toggle="modal" data-target="#modalRegistro">Entregar</button> </td>';
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
            data: "id"+matricula,
            success: function(response) 
            {
                if(response == 1)
                {
                    alert("Registro exitoso!");

                }else{
                    alert("Error al registrar al entrega de este carnet!");
                }
            }     
    
        });
    }
}

$(() => {

    listarCitas();

});
