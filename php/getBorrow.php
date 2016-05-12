<?php
$pdo=new PDO("mysql:dbname=book",'root');
$st=$pdo->query("SELECT bookName,borrowName,borrowDate,DATE_ADD(borrowDate,INTERVAL 2 MONTH) as shouldReturn FROM bookborrow WHERE isReturn=0");
echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
/*echo $nowtime;*/
?>