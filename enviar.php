<?php
$nombre = $_POST['fname'];
$apellido = $_POST['lastname'];
$telefono = $_POST ['numbertel'];
$mail = $_POST['correo'];
$empresa = $_POST['consulta'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje = "El apellido es " . $apellido . ",\r\n";
$mensaje = "Telefono numero" . $telefono . ",\r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['consulta'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'ventas@isp-digital.com.ar';
$asunto = 'Mensaje de mi sitio web isp digital';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>