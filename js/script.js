(function($){

	/* jsInview
	--------------------------------------------------*/
	var jsInview = function(){
		$(window).on('scroll load',function () {
			$('.fadeup, .fadein, .effect').each(function() {
				if ($(this).offset().top <= $(window).scrollTop() + ($(window).height() / 1.5)) {
					$(this).addClass('on');
				}
			});
		});
	}

	/* Dom Ready
	--------------------------------------------------*/
	jsInview();
})(jQuery);