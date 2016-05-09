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
})