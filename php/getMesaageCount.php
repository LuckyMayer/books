<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$st=$pdo->prepare("SELECT COUNT(*) FROM messages WHERE receive=:receive AND isRead=0");
$st->execute($in);
echo $st->fetchColumn();
?>