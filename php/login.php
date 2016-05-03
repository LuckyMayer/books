<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">

<?php 
	$pdo=new PDO('mysql:dbname=book','root');
	$username=$_POST["username"];
	$password=$_POST["password"];
	$st=$pdo->query("SELECT COUNT(*) FROM users WHERE name='".$username."' AND password='".$password."'");
	if($st->fetchColumn())
	{
		?>
		<script>alert("登录成功");window.location.href="../views/index.html";</script>
		<?php
	}

?>
</head>
</html>