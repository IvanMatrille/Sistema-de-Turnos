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
    document.getElementById('fechaActual').value=ano+"-"+mes+"-"+dia;

}

function detalleCita()
{
    let datos = {
        Matricula: $("#matricula")
    }

    $.ajax({
        type: "POST",
        url: "DB/cita/detalleCita",
        success: function(response)
        {
            if(response ==1)
            {

            }
        }

    });
}

$(() => {
    
    fecha();

});

