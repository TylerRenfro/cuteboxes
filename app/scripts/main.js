console.log('\'Allo \'Allo!');

$(".learn-more").click(function(e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(".marketing").offset().top
	}, 400);
});