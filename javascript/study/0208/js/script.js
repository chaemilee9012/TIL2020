// 변수 지정
// 슬라이드 이동 함수 
// 버튼을 클릭하면 슬라이드 이동시키기
// 버튼 사라지게 하기

// (추가) 첫번째 슬라이드 먼저 보이도록 하기
// (추가) 슬라이드가 있으면 가로로 배열하기
// (추가) 슬라이드의 높이 확인하여 부모의 높이로 지정하기
// (추가) 처음에서 뒤로가는 버튼 누르면 마지막으로 가기 (마지막도 동일)

var slideContainer = document.getElementsByClassName('slider-container');
var currentIndex = 0;
var navPrev = document.getElementById('prev');
var navNext = document.getElementById('next');
var slides = document.getElementsByClassName('slide');
var slideCount = slides.length;-1
var slidewrapper = document.getElementsByClassName('container');
var topHeight = 0;


function gotoSlide(idx){
    slideContainer[0].style.left=idx*(-100) + '%';
    currentIndex = idx;
    // disapear();
};

navPrev.addEventListener('click',function(e){
    e.preventDefault();
    // gotoSlide(currentIndex-1);
    // gotoSlide(--currentIndex);
    carousel_prev();
    // if(currentIndex == 0){
    //     gotoSlide(slideCount-1);
    // }
    // else {
    //     gotoSlide(currentIndex-1);
    // }
});

navNext.addEventListener('click',function(e){
    e.preventDefault();
    // gotoSlide(currentIndex+1)
    carousel_next();
    // if(currentIndex == slideCount-1){
    //     gotoSlide(0);
    // }
    // else {
    //     gotoSlide(currentIndex+1);
    // }
});

// 버튼 안 보이게 -------------------------------------------------------------------------
function disapear(){
    if (currentIndex == 0) {
        navPrev.classList.add('disabled');
    }
    else {
        navPrev.classList.remove('disabled');
    }

    if (currentIndex == slideCount-1) {
        navNext.classList.add('disabled');
    }
    else {
        navNext.classList.remove('disabled');
    }
}  
// disapear();

// 가로 정렬 -------------------------------------------------------------------------
for(var i = 0; i < slideCount; i++){
    slides[i].style.left= i*100 + '%';
}

// 가장 큰 값으로 높이 맞추기 ---------------------------------------------------------
function containerHeight(){
    for(var j = 0; j < slideCount; j++){
        if(topHeight < slides[j].offsetHeight) {
            topHeight=slides[j].offsetHeight;
        }
    }
    slideContainer[0].style.height = topHeight + 'px';
    slidewrapper[0].style.height = topHeight + 'px';
}
containerHeight();

// 처음-마지막 연결하기 --------------------------------------------------------------
function carousel_prev(){
    if(currentIndex == 0){
        gotoSlide(slideCount-1);
    }
    else {
        gotoSlide(currentIndex-1);
    }
}
function carousel_next(){
    if(currentIndex == slideCount-1){
        gotoSlide(0);
    }
    else {
        gotoSlide(currentIndex+1);
    }
}