window.addEventListener('DOMContentLoaded',function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET","data.json");
  xhr.send(null);
  xhr.onload = function(){
    var data = JSON.parse(xhr.responseText);

    //pushState: 브라우저에 history 남김
    //onpopstate: history에 따라 해당 내용 보여줌

    var all = document.querySelector('nav');
    var img = document.querySelector('section img');
   s
    all.addEventListener('click', (e) => {
      var target = e.target;
      var dId = target.dataset.id;
      view(dId);

    //   history.pushState(object, 'title', 'hash');
      // 'object', 'title', 'hash': 임의 지정하는 값
      // object: history에 남는 값 ex) {page: 1} (object)
      // title: 조작하고 있는 history title명
      //        → history 여러 개 조정할 때 사용
      // hash: url 뒤에 남는 hash 값 ex) page: 1(string)

      history.pushState({page: dId}, 'title', `page=${dId}`);
      // DOM 이용 흔적 남김 → 이용해서 페이지 이동 가능
    //   console.log(history.state); // pushState(object) 확인

      console.log(history); // 페이지 이동 내역 확인
      // history > length: 이동 횟수

      console.log(history.state.page); // history 안 키 값으로 페이지 값 확인
    });

    // window.onpopstate = function() {};
    window.addEventListener('popstate', () => {
      view(history.state.page); // img 교체
    });

    function view(i) {
      img.src = data.event[i]; // img 교체
    }
    // localhost.href = ""; // → 페이지 돌아갔을 때 기존 데이터 초기화

    // history.back(): 뒤로가기 // → 페이지 돌아갔을 때 기존 데이터 유지
    // history.forward() : 앞으로가기
    // history.go(정수): 양수(앞으로), 음수(뒤로)
  }
});