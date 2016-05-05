
app.controller('queryController', ['$scope','$http','$filter', function($scope,$http,$filter){
    $http.get("../php/getBooks.php").success(function(data){
        $scope.books=data;
        console.log(data);
    }).error(function() {
        alert("somthing wrong!");
        /* Act on the event */
    });

		$scope.selectBook=function(name){
			$scope.Name=name;
        }


}]);
