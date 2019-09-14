<?php 

require_once '../conexion.php';

$dato = $_GET["id"];
$FechaEntrega = date ("Y-m-d H:i:s");

$queryCita = "UPDATE cita SET entregado = 1  WHERE Matricula = '$dato'";
$queryHistorialCita = "UPDATE historialCita SET entregado = 1 , FechaEntrega = '$FechaEntrega' WHERE Matricula = '$dato' "; 



if (mysqli_query($conexion, $queryCita) && mysqli_query($conexion, $queryHistorialCita)) 
{
    echo 1;
} else {
    echo "Error al intentar guardar los datos: ". mysqli_error($Conexion);
}
