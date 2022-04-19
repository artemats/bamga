import {closeMainNav} from "./toggleMainNav";

export const changeHeaderOnScroll = () => {
	const header = document.querySelector('.header');
	window.addEventListener('scroll', () => {
		closeMainNav();
		if (!!header) {
			window.scrollY >= 10 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
		}
	});
};