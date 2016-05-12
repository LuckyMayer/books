app.controller('messageController',function($scope,$http,sessionName){
	var receiver=sessionName.get();
	if(receiver!="") {
		$http({
			method:'POST',
			url:'../php/getMessages.php',
			data: {reveive:receiver}
		}).success(function(data){
			$scope.messages=data;
			angular.forEach(data, function(value, key){
				if(value.isRead==1) $scope.messages[key].isRead=false;
			});
			console.log(data);
		}).error(function() {
			alert("获取用户消息失败！！");
		});
	}

	$scope.messageRead=function(mID) {
		$http({
			method: 'POST',
			url:'../php/readMessage.php',
			data: {id:mID}
		}).success(function(data){
			alert("操作成功");
		$http({
			method:'POST',
			url:'../php/getMessages.php',
			data: {reveive:receiver}
		}).success(function(data){
			$scope.messages=data;
			angular.forEach(data, function(value, key){
				if(value.isRead==1) $scope.messages[key].isRead=false;
			});
		});
		}).error(function() {
			alert("读取消息失败");
		});
	}

	$scope.messageDelete=function(mID) {
		$http({
			method: 'POST',
			url: '../php/deleteMessage.php',
			data: {id:mID}
		}).success(function(data){
			alert("删除成功!!");
			$http({
				method:'POST',
				url:'../php/getMessages.php',
				data: {reveive:receiver}
			}).success(function(data){
				$scope.messages=data;
				angular.forEach(data, function(value, key){
					if(value.isRead==1) $scope.messages[key].isRead=false;
			});
		});
		})
	}
})