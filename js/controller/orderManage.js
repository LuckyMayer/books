app.controller('orderManage',function($scope,$http,sessionName){
	var user=sessionName.get();
	var pageSize=12;
	if(user!="admin") {
		alert("您不具备操纵权限!!");
	}
	else {
		$http({
			method:'GET',
			url:'../php/deailOrder.php'
		}).success(function(data){
			$scope.orders=data;

			$scope.selectedPage=1;
	        $scope.end=pageSize;
	        $scope.start=0;
	        $scope.getCurrentPage=function(index) {
	            $scope.start=pageSize*index;
	            $scope.end=pageSize*(index+1);
	            $scope.selectedPage=index+1;
	            $scope.Orders=$scope.orders.slice($scope.start,$scope.end);
	        }

	        $scope.getPageClass=function(page){
	            return $scope.selectedPage==page?"btn-primary":"";
	        }

	        $scope.Orders=$scope.orders.slice($scope.start,$scope.end);	
		}).error(function() {
			alert("预约列表读取失败!!");
		});
	}

		$scope.SendMessage=function(receiver,bookName) {
			var from="admin";
			var receive=receiver;
			var content="您预约的书《"+book预约的书Name+"》已到达";
			//var content="Your book《"+bookName+"》 arrived";
			$http({
				method: 'POST',
				url:'../php/sendmessage.php',
				data: {sender:from,receive:receive,content:content}
			}).success(function(data){
				console.log(data);
				alert("消息发送成功!");

			}).error(function() {
				alert("发送出错");
			});
		}
})