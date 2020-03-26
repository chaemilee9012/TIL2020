$(function() {
// document ready

  $('nav ul li').on('mouseenter', function() {
    $(this).find('div').slideDown();
  });

  $('nav ul li').on('mouseleave', function() {
    $(this).find('div').slideUp();
  });

  $('nav ul li').on({
    mouseenter : nav,
    mouseleave : nav,
    click : nav
  });

  function nav() {
    // console.log(event.type);
  };




  $('.trigger_menu').on('click', function() {
    $(this).toggleClass('active');

    // // animate()로 처리 -----------------------------------------
    // if($(this).hasClass('active') == true) {
    //   $('header p > span').animate({
    //     top: 40, opacity: 1 
    //   });
    // } else {
    //   $('header p > span').animate({
    //     top: 40, opacity: 0
    //   });
    // }
  });




  // var ulJs = document.querySelector('header nav ul');
  // var liJs = ulJs.querySelectorAll('li');
  // var target;

  // ulJs.addEventListener('click', function() {
  //   target.children[0].classList.toggle('active');
    
  // });


//end
});