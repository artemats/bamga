import Tween from 'gsap';

export const setFullBannerPosition = () => {
	const banner = document.querySelector('.section-banner.sticky-right');
	if (!!banner) {
		const { left } = banner.getBoundingClientRect();
		Tween.set(banner, {
			width: window.innerWidth - left,
		});
	}
};