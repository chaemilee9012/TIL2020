// Create an array and assign it values.

// colors = ['white', 'black', 'custom'];


// Show the first item from the array.
// var el = document.getElementById('colors');
// el.textContent = colors[0];

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 7, but note the security issues on p228-231
el.textContent = colors[0];
*/

// 0226---------------------------------------------------------------------
var colors; 
colors = ['red', 'black', 'blue'];

var el = document.getElementById('colors');
el.textContent = colors[0];

var clr = '';
for(var i in colors){
    clr += "<span style=color:" + colors[i] + ">";
    clr += colors[i] + " ";
    clr += "</span>";
};

// el.textContent = clr;
// console.log(clr);

el.innerHTML = clr;
// console.log(clr);