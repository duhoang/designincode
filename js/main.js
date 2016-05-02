var main = main || {};

main.start = function() {
	main.initFooter();
};

main.initFooter = function() {
	$('.show-how').on('click', function() {
		$('.footer-dock').addClass('show-footer');
	});

	$('.hide-footer').on('click', function() {
		$('.footer-dock').removeClass('show-footer');
	});
};

$(function(){
	main.start();
});