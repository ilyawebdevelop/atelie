import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера introSlider
const introSlider = document.querySelector('.introSlider');
var mySwiperIntro = new Swiper(introSlider, {
  slidesPerView: 1,
  speed: 1500,
  spaceBetween: 10,
  // autoHeight: 'true',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false, // Не останавливать после клика
  },
  // loop: true,
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    prevEl: introSlider?.querySelector('.navArrowPrev'),
    nextEl: introSlider?.querySelector('.navArrowNext'),
  },
  pagination: {
    el: introSlider?.querySelector('.swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
});


