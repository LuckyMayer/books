$(document).ready(function(){
	$("#content-menu .nav-aside>li").click(function(event) {
		/* Act on the event */
		if($(this).find("i").hasClass("fa-angle-right")){
			$(this).find("ul.ul-child").slideDown("fast");
			$(this).find("i").removeClass("fa-angle-right").addClass("fa-angle-down");
		}else{
			$(this).find("ul.ul-child").slideUp("fast");
			$(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-right");
		}
	});
})