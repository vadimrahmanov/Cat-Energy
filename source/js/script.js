var navigation = document.querySelector(".main-nav");
var menuButton = document.querySelector(".header__toggle");
var beforeButton = document.querySelector(".real-example__before-btn");
var afterButton = document.querySelector(".real-example__after-btn");
var slider = document.querySelector(".real-example__slider-line");
var imageBefore = document.querySelector(".real-example__image-before");
var imageAfter = document.querySelector(".real-example__image-after");

menuButton.classList.remove("header__toggle--hidden");
navigation.classList.add("main-nav--hidden");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("main-nav--hidden");
  menuButton.classList.toggle("header__toggle--close");
});

beforeButton.addEventListener("click", function () {
  slider.classList.remove("real-example__slider-line-after");
  imageAfter.classList.add("real-example__hidden");
  imageBefore.classList.remove("real-example__hidden");
});

afterButton.addEventListener("click", function () {
  slider.classList.add("real-example__slider-line-after");
  imageBefore.classList.add("real-example__hidden");
  imageAfter.classList.remove("real-example__hidden");
});
