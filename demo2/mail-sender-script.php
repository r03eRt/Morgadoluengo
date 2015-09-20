<?php
 
// Notificar todos los errores de PHP
//error_reporting(-1);


$formtype=$_POST['resp'];
if($formtype){
  $fullname=$_POST['fullname_resp'];
  $email=$_POST['email_resp'];
  $phone=$_POST['phone_resp'];
  $message=$_POST['message_resp'];
}else{
  $fullname=$_POST['fullname'];
  $email=$_POST['email'];
  $phone=$_POST['phone'];
  $message=$_POST['message'];
}
$para = "morgadoluengo@gmail.com";

echo $formtype;

// título
$title = 'El usuario '.ucfirst($fullname).' te ha enviado un mensaje';

// mensaje
$mensaje = '
<html>
<head>
  <title>El usuario '.ucfirst($fullname).' te ha enviado un mensaje</title>
</head>
<body>
  <p><strong>El usuario '.ucfirst($fullname).' te ha enviado un mensaje</strong></p>
  <p>'.ucfirst($message).'</p>
  <p>Telefono: '.$phone.'</p>
  <p>Email: <a href="mailto:'.$email.'">'.$email.'</a></p>
</body>
</html>
';

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Cabeceras adicionales
$cabeceras .= 'To: Me <'.$para.'>'. "\r\n";
$cabeceras .= 'From: contacto_web' . "\r\n";


// Enviarlo
mail($para, $title, $mensaje, $cabeceras);



?>