<?php 
	session_start();

?>
<!DOCTYPE html>
<html ng-app="myApp">
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
	<link rel="stylesheet" type="text/css" href="../css/main.css">
	<script type="text/javascript" src="../js/angular.js"></script>
	<script type="text/javascript" src="../js/angular-route.min.js"></script>
	<script type="text/javascript" src="../js/jquery/jquery.min.js"></script>
	<script type="text/javascript" src="../js/jquery/operation.js"></script>
	<script type="text/javascript" src="../js/angularjs/app.js"></script>
	<script type="text/javascript" src="../js/angularjs/router.js"></script>
	<script type="text/javascript" src="../js/filter/pagination.js"></script>
	<script type="text/javascript" src="../js/service/sessionName.js"></script>
	<script type="text/javascript" src="../js/angularjs/angular-resource.js"></script>
	<script type="text/javascript" src="../js/controller/queryController.js"></script>
	<script type="text/javascript" src="../js/controller/detailController.js"></script>
	<script type="text/javascript" src="../js/controller/queryHotController.js"></script>
	<script type="text/javascript" src="../js/controller/userinfoController.js"></script>
	<script type="text/javascript" src="../js/controller/orderController.js"></script>
	<?php
		if(!isset($_SESSION['username']))
	{	?>
		<script type="text/javascript">alert("您还未登录");window.location.href="login.php";</script>
	<?php
	}
	?>
</head>
<body>
<div id="main-wrap">
	<div id="header">
		<p>图书借阅管理系统</p>
		<div class="user-info">
			<ul class="nav-header">
				<?php echo "<li><span>当前用户:".$_SESSION['username']."</span></li>";  ?>
				<li><span><a href="login.php">退出登录</a></span></li>
			</ul>
		</div>
	</div>
	<div id="content">
		<div id="content-menu">
			<ul class="nav-aside">
				<li>
					<p class="menu-title">图书查询</p>
					<i class=" fa fa-angle-down"></i>
					<ul class="ul-child">
						<li class="selected"><a href="#/query">图书搜索</a></li>
						<li><a href="#/query-hot">热门图书</a></li>
					</ul>
				</li>
				<li id="user-module">
					<p class="menu-title user">用户版块</p>
					<i class=" fa fa-angle-down"></i>
					<ul class="ul-child">
						<li><a href="#/user-info">用户信息</a></li>
						<li><a href="#/user-order">图书预约</a></li>
						<li><a href="#/user-query">借阅记录</a></li>
						<li><a href="#/user-message">消息中心</a></li>
					</ul>
				</li>
				<li id="admin-module">
					<p class="menu-title admin">管理员版块</p>
					<i class=" fa fa-angle-down"></i>
					<ul class="ul-child">
						<li><a href="#/admin-onshelf">新书上架</a></li>
						<li><a href="#/admin-offshelf">图书下架</a></li>
						<li><a href="#/admin-query">借阅记录</a></li>
					</ul>
				</li>
				<li id="others-module">
					<p class="menu-title admin">站外链接</p>
					<i class=" fa fa-angle-down"></i>
					<ul class="ul-child">
						<li><a href="#/admin-onshelf">新书上架</a></li>
						<li><a href="#/admin-offshelf">图书下架</a></li>
						<li><a href="#/admin-query">借阅记录</a></li>
					</ul>
				</li>				
			</ul>
		</div>
		<div id="content-body">
			<div ng-view></div>
			<div id="footer">
				<p><span>&copy;2016届杭州电子科技大学毕业设计</span></p>
			</div>
		</div>
	</div>

</div>

</body>
</html>