var btnPlus = document.getElementById("bt1");
var btnMinus = document.getElementById("bt2");
var totalNumber = document.getElementById("number");
var totalPrice = document.getElementById("money")
// var price = document.getElementById("money");
var i = 0;


//bt1 클릭하면 +1장
btnPlus.onclick = function(){
    totalNumber.innerHTML = ++i;
    console.log(i);
    totalPrice.innerHTML = i * 9000;

    if(i >= 10){
        console.log(i);
        i = 10;
        totalNumber.innerHTML = i;
        totalPrice.innerHTML = i * 9000;
    }
}


//bt1 클릭하면 -1장
btnMinus.onclick = function(){
    totalNumber.innerHTML = --i;
    console.log(i);
    totalPrice.innerHTML = i * 9000;

    if(i < 0){
        i = 0;
        totalNumber.innerHTML = i;
        totalPrice.innerHTML = i * 9000;
    }
}