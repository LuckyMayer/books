app.config(['$routeProvider',function($routeProvider) {
	var route=$routeProvider;
	route.when('/query/:name',{
		controller: "queryController",
		templateUrl:"../views/book-query.html"
	});
	route.when('/detail/:id',{
		controller: "detailController",
		templateUrl: "../views/book-detail.php"
	});
	route.when('/query',{
		controller: "queryController",
		templateUrl:"../views/book-query.html"
	});
	route.when('/query-hot',{
		controller: "queryHotController",
		templateUrl: "../views/query-hot.html"
	});
	route.when('/user-info',{
		controller: "userinfoController",
		templateUrl: "../views/user-info.html"
	});
	route.when('/user-order',{
		controller: 'orderController',
		templateUrl: "../views/user-order.html"
	})
}])