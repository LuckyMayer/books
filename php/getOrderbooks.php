<?php 
	$pdo=new PDO('mysql:dbname=book','root');
	$in=json_decode(file_get_contents('php://input'),true);
	$st=$pdo->prepare("SELECT * FROM (SELECT * FROM bookinfo WHERE bookAmount=0)A WHERE  A.bookID NOT IN (SELECT bookID FROM book.order WHERE orderName=:name)");
	$st->execute($in);
	echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
 ?>