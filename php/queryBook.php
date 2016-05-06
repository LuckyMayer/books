<?php 
	$pdo=new PDO('mysql:dbname=book','root');
	$in = json_decode(file_get_contents('php://input'), true);
	echo $in;
	$st=$pdo->query("SELECT * FROM bookinfo WHERE bookAuthor=:bookAuthor");
	echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
 ?>