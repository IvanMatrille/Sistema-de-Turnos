<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cita</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/principal.css" media="screen" />
</head>
<body>
    
<div class="row">
  <div class="col-lg-6 col-centrada">


    <input type="hidden" id="matricula" name="matricula" value="<?php echo $_GET['matricula']?>">
    <label for="txtMatricula">Matricula:</label>
    <h2 id="txtMatricula" name="txtMatricula"><?php echo $_GET['matricula']?></h2>

    <label for="txtNombre">Nombre:</label>
    <h2 id="txtNombre" name="txtNombre" value="">Nombre</h2>
    <br>
    
        <input type="date" class="form-control md-form form-group w-50" id="fechaActual" name="fechaActual" value="" disabled>
        <select id="selHoras" class="form-control md-form form-group w-50" name="selHoras" disabled>
            <option></option>
        </select>

        <div class="row">
           
           <div class = "col-sm-2" >
           
              <input type="button" class="btn btn-primary" id="btnRegistarCita" name="btnRegistarCita" value="Registrar" disabled> <br><br>
          </div>
    
         <div id = "btnVolverContainer" class = "col-sm-2 ml-3 ml-sm-5 ml-lg-3 " >
            <input type="button" class="btn btn-info" id="btnVolver" value="Volver" onclick=" location.href='index.php'">
         </div>
        </div>
    <h2 id="txtCita" name="txtCita" value=""></h2>
    <h2 id="txtDisponibilidad" name="txtDisponibilidad" value=""></h2>
    


</div>
</div>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
        <script src="js/cita.js"></script>
        <script src="js/estudiante.js"></script>

</body>
</html>