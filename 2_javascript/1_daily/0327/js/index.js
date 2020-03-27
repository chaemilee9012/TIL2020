var burgerBtn = document.querySelector('.burger');
var navi = document.querySelector('nav');
var visualJs = document.querySelector('.visual');

var titleJs = document.querySelectorAll('.title');

// burger btn
burgerBtn.addEventListener('click', function() {
  navi.classList.toggle('active');
  visualJs.classList.toggle('active');
});

navi.addEventListener('click', function() {
  navi.classList.remove('active');
});

// visual text
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    for(var i = 0; i < titleJs.length; i++) {
      titleJs[i].classList.add('fin-load');
    }
  }, 500)
});

// scroll event
$(function() {
  var winScroll;
  var winHeight;

  $(window).on('scroll', function() {
    winScroll = $(window).scrollTop();

    $('figure').each(function(i) {
      var offsetTop = $('figure').eq(i).offset().top;
      winHeight = $(window).height();

      if(offsetTop - winHeight < winScroll) {
        $('figure').eq(i).css({
          marginTop: 0,
          opacity: 1
        });
        $('main section h3').css({
          opacity: 1,
          paddingTop: 0
        });
      }
    });
  });
});



/*
// 해당 콘텐츠 번호대로 textContent 바꾸기


var gallUl = document.querySelector('.gallery');
var figureJs = document.querySelectorAll('figure');

// gallUl.addEventListener('mouseenter', function(e) {
//   console.log(e.target);
// });

for(var i = 0; i < figureJs.length; i++) {
  figureJs[i].addEventListener('mouseenter', function(e) {
    var src = e.target.children[0].src;
    var txt = e.target.children[1].textContent;
    var char = src.substr(txt.length-6, 2);
    console.log(char);

    txt.textContent += char;

  });
}
*/