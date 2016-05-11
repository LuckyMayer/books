<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$nowtime=date("Y-m-d",time());
$st=$pdo->prepare("UPDATE bookborrow SET borrowDate='".$nowtime."' WHERE bookName=:bookName AND borrowName=:borrowName");
$st->execute($in);
?>