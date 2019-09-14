<?php

include_once "../conexion.php";


$matricula = $_POST ["Matricula"];

$sql = "SELECT * FROM estudiante WHERE Matricula = '$matricula' ";

$resultado =  mysqli_query($conexion, $sql);


echo  $resultado->fetch_assoc() ? 1 : 0;

?>