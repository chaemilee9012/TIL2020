//ex1 --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function() {
    var ex1 = document.querySelector('#ex1');
    var menu = ex1.querySelector('.menu-trigger');
    var nav = ex1.querySelector('.nav');

    menu.addEventListener('click', function() {
        // this.classList.add('active-1');
        // nav.classList.add('active');
        this.classList.toggle('active-1'); // this: 이벤트 발생하는 대상
        // console.log(this);
        // event.target.classList.toggle('active-1');
        // console.log(event.target);
        // nav.classList.toggle('active');

        if(this.classList.contains('active-1') == true) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
});


//ex2 --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function() {
    var ex2 = document.querySelector('#ex2');
    // var tab = ex2.querySelectorAll('.tab li');
    var tab = ex2.querySelector('.tab');
    var tabCon = ex2.querySelectorAll('.tab-con');

    // ex2.addEventListener('click', function() {
    //     var target = event.target
    //     // console.log(event.target.nodeName);
    //     if(target.nodeName == 'LI') {
    //         // console.log('li');
    //         for(var i = 0; i < tab.length; i++) {
    //             tab[i].classList.remove('active');
    //         }
    //         target.classList.add('active');
    //     } else {
    //         return;
    //     }
    // });


    // 방법 1) -----------------------------------------------------------------------------
    // tab.addEventListener('click', function() {
    //     var target = event.target;
    //     var data = event.target.dataset.id;
    //     // console.log(data);

    //     for(var i = 0; i < tabCon.length; i++) {
    //         tab.children[i].className = '';
    //         tabCon[i].className = '';
    //     }

    //     target.className = 'active';
    //     tabCon[data].className = 'active';
    //     // console.log(target);
    // });


    // 방법 2) -----------------------------------------------------------------------------
    var tabLi = ex2.querySelectorAll('.tab li');
    var j = 0;

    for(let i = 0; i < tabCon.length; i++) {
        tabLi[i].addEventListener('click', function() {
            tabLi[j].classList.remove('active');
            tabCon[j].classList.remove('active');

            this.classList.add('active'); // 탭
            tabCon[i].classList.add('active'); // 콘텐츠

            j = i; // 바로 직전에 클릭한 tabLi 찾아내서 i값 이용
        });
    }

    /*
    tabLi[i: 0].addEventListener('click', function() {
        tabLi[j].classList.remove('active');
        tabCon[j].classList.remove('active');

        this.classList.add('active'); // 탭
        tabCon[i].classList.add('active'); // 콘텐츠

        j = i; // 바로 직전에 클릭한 tabLi 찾아내서 i값 이용
    });
    tabLi[i: 1].addEventListener('click', function() {
        tabLi[j].classList.remove('active');
        tabCon[j].classList.remove('active');

        this.classList.add('active'); // 탭
        tabCon[i].classList.add('active'); // 콘텐츠

        j = i; // 바로 직전에 클릭한 tabLi 찾아내서 i값 이용
    });
    tabLi[i: 2].addEventListener('click', function() {
        tabLi[j].classList.remove('active');
        tabCon[j].classList.remove('active');

        this.classList.add('active'); // 탭
        tabCon[i].classList.add('active'); // 콘텐츠

        j = i; // 바로 직전에 클릭한 tabLi 찾아내서 i값 이용
    });
    */
    

    /* var vs let vs const ---------------------------------------------
    for(var i = 0; i < tabCon.length; i++) {}
    i = 3 (0 → 1 → 2 → 3)
    → var: i값 같은 자리에 덮어씌우면서 저장

    for(let i = 0; i < tabCon.length; i++) {}
    i[0] = 0
    i[1] = 1
    i[2] = 2
    ******************* 중요 **************************
    → let: i값 배열처럼 각각 따로 저장
    ***************************************************

    ex)
    var a = 0;
    var a = 1; → 에러 X

    var a = 0;
    function() {
        var a = 1;
    }
    → 전역 a == 0, 지역 a == 1 

    
    let b = 0;
    let b = 1; → 에러
    function() {
        let b = 0; → 에러 X
    }

    const a = 0;
          a = 1; → 에러
    ******************* 중요 ********************************************
    → const: 상수
            한 번 선언한 변수 값 덮어씌우기 불가
            객체, 또는 배열로 선언된 경우 데이터 변경은 가능하지만 타입 변경은 안 됨
            (같은 변수명으로 또 선언해도 주소 배정 안 해줌)
    ******************* 중요 *********************************************

    const ca = {
        a : 0,  → 01
        b: 1    → 10
    }
    ca.a = 01;
    ca.b = 10;
    
    const ca = [] → 에러
    const ca = {
        a: 1,
        b: 2
    }
    ------------------------------------------------------------------ */



});


//ex3 --------------------------------------------------------------------------
/*
    for(let i = 0; i < tabCon.length; i++) {
        tabLi[i].addEventListener('click', function() {
            tabLi[j].classList.remove('active');
            tabCon[j].classList.remove('active');

            this.classList.add('active'); // 탭
            tabCon[i].classList.add('active'); // 콘텐츠

            j = i; // 바로 직전에 클릭한 tabLi 찾아내서 i값 이용
        });
    }
*/

window.addEventListener('DOMContentLoaded',function() {
    var ex3 = document.querySelector('#ex3');
    var detImg = ex3.querySelector('.detail img');
    var thumJs = ex3.querySelector('.thum');

    thumJs.addEventListener('click', function() {
        if(event.target.src == null) {
            return;
        }
        detImg.src = event.target.src;
        for(var i = 0; i < thumJs.children.length; i++) {
            thumJs.children[i].classList.remove('active');
        }
        event.target.classList.add('active');

    });
});