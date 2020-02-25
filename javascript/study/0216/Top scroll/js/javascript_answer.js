var offset = document.documentElement.offsetHeight;
var scrollHeight = document.documentElement.scrollHeight;
var docHeight = 0;
var scrollPos = document.documentElement.scrollTop;
var topButton = document.getElementById('back-to-top');


var a = document.document





compare();

function compare() {
    scrollPos = document.documentElement.scrollTop;
    docHeight = (Math.max(offset, scrollHeight) * 0.25);
    console.log(scrollPos + "---" + docHeight);
    //console.log( docHeight + "-- " + Math.max(offset, scrollHeight));

    if (scrollPos > docHeight) {
        topButton.classList.add('visible');
    }
    else {
        topButton.classList.remove('visible');
    }
}

window.addEventListener('scroll', function(){
    compare();
});

//top 버튼 천천히 올라가세요.----------------------------------------------------------
//변수 = setInterval(할 일, number): number(ms)마다 할 일을 실행
//clearInterval(변수): 변수 안에 있는 할 일 중지
//window.scrllBy(x, y): 윈도우 스크롤의 x축을 x만큼, y축을 y만큼 움직임

topButton.addEventListener('click', function(e){
    e.preventDefault();
    scrollInterval = setInterval(stop, 20);
});

function stop (){
    if (scrollPos === 0) {
        clearInterval(scrollInterval);
    }
    window.scrollBy(0, -50);
}


//작업 순서
//1. 전체 문서 높이 구하기
//2. 현재 스크롤 위치 구하기
//3. 전체 높이의 25% 값 구하기
//4. 현재 스크롤 위치, 전체 높이 25% 값 비교 > visible 클래스 넣고 빼기


//특정 조건 충족할 때까지 기다리기
//window.addEventListener('scroll'(행동), 할일)


//클래스 추가하기
//Element.className class 전체를 #으로 변경
//Element.classList.add class가 존재할 때 #을 추가


//삼항연산자
//if (조건) {# = a}
//else {# = b}
//# = (조건)? a:b