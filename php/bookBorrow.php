<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$nowtime=date("Y-m-d",time());
echo $in["book"];
echo $in["borrowName"];
echo $nowtime;
$st=$pdo->prepare("INSERT INTO bookborrow (bookName,borrowName,borrowDate) VALUES(:book,:borrowName,'".$nowtime."')");
$st->execute($in);
?>