// 선생님 답안 ----------------------------------------------------------
/*
window.addEventListener('DOMContentLoaded',function(){
    var ex1 = document.querySelector('#ex1');
    var detailImg = document.querySelector('.popup img');
    var thum = ex1.querySelector('.thum');
    var thumImg = ex1.querySelectorAll('.thum img');
    
    thum.addEventListener('click',function(e){
        var tar = e.target;
        detailImg.parentElement.style = 'display:flex';
        for(var i=0;i<thumImg.length;i++){
            thumImg[i].classList.remove('active');
        }
        tar.classList.add('active');
        detailImg.src = tar.src;
    });
    
    detailImg.addEventListener('click',function(e){
        this.parentElement.style = 'display:none';
    });
});
*/

window.addEventListener('DOMContentLoaded',function(){
    var ex1 = document.querySelector('#ex1');
    var thumJs = ex1.querySelector('.thum');
    var popUp = document.querySelector('.popup');

    thumJs.addEventListener('click', function() {
        for(let i = 0; i < thumJs.children.length; i++){
            thumJs.children[i].classList.remove('active');
        }
        event.target.classList.add('active');

        // console.log(popUp.style.display);
        popUp.style.display = 'flex';
        popUp.children[0].src = event.target.src;
    });

    popUp.addEventListener('click', function() {
        popUp.style.display = 'none';
        
    });
});