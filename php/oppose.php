<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$st=$pdo->prepare("UPDATE bookinfo SET zan=zan-1 WHERE bookID=:id");
$st->execute($in);
?>