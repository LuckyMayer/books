<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$st=$pdo->prepare("UPDATE users SET name=:name,password=:password WHERE name=:name");
$st->execute($in);
?>