<?php 
	$pdo=new PDO('mysql:dbname=book','root');
	$st=$pdo->query("SELECT * FROM bookinfo WHERE isOnshelf=1 order by onShelftime desc");
	echo json_encode($st->fetchAll(PDO::FETCH_ASSOC));
 ?>