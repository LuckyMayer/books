app.controller('userinfoController', ['$scope','$http','$routeParams','sessionName', function($scope,$http,$routeParams,sessionName){
		var username=sessionName.get();
		$http({
			method: 'POST',
			url: '../php/getUserinfo.php',
			data: {name:username}
		}).success(function(data){
			$scope.userName=data[0].name;
			$scope.userPsw=data[0].password;
		}).error(function() {
			alert("获取用户信息失败!!");
		});

		$scope.update=function(){
			if($scope.userPsw!=$scope.psw)
				alert("两次填写的密码不一致，请重新填写!!");
			else {
				var newname=$scope.userName;
				var newpassword=$scope.psw;
				$http({
					method: 'POST',
					url: '../php/updateInfo.php',
					data: {name:newname,password:newpassword}
				}).success(function(data){
					alert("更新用户信息成功！重新登录后生效！");
				}).error(function() {
					alert("更新用户信息失败！!");
				});
			}
		}
}])