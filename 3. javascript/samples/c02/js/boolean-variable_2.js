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


//false 일때 false
//true가 아닐 때 false로 바꿔라

function on(){
    elStock.className = shipping;
    if(elStock.className == false){
        elStock.className = inStock
    }
    console.log(elStock)
}
elStock.addEventListener("click", on);




function off(){
    elShip.className = inStock;
}
elShip.addEventListener("click", off);

var hide = document.getElementById('content');
hide.className = 'active';

// setInterval(function(){
//     hide.className = 'active'
// }, 1000)
