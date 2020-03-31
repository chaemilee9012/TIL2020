$(function(){
  //start
  $.ajax({ // ajax: jq 외부 파일 호출 메소드
    url: 'data.xml',
    type: 'GET',
    dataType: 'xml',
    success: function(data){
      /*
      main(썸네일, 제목),
      sub(썸네일, 제목),
      detail(큰 이미지, 제목, 기간)
      */
      var thum, name, time;
      var workMain, workList='';
      var url;
      
      $(data).find('work').each(function(i) {
        thum = $(this).find('thum').text();
        name = $(this).find('name').text();
        time = $(this).find('time').text();

        if(!$('section').hasClass('work')){
          funcMain(i);
          $('section').append(workMain);
        } else {
          funcSub(i);
          $('section ul').append(workList);
        }
      });

      function funcMain(idx) {        
      workMain = `<figure><!--
                    --><a href="sub.html#${idx}"><!--
                      --><img src="${thum}" alt=""><!--
                      --><figcaption>${name}</figcaption><!--
                    --></a><!--
                  --></figure>`;
        // sub.html#idx: 클릭한 a태그 구분용
         
      }

      function funcSub() {
        // workList = `<li>
        //             <figure>
        //               <img src="${thum}" alt="">
        //               <figcaption>
        //                 <span>${name}</span>
        //                 <span>${time}</span>
        //               </figcaption>
        //             </figure>
        //           </li>`

        workList = '<li>';
        workList += '<figure>';
        workList += '<img src="' + thum + '" alt="">';
        workList += '<figcaption>';
        workList += '<span>' + name + '</span>';
        workList += '<span>' + time + '</span>';
        workList += '</figcaption>';
        workList += '</figure>';
        workList += '</li>';
        // console.log(workList);
      }

      url = location.hash.substr(1);
      // location.hash: 주소값에서 #값 접근
      // console.log(url);
      $('section ul li').eq(url).addClass('active');

      $('section ul li').on('click', function() {
        /*
        방법 1) data 값으로 처리
        방법 2) each 안에 변수로 처리
        */
        // 방법 1) each 안에 data 값으로 처리
        var subIdx = $(this).index();
        showDetail(subIdx);
      });

      function showDetail(detIdx) {
        var dataDet = $(data).find('work').eq(detIdx).find('detail').text();
        var dataName = $(data).find('work').eq(detIdx).find('name').text();
        var dataTime = $(data).find('work').eq(detIdx).find('time').text();
        var dataLink = $(data).find('work').eq(detIdx).find('link').text();

        $('article img').attr('src', dataDet);
        $('article figcaption span').eq(0).text(dataName);
        $('article figcaption span').eq(1).text(dataTime);
        $('article figcaption a').attr('href', dataLink); 
      }

      showDetail(url);
    }
  });
  //end
});