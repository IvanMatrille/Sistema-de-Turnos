<?php
    include_once "../../conexion.php";

    //var_dump($_GET);
    $id = $_GET['id'];

    $filas = array();

    //$id = 4;
    
    $sql = "SELECT id_impresora, marcaImpresora, modeloImpresora, idimpresora_idtoner, ubicacion_fisica, conexion, direccion_ip, nombre_impresora FROM impresora WHERE id_impresora = $id";

    $resultado = mysqli_query($conexion, $sql);

    while ($fila = $resultado->fetch_assoc())
    {
        array_push($filas, $fila);
    }
    
    echo json_encode($filas);