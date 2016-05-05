/*app.filter("range",function($filter) {
	return function(data,page,size) {
		var start_index=(page-1)*size;
		if(data.length<start_index) {
			return [];
		}else {
			return $filter("limitTo")(data.splice(start_index),size())
		}else {
			return data;
		}
	}
})
.filter("pageCount",function() {
	return function(data,size) {
		var result=[];
		for(var i=0;i<Math.ceil(data.length/size);i++){
			result.push(i);
		}
		return result;
	}
});*/