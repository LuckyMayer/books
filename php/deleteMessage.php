<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);
$st=$pdo->prepare("DELETE  FROM messages WHERE id=:id");
$st->execute($in);
echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
?>