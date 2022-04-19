import Splide from "@splidejs/splide";
import Tween from "gsap";

export const tabsCarousel = () => {
	const carousel = document.querySelector('.tabs.splide');
	if (!!carousel) {

		const { left } = carousel.getBoundingClientRect();

		if (window.innerWidth > 767) {
			Tween.set(carousel, {
				width: window.innerWidth - left,
			});
		}

		const splide = new Splide(carousel, {
			type: 'slide',
			perPage: 1,
			perMove: 1,
			pagination: false,
			arrows: false,
			autoWidth: true,
			autoplay: false,
			speed: 500,
			pauseOnHover: false,
			easing: 'ease',
			updateOnMove: true,
			breakpoints: {
				767: {
					focus: 'center',
				},
			}
		});

		splide.on( 'mounted', function () {
			switchTabs(0);
		});

		splide.mount();

		splide.on( 'moved', function (newIndex) {
			switchTabs(newIndex);
		});

		const tabs = carousel.querySelectorAll('.tabs-btn.splide__slide');
		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('click', () => {
				splide.go(i);
			});
		}

	}
};

const switchTabs = (i) => {
	const tabBtns = document.querySelectorAll('.tabs-btn');
	let tabId = tabBtns[i].dataset.triggerId;
	if (!!tabId) {
		let currentTabContent = document.querySelector(`.tabs-content-item[data-content-id="${tabId}"]`);
		let activeTabContent = document.querySelector('.tabs-content-item.is-active');
		let activeTabBtn = document.querySelector('.tabs-btn.is-active');
		if (!!activeTabContent) {
			activeTabContent.classList.remove('is-active');
			activeTabBtn.classList.remove('is-active');
		}
		if (!!currentTabContent) {
			currentTabContent.classList.add('is-active');
			tabBtns[i].classList.add('is-active');
		}
	}
}