function lista()
{
    $.ajax({
        type: "GET",
        url: "DB/Index/ListarDescargo.php",
        success: function(response){
        let datos = JSON.parse(response);
        let row = "";

        for(const i in datos)
        {
            row += "<tr>";
            row += "<td> </td>"
            row += "<td>"+ datos[i].id_tonerEntregado +"</td>";
            row += "<td>"+ datos[i].area +"</td>";
            row += "<td>"+ datos[i].impMarca +" "+ datos[i].impModelo + "</td>";
            //row += "<td>"+ datos.fecha +"</td>";
            row += "<td>"+ datos[i].toner +"</td>";
            row += "<td>"+ datos[i].fechaPrimeraInstalacion +"</td>";

            row += "<td>"+ datos[i].fechaUltimoUso +"</td>";
            row += "<td>"+ datos[i].fechaCambio +"</td>";
            row += "<td>"+ datos[i].cantTotal +"</td>";
            row += "<td>"+ datos[i].cantCopias +"</td>";
            row += "<td>"+ datos[i].cantPromedio +"</td>";
            row += "<td>"+ datos[i].despachadoPor +"</td>";
            row += "<td>"+ datos[i].recibidoPor +"</td>";

            row += "<td>"+  +"</td>";
            //row += "<td>"+ datos.refToner +"</td>";
            //row += "<td>"+ datos.observaciones +"</td>";
        }
            $("#tbodyDespachos").html(row);
        }
    });
}

$(() => {
    lista();
    ListarDepartamento();
    ListarImpresoras();

    $("#frmRegistro").submit(function(e) {
        e.preventDefault();
        let id = $('#txtID').val();
        //alert("Error al guardar!");

        if (id == 0) {
            //alert("Guardado");
            registrar();

        } else {
            //actualizar();
            alert("Error al guardar!");
        }   

    });

})

function registrar()
{
    let datos = {
        fecha: $("#fecha").val(),
        area: $("#area").val(),
        impresora: $("#impresora").val(),
        toner: $("").val(2),
        cantidadEntregada: $("#cantidadEntregada").val(),
        despachadoPor: $("#despachadoPor").val(),
        recibidoPor: $("#recibidoPor").val(),
        cantTotal: $("#cantTotal").val(),
        cantCopias: $("#cantCopias").val(),
        observaciones: $("#observaciones").val(),
        cantPromedio: $("#cantPromedio").val(),
        fechaPrimeraInstalacion: $("#fechaPrimeraInst").val(),
        fechaUltimoUso: $("#fechaUltimoUso").val(),
        fechaCambio: $("#fechaCambio").val()
    }; 

    var data = $('#frmRegistro').serialize();
    //alert(datos);
    //return false;

    $.ajax({
        type: "POST",
        url: "DB/Index/RegistroDescargo.php",
        data: data,
        success: function (response)
        {            
            if (response == 1) 
            {
                alert("Datos guardados correctamente");
                $('#exampleModal').modal('hide');
            } else {
                alert("Error al registrarse" + response);
            }

            lista();
        }
    })
}

function ListarDepartamento()
{
    $.ajax({
        type: "GET",
        url: "DB/Departamento/ListarDepartamentos.php",
        success: function(response){
        let datos = JSON.parse(response);
        let row = "";

        for(const i in datos)
        {
            row += "<option value='"+ datos[i].id_area +"'>" + datos[i].unidad + "</option>";
        }
            $("#area").html(row);
        }
    });    
}

function ListarImpresoras()
{
    $.ajax({
        type: "GET",
        url: "DB/Impresora/ListarImpresora.php",
        success: function(response){
        let datos = JSON.parse(response);
        let row = "";

        for(const i in datos)
        {
            row += "<option value='"+ datos[i].id_impresora +"'>" + datos[i].marcaImpresora + " " + datos[i].modeloImpresora + "</option>";
        }
            $("#impresora").html(row);
        }
    });    
}