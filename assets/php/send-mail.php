<?php

	require("simple_mail/PHPMailerAutoload.php");

	$message = $_POST['message'];
	$email = $_POST['email'];
	$name = $_POST['name'];
	$telephoneNumber = $_POST['telephoneNumber'];
	$subject = $_POST['subject'];

	$message = 'Name: ' . $name . '<br/>' . 'Telephone Number: ' . $telephoneNumber . '<br/>' . 'Email: ' . $email . '<br/><br/>' . 'Message: ' . $message;

	$mail = new PHPMailer(); 

	$mail->IsSMTP();
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = 'ssl';
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 465;
	$mail->Username = "noreply@sonatasmx.com";
	$mail->Password = "nHjQpnMkI3MwhhRU2Gp9";

	$mail->ChartSet = 'utf-8';
	$mail->From     = 'noreply@sonatasmx.com';
	$mail->Subject  = "Sonata Services Contact";
	if ($subject == 'Carrers') {
		$mail->AddAddress('careers@sonatasmx.com', 'Carrers Sonata Services'); //to
		// $mail->AddAddress('flexcel@gmail.com', 'Flexcel Test'); //to for test
	} else {
		// $mail->AddAddress('joseph.hoffman@sonatasmx.com', 'Sales Sonata Services'); //to
		// $mail->AddAddress('felipe.fernandez@sonatasmx.com', 'Direction Sonata Services'); //to
		$mail->AddAddress('juan.fernandez@sonatasmx.com', 'Sonata Services Test'); //to for test
	}
	$mail->AddReplyTo('noreply@sonatasmx.com', 'No Reply');
	$mail->Body = $message;
	$mail->IsHTML( true );

	if(!$mail->Send()) {
		echo 'Message was not sent.';
	} else {
		echo 'Message has been sent.';
	}
?>