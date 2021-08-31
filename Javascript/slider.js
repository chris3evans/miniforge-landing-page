const testBtn = document.querySelector(".testimonials--heading");
const slide1 = document.querySelector("#slide--1");
const slide2 = document.querySelector("#slide--2");

testBtn.addEventListener("click", function () {
  slide1.style.transform = `translateX(-150%)`;
  slide2.style.transform = `translateX(0%)`;
});
