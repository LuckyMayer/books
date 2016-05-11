var pageSize=10;
app.controller('offshelfController', ['$scope','sessionName','$http', function($scope,sessionName,$http){
          var user=sessionName.get();
        if(user!="admin" || user=="")  
            alert("您没有权限进行操作!!");
        else {
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
        $scope.selectedLi=-1;
        $scope.liClass=function(index){
            return $scope.selectedLi==index?"selected":"";
        }
		$scope.typeSelect=function(index) {
            $scope.selectedLi=index-1;
            $scope.liClass(index-1);
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

}
        /*公用代码结束*/
        $scope.onshelf=function(bookID) {
            $http({
                method: 'POST',
                url: '../php/offShelf.php',
                data: {bookID:bookID}
            }).success(function(data){
                alert("下架成功!!");
                $http({
                    mthod: 'GET',
                    url : '../php/getHotbooks.php'
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
                 });
            }).error(function() {
                alert("操作出错！！")
            });
        }
}])