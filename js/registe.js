var reg=angular.module('register', []);

reg.controller('registeController', ['$scope','$http', function($scope,$http){
	$scope.rand=1;
	$scope.devCode=function(){
		$scope.rand=Math.floor(Math.random()*4+1);

	}
	$scope.register=function(username,password){
		switch($scope.rand){
			case 1: 
				if($scope.Code=="advses") $scope.codes=true;
				else $scope.codes=false;
				break;
			case 2:
				if($scope.Code=="7d6bf") $scope.codes=true;
				else $scope.codes=false;
				break;
			case 3:
				if($scope.Code=="BAE3") $scope.codes=true;
				else $scope.codes=false;
				break;
			case 4:
				if($scope.Code=="7d6bf") $scope.codes=true;
				else $scope.codes=false;
				break;
			default: 	
				$scope.codes=false; break;				
		}
		if($scope.codes) {

			$http({
				method: 'POST',
				url: '../php/registe.php',
				data: {name:username,password:password}
			}).success(function(){
				//alert("注册成功!!");
			}).error(function() {
				alert("注册成功");
			});
		} else {
			alert("验证码不正确");
		}
	}


}])
