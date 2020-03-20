window.addEventListener('DOMContentLoaded', function() {
/*
1. img를 클릭한다.
2. 클릭한 img에 active 클래스 추가한다.
3. popup img src를 클릭한 img src 값으로 바꾼다.
4. popup에 appear 클래스 추가한다.
*/

  var divThum = document.querySelector('.thum');
  var imgThum = document.querySelectorAll('.thum img');
  var imgPop = document.querySelector('.popup img');
  var divPop = document.querySelector('.popup');
  var prevBtn = document.querySelector('.prev');
  var nextBtn = document.querySelector('.next');
  var dNum;
  
  divThum.addEventListener('click', function(e) {
    for(var i = 0; i < imgThum.length; i++) {
      imgThum[i].classList.remove('active');
    }
    e.target.classList.add('active');
    imgPop.src = e.target.src;
    divPop.classList.add('appear');
    dNum = e.target.dataset.num;
  });

  divPop.addEventListener('click', function(e) {
    if(e.target.nodeName == 'A') {
      return;
    }
    this.classList.remove('appear');
  });

/*
1. a태그를 클릭한다.
2. 화면에 보이는 img의 data num을 가져온다.
3. prev: data num--
   next: data num++
4. data num == 0: prev 숨기기
   data num == 2: next 숨기기
*/
  prevBtn.addEventListener('click', function() {
    dNum--;
    imgChange();
  });

  nextBtn.addEventListener('click', function() {
    dNum++;
    imgChange();
  });

  function imgChange() {
    imgPop.src = imgThum[dNum].src;
  }

  function disappear() {
    if(dNum == 0) {
      prevBtn.style.opacity = 0;
    } else if(dNum == 2) {
      nextBtn.style.opacity = 0;
    } else {
      prevBtn.style.opacity = 1;
      nextBtn.style.opacity = 1;
      
    }
  }

});













































// window.addEventListener('DOMContentLoaded', function() {
// /*
// 1_1. 이미지를 클릭한다.
// 1_2. 클릭한 이미지에 active 클래스 더한다.
// 1_3. 클릭한 이미지의 src 값을 구한다.
// 1_4. popup에 appear 클래스 더한다.

// 2_1. popup 클릭한다.
// 2_2. popup에 appear 클래스 뺀다.
// */
//   var thumDiv = document.querySelector('.thum');
//   var thumImg = thumDiv.querySelectorAll('img');
//   var popUp = document.querySelector('.popup');
//   var popImg = popUp.querySelector('img');
//   var idx;

//   thumDiv.addEventListener('click', function(e) {
//     // console.log(e.target.src);
//     for(var i = 0; i < thumImg.length; i++) {
//       thumImg[i].classList.remove('active');
//     }
//     idx = e.target.dataset.num;
//     e.target.classList.add('active');
//     popImg.src = e.target.src;
//     popUp.classList.add('appear');
//     disappear();
//   });

//   popUp.addEventListener('click', function(e) {
//     this.classList.remove('appear');
//   });

// /*
// 1. a태그 클릭한다.
// 2. prev → 
//    next → 
// 3. 첫번째 img에서 prev 숨긴다.
//    마지막 img에서 next 숨긴다.
// */
//   var prevBtn = document.querySelector('.prev');
//   var nextBtn = document.querySelector('.next');

//   prevBtn.addEventListener('click', function() {
//     --idx;
//     change();
//     disappear();
//   });

//   nextBtn.addEventListener('click', function() {
//     ++idx;
//     change();
//     disappear();
//   });

//   function change() {
//     popImg.src = thumImg[idx].src;
//   }

//   function disappear() {
//     if(idx == 0) {
//       prevBtn.style.opacity = 0;
//     } else if(idx == 2) {
//       nextBtn.style.opacity = 0;
//     } else {
//       prevBtn.style.opacity = 1;
//       nextBtn.style.opacity = 1;
//     }
//   }


//   // var btn = popUp.querySelector('.button');

//   // btn.addEventListener('click', function(e) {
//   //   console.log(idx);
//   //   if (e.target.textContent == 'prev'){
//   //     console.log('prev');
//   //     popImg.src = thumImg[--idx].src;
//   //   } else {
//   //     console.log('next');
//   //     popImg.src = thumImg[++idx].src;
//   //   }
//     // thumImg[++idx]
//     // var prev = btn.children[0];
//     // var next = btn.children[1];
//   // });


// });