// Create and name the variable.
// Tell the interpreter it is an array.
// Assign values inside the parentheses.
var colors = new Array('white', 
                       'black',
                       'custom');

// Show the first item from the array.
// var el = document.getElementById('colors');
// el.textContent = colors[0];

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 10, but note the security issues on p228-231
el.innerHTML = colors[0];

There was a typo in the first print run in the last line of this example, it has been corrected in this file.
*/


var el = document.getElementById('colors');
        //<span id="colors">We were unable to find your color choice. Please try again...</span>

el.textContent = "";
//el = <span id="colors">We were unable to find your color choice. Please try again...</span>

// el.textContent = colors[0];
// el.textContent = colors[1];
// el.textContent = colors[2];



for(var i in colors){
    el.textContent += colors[i] + " ";
}
// console.log(el);
//el = white black custom

var tagJs = "";

for(var i in colors){
    tagJs += "<a>" + colors[i] + "</a>";
}

el.innerHTML = tagJs;

console.log(tagJs);
// console.log(el);


var newClass = el.getElementsByTagName("a");
// console.log(newClass[0]);
// console.log(newClass[1]);
// console.log(newClass[2]);


for(var i in colors){
    if(newClass[i].textContent != 'black'){
        newClass[i].classList.add(colors[i])
    }
    console.log(newClass[i]);
}