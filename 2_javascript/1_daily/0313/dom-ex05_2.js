window.addEventListener('DOMContentLoaded', function() {
/*
1_1. 이미지를 클릭한다.
1_2. 클릭한 이미지에 active 클래스 더한다.
1_3. 클릭한 이미지의 src 값을 구한다.
1_4. popup에 appear 클래스 더한다.

2_1. popup 클릭한다.
2_2. popup에 appear 클래스 뺀다.
*/
  var thumDiv = document.querySelector('.thum');
  var thumImg = thumDiv.querySelectorAll('img');
  var popUp = document.querySelector('.popup');
  var popImg = popUp.querySelector('img');
  var idx;

  thumDiv.addEventListener('click', function(e) {
    // console.log(e.target.src);
    for(var i = 0; i < thumImg.length; i++) {
      thumImg[i].classList.remove('active');
    }
    idx = e.target.dataset.num;
    e.target.classList.add('active');
    popImg.src = e.target.src;
    popUp.classList.add('appear');
    disappear();
  });

  popUp.addEventListener('click', function(e) {
    this.classList.remove('appear');
  });

/*
1. a태그 클릭한다.
2. prev → 
   next → 
3. 첫번째 img에서 prev 숨긴다.
   마지막 img에서 next 숨긴다.
*/
  var prevBtn = document.querySelector('.prev');
  var nextBtn = document.querySelector('.next');

  prevBtn.addEventListener('click', function() {
    --idx;
    change();
    disappear();
  });

  nextBtn.addEventListener('click', function() {
    ++idx;
    change();
    disappear();
  });

  function change() {
    popImg.src = thumImg[idx].src;
  }

  function disappear() {
    if(idx == 0) {
      prevBtn.style.opacity = 0;
    } else if(idx == 2) {
      nextBtn.style.opacity = 0;
    } else {
      prevBtn.style.opacity = 1;
      nextBtn.style.opacity = 1;
    }
  }


  // var btn = popUp.querySelector('.button');

  // btn.addEventListener('click', function(e) {
  //   console.log(idx);
  //   if (e.target.textContent == 'prev'){
  //     console.log('prev');
  //     popImg.src = thumImg[--idx].src;
  //   } else {
  //     console.log('next');
  //     popImg.src = thumImg[++idx].src;
  //   }
    // thumImg[++idx]
    // var prev = btn.children[0];
    // var next = btn.children[1];
  // });


});