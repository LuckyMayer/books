app.controller('getusers', ['$scope','sessionName', function($sccope,sessionName){
		var user=sessionName.get();
		alert(user);
}])