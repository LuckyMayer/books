app.factory('sessionName',[ '$rootScope',function($rootScope){
	$rootScope.Name="";
	sessionName={};
	sessionName.set=function(Name){

		$rootScope.Name=Name;
	}
	sessionName.get=function() {
		return $rootScope.Name;
	}
	return sessionName;
}]);