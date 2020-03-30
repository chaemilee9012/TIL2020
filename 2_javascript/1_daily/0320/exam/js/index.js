window.addEventListener('DOMContentLoaded', function() {
/*
1. img를 클릭한다.
2. ly-pop img src를 클릭한 img src로 바꾼다.
3. ly-pop에 active 클래스를 추가한다.
4. ly-pop를 클릭하면 active 클래스 뺀다.
*/
  var ulGal = document.querySelector('.gallery');
  var imgGal = ulGal.querySelectorAll('img');
  var figcGal = ulGal.querySelectorAll('figcaption');

  var lyPop = document.querySelector('.ly-pop');
  var imgPop = lyPop.querySelector('img');
  var divPop = lyPop.querySelector('div');
  var figcPop = lyPop.querySelector('figcaption');
  var dNum;

  ulGal.addEventListener('click', function(e) {
    if(e.target.nodeName != 'IMG') {
      return;
    }
    console.log(e.target.)
    dNum = e.target.dataset.num;
    changeContents();
    console.log()
    lyPop.classList.add('active');
  });
  
  lyPop.addEventListener('click', function(e) {
    if(e.target.nodeName == 'A') {
      return;
    }
    this.classList.remove('active');
  });
/*
1. a태그 클릭한다.
2. 이전에 클릭한 img의 dNum을 가져온다
3. prev: dNum--
   next: dNum++
4. dNum == 0: prev 숨긴다.
   dNum == 5: next 숨긴다.
*/
  divPop.addEventListener('click', function(e) {
    if(e.target.className == 'prev') {
      dNum--;
    } else {
      dNum++;
    }
    changeContents();
  });

  function changeContents() {
    imgPop.src = imgGal[dNum].src;
    figcPop.textContent = figcGal[dNum].textContent;

    for(var i = 0; i < divPop.children.length; i++) {
      divPop.children[i].style.display = 'inline-block';
    }
    if(dNum == 0) {
      divPop.children[0].style.display = 'none';
    } else if(dNum == 5) {
      divPop.children[1].style.display = 'none';
    }
  }
});