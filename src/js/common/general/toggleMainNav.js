import Tween from 'gsap';
import {transition} from "../../constants/transitions";

export const toggleMainNav = () => {
	const burger = document.querySelector('.burger');
	if (!!burger) {
		burger.addEventListener('click', () => {
			burger.classList.contains('is-active') ? closeMainNav() : openMainNav();
		});
	}
};

export const openMainNav = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.header .nav');
	const navItems = document.querySelectorAll('.header nav > ul > li');
	burger.classList.add('is-active');
	Tween.set(nav, {
		display: 'block',
		onComplete: () => {
			Tween.fromTo(nav,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: transition.opacity.duration,
					ease: transition.opacity.ease,
					onComplete: () => {
						Tween.fromTo(navItems,
							{
								opacity: 0,
								y: 20,
							},
							{
								opacity: 1,
								y: 0,
								stagger: 0.05,
							});
					}
				});
		}
	})
};

export const closeMainNav = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.header .nav');
	const navItems = document.querySelectorAll('.header nav > ul > li');
	burger.classList.remove('is-active');
	Tween.fromTo(nav,
		{
			opacity: 1,
		}, {
			opacity: 0,
			duration: transition.opacity.duration,
			ease: transition.opacity.ease,
			onComplete: () => {
				Tween.set(nav, {
					display: 'none',
				});
			}
		});
	Tween.set(navItems, {
			opacity: 0,
			y: 20,
		});
};