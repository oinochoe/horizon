function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  document.querySelector(".horizon").scrollLeft -= delta * 40; // Multiplied by 40
  e.preventDefault();
}
if (document.querySelector(".horizon").addEventListener) {
  // IE9, Chrome, Safari, Opera
  document
    .querySelector(".horizon")
    .addEventListener("mousewheel", scrollHorizontally, false);
  // Firefox
  document
    .querySelector(".horizon")
    .addEventListener("DOMMouseScroll", scrollHorizontally, false);
} else {
  // IE 6/7/8
  document
    .querySelector(".horizon")
    .attachEvent("onmousewheel", scrollHorizontally);
}
