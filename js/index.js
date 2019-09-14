

function registra()
{
    let datos = {
        Matricula: $("#matricula").val()
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

              

            }
        }
    });
}

function verificarMatricula (matricula)
{
   let datos = {
      Matricula : matricula
   } 

   let status;
   $.ajax({
    type: "POST",
    url: "DB/index/verificarMatricula.php",
    
    data: datos,
    async : false,    
    success: function(response)
    {  
        if(response == 0)
        {
         status = false;
        }else
        {
          status = true;
        }
    }
});
   
   return status;

}


$(document).ready (function () {


    $('form[name = "frmConsulta"]').submit(function(e) {
      
        let matricula = $('#matricula').val();
       
    
        if (matricula != "") {
           // registra();
           if (!verificarMatricula(matricula) )
              {
                alert("La Matricula no es valida o no esta activa");
                e.preventDefault();

              }
        } else {
            alert("Introduzca su matricula para continuar!");
        }
    });


}); 





