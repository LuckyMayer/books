app.controller('registeController', ['$scope','$http', function($scope,$http){
	$scope.register=function(name,password){
		alert("click");
		$http({
			method: 'POST',
			url: '../php/registe.php',
			data: {name:name,password:password}
		}).success(function(){
			alert("注册成功!!");
		}).error(function() {
			alert("注册失败");
		});
	}
}])