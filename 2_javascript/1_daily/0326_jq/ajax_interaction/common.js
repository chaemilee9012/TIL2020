$(function() {
  // 1) ajax --------------------------------------------------------------
  $.ajax({
    url: 'data.xml',
    type: 'GET', // GET or POST
    dataType: 'xml',
    timeout: 2000,
    beforeSend: function() {
      // 문서 로드할 때 실행 ex) 로딩 화면
      console.log('로딩 중');
      $('.loading').fadeIn();
    },
    complete: function() {
      // 문서 로드 완료 후 실행 ex) 로딩 화면 사라짐
      // console.log('로딩 삭제');
      setTimeout(function() {
        $('.loading').fadeOut();
      }, 1500);
    },
    success: function(data) { // 로드된 데이터 모두 매개변수에 담아서 사용 가능
      // 문서(url) 정상적으로 호출됐을 때 실행
      var imgTag = '';
      var itemRow = 3;
      var first = 0;
      var last = itemRow;

      $('section').css({
        display: 'flex'
      })
      // 한 번에 다 추가하기
      // setTimeout(function() {
      //   $(data).find('item').each(function(i) {
      //     imgTag += "<img src=" + $(this).text() + ">";
      //     // 한 번에 뿌릴 때 += 사용
      //     // $('section').append(imgTag); // 각 요소에 데이터 뿌리기 반복
      //   });
      //   $('section').html(imgTag);
      //   // 데이터 양 많지 않다면 html 대상으로 한 번에 뿌리는 게 좋음
      //   $('section').fadeIn();
      // }, 2000);

      // 3개 씩 추가할 때: append 사용
      setTimeout(() => {
        function getItem() {
          $(data).find('item').each(function(i) {
            if(first <= i && i < last) {
            //    0 ~ 11  &&  0 ~ 3
            //    3 ~ 11  &&  0 ~ 6
            //    6 ~ 11  &&  0 ~ 9
            //    9 ~ 11  &&  0 ~ 12
              imgTag = "<img src=" + $(this).text() + ">";
              $('section').append(imgTag);
              $('section img').eq(i).hide().fadeIn();
            }
          });
        }
        getItem();
        $('section').fadeIn();
        $('button').on('click', () => {
          first += itemRow;
          last += itemRow;
          getItem();
        });
      }, 2000);
    },
    error: function() {
      // 호출 실패했을 때 실행
      alert('fail');
    }
  });
});