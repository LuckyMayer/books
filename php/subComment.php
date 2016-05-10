<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$nowtime=date("y-m-d h:i:s",time());
$st=$pdo->prepare("INSERT INTO comment (bookID,comment,userName,commentdate) VALUES(:id,:comments,:user,'".$nowtime."')");
$st->execute($in);
?>