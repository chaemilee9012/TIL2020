// Create variables and assign their values
var inStock;
var shipping;
inStock = true;
shipping = false;


var tit = document.getElementById('tit');
tit.textContent = 'ClassName';


// Get the element that has an id of stock
var elStock = document.getElementById('stock');
// Set class name with value of inStock variable
elStock.className = inStock;

// Get the element that has an id of shipping
var elShip = document.getElementById('shipping');
// Set class name with value of shipping variable
elShip.className = shipping;


// setInterval(function(){
//     hide.className = 'active'
// }, 1000)


// 클릭할 때 아이콘 바꾸기
// function on(){
//     elStock.className = shipping;
//     console.log(elStock.className);
// }
// elStock.addEventListener("click", on);

// function off(){
//     elShip.className = inStock;
//     console.log(elShip);
// }
// elShip.addEventListener("click", off);


// 클릭할 때마다 아이콘 바꾸기 *true가 아닐 때 false로 바꿔라

var yes  = document.getElementsById("stock");
var no = document.getElementById("shipping");

if(yes.className == true){
    // X로 이미지를 바꾼다
}

// function on(){
//     elStock.className = shipping;
//     console.log(elStock.className);
// }
// elStock.addEventListener("click", on);


// function onReverse(){
//     if(elStock.className != true){
//         elStock.classNme = inStock;
//         console.log(elStock.classNme);
//     }
// }
// elStock.addEventListener("click", onReverse);


// function off(){
//     elShip.className = inStock;
//     console.log(elShip);
// }
// elShip.addEventListener("click", off);