function detalleEstudiante(matricula)
{
    $.ajax({
        type: "GET",
        url: "DB/estudiante/detalleEstudiante.php",
        data: "matricula="+matricula,
        success: function(response)
        {
            let datos = JSON.parse(response);

            $("#txtMatricula").text(datos[0].Matricula),
            $("#txtNombre").text(datos[0].Nombre)
        }
    });
}

$(() => {

    detalleEstudiante( $("#matricula").val() );

});