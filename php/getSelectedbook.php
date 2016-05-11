<?php
$pdo=new PDO("mysql:dbname=book",'root');
$in=json_decode(file_get_contents('php://input'),true);

$st=$pdo->prepare("SELECT * FROM bookinfo WHERE bookType=:typeID AND isOnshelf=1");
$st->execute($in);
echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
?>