//ex01 ---------------------------------------------------------------------
document.write("<h1>function 입력값 연산</h1>");

// var inputJs = document.getElementsByTagName("input");
// console.log(inputJs);

var result = document.getElementsByClassName("result");
console.log(result);
console.log(result[0]);

function fun2(){
    var x = document.getElementsByClassName("calc-x");
    var y = document.getElementsByClassName("calc-y");

    var sum = Number(x[0].value) + Number(y[0].value);

    // console.log(sum);
    result[0].value = sum;
}
result[0].onclick = fun2; //이벤트(?) 호출할 때는 '()' 생략


// document.write("<h1>function Prompt</h1>");
// function fun2(){
//     var x = document.getElementsByClassName("calc-x");
//     var y = document.getElementsByClassName("calc-y");
//     var result = document.getElementsByClassName("result");

//     var sum = Number(x[0].value) + Number(y[0].value);

//     // console.log(sum);
//     result[0].value = sum;
// } 


// function fun(){
//     var x = prompt('덧셈 첫번째 숫자를 입력하세요');
//     var y = prompt('덧셈 두번째 숫자를 입력하세요');
//         parseInt(x);
//         parseInt(y);
//     var result = ducument.getElementById('result');
//     // result.textContent = parseInt(x) + parseInt(y);

// }








