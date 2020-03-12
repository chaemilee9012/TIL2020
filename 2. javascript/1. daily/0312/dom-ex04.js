//ex1 --------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded',function(){
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
window.addEventListener('DOMContentLoaded',function(){
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

    var tabLi = ex2.querySelectorAll('.tab li');

    for(var i = 0; i < tabCon.length; i++) {
        tabLi[i].addEventListener('click', function() {
            this.className = 'active';
            tabCon[i].className = 'active';
        });
    }
});