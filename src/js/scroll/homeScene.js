import * as ScrollMagic from 'scrollmagic';
import Tween from 'gsap';
import {transition} from "../constants/transitions";

export const homeScene = () => {
	const controller = new ScrollMagic.Controller();
	/*
	Scale banner
	 */
	const scaleBanner = document.querySelector('.scaleOnScroll');
	if (!!scaleBanner && window.innerWidth >= 992) {
		const { left } = scaleBanner.getBoundingClientRect();
		new ScrollMagic.Scene({
			triggerElement: document.querySelector('.members'),
			triggerHook: 0,
			duration: window.innerHeight,
		})
			.setTween(
				Tween.to(scaleBanner, {
					x: 0 - left,
					width: window.innerWidth,
					height: window.innerHeight,
				})
			)
			.setPin(scaleBanner)
			.addTo(controller);
	}

	/*
	Circles horizontal moving
	 */
	const circles = document.querySelector('.partner-list-row');
	if (!!circles) {
		new ScrollMagic.Scene({
			triggerElement: circles,
			triggerHook: 0.9,
			duration: window.innerHeight * 2,
		})
			.setTween(
				Tween.fromTo(circles,
					{
						xPercent: -100,
					},
					{
						xPercent: 0,
					})
			)
			.addTo(controller);
	}

	/*
	Companies
	 */
	const companies = document.querySelectorAll('.companies-item');
	if (companies.length) {
		for (let i = 0; i < companies.length; i++) {
			new ScrollMagic.Scene({
				triggerElement: companies[i],
				triggerHook: 0.9,
			})
				.setTween(
					Tween.fromTo(companies[i].querySelector('[class*=h-]'),
						{
							yPercent: 100,
						},
						{
							yPercent: 0,
							duration: transition.scale.duration,
							ease: transition.scale.ease,
						})
				)
				.addTo(controller);
		}
	}

	/*
	Switch fixed social
	 */
	const fixedSocial = document.querySelector('.social-fixed');
	if (!!fixedSocial && !!document.querySelector('.hideFixedSocial')) {
		new ScrollMagic.Scene({
			triggerElement: document.querySelector('.hideFixedSocial'),
			triggerHook: 0.5,
		})
			.setTween(Tween.to(fixedSocial, {
				opacity: 0,
			}))
			.addTo(controller);
	}
}