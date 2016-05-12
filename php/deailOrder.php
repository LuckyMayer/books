<?php 
	$pdo=new PDO('mysql:dbname=book','root');
	$st=$pdo->query("SELECT a.bookID,a.bookName,b.orderName,b.orderTime FROM bookinfo a INNER JOIN book.order b ON a.bookID=b.bookID WHERE a.bookAmount >0");
	echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
 ?>