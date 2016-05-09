app.config(['$routeProvider',function($routeProvider) {
	var route=$routeProvider;
	route.when('/query',{
		controller: "queryController",
		templateUrl:"../views/book-query.html"
	});
	route.when('/detail/:id',{
		controller: "detailController",
		templateUrl: "../views/book-detail.php"
	})
}])