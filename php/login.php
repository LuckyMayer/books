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
	//echo $username;
	$password=$_POST["password"];
	$st=$pdo->query("SELECT COUNT(*) FROM users WHERE name='".$username."' AND password='".$password."'");
	if($st->fetchColumn())
	{

		//echo $_SESSION['username'];
		?>
		<script>alert("登录成功");window.location.href="../views/#/query";</script>
		<?php

	}

?>
</head>
</html>