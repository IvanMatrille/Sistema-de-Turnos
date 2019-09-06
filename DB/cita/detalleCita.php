<?php
require_once '../conexion.php';

$matricula = $_POST['Matricula'];

$query = "SELECT Matricula, Nombre FROM estudiante WHERE Matricula = '$matricula'";

$insertar = mysqli_query($conexion, $query);
if ($insertar) 
{
    echo 1;

} else {
    echo "Error al cargar los datos: ". mysqli_error($Conexion);
}