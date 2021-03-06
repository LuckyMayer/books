<?php 
session_start();
session_destroy();
/*echo $_SESSION['username'];*/
?>
<!DOCTYPE html>
<html >
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<title>图书借阅管理系统</title>
	<link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
  	<link rel="stylesheet" href="../css/font-awesome.min.css" type="text/css" />
  	<link rel="stylesheet" href="../css/simple-line-icons.css" type="text/css" />
  	<link rel="stylesheet" href="../css/font.css" type="text/css" />
  	<link rel="stylesheet" type="text/css" href="../css/common.css">
	<link rel="stylesheet" type="text/css" href="../css/login.css">
<!-- 	<link rel="stylesheet" type="text/css" href="../css/icons.css"> -->
	<script type="text/javascript" src="../js/angular.js"></script>
	</script>
</head>
<body>
	<div id="header"></div>
	<form name="formLogin" id="form-login" action="../php/login.php" method="post">
		<div class="form-header">
			<p>图书借阅管理系统</P>
		</div>
		<div class="alert alert-danger login-error">
			<p>
				<i class="icon_warning"></i>
				<span>用户名不存在</span>
			</p>
		</div>
		<div class="form-group">
			<input type="text" name="username" id="username" placeholder="用户名" required="required" class="input" autofocus="autofocus" ng-model="Name">
			<i class="icon-user"></i>
		</div>
		<div class="form-group">
			<input type="password" name="password" id="password" placeholder="密码" required="required" class="input">
			<i class="icon-lock"></i>
		</div>
		<div class="form-group">
			<input type="submit" id="sub" value="登 录" class="btn btn_sub" ng-disabled="!formLogin.$valid" ng-click="saveInfo(Name)">
		</div>
		<div class="form-group">
			<a href="registed.html" id="registed" class="btn btn_reg">注 册</a>
		</div>
	</form>
</body>
</html>