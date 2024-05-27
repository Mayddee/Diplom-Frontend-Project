$('#menu').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
    $('main').toggleClass('main_active');
  })