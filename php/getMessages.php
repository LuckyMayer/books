<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$nowtime=date("Y-m-d",time());
$st=$pdo->prepare("SELECT * FROM messages WHERE receive=:reveive order by postTime desc");
$st->execute($in);
echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
?>