<?php 
	$pdo=new PDO('mysql:dbname=book','root');
	$st=$pdo->query("SELECT * FROM bookinfo");
	echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
 ?>