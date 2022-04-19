import * as ScrollMagic from 'scrollmagic';
import Tween from 'gsap';
import {transition} from "../constants/transitions";

export const generalScene = () => {
	const controller = new ScrollMagic.Controller();
	/*
	Images parallax
	 */
	// const boxes = document.querySelectorAll('.parallaxOnScroll');
	// for (let i = 0; i < boxes.length; i++) {
	// 	new ScrollMagic.Scene({
	// 		triggerElement: boxes[i],
	// 		triggerHook: 1,
	// 	})
	// 		.setTween(
	// 			Tween.fromTo(boxes[i].querySelector('img'),
	// 				{
	// 					scale: 2,
	// 					y: -100,
	// 				},
	// 				{
	// 					scale: 1,
	// 					y: 0,
	// 					duration: transition.scale.duration,
	// 					ease: transition.scale.ease,
	// 				})
	// 		)
	// 		.addTo(controller);
	// }

	/*
	Horizontal moving
	 */
	const rows = document.querySelectorAll('.section-name');
	if (rows.length) {
		for (let i = 0; i < rows.length; i++) {
			new ScrollMagic.Scene({
				triggerElement: rows[i],
				triggerHook: 1,
				duration: window.innerHeight * 2,
			})
				.setTween(
					Tween.to(rows[i].querySelector('.section-name-row'), {
						x: 0 - window.innerWidth,
					})
				)
				.addTo(controller);
		}
	}

};