<?php
require_once '../Conexion.php';

$matricula = $_POST['matricula'];
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];

$query = "INSERT INTO cita(Matricula, Fecha, hora)VALUES('$matricula', '$fecha', '$hora')";

$insertar = mysqli_query($conexion, $query);

if ($insertar) {
    echo 1;
} else {
    echo "Error al intentar guardar los datos: ". mysqli_error($Conexion);
}