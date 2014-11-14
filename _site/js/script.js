$(document).ready(function() {	

	var items = $('#carousel').children().length;
	var curr_item = 1;
	$('#carousel-next').click(function(){
		if (curr_item < items) {
			var width = $(window).width();
			var next_item = curr_item+1;
			var next = $('.carousel-item:nth-child('+next_item+')');
			var current = $('.carousel-item:nth-child('+curr_item+')');
			next.css('left', width).show();
			current.animate({left: '-'+width+'px'}, 400, function() {
				$(this).hide();
			});
			next.animate({left: '0px'}, 400);
			curr_item++;
		}
	});
	$('.carousel-item:nth-child(1)').show();
	
	$('#carousel-prev').click(function(){
		if (curr_item > 1) {
			var width = $(window).width();
			var next_item = curr_item-1;
			var next = $('.carousel-item:nth-child('+next_item+')');
			var current = $('.carousel-item:nth-child('+curr_item+')');
			next.css('left', '-'+width+'px').show();
			current.animate({left: width+'px'}, 400, function() {
				$(this).hide();
			});
			next.animate({left: '0px'}, 400);
			curr_item--;
		}
	});

	$('.trigger>ul').hover(function(){
		// $('.trigger>ul>ul').css('display', 'block');	
		$('.trigger>ul>ul').toggle();
	});


	// $('.stat-box').hover(function(){
	// 	// $('.trigger>ul>ul').css('display', 'block');	
	// 	$('.stat-box-hover').toggle();
	// });

});