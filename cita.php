<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cita</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="css/principal.css" media="screen" />
</head>
<body>
    
<div id="detalleCita">
    <input type="hidden" id="matricula" name="matricula" value="<?php echo $_GET['matricula']?>">
    <label for="txtMatricula">Matricula:</label>
    <h2 id="txtMatricula" name="txtMatricula">Matricula</h2>

    <label for="txtNombre">Nombre:</label>
    <h2 id="txtNombre" name="txtNombre" value="">Nombre</h2>
    <br>
    
        <input type="date" class="form-control md-form form-group w-50" id="fechaActual" name="fechaActual" value="">
        <select id="selHoras" class="form-control md-form form-group w-50" name="selHoras">
            <option></option>
        </select>

    <input type="button" class="btn btn-primary" id="btnRegistarCita" name="btnRegistarCita" value="Registrar"><br><br>

    <h2 id="txtCita" name="txtCita" value=""></h2>
    <h2 id="txtDisponibilidad" name="txtDisponibilidad" value=""></h2>
    <input type="button" class="btn btn-info" id="btnVolver" value="Volver" onclick=" location.href='index.php'">

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"></script>
        <script src="js/cita.js"></script>
        <script src="js/estudiante.js"></script>

</body>
</html>