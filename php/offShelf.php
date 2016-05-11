<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$nowtime=date("Y-m-d",time());
$st=$pdo->prepare("UPDATE bookinfo SET offShelftime='".$nowtime."',isOnshelf=0 WHERE bookID=:bookID");
$st->execute($in);
?>