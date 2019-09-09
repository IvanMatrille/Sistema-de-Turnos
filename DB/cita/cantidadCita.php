<?php
    include_once "../conexion.php";

    //var_dump($_GET);
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];

    $filas = array();
    
    $sql = "SELECT COUNT(Fecha) as total FROM cita WHERE Fecha = '$fecha' AND hora = '$hora'";

    $resultado = mysqli_query($conexion, $sql);

    while ($fila = $resultado->fetch_assoc())
    {
        array_push($filas, $fila);
    }
    
    echo json_encode($filas);




