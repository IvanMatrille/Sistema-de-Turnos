<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="css/principal.css" media="screen" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src = "js/index.js" ></script>
  
    <title>Inicio</title>
    
</head>
<body>
    
<div class="centrar">

<form action="cita.php" method="GET" name="frmConsulta">
<h2>Solicitud o verificación de citas</h2><br>

<div class="form-group row">
<input type="button" class="btn btn-info" id="btnListarCitas" value="Citas" onclick=" location.href='listadoCitas.php'">

   <br>
    <div class="col-xs-4">

      <input type="text" id="matricula" placeholder="Matricula" class="form-control" name="matricula" value="" required>
  
    </div>
  
    <br>
    <input class="btn btn-info" id="btnMatricula" type="submit"  value="     Enviar     ">
    
  </div>
  </div>

</form>

</body>
</html>