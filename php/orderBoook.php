<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$nowtime=date("Y-m-d H:i:s",time());
$st=$pdo->prepare("INSERT INTO `book`.`order` ( orderBook, orderName, orderTime, bookID) VALUES ( :orderBook, :orderName, '".$nowtime."', :bookID)");
$st->execute($in);

?>