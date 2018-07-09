var navToggle = document.querySelector(".main-nav__toggle");
var navMain = document.querySelector(".main-nav__wrapper");

navMain.classList.add("main-nav__wrapper--closed");
navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav__wrapper--closed")) {
      navMain.classList.remove("main-nav__wrapper--closed");
      navMain.classList.add("main-nav__wrapper");

  } else {
      navMain.classList.add("main-nav__wrapper--closed");
      navMain.classList.remove("main-nav__wrapper");
      navMain2.classList.add("main-nav__wrapper--closed");
      navMain2.classList.remove("main-nav__wrapper");
  }
});

navToggle.addEventListener("click", function () {
    if (navToggle.classList.contains("main-nav__toggle--active")) {
        navToggle.classList.remove("main-nav__toggle--active");
        navToggle.classList.add("main-nav__toggle--unactive");
    } else {
        navToggle.classList.add("main-nav__toggle--active");
        navToggle.classList.remove("main-nav__toggle--unactive");
    }
});

// modal

var modal = document.querySelector(".modal");
var wrap = document.querySelector(".wrapper");
var btn = document.querySelector(".featured__order");
var mbtn = document.querySelector(".modal__button");
var cart = document.querySelector(".goods__add-bascket");

btn.addEventListener("click", function() {
  if (modal.classList.contains("modal")) {
      modal.classList.add("modal__open");
      wrap.classList.add("white-back");
  }
});


mbtn.addEventListener("click", function() {
  if (modal.classList.contains("modal__open")) {
      modal.classList.remove("modal__open");
      wrap.classList.remove("white-back");
  }
});


cart.addEventListener("click", function() {
  if (modal.classList.contains("modal")) {
    modal.classList.add("modal__open");
  }
});
