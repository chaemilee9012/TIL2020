window.addEventListener('DOMContentLoaded', function() {
/*
1. img를 클릭한다.
2. ly-pop img src를 클릭한 img src로 바꾼다.
3. ly-pop에 active 클래스를 추가한다.
4. ly-pop를 클릭하면 active 클래스 뺀다.
*/
  var imgGal = document.querySelectorAll('.gallery img');
  var figcGal = document.querySelectorAll('.gallery figcaption');
  var lyPop = document.querySelector('.ly-pop');
  var imgPop = lyPop.querySelector('img');
  var aPop = lyPop.querySelectorAll('a');
  var figcPop = lyPop.querySelector('figcaption');
  var idx;

  for(let i = 0; i < imgGal.length; i++) {
    imgGal[i].addEventListener('click', function(e) {
      idx = i;
      clickElm();
      lyPop.style.display = 'flex';
    });
  }

  lyPop.addEventListener('click', function(e) {
      if(e.target.nodeName == 'A'){
        return;
      }
      this.style.display = 'none';
    });
/*
1. a태그 클릭한다.
2. 이전에 클릭한 img의 dNum을 가져온다
3. prev: dNum--
   next: dNum++
4. dNum == 0: prev 숨긴다.
   dNum == 5: next 숨긴다.
*/
  for(let j = 0; j < aPop.length; j++) {
    aPop[j].addEventListener('click', function(e) {
      if(e.target.className == 'prev') {
        idx--;
      } else {
        idx++;
      }
      clickElm();
    });
  }
    
  function clickElm() {
    imgPop.src = imgGal[idx].src;
    figcPop.textContent = figcGal[idx].textContent;
    for(var k = 0; k < aPop.length; k++) {
      aPop[k].style.display = 'block';
    }
    if(idx == 0) {
      aPop[0].style.display = 'none';
      
    } else if(idx == 5) {
      aPop[1].style.display = 'none';
    }
  }
});