<?php
require('phpmailer/class.phpmailer.php');

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPDebug = 0;
$mail->SMTPAuth = TRUE;
$mail->SMTPSecure = "tls";
$mail->Port     = 25;  
$mail->Username = "email@email.com";
$mail->Password = "Password";
$mail->Host     = "smtp.email.com";
$mail->Mailer   = "smtp";
$mail->SetFrom($_POST["userEmail"], $_POST["userName"]);
$mail->AddReplyTo($_POST["userEmail"], $_POST["userName"]);
$mail->AddAddress("recipient address");	
$mail->Subject = $_POST["subject"];
$mail->WordWrap   = 80;
$mail->MsgHTML($_POST["content"]);

if(is_array($_FILES)) {
$mail->AddAttachment($_FILES['attachmentFile']['tmp_name'],$_FILES['attachmentFile']['name']); 
}

$mail->IsHTML(true);

if(!$mail->Send()) {
	echo "<p class='error'>Problem in Sending Mail.</p>";
} else {
	echo "<p class='success'>Contact Mail Sent.</p>";
}	
?>