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

	$("#content-body").on("click","p button.zan",function(){
			$i=$(this).find("i").removeClass('icon-like').addClass("fa fa-thumbs-up");
			$i.parent().attr("disabled","false");
			$i.parent().siblings('button').removeAttr('disabled');
			if($i.parent().siblings('button').find("i").hasClass('fa-thumbs-down')) {
				$i.parent().siblings('button').find("i").removeClass('fa-thumbs-down').addClass('icon-dislike');
			}else {

			}			

	})

	$("#content-body").on("click","p button.opp",function(){
			$i=$(this).find("i").removeClass('icon-dislike').addClass("fa fa-thumbs-down");
			$i.parent().attr("disabled","false");
			$i.parent().siblings('button').removeAttr('disabled');
			if($i.parent().siblings('button').find("i").hasClass('fa-thumbs-up')) {
				$i.parent().siblings('button').find("i").removeClass('fa-thumbs-up').addClass('icon-like');
			}else {

			}
	})


})