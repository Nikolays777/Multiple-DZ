$(function(){

  $('.search__btn-second').on('click', function() {
    $('.search__btn-second').addClass('active')
    $('.search__btn-first').removeClass('active')
  })
  $('.search__btn-first').on('click', function() {
    $('.search__btn-first').addClass('active')
    $('.search__btn-second').removeClass('active')
  })
  $('.search__btn-first').on('click', function () {
    $('.search__btn-first').addClass('active')
    $('.search__btn-second').removeClass('active')
  })
  $('.featured-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
    prevArrow: '<button class="slick-left"></button>',
    nextArrow: '<button class="slick-right"></button>',
  });
  $('.followerfeed__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
    prevArrow: '<button class="slick-left"></button>',
    nextArrow: '<button class="slick-right"></button>',
  });
  $('.featured-box__descr-star, .rate-star').rateYo({
    rating: 5,
    starWidth: '12px',
    readOnly: true,
  })
  $('input, select').styler();
  const mixer = mixitup('.product__inner-box')
});