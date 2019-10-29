// index.js
import _ from "lodash";
import "../scss/style.scss";
import Slider from "../components/Slider";
import Letter from "../components/Letter";
import Horizon from "../components/Horizon";

(function() {
  "use strict";

  function init() {
    swiperStart();
    letterAni();
    horizonScroll();
  }

  // swiper
  function swiperStart() {
    Slider;
  }

  // swiper
  function horizonScroll() {
    Horizon;
  }

  // letter animation
  function letterAni() {
    Letter;
  }

  init();
})(); /* IIFE end */
