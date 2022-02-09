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
gameSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
	document.querySelector('.game__digit-min').innerText = currentSlide + 1;
});

var lootboxSlider = $('.lootbox__slider').slick({
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
lootboxSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
	document.querySelector('.lootbox__digit-min').innerText = currentSlide + 1;
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

tokenSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
	document.querySelector('.token__digit-min').innerText = currentSlide + 1;
});


$(document).ready(function () {
	$('a[href^="#"]').click(function () {
		let anchor = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(anchor).offset().top
		}, 600);
	});
});

// window.addEventListener("resize", function () {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// }, true);
// startConfetti();

const swiper = new Swiper('.main-slider', {
	loop: true,
	autoplay: {
		delay: 5000,
	},
	speed: 1000,
	effect: 'coverflow',
	slidesPerView: "auto",
	initialSlide: 2,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: true,
	grabCursor: true,
	spaceBetween: 270,
	coverflowEffect: {
		rotate: 0,
		stretch: 30,
		depth: 120,
		modifier: 1.1,
		slideShadows: false,
	},
	breakpoints: {
		950: {
			spaceBetween: 290,
			coverflowEffect: {
				rotate: 0,
				stretch: 30,
				depth: 120,
				modifier: 1.1,
				slideShadows: false,
			}
		},
		800: {
			spaceBetween: 200,
			coverflowEffect: {
				rotate: 0,
				stretch: 30,
				depth: 120,
				modifier: 1.1,
				slideShadows: false,
			}
		},
		700: {
			spaceBetween: 150,
			coverflowEffect: {
				rotate: 0,
				stretch: 30,
				depth: 120,
				modifier: 1.1,
				slideShadows: false,
			}
		},
		600: {
			spaceBetween: 100,
			coverflowEffect: {
				rotate: 0,
				stretch: 30,
				depth: 120,
				modifier: 1.1,
				slideShadows: false,
			}
		},
		500: {
			spaceBetween: 75,
			coverflowEffect: {
				rotate: 0,
				stretch: 30,
				depth: 120,
				modifier: 1.1,
				slideShadows: false,
			}
		},
		300: {
			spaceBetween: 15,
			coverflowEffect: {
				rotate: 0,
				stretch: 30,
				depth: 120,
				modifier: 1.1,
				slideShadows: false,
			}
		}

	}

});

function diffSubtract(date1, date2) {
	return date2 - date1;
}
let day = document.querySelector('.main-counter__day');
let hour = document.querySelector('.main-counter__hour');
let minute = document.querySelector('.main-counter__min');
let second = document.querySelector('.main-counter__sec');
function executeTimer() {
	end_date = {
		"full_year": "2022", // Год
		"month": "02", // Номер месяца
		"day": "14", // День
		"hours": "12", // Час
		"minutes": "00", // Минуты
		"seconds": "00" // Секунды
	}

	let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;
	timer = setInterval(() => {
		let now = new Date();
		let date = new Date(end_date_str);
		let ms_left = diffSubtract(now, date);
		if (ms_left <= 0) {
			clearInterval(timer);
		} else {
			let res = new Date(ms_left);
			day.innerText = `${addZero(res.getUTCDate() - 1)}`;
			hour.innerText = `${addZero(res.getUTCHours())}`;
			minute.innerText = `${addZero(res.getUTCMinutes())}`;
			second.innerText = `${addZero(res.getUTCSeconds())}`;
		}
	}, 1000);
}
function addZero(time) {
	if (time < 10) {
		return '0' + time;
	}
	return time;
}
executeTimer();
