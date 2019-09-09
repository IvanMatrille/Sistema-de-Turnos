<?php
    include_once "../../conexion.php";

    //var_dump($_GET);
    $id = $_GET['id'];

    $filas = array();

    //$id = 4;
    $sql = "SELECT id_toner, toner, referencia FROM toner WHERE id_toner = $id";

    $resultado = mysqli_query($conexion, $sql);

    while ($fila = $resultado->fetch_assoc())
    {
        array_push($filas, $fila);
    }
    
    echo json_encode($filas);