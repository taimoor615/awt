<?php
if ($_SERVER['REQUEST_METHOD']=="POST"){
    $message = '<b>Name:</b> '.$_POST['client_name'].'<br>'.'<b>Phone:</b> '.$_POST['client_phone'].'<br>'.'<b>Email:</b> '.$_POST['client_email'].'<br>'.'<b>Kind Of Trip:</b> '.$_POST['kind_of_trip'].'<br>'.'<b>Number Of Party:</b> '.$_POST['number_party'].'<br>'.'<b>Trip Date:</b> '.$_POST['trip_date'].'<br>'.'<b>Comments:</b> '.$_POST['text-commment'];

    $to = "taimoorz146@gmail.com";
    $subject = "Ridge Retreat - Contact Query";
    $headers = "From: webmaster@example.com" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    mail($to,$subject,$message,$headers);
    header( "Location: thankyou.html" );

} ?>