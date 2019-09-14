<?php
require_once '../Conexion.php';

$matricula = $_POST['matricula'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];
$fechaRegistroCita = date ("Y-m-d H:i:s");

 $queryCita = "INSERT INTO cita(Matricula, Fecha, hora)VALUES('$matricula', '$fecha', '$hora')";
 
 mysqli_query($conexion, $queryCita);

  $IdCita  = mysqli_insert_id($conexion);

 $queryHistorialCita = "INSERT INTO historialCita (Id,IdCita,Matricula,Fecha,hora,FechaRegistroCita) VALUES (null,$IdCita ,'$matricula', '$fecha' , '$hora', '$fechaRegistroCita') ";
 
 
 

if ( $IdCita != 0  && mysqli_query($conexion, $queryHistorialCita) ) {
    echo 1;
} else {
    echo "Error al intentar guardar los datos: ". mysqli_error($conexion);
}