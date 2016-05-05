$(document).ready(function(){
	$("#content-menu .nav-aside p.menu-title").click(function(event) {
		/* Act on the event */
		if($(this).parent().find("i").hasClass("fa-angle-right")){
			$(this).parent().find("ul.ul-child").slideDown("fast");
			$(this).parent().find("i").removeClass("fa-angle-right").addClass("fa-angle-down");
		}else{
			$(this).parent().find("ul.ul-child").slideUp("fast");
			$(this).parent().find("i").removeClass("fa-angle-down").addClass("fa-angle-right");
		}
	});

	$("ul.ul-child li").click(function(){
		$(this).parents("ul.nav-aside").find('li').removeClass("selected");
		$(this).addClass("selected");
	});

	$("#content-body").on("click","#query-list li",function(){
		//alert($(this));
		$(this).hide();
	})
})