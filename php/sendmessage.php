<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$nowtime=date("y-m-d H:i:s",time());
$st=$pdo->prepare("INSERT INTO messages (sender,receive,postTime,content) VALUES(:sender,:receive,'".$nowtime."',:content)");
$st->execute($in);
?>