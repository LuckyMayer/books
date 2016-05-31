app.controller("detailController",function($scope,$http,$routeParams,sessionName){
	var id=$routeParams.id;
	var name=sessionName.get();

	$http({
		method: 'POST',
		url: '../php/bookDetail.php',
		data: {id:id}
	}).success(function(data){
		$scope.bookInfo=data[0];
		console.log($scope.bookInfo);
	}).error(function() {
		alert("something Wrong!!");
	});
	$scope.borrow=function(bookName) {
		$http({
			method:'POST',
			url: '../php/bookBorrow.php',
			data:{book:bookName,borrowName:name}
		}).success(function(data){
			console.log(data);
			alert("借阅成功");
		})
		
	}
});

app.controller("zanController",function($scope,$http){
	var star_store=12;
	$scope.support=function(bookID) {
		$http({
			method: 'POST',
			url: '../php/support.php',
			data: {id:bookID}
		}).success(function(data){
			console.log(data);
		}).error(function() {
			alert("something Wrong!!");
		});
	};

	$scope.oppose=function(bookID) {
		$http({
			method: 'POST',
			url: '../php/oppose.php',
			data: {id:bookID}
		}).success(function(data){
			console.log(data);
		}).error(function(){
			alert("something Wrong!!");
		})
	}

	$scope.shiningStar=function(index,store){
		if(store/star_store>=index)
			return "fa fa-star";
		else
			return "fa fa-star-o";
	}


});

app.controller("commentController",function($scope,$http,sessionName,$rootScope,$routeParams){
	var id=$routeParams.id;
	$http({
		method: 'POST',
		url: '../php/commentList.php',
		data: {id:id}
	}).success(function(data){
		console.log(data);
		$scope.comments=data;
	}).error(function() {
		alert("something Wrong!!");
	});
	 $scope.subComment=function(bookID,comment){
	 	var userName=sessionName.get();
	 	var info={
	 		id:bookID,
	 		comments: comment,
	 		user: sessionName.get()
	 	}
	 	$http({
	 		method: 'POST',
	 		url: '../php/subComment.php',
	 		data: info
	 	}).success(function(data){
	 		console.log(data);
	 		$scope.content="";
	$http({
		method: 'POST',
		url: '../php/commentList.php',
		data: {id:id}
	}).success(function(data){
		console.log(data);
		$scope.comments=data;
	}).error(function() {
		alert("something Wrong!!");
	});
	 	}).error(function() {
	 		alert("something wrong!!");
	 	});
	 }
})