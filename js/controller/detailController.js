app.controller("detailController",function($scope,$http,$routeParams){
	var id=$routeParams.id;
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
});
app.controller("zanController",function($scope,$http){
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
})