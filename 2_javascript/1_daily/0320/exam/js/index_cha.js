window.addEventListener('DOMContentLoaded', function() {
var lyPop = document.querySelector('.ly-pop');
var popImgNode = document.querySelector('.ly-pop p img');
var popTxtNode = document.querySelector('.ly-pop figcaption');

lyPop.style.display = 'none';

//추출할 노드선택
var gallery = document.querySelector('.gallery');
var li = document.querySelectorAll('.gallery li');
var target;

// li 부모 요소에 이벤트 발생 → li에 적용
gallery.addEventListener('click',function(e){
    
target = e.target;

// 부모 노드로 올라가면서 LI 찾아서 target에 담음
for(;target.nodeName != 'LI';target = target.parentNode);
    
var imgNode = target.querySelector('img');
var txtNode = target.querySelector('figcaption');

//출력할 노드선택
popImgNode.src = imgNode.src;
popTxtNode.textContent = txtNode.textContent;
lyPop.style.display = 'flex';
});

lyPop.addEventListener('click', function() {
  this.style.display = 'none';
})

var button = lyPop.querySelectorAll('div a');
button[0].addEventListener('click',function(e){
  //prev
  e.preventDefault();
  e.stopPropagation();
  
  changeGallery('previousElementSibling');  
});

button[1].addEventListener('click', function(e) {
  // next
  e.preventDefault();
  e.stopPropagation(); // 해당 이벤트 우선 적용

  changeGallery('nextElementSibling'); // changeGallery 함수에 인자로 전달
});

function changeGallery(nextBack) { // 인자로 받은 nextElementSibling  문자열 매개변수로 이용
  try{
  // 에러 안 날 때 실행
    var imgNode = eval("target." + nextBack + ".querySelector('img')");
    // eval: 문자열을 함수 연산에 활용할 수 있도록 하는 함수
    var txtNode = eval("target." + nextBack + ".querySelector('figcaption')");

    popImgNode.src = imgNode.src;
    popTxtNode.textContent = txtNode.textContent;

    target = eval('target.' + nextBack);
  } catch {
  // 에러날 때 실행, 실행할 내용 없으면 생략 가능
    // console.log('데이터 없음');
    return;
  } finally {
  // 에러발생여부 관계없이 무조건 실행, 생략 가능
    console.log('무조건 실행');
  }
  
}
});