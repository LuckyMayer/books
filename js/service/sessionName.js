app.factory('sessionName',[ '$rootScope',function($rootScope){
	sessionName={};
	sessionName.set=function(Name){
		if(Name&&Name!="") {
			$rootScope.Name=Name;
			alert($rootScope.Name);
		}
	}
	sessionName.get=function() {
		return $rootScope.Name;
	}
	return sessionName;
}]);