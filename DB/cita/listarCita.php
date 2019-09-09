<?php 

require_once '../conexion.php';

$rows = array();

$queryUsr = "SELECT cita.id, cita.Matricula, cita.entregado, cita.Fecha, cita.hora, estudiante.Nombre 
FROM cita
INNER JOIN estudiante on cita.Matricula = estudiante.Matricula";

$resultado = mysqli_query($conexion, $queryUsr);

while ($row = $resultado->fetch_assoc()) {
    array_push($rows, $row);
}

echo json_encode($rows);