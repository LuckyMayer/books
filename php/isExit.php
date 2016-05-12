<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
echo $in['name'];
$st=$pdo->prepare("SELECT COUNT(*) FROM users WHERE name=:name");
$st->execute($in);
echo $st->fetchColumn();
?>