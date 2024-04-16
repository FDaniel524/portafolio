<?php
    if(isset($_POST['enviar']))
    {
        echo '<script>alert("Recibí tu correo y me pondré en contacto contigo muy pronto!")</script>';
        $nombre = $_POST['nombre'];
        $asunto = $_POST['asunto'];
        $email = $_POST['email'];
        $mensaje = $_POST['mensaje'];
            
        $header = "From: " . $nombre . $email . "\r\n";
        $emaildestino = 'fernandocecyt1@gmail.com';
        $mail = mail($emaildestino, $asunto, $mensaje, $header);
    }
?>