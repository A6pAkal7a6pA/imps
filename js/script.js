// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`)
executeGameSlider();
executeLootboxSlider();
// executeReincarnationSlider();

// function executeReincarnationSlider() {
// 	const swiper = new Swiper('.reincarnation__items', {
// 		speed: 1000,
// 		slidesPerView: "auto",
// 		initialSlide: 0,
// 		centeredSlides: false,
// 		slideToClickedSlide: false,
// 		grabCursor: true,
// 		spaceBetween: 20,

// 		touchEventsTarget: 'container',
// 		// pagination: {
// 		// 	el: '.main-slider__pagination',
// 		// 	type: 'bullets',
// 		// 	clickable: true
// 		// },
// 		breakpoints: {
// 		}
// 	});
// }



let headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', () => {
	let header = document.querySelector('.header');
	if (header.classList.contains('active')) {
		header.classList.remove('active');
	} else {
		header.classList.add('active');
	}
});

function executeGameSlider() {
	let gameSlider = $('.game__slider').slick({
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
			// {
			// 	breakpoint: 769,
			// 	settings: {
			// 		dots: false
			// 	}
			// }
		]
	});
	gameSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
		document.querySelector('.game__digit-min').innerText = currentSlide + 1;
	});
	let gameActive = document.querySelector('.game .slick-dots li.slick-active');
	gameActive.classList.remove('slick-active');
	setTimeout(() => {
		gameActive.classList.add('slick-active');
	});
}

function executeLootboxSlider() {
	let lootboxSlider = $('.lootbox__slider').slick({
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
			// {
			// 	breakpoint: 769,
			// 	settings: {
			// 		dots: false
			// 	}
			// }
		]
	});
	lootboxSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
		document.querySelector('.lootbox__digit-min').innerText = currentSlide + 1;
	});
	let lootboxActive = document.querySelector('.lootbox .slick-dots li.slick-active');
	lootboxActive.classList.remove('slick-active');
	setTimeout(() => {
		lootboxActive.classList.add('slick-active');
	});
}


$(document).ready(function () {
	$('a[href^="#"]').click(function () {
		let anchor = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(anchor).offset().top
		}, 600);
	});
});

// window.addEventListener('load', () => {
// 	const top = $(window.location.hash).offset().top
// 	if (!top) return
// 	setTimeout(() => {
// 		window.scrollTo({
// 			top
// 		})
// 	}, 0)
// })

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
	slideToClickedSlide: false,
	grabCursor: true,
	spaceBetween: 20,
	wrapperClass: 'swiper-wrapper',
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
	switchYears()
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
