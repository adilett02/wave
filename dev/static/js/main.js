
const swiper = new Swiper('.offer__list', {
  speed: 400,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.next-btn',
    prevEl: '.prev-btn',
  },
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    1030: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});


$('input[name="daterange"]').on('apply.daterangepicker', function (ev, picker) {
  $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
});

$('input[name="daterange"]').daterangepicker(
  {
    // "startDate": "ьь/02/2021",
    autoUpdateInput: false,
    "locale": {
      "format": "DD.MM.YYYY",
      "separator": " - ",
      "applyLabel": "Готово",
      "cancelLabel": "Отмена",
      "daysOfWeek": [
        "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",

      ],
      "monthNames": [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ],
      "firstDay": 1
    }
  }
);

$('input[name="single-date"]').daterangepicker(
  {
    singleDatePicker: true,
    autoUpdateInput: false,
    "locale": {
      "format": "DD.MM.YYYY",
      "applyLabel": "Готово",
      "cancelLabel": "Отмена",
      "daysOfWeek": [
        "Вс",
        "Пн",
        "Вт",
        "Ср",
        "Чт",
        "Пт",
        "Сб",

      ],
      "monthNames": [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
      ],
      "firstDay": 1
    }
  }
);
$('input[name="single-date"]').on('apply.daterangepicker', function (ev, picker) {
  $(this).val(picker.startDate.format('DD.MM.YYYY'));
});

$('.menu-bar').on('click', function (e) {
  e.preventDefault();
  $('.overlay').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});
$('.overlay').on('click', function () {
  $('.overlay').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});
$('.main-menu__close').on('click', function () {
  $('.overlay').toggleClass('active');
  $('.mobile-menu').toggleClass('active');
});




$('.menu-bar').on('click', function () {
  $('.admin-overlay').toggleClass('active');
  $('.admin-menu').toggleClass('active');
});
$('.admin-overlay').on('click', function () {
  $('.admin-overlay').toggleClass('active');
  $('.admin-section .admin-menu').toggleClass('active');
});
$('.admin-menu__close').on('click', function () {
  $('.admin-overlay').toggleClass('active');
  $('.admin-menu').toggleClass('active');
});


$('.user-account').on('click', function () {
  $('.hidden-menu').toggleClass('d-none');
});
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false,
    );
  });
})();



$('.choise-minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count <= 0 ? '' : count;
  $input.val(count);
  return false;
});
$('.choise-plus').click(function () {
  var $input = $(this).parent().find('input');
  if ($input.val() === "") {
    $input.val(0)
  }
  $input.val(parseInt($input.val()) + 1);
  return false;
});


$('.hidden-filter__button').on('click', function () {
  $('.list__filters').slideToggle();
});

const swiper2 = new Swiper('.testimonials__slider', {
  speed: 400,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__next-btn',
    prevEl: '.testimonials__prev-btn',
  },
  loop: true,
  spaceBetween: 40,
});

if (window.innerWidth <= 767) {
  var reviewsArray = $('.testimonials__slider .testimonials__item').toArray();
  console.log(reviewsArray);
  var slides = [];

  for (var i = 0; i < reviewsArray.length; i++) {
    var review = reviewsArray[i]; // [1,2,3]
    var slideElement = $('<div class="swiper-slide testimonials__list"></div>');
    slideElement.append(review);
    slides.push(slideElement);
  }

  $('.testimonials__swiper-wrapper').empty().append(slides)
}

$('form').on('submit', function (e) {
  e.preventDefault();
  console.log('awdasdasd');
})