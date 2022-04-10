import Splide from '@splidejs/splide';

export const heroCarousel = () => {
	const heroCarousel = document.querySelector('.hero-carousel');
	if (!!heroCarousel) {
		const splide = new Splide(heroCarousel, {
			type: 'loop',
			// drag: 'free',
			focus: 'center',
			perPage: 1,
			pagination: false,
			arrows: false,
			autoWidth: true,
			autoplay: true,
			speed: 1000,
			interval: 4000,
			pauseOnHover: false,
			easing: 'ease',
			updateOnMove: true,
		});

		splide.on( 'mounted', function () {
			getPreviousSlides();
		});

		splide.mount();

		splide.on( 'move', function (a) {
			getPreviousSlides();
		});
	}
};

const getPreviousSlides = () => {
	const slides = [...document.querySelectorAll('.hero-carousel-item')];
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('is-scaled');
	}
	const prevPrevSlide = document.querySelector('.is-visible.is-active').previousElementSibling.previousElementSibling.previousElementSibling;
	const prevPrevPrevSlide = document.querySelector('.is-visible.is-active').previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
	!!prevPrevSlide ? prevPrevSlide.classList.add('is-scaled') : null;
	!!prevPrevPrevSlide ? prevPrevPrevSlide.classList.add('is-scaled') : null;
}