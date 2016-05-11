app.controller('onshelfController', ['$scope','$routeParams','$http','sessionName', function($scope,$routeParams,$http,sessionName){
		var user=sessionName.get();
		if(user!="admin" || user=="")  
			alert("您没有权限进行操作!!");
		else {
			$http({
				method:'GET',
				url: '../php/getSelectTypes.php'
			}).success(function(data){
				$scope.model=data;
			}).error(function() {
				alert("获取类型列表失败！！");
			});
		}

		$scope.onShelf=function(){
			var bookType=$scope.selected.id;
			var book={
					bookAmount:$scope.bookAmount,
					bookName: $scope.bookName,
					bookAuthor: $scope.bookAuthor,
					bookVersion: $scope.bookVersion,
					bookPublish: $scope.bookPublish,
					bookBrief: $scope.bookBrief,
					bookType: bookType,
					bookAddr: $scope.bookAddr
			}
			console.log(book);
			$http({
				method: 'POST',
				url: '../php/bookOnshelf.php',
				data: book
			}).success(function(data){
				alert("上架成功！");
				console.log(data);
			}).error(function() {
				alert("上架失败!!");
			});
		}
}])