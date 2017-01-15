<?php


$spam = $_POST['spam']; // получим текст из поля спам

if (empty($spam)){ 
$recepient = "a.sushchikh@gmail.com";
$sitename = "Всем крышка!";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Имя: $name \nТелефон: $phone \ne-mail: $email";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
} else exit ;


