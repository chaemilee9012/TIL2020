window.addEventListener('DOMContentLoaded', function() {
var lyPop = document.querySelector('.ly-pop');

lyPop.style.display = 'none';

//추출할 노드선택
var gallery = document.querySelector('.gallery');
var li = document.querySelectorAll('.gallery li');

// li 부모 요소에 이벤트 발생 → li에 적용
gallery.addEventListener('click',function(e){
    
var target = e.target;
for(;target.nodeName != 'LI';target = target.parentNode);
// 부모 노드로 올라가면서 LI 찾음    

var imgNode = target.querySelector('img');
var txtNode = target.querySelector('figcaption');
    
});


for(var i=0;i<li.length;i++){
    li[i].addEventListener('click',function(){
        this.
        //li img(이미지주소값)
        //li text(텍스트값)
        
        //출력할 노드선택
        //lyPop
        //figure img
        //figure figcaption
    });
}







//prev,next 이벤트 발생
//선택노드
//ly-pop div a[0] prev
//ly-pop div a[1] next
});