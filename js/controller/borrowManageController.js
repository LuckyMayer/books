app.controller('borrowManageController', ['$scope','$http','sessionName', function($scope,$http,sessionName){
		var user=sessionName.get();
		var dateNow=new Date();
		var year=dateNow.getFullYear();
		var month=dateNow.getMonth()+1;
		var day=dateNow.getDate();
		if(user!="admin")
			alert("您没有权限!!")
		else {
		$http({
			method:'GET',
			url:'../php/getBorrow.php'
		}).success(function(data){
			console.log(data);
			$scope.records=data;
			angular.forEach($scope.records, function(value, key){
				var shouldDate=value.shouldReturn;
				var shouldYear=shouldDate.slice(0,4);
				var shouldMonth=shouldDate.slice(5,7);
				var shouldDay=shouldDate.slice(8,10);
				$scope.records[key].outLine=false;
				if(shouldYear>year)
					$scope.records[key].outLine=false;
				else if(shouldYear==year) {
					if(shouldMonth>month)
						$scope.records[key].outLine=false;
					else if(shouldMonth==month) {
							if(shouldDay>=day)
								$scope.records[key].outLine=false;
							else
								$scope.records[key].outLine=true;
					}
					else if(shouldMonth<month) {
						$scope.records[key].outLine=true;
					}
				}

				else if(shouldYear<year)
					$scope.records[key].outLine=true;
			});

			$scope.selectedPage=1;
	        $scope.end=pageSize;
	        $scope.start=0;
	        $scope.getCurrentPage=function(index) {
	            $scope.start=pageSize*index;
	            $scope.end=pageSize*(index+1);
	            $scope.selectedPage=index+1;
	            $scope.Records=$scope.records.slice($scope.start,$scope.end);
	        }

	        $scope.getPageClass=function(page){
	            return $scope.selectedPage==page?"btn-primary":"";
	        }

	        $scope.Records=$scope.records.slice($scope.start,$scope.end);			
		}).error(function() {
			alert("借阅信息加载出错!!");
		});
}
		$scope.ReturnedView=function() {
			$scope.isReturn=true;
			$http({
				method:'GET',
				url: '../php/getBorrowRecord.php'
			}).success(function(data){

				$scope.records=data;
        		$scope.selectedPage=1;
       			$scope.end=pageSize;
        		$scope.start=0;
        		$scope.getCurrentPage=function(index) {
            		$scope.start=pageSize*index;
            		$scope.end=pageSize*(index+1);
           			$scope.selectedPage=index+1;
            		$scope.Records=$scope.records.slice($scope.start,$scope.end);
        		}
		        $scope.getPageClass=function(page){
		            return $scope.selectedPage==page?"btn-primary":"";
		        }

		        $scope.Records=$scope.records.slice($scope.start,$scope.end);
			})
		}


		$scope.toReturnView=function() {
		$scope.isReturn=false;
		$http({
			method:'GET',
			url:'../php/getBorrow.php'
		}).success(function(data){
			console.log(data);
			$scope.records=data;
			angular.forEach($scope.records, function(value, key){
				var shouldDate=value.shouldReturn;
				var shouldYear=shouldDate.slice(0,4);
				var shouldMonth=shouldDate.slice(5,7);
				var shouldDay=shouldDate.slice(8,10);
				$scope.records[key].outLine=false;
				if(shouldYear>year)
					$scope.records[key].outLine=false;
				else if(shouldYear==year) {
					if(shouldMonth>month)
						$scope.records[key].outLine=false;
					else if(shouldMonth==month) {
							if(shouldDay>=day)
								$scope.records[key].outLine=false;
							else
								$scope.records[key].outLine=true;
					}
					else if(shouldMonth<month) {
						$scope.records[key].outLine=true;
					}
				}

				else if(shouldYear<year)
					$scope.records[key].outLine=true;
			});

			$scope.selectedPage=1;
	        $scope.end=pageSize;
	        $scope.start=0;
	        $scope.getCurrentPage=function(index) {
	            $scope.start=pageSize*index;
	            $scope.end=pageSize*(index+1);
	            $scope.selectedPage=index+1;
	            $scope.Records=$scope.records.slice($scope.start,$scope.end);
	        }

	        $scope.getPageClass=function(page){
	            return $scope.selectedPage==page?"btn-primary":"";
	        }

	        $scope.Records=$scope.records.slice($scope.start,$scope.end);			
		}).error(function() {
			alert("借阅信息加载出错!!");
		});			
		}


		$scope.SendMessage=function(index,receiver,bookName) {
			var from="admin";
			var receive=receiver;
			var content="您借阅的书《"+bookName+"》已过期，请及时归还";
			/*var content="Your book《"+bookName+"》has met deadLine";*/
			$http({
				method: 'POST',
				url:'../php/sendmessage.php',
				data: {sender:from,receive:receive,content:content}
			}).success(function(data){
				console.log(data);
				alert("消息发送成功!");

			})
		}
}])