<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$st=$pdo->prepare("INSERT INTO users (name,password) VALUES(:name,:password)");
$st->execute($in);
?>