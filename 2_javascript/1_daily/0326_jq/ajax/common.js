$(function() {
  // 1) ajax --------------------------------------------------------------
  $.ajax({
    url: 'data.xml',
    type: 'GET', // GET or POST
    dataType: 'xml',
    // beforeSend: function() {
    //   // 문서 로드할 때 실행 ex) 로딩 화면
    // },
    // complete: function() {
    //   // 문서 로드 완료 후 실행 ex) 로딩 화면 사라짐
    // },
    success: function(data) { // 로드된 데이터 모두 매개변수에 담아서 사용 가능
      // 문서(url) 정상적으로 호출됐을 때 실행
      // console.log(data); // 로드된 데이터 확인
      // console.log($(data).find('item').length);
      $(data).find('item').each(function(i) {
        // console.log($(this).text()); // this: <item></item>
        // console.log($(this).index());
        var imgTag = "<img src=" + $(this).text() + ">";
        $('section').append(imgTag);
      });
    },
    error: function() {
      // 호출 실패했을 때 실행
      alert('fail');
    }

  
  });
});