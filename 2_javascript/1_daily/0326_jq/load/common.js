$(function() {
  // start

  // load('파일명' 선택 영역): 선택자 위치에 load한 내용 넣어줌

  // 대상 html 파일에
  // <script src="common.js"></script>
  // js 연결해서 사용
  // 미리보기로만 확인 가능

  $('header').load('header.html nav');
  $('footer').load('header.html .foot');
  $('section').load('main.html');

  // $('section').addClass('active');
  $('body').addClass('active');
  // 화면 전환할 때 특정 영역 지정하지 않고 body 전체에 적용하면 중복 구문 줄일 수 있음 → css 준비 다르게

  setTimeout(function(){
    $('header nav a').on('click',function(e){
      e.preventDefault();
      // alert('hi');
      var link = $(this).attr('href');

      $('section').removeClass('active');

      setTimeout(function() {
        location.href = link;
      }, 500);

      // $('section').fadeOut(600, function() {
      //  location.href = link // location: 브라우저가 가지고 있는 객체(현재 위치)
      // });
    });
  }, 100);
  // end
});