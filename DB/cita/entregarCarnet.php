<?php 

require_once '../conexion.php';

$dato = $_GET["id"];

$rows = array();

$query = "UPDATE cita SET entregado = 1 WHERE Matricula = '$dato'";

$sql = mysqli_query($conexion, $query);

if ($sql) 
{
    echo 1;
} else {
    echo "Error al intentar guardar los datos: ". mysqli_error($Conexion);
}
