var pageSize=10;
app.controller('orderController', ['$scope','sessionName','$http', function($scope,sessionName,$http){
		var orderName=sessionName.get();
		$http({
			method: 'POST',
			url: '../php/getOrderbooks.php',
			data: {name:orderName}
		}).success(function(data){
			console.log(data);
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
        $scope.selectedLi=-1;
        $scope.liClass=function(index){
            return $scope.selectedLi==index?"selected":"";
        }
		$scope.typeSelect=function(index) {
            $scope.selectedLi=index-1;
            $scope.liClass(index-1);
			$http({
				method: 'POST',
				url: '../php/getSelectedorderbook.php',
				data: {typeID:index,name:orderName}
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


		$scope.order=function(bookID,bookName) {
			$http({
				method: "POST",
				url: '../php/orderBoook.php',
				data: {orderBook:bookName,orderName:orderName,bookID:bookID}
			}).success(function(data){
				alert("预约成功!!");
				console.log(data);
			}).error(function() {
				alert("预约失败!!");
			});
		}
}])