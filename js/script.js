
var gameSlider = $('.game__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnFocus: false,
	pauseOnHover: false
});

var tokenSlider = $('.token__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnFocus: false,
	pauseOnHover: false
});

$(document).ready(function () {
	$('a[href^="#"]').click(function(){ // #1
		let anchor = $(this).attr('href');  // #2
		$('html, body').animate({           // #3
		scrollTop:  $(anchor).offset().top  // #4
		}, 600);                            // #5
		});
});