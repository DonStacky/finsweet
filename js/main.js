$(function () {
    $(".rateYo").rateYo({
      starWidth: "40px"
    });
    $(".rateYo").rateYo("option", "starWidth", "36px");

    $(".rateYo").rateYo({
     normalFill: "#D7D1C7"
      });
    $(".rateYo").rateYo("option", "normalFill", "#D7D1C7");

    $(".rateYo").rateYo({
        ratedFill: "#E74C3C"
      });
    $(".rateYo").rateYo("option", "ratedFill", "#FFB648");

    var mixer = mixitup('.blog__grid', {
      animation: {
        enable: false
    }
  });

    $('.blog__title').on('click', function() {
      $('.blog__title').removeClass('blog__title--active')
      $(this).addClass('blog__title--active')
    })

    $('.feedack__slider').slick({
      arrows: false,
      slidesToShow: 2,
      draggable: true,
      waitForAnimate: false,
      dots: true
      })

    $('.feedback__prevArrow').on('click', function (e) {
      e.preventDefault()
      $('.feedack__slider').slick('slickPrev')
      })

    $('.feedback__nextArrow').on('click', function (e) {
      e.preventDefault()
      $('.feedack__slider').slick('slickNext')
      })
      /*
      $('.faq__item').on('click', function(e) {
        e.preventDefault()
        if ($(this).hasClass('faq__item--active')) {
            $(this).removeClass('faq__item--active')
            $(this).children('.faq__itemText').slideUp()
        } else {
            $('.faq__item').removeClass('faq__item--active')
            $('.faq__itemText').slideUp()
            $(this).addClass('faq__item--active')
            $(this).children('.faq__itemText').slideDown()
        }
    })*/
    $('.faq__item').on('click', function(e) {
      e.preventDefault()
      if ($(this).hasClass('faq__item--active')) {
        $(this).removeClass('faq__item--active')
        $(this).children('.faq__itemText').slideUp()
      } else {
      $(this).addClass('faq__item--active')
      $(this).children('.faq__itemText').slideDown()
      }
    })

    $('.burger, .overlay').on('click', function(e) {
      e.preventDefault()
      $('.header__nav').toggleClass('header__nav--open')
      $('.burger').toggleClass('burger--exit')
      $('.overlay').toggleClass('overlay--show')
      })

      $('.header__list').on('click', function() {
        $('.header__nav').removeClass('header__nav--open')
        $('.burger').removeClass('burger--exit')
        $('.overlay').removeClass('overlay--show')
        })

      setInterval(() => {
        if ($(window).scrollTop() > 50 && $('.header__nav').hasClass('header__nav--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);

  });

  function init() {
    let map = new ymaps.Map('map', {
      center: [51.66580399374076,39.20584086376954],
      zoom: [16]
    });
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
  }

  ymaps.ready(init);