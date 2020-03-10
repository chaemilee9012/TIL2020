// window.addEventListener('DOMContentLoaded', function(){}); 
    // addEventListner: 여러 개의 이벤트 추가 가능
    // DOMContentLoaded: document 한 번 읽은 뒤 실행 → 있어야 head에 script 연결 가능
// window.addEventListener('load', function(){});
// window.onload = function(){} 같은 구문 위 방식이 더 나음 // onload: 브라우저 내용 모두 로드한 뒤 실행

// ex3 ----------------------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function(){
    var ex3 = document.querySelector('.ex3');
    var txtInput = ex3.querySelector('.txt_input');
    var btnInput = ex3.querySelector('.btn_input');
    var delInput = ex3.querySelector('.del_input');
    var txtList = ex3.querySelector('.txt_list');
    var target;


    btnInput.addEventListener('click', function(){
        txtList.innerHTML += "<p class=" + "n" + ">" + txtInput.value + "</p>";
    });

    txtList.addEventListener('click', function(){
        target = event.target; // event.target: 이벤트가 발생했을 때의 target → p
        var child = txtList.childNodes;

        for(var i = 0; i < child.length; i++){
            child[i].style.border = "none";
            if(target.className == 'n'){
                target.style.border = "1px solid #333";
            }
        }
    });

    // txtList.addEventListener('click', function(){
    //     target = event.target; // event.target: 이벤트가 발생했을 때의 target → p
    //     if(target.className == 'n'){
    //         target.style.border = "1px solid #333";
    //     }
    // });

    // txtList.addEventListener('click', function(e){ // e: 브라우저에 발생하는 이벤트 정보를 받아쓰겠다
    //     target = e.target; // 매개변수 e로 받은 정보 중 target 값
    //     target.style.border = "1px solid #333";
    // })

    delInput.addEventListener('click', function(){
        target.remove();
        // txtList.removeChild(txtList.childNodes[0]); // 앞에서부터 삭제
        // txtList.removeChild(txtList.lastChild); // 뒤에서부터 삭제
    })
});

// ex2 ----------------------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function(){
    // 1. 추가하기 클릭
    // 2. 텍스트 필드값 가져오기
    // 3. 가져온 값을 txt_list에 출력

    var txtInput = document.querySelector('.txt_input'); // 텍스트 필드
    var btnInput = document.querySelector('.btn_input'); // 추가 버튼
    var txtList = document.querySelector('.txt_list'); // 텍스트 추가 공간

    btnInput.addEventListener('click', function(){
        // 텍스트 필드 값 가져오기
        // 텍스트 추가 공간에 필드 값 추가하기

        // 방법 1: Node 하나에 넣기
        // txtList.textContent += txtInput.value;


        // 방법 2: 텍스트 Node 공간 만들고 각각의 Node로 넣기
        // var txtValue = txtInput.value;
        // var txtNode = document.createTextNode(txtValue);
        // createTextNode(txtValue): 텍스트 Node 공간 추가하고 txtValue 값을 받아서 각각 저장

        // txtList.append(txtNode); // append: Node 추가
        // txtList.appendChild(txtNode); // create___Node로 만들어진 Node만 추가 가능


        // 방법 3: element로 추가
        // txtList.innerHTML += "<p>" + txtInput.value + "</p>";
    });
});

// ex1 ----------------------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', function(){ 
    // addEventListner: 여러 개의 이벤트 추가 가능
    // DOMContentLoaded: document 한 번 읽은 뒤 실행 → 있어야 head에 script 연결 가능
    var ex1 = document.querySelector('.ex1');
    var txtJs = ex1.querySelector('.txt');

    // txtJs.innerHTML: element node, 텍스트 node 모두 인식
    txtJs.textContent = "안녕!!!!!!!!!!!!!!!!!";
    // 텍스트 node만 인식, 기존 텍스트 값 버리고 새 내용으로 교체
    // 텍스트 추가하고 싶을 경우 연산자 += 사용
    
    txtJs.style.color = '#00f';
    txtJs.style.fontSize = '3em';

    // function setTxt(){
    //     txtJs.textContent = "앙냥";
    //     txtJs.style.color = "#f00";
    //     txtJs.style.fontSize = "6em";
    // }
    // setTxt();
});