function detalleEstudiante(matricula)
{
    $.ajax({
        type: "GET",
        url: "DB/estudiante/detalleEstudiante.php",
        data: "matricula="+matricula,
        success: function(response)
        {
            let datos = JSON.parse(response);
        
            $("#txtNombre").text(datos[0].Nombre);
        }
    });
}

$(() => {

    detalleEstudiante( $("#matricula").val() );


});