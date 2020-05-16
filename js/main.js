/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const closeBtn = document.querySelector(".modal__close");
  const switchModal = () => {
    modal.classList.toggle("modal--visible");
  };

  modalBtn.forEach(element => {
    element.addEventListener("click", switchModal);
  });

  closeBtn.addEventListener("click", switchModal);

});
*/

$(document).ready(function () {
  var modal = $(".modal"),
      modalBtn = $("[data-toggle=modal]"),
      closeBtn = $(".modal__close"),
      scrl = $(".scroll-top"),
      blockPoint = document.querySelector(".hero");

  console.log($(window).scrollTop());
  $(window).on("scroll", function () {
    console.log($(window).scrollTop());
    if($(window).scrollTop() >= 600) {
      scrl.addClass("scroll-top--visible");
    };
    if($(window).scrollTop() <= 600) {
      scrl.removeClass("scroll-top--visible");
    };
  });

  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  function scrollUp () {
    blockPoint.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  scrl.on("click", scrollUp);

  var mySwiper = new Swiper (".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  bullets.css("left", prev.width() + 10);
  next.css("left", prev.width() + bullets.width() + 20);
  
});