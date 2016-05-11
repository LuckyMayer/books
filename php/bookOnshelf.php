<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$nowtime=date("y-m-d H:i:s",time());
$st=$pdo->prepare("INSERT INTO bookinfo (bookAmount,bookName,bookAuthor,bookVersion,bookPublish,bookBrief,bookType,bookAddr,onShelftime) VALUES(:bookAmount,:bookName,:bookAuthor,:bookVersion,:bookPublish,:bookBrief,:bookType,:bookAddr,'".$nowtime."')");
$st->execute($in);
?>