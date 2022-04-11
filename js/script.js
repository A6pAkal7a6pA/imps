let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

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

window.addEventListener('load', () => {
  const top = $(window.location.hash).offset().top
  if (!top) return
  setTimeout(() => {
    window.scrollTo({
      top
    })
  }, 0)
})

// window.addEventListener("resize", function () {
// 	canvas.width = window.innerWidth;
// 	canvas.height = window.innerHeight;
// }, true);
// startConfetti();

const swiper = new Swiper('.main-slider', {
	loop: true,
	autoplay: {
		delay: 5000,
		disableOnInteraction: false
	},
	speed: 1000,
	effect: 'coverflow',
	slidesPerView: "auto",
	initialSlide: 0,
	centeredSlides: true,
	slideToClickedSlide: true,
	autoHeight: true,
	grabCursor: true,
	spaceBetween: 0,
	coverflowEffect: {
		rotate: 0,
		stretch: 20,
		depth: 180,
		modifier: 1,
		scale: 1,
		slideShadows: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {

		1600: {
			spaceBetween: 100,
			coverflowEffect: {
				rotate: 0,
				stretch: 20,
				depth: 120,
				modifier: 1,
				scale: 1,
				slideShadows: false,
			},
		},
		2500: {
			spaceBetween: 150,
			coverflowEffect: {
				rotate: 0,
				stretch: 20,
				depth: 120,
				modifier: 1,
				scale: 1,
				slideShadows: false,
			},
			// effect: 'slide'
		}
	}
	// 	800: {
	// 		spaceBetween: 200,
	// 		coverflowEffect: {
	// 			rotate: 0,
	// 			stretch: 30,
	// 			depth: 120,
	// 			modifier: 1.1,
	// 			slideShadows: false,
	// 		}
	// 	},
	// 	700: {
	// 		spaceBetween: 150,
	// 		coverflowEffect: {
	// 			rotate: 0,
	// 			stretch: 30,
	// 			depth: 120,
	// 			modifier: 1.1,
	// 			slideShadows: false,
	// 		}
	// 	},
	// 	600: {
	// 		spaceBetween: 100,
	// 		coverflowEffect: {
	// 			rotate: 0,
	// 			stretch: 30,
	// 			depth: 120,
	// 			modifier: 1.1,
	// 			slideShadows: false,
	// 		}
	// 	},
	// 	500: {
	// 		spaceBetween: 75,
	// 		coverflowEffect: {
	// 			rotate: 0,
	// 			stretch: 30,
	// 			depth: 120,
	// 			modifier: 1.1,
	// 			slideShadows: false,
	// 		}
	// 	},

	// }

});


let arr = ["legendary", "mystery", "common", "epic", "rare"]
swiper.on('slideChange', function (slider) {
	let slides = slider.slides;
	let currentSlide = slides[slider.activeIndex];
	arr.forEach((element) => {
		if (currentSlide.classList.contains(element)) {
			let currentText = document.querySelector('.ms-content__item.' + element)
			currentText.style.display = 'block';
			getSiblings(currentText).forEach((text) => text.style.display = 'none')
		}
	});
});

let initCurrSlide = document.querySelector('.swiper-pagination-bullet.swiper-pagination-bullet-active');
initCurrSlide.classList.remove("swiper-pagination-bullet-active");
setTimeout(() => {
	console.log(initCurrSlide);
	initCurrSlide.classList.add("swiper-pagination-bullet-active");

}, 0)

function getSiblings(elem) {
	var siblings = [];
	var sibling = elem;
	while (sibling.previousSibling) {
		sibling = sibling.previousSibling;
		sibling.nodeType == 1 && siblings.push(sibling);
	}

	sibling = elem;
	while (sibling.nextSibling) {
		sibling = sibling.nextSibling;
		sibling.nodeType == 1 && siblings.push(sibling);
	}

	return siblings;
}



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
// executeTimer();
