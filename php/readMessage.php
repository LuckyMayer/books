<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$st=$pdo->prepare("UPDATE messages SET isRead=1 WHERE id=:id");
$st->execute($in);
?>