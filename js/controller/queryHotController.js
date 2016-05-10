var pageSize=10;
app.controller('queryHotController', ['$scope','sessionName','$http', function($scope,sessionName,$http){
		$http({
			method: 'GET',
			url: '../php/getHotbooks.php'
		}).success(function(data){
			$scope.books=data;
			$scope.selectedPage=1;
       		$scope.end=pageSize;
        	$scope.start=0;
       		$scope.getCurrentPage=function(index) {
            	$scope.start=pageSize*index;
            	$scope.end=pageSize*(index+1);
            	$scope.selectedPage=index+1;
            	$scope.Books=$scope.books.slice($scope.start,$scope.end);
        	}
        	$scope.selectBook=function(name){
            	$scope.Name=name;
        	}
        	$scope.getPageClass=function(page){
            	return $scope.selectedPage==page?"btn-primary":"";
        	}
        	$scope.Books=$scope.books.slice($scope.start,$scope.end);   

		}).error(function() {
			alert("something wrong!!");
		});

		$http({
			method: 'GET',
			url: '../php/getTypes.php'
		}).success(function(data){
			$scope.kinds=data;
		}).error(function() {
			alert("分类出错");
		});

		$scope.typeSelect=function(index) {

			$http({
				method: 'POST',
				url: '../php/getSelectedbook.php',
				data: {typeID:index}
			}).success(function(data){
			$scope.books=data;
			$scope.selectedPage=1;
       		$scope.end=pageSize;
        	$scope.start=0;
       		$scope.getCurrentPage=function(index) {
            	$scope.start=pageSize*index;
            	$scope.end=pageSize*(index+1);
            	$scope.selectedPage=index+1;
            	$scope.Books=$scope.books.slice($scope.start,$scope.end);
        	}
        	$scope.selectBook=function(name){
            	$scope.Name=name;
        	}
        	$scope.getPageClass=function(page){
            	return $scope.selectedPage==page?"btn-primary":"";
        	}
        	$scope.Books=$scope.books.slice($scope.start,$scope.end);  
			}).error(function() {
				alert("出错了!!");
			});
		}
}])