<?php

$servidor = "localhost";
$usuario = "root";
$contraseña = "";
$BD = "ticket";

$conexion = new mysqli($servidor, $usuario, $contraseña, $BD);

if ($conexion->connect_errno)
{
    die("Error en la conexion: " . $conexion->connect_error);
    exit();
}
$conexion->set_charset("utf8");
