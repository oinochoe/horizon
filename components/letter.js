var text = "";
let awesome = document.querySelector(".awesome").textContent.split("");

for (let i = 0; i < awesome.length; i++) {
  text += "<span>" + awesome[i] + "</span>";
}

document.querySelector(".awesome").innerHTML = text;

setTimeout(function() {
  document.querySelectorAll(".awesome span").forEach(function(e) {
    e.classList.add("in");
  });
}, 800);

export default Letter;
