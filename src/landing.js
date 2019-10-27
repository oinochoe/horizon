// index.js
import _ from "lodash";
import "../scss/style.scss";
import Slider from "../components/slider";
import Letter from "../components/letter";

(function() {
  "use strict";

  function init() {
    swiperStart();
    letterAni();
  }

  // swiper
  function swiperStart() {
    Slider;
  }

  // letter animation
  function letterAni() {
    Letter;
  }

  init();
})(); /* IIFE end */
