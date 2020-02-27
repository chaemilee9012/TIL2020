// 랜덤 수 --------------------------------------------------------------------
// var ran = Math.random();
// var ran = Math.random()*10;
// var ran = Math.ceil(Math.random()*10); //Math.ceil: 소수점 버림
var ran = Math.ceil(Math.random()*100); //1~100 랜덤 출력
var aa = [];

while(i <= 45){
    aa.push(ran);
}

console.log(ran);
// 출석 --------------------------------------------------------------------

//확인버튼 누른다 
//입력받은 value를 name에 저장한다.
// name을 목록에추가한다.

var sCheck = document.querySelector(".study_check");
var inputJs = sCheck.querySelectorAll("div input");
// console.log(inputJs[0].value);
var tbodyJs = sCheck.querySelector("tbody");
var count = 1;
var count10 = 0;
// console.log(tbodyJs);
// var name = inputJs[0].value; //클릭할 때 저장

// tbodyJs.innerHTML += "<tr><td>02</td><td>" + name + "</td></tr>";

// inputJs[0].value == "";
// alert("입력값이 없습니다.");

// function btnClick(){
//     var name = inputJs[0].value;

// }
// inputJs[1].onclick=function(){
//     var name = inputJs[0].value;
//     tbodyJs.innerHTML += "<tr><td>02</td><td>" + name + "</td></tr>";
//     // tbodyJs.innerHTML += name;
//     if(inputJs[0].value==''){
//         alert("입력값이 없습니다.");
//     }
// }

inputJs[1].onclick=function(){
    
    if(inputJs[0].value==''){
        alert("입력값이 없습니다.");
    } else{
        count++;
        console.log(count);
        var name = inputJs[0].value;
        tbodyJs.innerHTML += "<tr><td>" + count10 + count + "</td><td>" + name + "</td></tr>";
        if(count == 10){
            count10++;
            count = 0;
        }
        // tbodyJs.innerHTML += name;
    }
}

//삼항연산
//sNum <= 9 ? sCount = "0" + sNum : sCount = sNum
//    조건  ?    true일 때 실행    : false일 때 실행     


// var name = document.querySelectorAll(".entry");
// var list = document.querySelectorAll("table tbody tr");


// // console.log(list[0]);

// console.log(name);
// console.log(name.value);

// console.log(name[0]);
// console.log(name[0].value);



// console.log(list);
// console.log(list[0]);
// console.log(list[0].textContent);


// function check(){}

//ex02 다중 함수 결과물 얻기 --------------------------------------------------------------------
// var resultJs = document.querySelectorAll(".result input");
// var numberJs = document.querySelectorAll(".number input");

//querySelector: css 컴파운드 형식 이용 타겟팅, 하나만 타겟팅
//querySelectorAll: css 컴파운드 형식(태그명) 이용 타겟팅, 여러 개 타겟팅
// console.log(numberJs);


//1) 버튼 클릭할 때마다 결과 창에 값 더해줘야 함

// 1_1) numberJs[] 클릭하면 num() 실행
// numberJs[0].onclick = num;
// numberJs[1].onclick = num;
// numberJs[2].onclick = num;
// numberJs[3].onclick = num;
// ...
// numberJs[14].onclick = num;

// 1_1) numberJs[] 클릭하면 num() 실행
// for(var i = 0; i < numberJs.length; i++){
//     numberJs[i].onclick = num;
// }
// function num(){
//     // console.log("numberJs"); // for문 확인
// }

// 1_1) numberJs[] 클릭하면 num() 실행
// for(var i = 0; i < numberJs.length; i++){
//     numberJs[i].onclick = function(){ // 익명 함수
//         // console.log("numberJs"); // for문 확인

//         // resultJs[0].value = numberJs[i].value; // for문 돌린 결과 i = 14되므로 에러
//         // console.log("i: " + i);

//         if(resultJs[0].value == 0){
//             resultJs[0].value = ""; // result 창에 있는 0 지우고 값 입력하기
//         }
//         resultJs[0].value += this.value; //이벤트 발생시키는 개체만 선택
//     }
// }

// resultJs[1].onclick = function(){
//     var total = eval(resultJs[0].value);
//     //eval() 함수: 문자열 → 스크립트 인식할 수 있게 바꾼 뒤 연산
//     resultJs[0].value = total;
// }

// resultJs[2].onclick = function(){
//     resultJs[0].value = 0;
// }


// var a = "[0, 2, 5, 8, 7, 8, 10]";
// console.log("a: " + typeof a); //a: string
// console.log("a: " + typeof eval(a)); //a: object

// var b = "{0, 2, 5, 8, 7, 8, 10}";
// console.log("b: " + typeof b); //a: string
// console.log("b: " + typeof eval(b)); //a: object