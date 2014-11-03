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

/* 

$('#carousel-next').click(function(){
		if (count < img_links.length) {
			var width = $(window).width();
			count++;
			var img_link = img_links[count];

			$('.carousel-item.outside-item').find('img').attr('src', img_link);
			$('.carousel-item.outside-item').css('left', width+'px').show();
			$('.carousel-item.primary').animate({left: '-'+width+'px'}, 400, function() {
				$('.carousel-item.primary').removeClass('primary').addClass('outside-item');
			});
			$('.carousel-item.outside-item').animate({left: '0px'}, 400, function() {
				$('carousel-item.primary').removeClass('outside-item').addClass('primary');
			});

		}
	});
	
	//prev
	$('#carousel-prev').click(function(){
		if (count > 0) {
			var width = $(window).width();
			count--;
			var img_link = img_links[count];
			
			$('.carousel-item.outside-item').find('img').attr('src', img_link);
			$('.carousel-item.outside-item').css('left', '-'+width+'px').show();
			$('.carousel-item.primary').animate({left: width+'px'}, 400, function() {
				$('.carousel-item.primary').removeClass('primary').addClass('outside-item');
			});
			$('.carousel-item.outside-item').animate({left: '0px'}, 400, function() {
				$('carousel-item.primary').removeClass('outside-item').addClass('primary');
			});
		}
	});

*/



	var clicked = true;

	$('#checkbox').click(function(){
		if (clicked == true) {
			$('#tasklist').css('display', 'inline-block');
			clicked = false;
		} else {
			$('#tasklist').css('display', 'none');
			clicked = true;
		}
	});


	$('.item').hover(function(){
		// $(this).children('.item-text').animate({display: 'inline-block'}, 500);
		$(this).stop();
		$(this).animate({marginLeft: 0}, 500);

		// $(this).children('.icon').css('margin-left','0');
		// $(this).children('.icon').animate({marginLeft: 0}, 500);
	}, function(){
		// $(this).children('.item-text').css('display', 'none');
		$(this).stop();
		$(this).animate({marginLeft: -155}, 500);
		// $(this).children('.icon').css('margin-left','166');
	});



	$('#grid-content').masonry({
		itemSelector : '.search-item',
		gutterWidth: 15 });


//  $('#account-item').toggle(function() {
//     $('#account-menu').show();
// }, function() {
// 	$('#account-menu').hide();


// $('.checkbox').toggle(function(){
// 	$(#tasklist).show();
// }, function() {

// }, function
// })

// });




});