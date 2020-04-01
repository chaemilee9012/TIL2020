// ajax 메소드 없이 json 이용
function jsop(data) {
  for(var i in data.event) {
    var imgNode = `<img src="${data.event[i]}">`;
    $('section').append(imgNode);
  }
}
  /*
  $.ajax({ // ajax: jq 외부 파일 호출 메소드
    url : 'http://chaemilee9012.dothome.co.kr/data.json',
    type : 'GET',
    dataType : 'json',
    success :function(data){
      // console.log(data);
      // for(var i = 0; i < data.event.length; i++){
      //   //console.log(data.event[i]);   
      // }
      // for(var i of data.event){
      //   // console.log(i);
      // }

      for(var i in data.event){
        // var imgNode = document.createElement('img');
        // console.log(data.event[i]);
        
        // imgNode.src = data.event[i];
        // console.log(imgNode);
        //<img src="../../../1_daily/img/p_01.jpg">

        var imgNode = `<img src=${data.event[i]}>`;
        // var imgNode = '<img src=' + data.event[i] + '>';
        $('section').append(imgNode);
      }
    }
  });
  */