app.controller('queryController', ['$scope', function($scope){
		$scope.books=[
		{Name:"百年孤独",Autho:"加夫列尔·加西亚·马尔克斯",Publish:"电子工业出版社"},
		{Name:"用AngularJS开发下一代Web应用",Autho:"Brad Green",Publish:"电子工业出版社"},
		{Name:"AngularJS开发下一代Web应用",Autho:"BrGreen",Publish:"人民邮电出版社"},
		{Name:"深入浅出node",Autho:"扑棱",Publish:"人民邮电出版社"}
		];
		$scope.isShow=false;

		$scope.selectBook=function(name){
			$scope.Name=name;

		};
		

}]);