var pageSize=10;
app.controller('borrowGetController', ['$scope','$http','$routeParams','sessionName', function($scope,$http,$routeParams,sessionName){
		var user=sessionName.get();
		var dateNow=new Date();
		var year=dateNow.getFullYear();
		var month=dateNow.getMonth()+1;
		var day=dateNow.getDate();

		$scope.isReturn=false;

		if(user!="") {
			$http({
				method:'POST',
				url:'../php/toReturn.php',
				data: {borrowName:user}
			}).success(function(data){
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

				/*分页代码*/
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
				/*分页代码结束*/
			}).error(function() {
				alert("用户借阅信息加载出错!!");
			});
		}


		$scope.toReturnView=function(){
			$scope.isReturn=false;
		if(user!="") {
			$http({
				method:'POST',
				url:'../php/toReturn.php',
				data: {borrowName:user}
			}).success(function(data){
				$scope.records=data;
				console.log(year+'-'+month+'-'+day);
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
				/*分页代码*/
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
				/*分页代码结束*/				
			}).error(function() {
				alert("用户借阅信息加载出错!!");
			});
		}
	}

	$scope.ReturnedView=function(){
		if(user!="") {
			$http({
				method: 'POST',
				url	:'../php/getAllRecord.php',
				data: {borrowName: user}
			}).success(function(data){
				$scope.isReturn=true;
				$scope.records=data;
				console.log(data);
/*分页代码*/
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
				/*分页代码结束*/								
			}).error(function() {
				alert("获取记录列表失败！！");
			});
		}
	}

	$scope.Longer=function(bookName){
		if(user!="") {
			$http({
				method: 'POST',
				url:'../php/updateBorrow.php',
				data: {bookName:bookName,borrowName:user}
			}).success(function(data){
				alert("操作成功!!");
				$http({
				method:'POST',
				url:'../php/toReturn.php',
				data: {borrowName:user}
			}).success(function(respon){
				$scope.records=respon;
				
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
				console.log(respon);
				})
			}).error(function() {
				alert("续借失败!请到人工工作台操作！")
			});
		}
	}
}])