var navigation = document.querySelector(".main-nav");
var menuButton = document.querySelector(".header__toggle");

menuButton.classList.remove("header__toggle--hidden");
navigation.classList.add("main-nav--hidden");

menuButton.addEventListener("click", function () {
  navigation.classList.toggle("main-nav--hidden");
  menuButton.classList.toggle("header__toggle--close");
});
