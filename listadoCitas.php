<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cita</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css"> 
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
   <!--<link rel="stylesheet" href="css/all.css" > -->
    <link rel="stylesheet" type="text/css" href="css/principal.css" media="screen" />
</head>
<body>

<div class="col-md-12 table-responsive" >
    <br>
    <div class="container">
        <div class="row">

             <div class=" col col-lg-3  col-md-3 col-sm-5 col-10" style = "margin-left : -7%">
             
             <label class="sr-only" for="txtBusqueda">Buscar...</label>
             <div class="input-group ">
             <div class="input-group-prepend">
             <div class="input-group-text"><i class="fas fa-search"></i></div>
            
             </div>
             <input type="text" class="form-control" id="txtBusqueda" placeholder="Buscar...">
             
               
              
          </div>
        </div>


            <div class=" col col-lg-4  col-md-6 col-sm-6 col-12" style = "margin-left : 33%; margin-right: -17%" >
            <input type="date" class="form-control md-form form-group w-50" id="fechaActualListar" name="fechaActualListar" value="">               
                </div>
               
               <div class = "col col-lg-4 col-md-5 col-sm-6 col-12 " style = "margin-right : -20.5%;">
                              
               <select id="selHorasListar" class="form-control md-form form-group w-50" name="selHorasListar">
                   <option></option>
               </select>

               </div>

            <div class=" col col-lg-1 col-sm-1" >
                <input type="button" class="btn btn-info" id="btnVolver" value="Volver" onclick=" location.href='index.php'">
            </div>
            
        </div>
    </div>

            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Matricula</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Horario</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody id="tbodyListaCitas">
                    <!-- Generado por js -->
                </tbody>
            </table>
        </div>

<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"> </script>
        <script src="js/listaCita.js"></script>
</body>
</html>