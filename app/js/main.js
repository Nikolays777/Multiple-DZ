$(function(){

  $('.search__btn-second').on('click', function() {
    $('.search__btn-second').addClass('active')
    $('.search__btn-first').removeClass('active')
  })
  $('.search__btn-first').on('click', function() {
    $('.search__btn-first').addClass('active')
    $('.search__btn-second').removeClass('active')
  })

  
});