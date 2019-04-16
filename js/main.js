$('.nav-element').hover(function() {
	var fillsvg = $(this).children('svg').children('use');
	var showtext = $(this).children('span');
	showtext.removeClass('d-none');
	showtext.addClass('d-inline-block');
	$(this).css('background-color', fillsvg.css('fill'));
	$(this).width('159');
	
	fillsvg.css('fill','#ffffff');
}, function() {
	var fillsvg = $(this).children('svg').children('use');
	var showtext = $(this).children('span');
	showtext.removeClass('d-inline-block');
	showtext.addClass('d-none');
	fillsvg.css('fill', $(this).css('background-color'));
	$(this).css("background-color", "#ffffff");
	$(this).width('69');	
});
