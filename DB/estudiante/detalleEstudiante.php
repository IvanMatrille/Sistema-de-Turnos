<?php
    include_once "../conexion.php";

    //var_dump($_GET);
    $matricula = $_GET['matricula'];

    $filas = array();
    
    $sql = "SELECT Matricula, Nombre FROM estudiante WHERE Matricula = '$matricula'";

    $resultado = mysqli_query($conexion, $sql);

    while ($fila = $resultado->fetch_assoc())
    {
        array_push($filas, $fila);
    }
    
    echo json_encode($filas);