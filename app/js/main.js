$(function () {

  $('.menu-nav__item-account').on('click', function () {
    $('.form-box').toggleClass('form-box--active')
  });

  $('.menu-categories__item-first').on('click', function () {
    $('.sub-menu-categories').toggleClass('sub-menu-categories--active')
  });

  $('.menu-nav__item-login').on('click', function () {
    $('.form-box').toggleClass('form-box--active')
  });

});

