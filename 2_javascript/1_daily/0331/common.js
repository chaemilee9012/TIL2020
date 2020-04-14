$(function(){
  //start
  $.ajax({ // ajax: jq 외부 파일 호출 메소드
    url: 'data.json',
    type: 'GET',
    dataType: 'json',
    success: function(data){
      var sectionJs = document.querySelector('section');
      var thumSrc, nameTxt;

      for(let i in data.portfolio) { // 2번
        thumSrc = data.portfolio[i].work[0].thum;
        nameTxt = data.portfolio[i].work[2].name;
        linkSub = data.portfolio[i].work[4].link;

        funcMain(i);
        
        for(var j in data.portfolio[i].work) { // 5번
        }
      }

      function funcMain() {
        sectionJs.innerHTML += `<figure>
                                  <a href="#">
                                    <img src="${thumSrc}" alt="">
                                    <figcaption>${nameTxt}</figcaption>
                                  </a>
                                </figure>`;
        figureJs = document.querySelectorAll('figure');
      }
    }
  });
  //end
});