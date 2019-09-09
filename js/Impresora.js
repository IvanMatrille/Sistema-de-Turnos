function listarImpresora()
{
    $.ajax({
        type: "GET",
        url: "DB/Impresora/ListarImpresora.php",
        success: function(response)
        {
            let datos = JSON.parse(response);
            let fila = "";

            for(const i in datos)
            {
                fila += "<tr>";
                fila += "<td>" + datos[i].id_impresora + "</td>";
                fila += "<td>" + datos[i].marcaImpresora + " " + datos[i].modeloImpresora + "</td>";
                fila += "<td>" + datos[i].ubicacion_fisica + "</td>";
                fila += "<td>" + datos[i].conexion + "</td>";
                fila += "<td>" + datos[i].direccion_ip + "</td>";
                fila += "<td>" + datos[i].nombre_impresora + "</td>";
                fila += "<td>" + datos[i].idimpresora_idtoner + "</td>";
                fila += "<td>" + datos[i].cantPromedioPag + "</td>";
                fila += 
                "<td> <button class='btn btn-success' data-toggle='modal' onclick='detalleImpresora(" + datos[i].id_impresora + ")' data-target='#ImpresoraModal'>Editar</button> ";
                fila += 
                "<button class='btn tn btn-danger btn-sm' data-toggle='modal' onclick='eliminarImpresora("+ datos[i].id_impresora +")' data-target='#'>Eliminar</button> </td>";
            }

            $("#tbodyImpresora").html(fila);
        }
    })
}

function registrarImpresora()
{
    let datos = {
        Marca: $("#txtMarcaImpresora").val(),
        Modelo: $("#txtModeloImpresora").val(),
        Toner: $("#txtTonerSelec").val(), 
        Departamento: $("#txtDepartamentoSelec").val(), 
        Conexion: $("#txtConexion").val(), 
        Ip: $("#txtDireccionIp").val(), 
        Nombre_impresora: $("#txtNombreImpresora").val()
    };

    $.ajax({
        type: "POST",
        url: "DB/impresora/RegistraImpresora.php",
        data: datos,
        success: function(response)
        {
            if(response == 1)
            {
                alert("Datos guardados correctamente!");
                $("ImpresoraModal").modal("hide");
            }else{
                alert("Error al registar los datos: "+response);
            }

            listarImpresora();
        }
    });
}

function actualizarImpresora()
{
    let datos = {
        Id: $("#txtID_imp").val(),
        Marca: $("#txtMarcaImpresora").val(),
        Modelo: $("#txtModeloImpresora").val(),
        Toner: $("#txtTonerSelec").val(), 
        Departamento: $("#txtDepartamentoSelec").val(), 
        Conexion: $("#txtConexion").val(), 
        Ip: $("#txtDireccionIp").val(), 
        Nombre_impresora: $("#txtNombreImpresora").val()
    };

    //alert("Funcion Actualizar!");

    $.ajax({
        type: "POST",
        url: "DB/impresora/ActualizaImpresora.php",
        data: datos,
        success: function(response)
        {    
            //alert("Dentro del success! " +response);

            if(response == 1)
            {
                alert("Datos actualizados correctamente!");
                $("ImpresoraModal").modal("hide");
            }else{
                alert("Error al actualizar los datos: "+response);
            }

            listarImpresora();
        }
    });
}

function detalleImpresora(id)
{
    $.ajax({
        type: "GET",
        url: "DB/impresora/DetalleImpresora.php",
        data: "id="+id,
        success: function(response)
        {
            let datos = JSON.parse(response);

            $('#txtID_imp').val(datos[0].id_impresora);
            $("#txtMarcaImpresora").val(datos[0].marcaImpresora),
            $("#txtModeloImpresora").val(datos[0].modeloImpresora ),
            $("#txtTonerSelec").val(datos[0].idimpresora_idtoner), 
            $("#txtDepartamentoSelec").val(datos[0].ubicacion_fisica), 
            $("#txtConexion").val(datos[0].conexion), 
            $("#txtDireccionIp").val(datos[0].direccion_ip), 
            $("#txtNombreImpresora").val(datos[0].nombre_impresora)

        }

    });
}

function listarSelectToner()
{
    $.ajax({
        type: "GET",
        url: "DB/toner/ListarToner.php",
        success: function(response)
        {
            let datos = JSON.parse(response);
            let opcion = "";

            for(const i in datos)
            {
                opcion += "<option value='"+datos[i].id_toner+"'>"+datos[i].toner+"</option>";
            }
            $("#txtTonerSelec").html(opcion);
        }
    });
}

function listarSelectDepartamento()
{
    $.ajax({
        type: "GET",
        url: "DB/Departamento/ListarDepartamentos.php",
        success: function(response)
        {
            let datos = JSON.parse(response);
            let opcion = "";

            for(const i in datos)
            {
                opcion += "<option value='"+datos[i].id_area+"'>"+datos[i].unidad+"</option>";
            }
            $("#txtDepartamentoSelec").html(opcion);
        }
    });
}

function eliminarImpresora(id)
{
    var mensaje;
    var opcion = confirm("¿Esta seguro que desea eliminar esta impresora?");
    if (opcion == true) {

        $.ajax({
            type: "POST",
            url: "DB/Impresora/EliminarImpresora.php",
            data: "id="+id,
            success: function(response)
            {
                if(response == 1){
                    alert("Datos eliminados correctamente!");
                }else{
                    alert("Ha ocurrido un problema al tratar de eliminar este elemento!");
                }
                listarImpresora();            
            }
        });	
    }  
}


$(() => {
    listarImpresora();
    listarSelectToner();
    listarSelectDepartamento();
    });


    $("#btnCreaImpresora1").click(function(e){
        //CONFIRMA LOS DATOS QUE SERAN ENVIADOS
        /*
        let MarcaImpresora = $('#txtMarcaImpresora').val();
        let ModeloImpresora = $('#txtModeloImpresora').val();
        let Toner = $('#txtTonerSelec').val();
        let Departamento = $('#txtDepartamentoSelec').val();
        let Conexion = $('#txtConexion').val();
        let DireccionIp = $('#txtDireccionIp').val();
        let NombreImpresora = $('#txtNombreImpresora').val();

        alert("MarcaImp: "+MarcaImpresora +" modeloImp: "+ModeloImpresora 
        +" toner: "+Toner+ " Dep: "+Departamento + " conx: "+Conexion
        +" Direc: " +DireccionIp + "NombrImp: "+NombreImpresora);
        */

        let id = $('#txtID_imp').val();
        //alert("ID: " +id);
        //alert("pa guardar "+id);

        if(id == 0){
            registrarImpresora();
        }else{
            actualizarImpresora();
        }

    });

$("#btnCreaImpresora").click(function(e)
{
    $('#txtID_imp').val(0);
    $("#txtMarcaImpresora").val("");
    $("#txtModeloImpresora").val("");
    $("#txtTonerSelec").val(""); 
    $("#txtDepartamentoSelec").val(""); 
    $("#txtConexion").val(""); 
    $("#txtDireccionIp").val(""); 
    $("#txtNombreImpresora").val("");
});