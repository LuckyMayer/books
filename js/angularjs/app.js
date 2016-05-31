var app=angular.module("myApp",["ngRoute","ngResource"]);
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
