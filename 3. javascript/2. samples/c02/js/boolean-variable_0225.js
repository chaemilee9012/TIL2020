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
//     console.log(elShip.className);
// }
// elShip.addEventListener("click", off);


// 클릭할 때마다 아이콘 바꾸기 *true가 아닐 때 클릭하면 false로 바꿔라
function stChange(){
    if(this.className == 'true'){
        this.className = 'false';
    } else{
        this.className = 'true';
    }
    // if(elStock.className == 'true'){
    //     elStock.className = 'false';
    // } else{
    //     elStock.className = 'true';
    // }
}
elStock.addEventListener('click', stChange)

function shChange(){
    if(elShip.className == 'false'){
        elShip.className = 'true';
    } else{
        elShip.className = 'false';
    }
}
elShip.addEventListener('click', shChange)