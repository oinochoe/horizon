// index.js
import _ from "lodash";
import "../scss/style.scss";
import Slider from "../components/Slider";
import Letter from "../components/Letter";

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
