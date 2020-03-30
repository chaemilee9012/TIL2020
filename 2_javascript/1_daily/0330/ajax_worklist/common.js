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
      
      $(data).find('work').each(function() {
        thum = $(this).find('thum').text();
        name = $(this).find('name').text();
        time = $(this).find('time').text();

        if(!$('.work')){
          funcMain();
        }

        // workList = `<li>
        //             <figure>
        //               <img src="${thum}" alt="">
        //               <figcaption>
        //                 <span>${name}</span>
        //                 <span>${time}</span>
        //               </figcaption>
        //             </figure>
        //           </li>`

        workList += '<li>';
        workList += '<figure>';
        workList += '<img src="' + thum + '" alt="">';
        workList += '<figcaption>';
        workList += '<span>' + name + '</span>';
        workList += '<span>' + time + '</span>';
        workList += '</figcaption>';
        workList += '</figure>';
        workList += '</li>';
        // console.log(workList);
      });
      $('section ul').append(workList);

      function funcMain() {        
        workMain = `<figure><img src="${thum}" alt=""><figcaption>${name}</figcaption></figure>`;

        $('section').append(workMain);
      }
    }
  });
  //end
});