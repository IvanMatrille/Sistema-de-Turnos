<?php 

require_once '../conexion.php';

$rows = array();
$fecha = $_POST['fecha'];
$hora = $_POST['hora'];

$queryUsr = "SELECT cita.id, cita.Matricula, cita.entregado, cita.Fecha, cita.hora, estudiante.Nombre 
FROM cita
INNER JOIN estudiante on cita.Matricula = estudiante.Matricula
WHERE cita.Fecha = '$fecha' AND cita.hora = '$hora'";

$resultado = mysqli_query($conexion, $queryUsr);

while ($row = $resultado->fetch_assoc()) 
{
    array_push($rows, $row);
}
echo json_encode($rows);