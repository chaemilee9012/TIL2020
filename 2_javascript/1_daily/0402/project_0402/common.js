window.addEventListener('DOMContentLoaded', function() {
  var navSel = document.querySelector('nav');
  var favBtn = document.querySelector('button');
  var isChecked, imgSrc;


  navSel.addEventListener('click', (e) => {
    // e.preventDefault();
    // e.target.style.color = '#f00';

    var target = e.target.textContent;
    localStorage.page = target;
  });
  var idx = 0;
  switch(localStorage.page) {
    // case 'index': navSel.children[0].style.color = '#f00'; break;
    // case 'company': navSel.children[1].style.color = '#f00'; break;
    // case 'service': navSel.children[2].style.color = '#f00'; break;
    // case 'mypage': navSel.children[3].style.color = '#f00'; break;

    case 'index': idx = 0; break;
    case 'company': idx = 1; break;
    case 'service': idx = 2; service(); break;
    case 'mypage': idx = 3; mypage(); break;
  }
  navSel.children[idx].style.color = '#f00';
  
  var imgArr = [];
  // favorite
  function service() {
    // 배열로 localStorage 저장 후 활용
    favBtn.addEventListener('click', () => {
      isChecked = document.querySelectorAll('input:checked');
      
      for(var i = 0; i < isChecked.length; i++) {
        // imgSrc = isChecked[i].nextElementSibling.src;
        // console.log(imgSrc);
        imgArr.push(isChecked[i].nextElementSibling.src);
      }
      // console.log(imgArr);

      localStorage.favorites = JSON.stringify(imgArr);
      // JSON.stringify(): 데이터를 JSON 형태(객체/배열)의 문자열로 저장

      // console.log(localStorage.favorites);
    });
  }

  // mapage
  function mypage() {
    var imgStr = JSON.parse(localStorage.favorites);
    // JSON.parse(): 문자를 배열 형태로 불러옴
    // console.log(imgStr);

    /* 문자열 배열로 변환해서 활용하는 방법
    방법 1)
    var aaa = "['1', '2', '3']";
    var bb = eval(aaa);
      // eval(): 문자열을 스크립트가 알 수 있는 형태의 데이터 형으로 변환

    방법2) 현장에서 선호
    var ccc = JSON.stringify(['1', '2', '3']);
      // stringify(): 데이터를 json 파일 형태의 문자열로 저장
    var dd = JSON.parse(ccc)
      // parse(): 데이터를 객체/배열 형태로 불러옴
    */

    var outputDiv = document.querySelector('.output');

    for(var i in imgStr) {
      outputDiv.innerHTML += `<img src="${imgStr[i]}" alt="">`  
    }
  }
  
  // 문자열로 localStorage 저장 후 배열로 바꿔서 활용
  /*
  favBtn.addEventListener('click', () => {
    isChecked = document.querySelectorAll('input:checked');
    
    for(var i = 0; i < isChecked.length; i++) {
      // imgSrc = isChecked[i].nextElementSibling.src;
      // console.log(imgSrc);
      imgArr.push(isChecked[i].nextElementSibling.src);
    }
    console.log(imgArr);
    localStorage.favorites = imgArr;
    // console.log(localStorage.favorites);
  });

  var imgStr = localStorage.favorites;

  var outputImg = imgStr.split(',');
   // console.log(imgStr.split(','));
  // split('a'): a기준으로 문자열 잘라서 배열로 저장
  var docDiv = document.querySelector('div');
  var outputDiv = document.querySelector('.output');

  if(docDiv.classList.contains('output')) {
    for(var i in outputImg) {
      outputDiv.innerHTML += `<img src="${outputImg[i]}" alt="">`  
    }
  }
  */
});