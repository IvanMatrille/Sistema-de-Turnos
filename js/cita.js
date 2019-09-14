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
      document.getElementById('fechaActual').min=ano+"-"+mes+"-"+dia;
      document.getElementById('fechaActual').max="2019-11-10";

}

function detalleCita(matricula)
{
    return $.ajax({
        type: "GET",
        url: "DB/cita/detalleCita.php",
        data: "matricula="+matricula,
        success: function(response)
        {
            let datos = JSON.parse(response);

            let horario = datos[0].Fecha;
            let split = horario.split("-");
    
            let fecha_formato = split[2] + "/" + split[1] + "/" + split[0];

            $("#txtCita").text("Cita: " + fecha_formato + " | " + datos[0].Hora);

        }
    });
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

            row += '<option value="0">Horario</option>';

            for (const i in datos) 
            {            
                row += '<option value="'+ datos[i].hora +'">' + datos[i].hora + "</option>";
            }

            $("#selHoras").html(row);
        }
    });
}

function registrarCita()
{
    let datos = {
        matricula: $("#txtMatricula").text(),
        fecha: $("#fechaActual").val(),
        hora: $("#selHoras").val(),
    };

    $.ajax({
        type: "POST",
        url: "DB/cita/registrarCita.php",
        data: datos,
        success: function(response) {
            
            if (response == 1) 
            {
                //alert("Datos guardados correctamente");

            } else {

                alert("hubo problema registrando la cita");
            }

           location.reload();

        }
    });
}

function verificaCita()
{
    let datos = {
        fecha: $("#fechaActual").val(),
        hora: $("#selHoras").val()
    }

    $.ajax({
        type: "POST",
        url: "DB/cita/cantidadCita.php",
        data: datos,
        success: function(response)
        {
            let datos = JSON.parse(response);

        if ($("#selHoras").val() == 0)
        {
            $("#btnRegistarCita").prop('disabled', true)

        }else{

            if(datos[0].total < 40)
            {
                $("#txtDisponibilidad").text("");
                $("#btnRegistarCita").prop('disabled', false)

            }else{

                $("#txtDisponibilidad").text("Horario no disponible");
                $("#btnRegistarCita").prop('disabled', true)
            }
        }
           
        }     

    });
    
}

$("#selHoras").change(function(){
   
    verificaCita();
    

});

$("#fechaActual").change(function(){
    
    verificaCita();

});

$("#btnRegistarCita").click(function()
{
    registrarCita();

});


$(() => {

    //alert("ho" + $("#selHoras").val());
    
    function verifica()
    {
        verificaCita();
        let cita = $("#txtCita").text();

        if(cita.length == 0)
        {
            $("#fechaActual").prop('disabled', false);
            $("#selHoras").prop('disabled', false);
            $("#btnRegistarCita").prop('disabled', false); 
            $("#txtDisponibilidad").text("Horario no disponible");
             
         }else{

            $("#fechaActual").prop('disabled', true);
            $("#selHoras").prop('disabled', true);
            $("#btnRegistarCita").prop('disabled', true); 
            $("#txtDisponibilidad").text("");    
         }
    }
    //  setInterval(verifica, 200);
      

    fecha();
    detalleCita( $("#matricula").val() ).then ( function ()
    {
            
        let cita = $("#txtCita").text();
        if(cita.length != 0 )
        {
            $("#fechaActual").prop('disabled', true);
            $("#selHoras").prop('disabled', true);
            $("#btnRegistarCita").prop('disabled', true);  
         }

    });

    listaHoras();
    verifica();

  

});