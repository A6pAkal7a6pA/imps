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
	appendDots: '.game__navigation',
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
	appendDots: '.lootbox__navigation',
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
let gameActive = document.querySelector('.game .slick-dots li.slick-active');
gameActive.classList.remove('slick-active');

let lootboxActive = document.querySelector('.lootbox .slick-dots li.slick-active');
lootboxActive.classList.remove('slick-active');
setTimeout(() => {
	gameActive.classList.add('slick-active');
	lootboxActive.classList.add('slick-active');
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
	// autoHeight: true,
	grabCursor: true,
	spaceBetween: 0,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 120,
		modifier: 1,
		scale: 0.9,
		slideShadows: false,
	},
	pagination: {
		el: '.main-slider__pagination',
		type: 'bullets',
		clickable: true
	},
	navigation: {
		nextEl: '.main-slider__button-next',
		prevEl: '.main-slider__button-prev',
	},
	breakpoints: {
	}
});

let elementAfter = document.querySelector('.twenty-2:first-child');
let left = elementAfter.getBoundingClientRect().left;
let center = elementAfter.getBoundingClientRect().width / 2;
let line = document.querySelector('.road__line');
line.style.marginLeft = center + left + 'px';
let centerViewport = document.documentElement.clientWidth / 2;
let lastSlide = document.getElementById('last');
let endOfSlider = lastSlide.getBoundingClientRect().left + lastSlide.getBoundingClientRect().width + left;

const roadSwiper = new Swiper('.road-slider', {
	speed: 1000,
	slidesPerView: "auto",
	initialSlide: 0,
	centeredSlides: false,
	slideToClickedSlide: true,
	grabCursor: true,
	spaceBetween: 20,
	// pagination: {
	// 	el: '.main-slider__pagination',
	// 	type: 'bullets',
	// 	clickable: true
	// },
	breakpoints: {
	}
});



let dates = document.querySelectorAll('.road__date');
dates.forEach(date => {
	date.addEventListener('click', () => {
		let currentTwenty = 'twenty-' + (+$(".road__date").index(date) + 2)
		roadSwiper.slideTo(roadSwiper.slides.indexOf(roadSwiper.slides.filter((el) => el.classList.contains(currentTwenty))[0]), 1000, false);
		getSiblings(date).forEach(date => date.classList.remove('road__date_active'));
		date.classList.add('road__date_active');
		let twentys = document.querySelectorAll('.road-slider__slide.' + currentTwenty);
		let notTwenty = document.querySelectorAll('.road-slider__slide:not(' + currentTwenty + ')');
		notTwenty.forEach(twenty => twenty.classList.remove('active'));
		twentys.forEach(twenty => twenty.classList.add('active'));
	})
});

function switchYears() {
	for (let i = 2; i <= 5; i++) {
		let currentElements = document.querySelectorAll('.twenty-' + i);
		let currentElement = currentElements[0]
		if (currentElement.getBoundingClientRect().left <= centerViewport) {
			document.querySelectorAll('.road-slider__slide:not(.twenty-' + i + ')')
				.forEach((element) => element.classList.remove('active'));
			currentElements
				.forEach((currentElement) => currentElement.classList.add('active'));
			getSiblings(dates[i - 2]).forEach(el => el.classList.remove('road__date_active'));
			dates[i - 2].classList.add('road__date_active');
		}
	}
}

roadSwiper.on('sliderMove', function (slider) {
	switchYears()
});

roadSwiper.on('slideChange', function (slider) {
	// switchYears()
	if (slider.realIndex > 8) {
		roadSwiper.slideTo(8, 1000, false)
	}
})

swiper.on('slideChange', function (slider) {
	let currentIndex = slider.realIndex;
	let content = document.querySelectorAll('.main-slider__content-inner .main-slider__item');
	let currentSlide = content[currentIndex];
	currentSlide.style.display = 'block';
	getSiblings(currentSlide).forEach((slide) => slide.style.display = 'none');
});

let initCurrSlide = document.querySelector('.swiper-pagination-bullet.swiper-pagination-bullet-active');
initCurrSlide.classList.remove("swiper-pagination-bullet-active");
setTimeout(() => {
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
