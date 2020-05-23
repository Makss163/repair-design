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
      modalSent = $(".modal-sent"),
      modalSentBtn = $(".modal-sent__button"),
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

  // Обработка события открытия и закрыти модального окна
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

   // Обработка события кнопки модального окна "заявка отправлена"
   modalSentBtn.on("click", function () {
    modalSent.toggleClass("modal-sent--visible");
  });

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

  new WOW().init();

  //Валидация формы
    //Модальное окно
  $(".modal__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      // правило-блок
      userEmail: {
        required: true,
        email: true
      },
      userPhone: "required"
    }, // вывод сообщений об ошибке
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("работает: " + response);
          $(form)[0].reset();
          modal.toggleClass("modal--visible");
          modalSent.toggleClass("modal-sent--visible");
        }
      });
    },
  });

    //Форма из секции control
  $(".control__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2
      },
      // правило-блок
      userEmail: {
        required: true,
        email: true
      },
      userPhone: "required"
    }, // вывод сообщений об ошибке
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче двух букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("работает: " + response);
          $(form)[0].reset();
          modalSent.toggleClass("modal-sent--visible");
        }
      });
    },
  });
  
    //Форма из footer

    $(".footer__form").validate({
      errorClass: "invalid",
      rules: {
        // строчное правило
        userName: {
          required: true,
          minlength: 2
        },
        // правило-блок
        userEmail: {
          required: true,
          email: true
        },
        userPhone: "required",
        userQuestion: "required"
      }, // вывод сообщений об ошибке
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Имя не короче двух букв"
        },
        userPhone: "Заполните поле",
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный email"
        },
        userQuestion: "Заполните поле"
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            console.log("работает: " + response);
            $(form)[0].reset();
            modalSent.toggleClass("modal-sent--visible");
          }
        });
      },
    });
  
  // Маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(___) __-__-___"});

  //Создание карты

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/marker.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
});
 

  
});