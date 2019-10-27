// index.js
import _ from "lodash";
import "../scss/style.scss";
import skrollr from "skrollr";
(function() {
  var s = skrollr.init({
    forceHeight: true,
    smoothScroolling: true,
    smoothScrollingDuration: 600,
  });
})();
