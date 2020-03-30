var newTxt = document.getElementById("led");
var txtValue = document.getElementById("inputText");
var colorValue = document.getElementById("inputColor");



function txtContents(){
    newTxt.innerHTML = document.getElementById("inputText").value;
    console.log("글자");
}

function txtColor(){
    newTxt.style.color = document.getElementById("inputColor").value;
    console.log("색상");
}

txtValue.addEventListener("input", txtContents);
colorValue.addEventListener("input", txtColor);


//입력한다.
//입력받은 값을 대입한다.
//대입한 값을 출력한다.