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
  });