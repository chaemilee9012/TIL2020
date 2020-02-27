//랜덤수
var ran = Math.random();
console.log(ran);




//출석체크
var sCheck = document.querySelector(".study-check");
var input = sCheck.querySelectorAll('div input');
var tbody = sCheck.querySelector('tbody');
var sNum = tbody.querySelectorAll('tr').length,
    sCount=null;

input[1].onclick = studyCheck;
function studyCheck(){
    var name = input[0].value;
    if(name == ""){
         alert('수강생 이름을 입력하세요.')   
    }
    else{
        sNum++;
        sNum <= 9 ? sCount = '0'+sNum : sCount=sNum;
        tbody.innerHTML += "<tr><td>"+sCount+"</td><td>"+name+"</td></tr>";
    }
}










//ex02-다중 함수 결과물 얻기

var result2 = document.querySelectorAll(".result input");
var number = document.querySelectorAll(".number input");

for(var i=0;i<number.length;i++){
    number[i].onclick = function(){
        if(result2[0].value == 0){
            result2[0].value = '';
        }
        result2[0].value += this.value;
        //console.log(result2[0].value);
    }
}
result2[1].onclick = function(){
    var total = eval(result2[0].value);
    result2[0].value = total;
}
result2[2].onclick = function(){
    result2[0].value = 0;
}









//ex01
document.write("<h1>function 입력값 연산</h1>");
    
var result = document.getElementsByClassName('result');
    
function fun2(){
    var x = document.getElementsByClassName('calc-x');
    var y = document.getElementsByClassName('calc-y');
   
    var sum = Number(x[0].value) + Number(y[0].value);
    
    //console.log(sum);
    result[0].value = sum;
}
result[0].onclick = fun2;
    
    
function fun(){
    var x = prompt('덧셈 첫번째 숫자를 입력하세요');
    var y = prompt('덧셈 두번째 숫자를 입력하세요');
        
    var result = document.getElementById('result');
    //result.textContent = x+y;
    result.textContent = parseInt(x)+parseInt(y);
}
    
    