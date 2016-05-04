app.config(['$routeProvider',function($routeProvider) {
	var route=$routeProvider;
	route.when('/query',{
		controller: "queryController",
		templateUrl:"../views/book-query.html"
	});
}])