const slide1 = document.querySelector("#slide--1");
const slide2 = document.querySelector("#slide--2");
const dot1 = document.querySelector("#dot--1");
const dot2 = document.querySelector("#dot--2");

dot1.addEventListener("click", function () {
  // Highlight current dot
  dot1.classList.add("active");
  dot2.classList.remove("active");

  // Move slides
  slide1.style.transform = `translateX(0%)`;
  slide2.style.transform = `translateX(150%)`;
});

dot2.addEventListener("click", function () {
  dot2.classList.add("active");
  dot1.classList.remove("active");

  slide1.style.transform = `translateX(-150%)`;
  slide2.style.transform = `translateX(0%)`;
});
