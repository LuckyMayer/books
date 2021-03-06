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
	});
	route.when('/user-borrow',{
		controller: 'borrowGetController',
		templateUrl: '../views/user-borrow.html'
	});
	route.when('/onshelf',{
		controller:'onshelfController',
		templateUrl: '../views/book-onshelf.html'
	});
	route.when('/offshelf',{
		controller: 'offshelfController',
		templateUrl: '../views/book-offshelf.html'
	});
	route.when('/borrow-manage',{
		controller: 'borrowManageController',
		templateUrl: '../views/borrow-manage.html'
	});
	route.when('/message',{
		controller: 'messageController',
		templateUrl:'../views/messages.html'
	});
	route.when('/orderList',{
		controller: 'orderManage',
		templateUrl: '../views/orderList.html'
	})
}])