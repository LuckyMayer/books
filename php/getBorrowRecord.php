<?php
$pdo=new PDO("mysql:dbname=book",'root');
$st=$pdo->query("SELECT bookName,borrowName,borrowDate,returnDate FROM bookborrow WHERE isReturn=1");
echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
?>