<?php 
session_start();
$_SESSION['username']=$_POST["username"];
?>
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
		<script>window.location.href="../views/#/query";</script>
		<?php

	}else {
		echo "<script type='text/javascript'>alert('用户名或者密码错误!!');window.location.href='../views/login.php';</script>";
	}

?>
</head>
</html>