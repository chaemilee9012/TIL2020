// click ---------------------------------------------------
// 스크롤 이동
var navi = document.querySelector('.menu_link');
var articleJs = document.querySelectorAll('article');

// 버거메뉴
var logo = document.querySelector('.menu h1');
var textDiv = document.querySelector('.text');

//헤더 고정
var headerJs = document.querySelector('header');

// 스크롤 이동
// navi.addEventListener('click', function(e) {
//   var dNum = e.target.dataset.num;
//   var top = articleJs[dNum].offsetTop;
//   var yIdx = 0;

//   e.preventDefault();

//   var down = setInterval(function() {
//     yIdx = window.scrollY;
//     if(top > window.scrollY) {
//       yIdx += 10;
//     } else {
//       clearInterval(down);
//     }
//     window.scrollTo(0, yIdx);
//   }, 0)

//   var up = setInterval(function() {
//     yIdx = window.scrollY;
//     if(top < window.scrollY) {
//        yIdx -= 10;
//     } else {
//       clearInterval(up);
//     }
//     window.scrollTo(0, yIdx);
//   }, 0)
// });

// 버거메뉴
logo.addEventListener('click', function(e) {
  e.preventDefault();
  textDiv.classList.add('active');
});

textDiv.addEventListener('click', function() {
  this.classList.remove('active');
});


// scroll ---------------------------------------------------

/*
1. 스크롤한다.
2. 현재 화면 위치를 구한다.
3. 브라우저 높이를 구한다.
4. 각 콘텐츠가 화면 하단을 넘어서면 opacity: 1
5. margin-top 값을 줄인다.(올라오는 것처럼 보이게)
*/

/*
1. 스크롤한다.
2. 특정 영역 넘어가면 헤더 상단 고정
*/

/*
1. 스크롤한다.
2. section 넘어갈 때마다 해당 menu_link에 active 클래스 추가
*/

$(function() {
  var winHeight = $(window).height();
  
  $('.menu_link ul li').on('click',function(){
    var idx = $(this).index();
    var conTop = $('section article').eq(idx).offset().top;

    $('html').animate({
      scrollTop: conTop - $('header').height()
    })
  });
  
  $(window).on('scroll', function() {
    var winScroll = $(window).scrollTop();
    var articleTop;

    if(winScroll > $('header').height()) {
      $('.menu_link').addClass('active');
    } else {
      $('.menu_link').removeClass('active');
    }

    $('section article').each(function(i) {
      articleTop = $(this).offset().top;

      if(winScroll >= articleTop) {
        $('.menu_link ul li').eq(i).addClass('active').siblings().removeClass('active');
      }

      if(articleTop - winHeight < winScroll) {
        $('section article').eq(i).css({
          opacity: 1,
          paddingTop: 150
        });
      }
    })
  });

})