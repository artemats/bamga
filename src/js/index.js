import '../sass/index.scss';
import * as ScrollMagic from 'scrollmagic';
import Tween from 'gsap';
import {ScrollMagicPluginIndicator,ScrollMagicPluginGsap} from 'scrollmagic-plugins';
import {setNavDropdowns} from "./common/general/setNavDropdowns";
import {heroCarousel} from "./common/carousels/heroCarousel";
import {homeScene} from "./scroll/homeScene";
import {generalScene} from "./scroll/generalScene";
import {toggleMainNav} from "./common/general/toggleMainNav";
import {setFullBannerPosition} from "./common/general/setFullBannerPosition";
import {articlesCarousel} from "./common/carousels/articlesCarousel";
import {tabsCarousel} from "./common/carousels/tabsCarousel";
import {initTooltip} from "./common/general/initTooltip";
import {changeHeaderOnScroll} from "./common/general/changeHeaderOnScroll";
import {showContentOnLoad} from "./common/general/showContentOnLoad";
import {toggleNavDropdown} from "./common/general/toggleNavDropdown";

/*
Require svg icons to stripe
 */
function requireAll(r) {
	r.keys().forEach(r);
}

requireAll(require.context('../images/icons/', true, /\.svg$/));

/*
Scrollmagic
 */
ScrollMagicPluginIndicator(ScrollMagic);
ScrollMagicPluginGsap(ScrollMagic, Tween);

/*
General functions
 */
setNavDropdowns();
toggleMainNav();
setFullBannerPosition();
initTooltip();
changeHeaderOnScroll();

/*
Carousels
 */
heroCarousel();
articlesCarousel();
tabsCarousel();

/*
Scenes
 */
homeScene();
generalScene();

document.addEventListener('DOMContentLoaded', function(event) {
	showContentOnLoad();
	toggleNavDropdown();
});