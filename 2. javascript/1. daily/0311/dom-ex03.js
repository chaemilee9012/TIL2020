//ex1 --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function() {
    var ex1 = document.querySelector('#ex1');
    var txtInput = ex1.querySelectorAll('.txt-input');
    var addBtn = ex1.querySelector('.add-button');
    var delBtn = ex1.querySelector('.del-button');
    var menuList = ex1.querySelector('.menu-list');
    // console.log(menuList.children[0]);

    var spanJs;
    var sum;

    addBtn.addEventListener('click', function() {
        sum = parseInt(txtInput[0].value) + parseInt(txtInput[1].value);

        // console.log(txtInput);
        // console.log(menuList.children[0].textContent);
        
        // console.log(txtInput[0].value);
        // input value 없을 때 NaN 입력 안 하기----------------------------------
        // for(var i = 0; i < txtInput.length; i++){
        //     if(txtInput[0].value == null && txtInput[1].value == null){
        //         menuList.children[i].innerHTML = null;
        //     }
        // }

        // menuList.children[0].innerHTML += '<span>' + sum + '</span>';
        // menuList.children[1].innerHTML += '<span>' + (sum/2) + '</span>';
        
        // ---------------------------------------------------------------------



        // sum = parseInt(txtInput[0].value) + parseInt(txtInput[1].value);
        // console.log(num0);
        // console.log(num1);
        // console.log(sum);

        // menuList.children[0].textContent += sum;
        // menuList.children[1].textContent += sum/2;

        menuList.children[0].innerHTML += '<span>' + sum + '</span>';
        menuList.children[1].innerHTML += '<span>' + (sum/2) + '</span>';

        spanJs = menuList.querySelectorAll('span');
        // console.log(spanJs[1].textContent);

        // 평균 60점 이상이면 '합격' 출력하기 ------------------------------------
        if(spanJs[1].textContent < 60) {
            menuList.innerHTML += '<li>' + '불합격' + '</li>';
        } else {
            menuList.innerHTML += '<li>' + '합격' + '</li>';
        }
        // ---------------------------------------------------------------------
    });

    delBtn.addEventListener('click', function() {
        spanJs = menuList.querySelectorAll('span');

        // console.log(spanJs[0].textContent);
        for(var i = 0; i < txtInput.length; i++) {
            txtInput[i].value = null;
            spanJs[i].textContent = null;
            // menuList.children[i].children[i].textContent = '';
        }
        menuList.removeChild(menuList.lastChild);
        // for(var i = 0; i < txtInput.length; i++){
        //     menuList.children[i].textContent = '';
        // }
    });
});


//ex2 --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function() {
    var ex2 = document.querySelector('.ex2');
    var classList = ex2.querySelector('.class-list');

    classList.addEventListener('click', function(){
        // classList.className = 'red';
        this.className = 'red';
        // this: classList → 이벤트 발생시킨 대상 가리킴
    });
});


//ex3 --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function() {
    var ex3 = document.querySelector('.ex3');
    var classJs = ex3.querySelector('.class-list');

    classJs.addEventListener('click', function(){
        this.classList.add('active');
    });
});


//ex4 --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function() {
    var ex4 = document.querySelector('.ex4');
    var toggleClass = document.querySelector('.toggle');

    // console.log(ex4.children[2]);
    ex4.addEventListener('click', function(){
        // ex4.children[2].classList.toggle('on');
        // ex4.children[2].textContent = ex4.children[2].className;

        // on222222 추가해서 출력 -----------------------------------------------
        // toggleClass.classList.toggle('on22222');
        // toggleClass.textContent = toggleClass.className;
        // ---------------------------------------------------------------------

        // console.log(toggleClass.classList.contains('on'));
        // if(toggleClass.classList.contains('on') == false) {
        //     ex4.children[2].classList.add('on');
        // } else {
        //     ex4.children[2].classList.remove('on');
        // }

    });
});


//ex5 --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function() {
    var ex5 = document.querySelector('.ex5');
    var liJs = ex5.querySelectorAll('.ex5 li');
    var divJs = ex5.querySelectorAll('.ex5 li div');
    var faqJs = ex5.querySelector('.faq');
    
    // li 클릭하면 div 보이기 -----------------------------------------------------
    // faqJs.addEventListener('click', function(){
    //     // console.log(event.target.nodeName == 'LI'); // nodeName은 항상 대문자

    //     var liDiv = event.target.querySelector('div');

    //     if(event.target.nodeName == 'LI'){
    //         console.log(liDiv);
    //         liDiv.classList.toggle('on');
    //     }
    // });

    // 클릭한 li > div만 남기기 ----------------------------------------------------
    faqJs.addEventListener('click', function() {
        var liDiv = event.target.querySelector('div');

        // 방법 2(미완) -----------------------------------------------------------------
        // console.log(divJs[0].classList.contains('on'));
        // for(var i = 0; i < divJs.length; i++) {
        //     // divJs[i].classList.remove('on');

        //     if(divJs[i].classList.contains('on') == false) {
        //         divJs[i].classList.toggle('on');
        //     }
        // }
        
        // 방법 1 (부모 요소에 이벤트리스너 직접 추가)-----------------------------------------------------------------
        // for(var i = 0; i < divJs.length; i++) {
        //     divJs[i].classList.remove('on');
        // }
        // if(event.target.nodeName == 'LI') {
        //     liDiv.classList.toggle('on');
        // }
    });

    // 방법 3 (자식 요소에 이벤트리스너 직접 추가) -----------------------------------------------------------------

    // 여러 개의 div
    // 여러 개의 li
    // var liDiv;
    // for(var i = 0; i < liJs.length; i++){
    //     liJs[i].addEventListener('click', function(){
    //         for(var j = 0; j < divJs.length; j++){
    //             divJs[j].classList.remove('on');
    //         }
    //         // var liDiv = event.target.querySelector('div');
    //         liDiv = this.querySelector('div');
    //         liDiv.classList.toggle('on');
    //         console.log(liDiv.classList.contains('on'));

    //     });
    // }

    var liDiv;
    for(var i = 0; i < liJs.length; i++){
        liJs[i].addEventListener('click', function(){
            liDiv = this.querySelector('div');

            for(var j = 0; j < divJs.length; j++){
                if(liDiv.classList.contains('on') == false){
                    liDiv.classList.add('on');
                } else {
                    divJs[j].classList.remove('on');
                }
                console.log(divJs[j].classList);
            }

            
            // console.log(liDiv.classList.contains('on'));

            // if(liDiv.classList.contains('on') == false){
            //     liDiv.classList.add('on');
            // }
        });
    }


});

    