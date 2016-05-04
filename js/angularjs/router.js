app.config(['$routeProvider',function($routeProvider) {
	var route=$routeProvider;
	route.when('/query',{
		
		templateUrl:"../views/book-query.html"
	});
	route.otherwise({redirectTo:'/qiery'});
}])