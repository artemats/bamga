import '../sass/index.scss';
import * as ScrollMagic from 'scrollmagic';
import Tween from 'gsap';
import {ScrollMagicPluginIndicator,ScrollMagicPluginGsap} from 'scrollmagic-plugins';
import {setNavDropdowns} from "./common/general/setNavDropdowns";
import {heroCarousel} from "./common/carousels/heroCarousel";
import {homeScene} from "./scroll/homeScene";
import {generalScene} from "./scroll/generalScene";

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

/*
Carousels
 */
heroCarousel();

/*
Scenes
 */
homeScene();
generalScene();