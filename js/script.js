var gameSlider = $('.game__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnFocus: false,
	pauseOnHover: false,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				dots: false
			}
		}
	]
});
gameSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
	document.querySelector('.game__digit-min').innerText = currentSlide + 1;
});

var tokenSlider = $('.token__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	dots: true,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnFocus: false,
	pauseOnHover: false,
	swipeToSlide: true,
	responsive: [
		{
			breakpoint: 769,
			settings: {
				dots: false
			}
		}
	]
});

tokenSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
	document.querySelector('.token__digit-min').innerText = currentSlide + 1;
});


$(document).ready(function () {
	$('a[href^="#"]').click(function(){ // #1
		let anchor = $(this).attr('href');  // #2
		$('html, body').animate({           // #3
		scrollTop:  $(anchor).offset().top  // #4
		}, 600);                            // #5
		});
});

			window.addEventListener("resize", function () {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
startConfetti();
