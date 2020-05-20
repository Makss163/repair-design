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

  // Условие для появления кнопки скролла вверх
  $(window).on("scroll", function () {
    if($(window).scrollTop() >= 600) {
      scrl.addClass("scroll-top--visible");
    };
    if($(window).scrollTop() <= 600) {
      scrl.removeClass("scroll-top--visible");
    };
  });

  // Обрпботка события открытия и закрыти модального окна
  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  //Обработка события нажатия кнопки скролла вверх
  function scrollUp () {
    blockPoint.scrollIntoView({
      block: "start", 
      behavior: "smooth"
    });
  };
  scrl.on("click", scrollUp);

  // Слайдер
  var mySwiper = new Swiper (".swiper-container", {
    loop: true,

    // Точки-кнопки
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    
    // Стрелочки кнопки
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Позиционирование с взаимным учётом ширины точек и стрелок слайдера
  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  bullets.css("left", prev.width() + 10);
  next.css("left", prev.width() + bullets.width() + 20);
  
});