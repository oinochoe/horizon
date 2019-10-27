import Swiper from "swiper";
const breakpoint = window.matchMedia("(max-width:1024px)");

let mySwiper;

const breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined) mySwiper.destroy(true, true);

    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};
const enableSwiper = function() {
  mySwiper = new Swiper(".swiper-container", {
    scrollbar: ".swiper-scrollbar",
    scrollbarHide: true,
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    freeModeMinimumVelocity: 0.3,
    mousewheel: { invert: false },
    speed: 1500,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
};
breakpoint.addListener(breakpointChecker);
breakpointChecker();

export default Swiper;
