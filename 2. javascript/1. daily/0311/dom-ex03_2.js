//ex1 -------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function() {
    var ex1 = document.querySelector('.ex1');
    var txtInput = ex1.querySelectorAll('.txt-input');
    var addBtn = ex1.querySelector('.add-button');
    var delBtn = ex1. querySelector('.del-button');
    var menuList = ex1.querySelector('.menu-list');

    var sum;
    var spanJs;
    addBtn.addEventListener('click', function() {
        // 입력값 없으면 이벤트 정지 -------------------------------------
        // console.log(txtInput[0].value);
        if(txtInput[0].value == '' || txtInput[1].value == '') {
            return;
        }

        sum = parseInt(txtInput[0].value) + parseInt(txtInput[1].value);

        // 1) textContent -------------------------------------------
        // menuList.children[0].textContent += sum;
        // menuList.children[1].textContent += (sum/2);

        // 2) innerHTML -------------------------------------------
        menuList.children[0].innerHTML += '<span>' + sum + '</span>';
        menuList.children[1].innerHTML += '<span>' + (sum/2) + '</span>';
        // console.log(menuList.children[0]);

        //  평균 60점 미만 불합격, 이상 합격 출력하기 -----------------------
        spanJs = menuList.querySelectorAll('span');

        // console.log(spanJs[0].textContent);
        if(spanJs[1].textContent < 60) {
            menuList.innerHTML += '<li>' + '불합격' + '</li>';
        } else {
            menuList.innerHTML += '<li>' + '합격' + '</li>';
        }
    });

    delBtn.addEventListener('click', function() {
        // // 1) textContent -------------------------------------------
        // for(var i = 0; i < txtInput.length; i++) {
        //     txtInput[i].value = null;
        //     menuList.children[i].textContent = null;
        // }

        // 2) innerHTML -------------------------------------------
        // spanJs = menuList.querySelectorAll('span');
        // console.log(spanJs);
        spanJs = menuList.querySelectorAll('span');
        
        for(var i = 0; i < txtInput.length; i++) {
            txtInput[i].value = null;
            spanJs[i].textContent = null;
        }
        menuList.removeChild(menuList.lastChild);
    });
});


//ex2 -------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function() {
    var ex2 = document.querySelector('.ex2');
    var divJs = ex2.querySelector('.class-list');

    divJs.addEventListener('click', function() {
        divJs.className = 'red';
    });
});


//ex3 -------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function() {
    var ex3 = document.querySelector('.ex3');
    var divJs = ex3.querySelector('div');

    divJs.addEventListener('click', function() {
        console.log(event);
        event.target.classList.add('active');
    });
});


//ex4 -------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function() {
    var ex4 = document.querySelector('.ex4');
    var divJs = ex4.querySelector('div');

    ex4.addEventListener('click', function() {
        divJs.classList.toggle('on');
        divJs.textContent = divJs.className;
    });
});


//ex5 -------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function() {
    var ex5 = document.querySelector('.ex5');
    var faqJs = ex5.querySelector('.faq');
    var liJs = faqJs.querySelectorAll('li');
    
    faqJs.addEventListener('click', function() {
        // console.log(event.target.nodeName);
        // if(event.target.nodeName == 'LI') {
        //     for(var i = 0; i < divJs.length; i++) {
        //         divJs[i].classList.toggle('on');
        //     }
        // }

        // 1) 작동하지만 에러 -------------------------------------------
        // target = event.target;
        // for(var i = 0; i < divJs.length; i++) {
        //     target.children[i].classList.toggle('on');
        //     // target.children[i].classList.add('on');
        //     console.log(target.children);
        // }
        
        // 2) 타겟 이용
        // target = event.target;
        // // console.log(target.children);
        // target.children[0].classList.toggle('on');

        // liDiv.classList.toggle('on');
        // if(event.target.nodeName == 'LI'){
        //     // console.log(liDiv);
        //     liDiv.classList.toggle('on');
        // }

        // 2) 선생님 답 -------------------------------------------------
        var liDiv = event.target.querySelector('div');

        if(event.target.nodeName == 'LI'){
            // console.log(liDiv);
            for(var i = 0; i < liJs.length; i++){
                liJs[i].children[0].classList.remove('on');
            }
            liDiv.classList.toggle('on');
        }

        // div 클릭하면 안 보이게 ------------------------------------------------
        if(event.target.nodeName == 'DIV') {
            // console.log(event.target);
            event.target.classList.toggle('on');
        }
    });

        // div 클릭하면 안 보이게 ------------------------------------------------

    //     event.target.children[0].classList.toggle('on');

    //     // if(event.target.nodeName == 'LI' || event.target.nodeName == 'DIV'){
    //     //     // console.log(liDiv);
    //     //     liDiv.classList.toggle('on');
    //     // }

        

    //     // var liDiv = event.target.querySelector('div');
    //     // console.log(event.target.classList);

    //     // if(event.target.nodeName == 'LI'){
    //     //         // console.log(liDiv);
    //     //         liDiv.classList.toggle('on');
    //     //     }

    // var li = event.target.querySelectorAll('li');
    // console.log('li');
    
        
        // this.addEventListener('click', function() {
        // // liDiv = target.querySelector('div');
        // // this.classList.toggle('on');
        //     console.log('ok');
        // });


    
});