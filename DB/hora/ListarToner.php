<?php
    include_once "../../conexion.php";

    $filas = array();

    $sql = "SELECT id_toner, toner, referencia FROM toner";

    $resultado = mysqli_query($conexion, $sql);

    while ($fila = $resultado->fetch_assoc())
    {
        array_push($filas, $fila);
    }
    
    echo json_encode($filas);