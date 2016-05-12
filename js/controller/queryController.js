
pageSize=10;
app.controller('queryController', ['$scope','$http','sessionName','$routeParams',function($scope,$http,sessionName,$routeParams){
    sessionName.set($routeParams.name);
    var user=sessionName.get();
    $scope.messageShow=false;
    /*判断是否有未读消息*/
    $http({
        method:'POST',
        url: '../php/getMesaageCount.php',
        data: {receive:user}
    }).success(function(data){
        if(data>0) $scope.messageShow=true;
        else    $scope.messageShow=false;

    }).error(function() {
        alert("获取消息列表失败!!");
    });

    /**********************/
    $http.get("../php/getBooks.php").success(function(data){
        $scope.books=data;
        if(data=="") $scope.dataCounts=true;
        else $scope.dataCounts=false;
        $scope.selectedPage=1;

        $scope.end=pageSize;
        $scope.start=0;
        $scope.getCurrentPage=function(index) {
            $scope.start=pageSize*index;
            $scope.end=pageSize*(index+1);
            $scope.selectedPage=index+1;
            $scope.Books=$scope.books.slice($scope.start,$scope.end);
        }

        $scope.getPageClass=function(page){
            return $scope.selectedPage==page?"btn-primary":"";
        }

        $scope.Books=$scope.books.slice($scope.start,$scope.end);
    }).error(function() {
        alert("获取书籍信息失败");
    
    });
    $scope.dataCounts=false;

    $scope.queryBooks=function(keyWord){
            $http({
                method:'POST',
                url: '../php/queryBook.php',
                data: {id:keyWord}
            }).success(function(data){
         if(data=="") $scope.dataCounts=true;
        else $scope.dataCounts=false;
        $scope.books=data;
        $scope.selectedPage=1;
        $scope.end=pageSize;
        $scope.start=0;
        $scope.getCurrentPage=function(index) {
            $scope.start=pageSize*index;
            $scope.end=pageSize*(index+1);
            $scope.selectedPage=index+1;
            $scope.Books=$scope.books.slice($scope.start,$scope.end);
        }
        $scope.getPageClass=function(page){
            return $scope.selectedPage==page?"btn-primary":"";
        }

        $scope.Books=$scope.books.slice($scope.start,$scope.end);    
    }).error(function() {
       alert("查询出错！！");
    });
}
}]);
app.filter('cut',function() {
    return function(data) {
        var result=[];
        var length=0;
        angular.forEach(data, function(value, key){
                if(value) length++;
        });
        for(var i=0;i<Math.ceil(length/pageSize);i++){
            result.push(i);
        }
        return result;
    }
});
