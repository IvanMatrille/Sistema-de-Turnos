

function registra()
{
    let datos = {
        Matricula: $("#matricula")
    }

    $.ajax({
        type: "POST",
        url: "DB/index/registraIndex.php",
        data: datos,
        success: function(response)
        {
            if(response == 1)
            {
                
            }else{

                alert("Verifique que haya introducido su matricula correctamente");

            }
        }
    });
}


$("#frmConsulta").submit(function(e) {
    e.preventDefault();
    let matricula = $('#matricula').val();

    if (matricula != "") {
        registrar();
    } else {
        alert("Introduzca su matricula para continuar!");
    }
});