import Splide from '@splidejs/splide';

export const articlesCarousel = () => {
	const articlesCarousel = document.querySelector('.articles-carousel');
	if (!!articlesCarousel) {
		const splide = new Splide(articlesCarousel, {
			type: 'slide',
			perPage: 3,
			perMove: 1,
			pagination: true,
			arrows: false,
			autoWidth: false,
			autoplay: true,
			speed: 1000,
			interval: 4000,
			pauseOnHover: false,
			easing: 'ease',
			updateOnMove: true,
			breakpoints: {
				991: {
					perPage: 2,
				},
				767: {
					perPage: 1,
				},
			}
		});

		splide.mount();
	}
};