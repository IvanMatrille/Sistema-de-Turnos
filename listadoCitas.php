<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Cita</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css"> 
    <link rel="stylesheet" href="css/all.css">  
   
    <link rel="stylesheet" type="text/css" href="css/principal.css" media="screen" />
</head>
<body>

<div class="col-md-12 table-responsive" >
    <br>
    <div class="container">
        <div class="form-row " >

             <div class=" col col-lg-3 mr-lg-auto  col-md-3 col-sm-5 col-12 form-group"   >
             
             <label class="sr-only" for="txtBusqueda">Buscar...</label>
             <div class="input-group ">
             <div class="input-group-prepend">
             <div class="input-group-text"><i class="fas fa-search"></i></div>
            
             </div>
             <input type="text" class="form-control" id="txtBusqueda" placeholder="Buscar...">
             
               
              
          </div>
        </div>

            
            <div class=" col col-lg-3  col-md-4 col-sm-6 col-12 form-group"   >

            <div class="input-group ">
             <div class="input-group-prepend">
              <div class="input-group-text">

                                            
                <input class="form-check" type="checkbox" id="checkTodos" checked>
                <label  class = "form-check-label" for = "checkTodos" style ="font-weight : bold; ">  Todos</label>
                             
                 </div>
          
                          
            </div>

             <input type="date" class="form-control" id="fechaActualListar" name="fechaActualListar" value="" > 
           </div>   
             
         </div>
               
               <div class = "col col-lg-2 col-md-3 col-sm-6 col-12 form-group " >
                              
               <select id="selHorasListar" class="form-control" name="selHorasListar">
                   <option></option>
               </select>

               </div>

            <div class=" col col-lg-1 col-sm-2 col-3" >
                <input type="button" class="btn btn-info form-control" id="btnVolver" value="Volver" onclick=" location.href='index.php'">
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