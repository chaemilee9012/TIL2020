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
colors = ['red', 'green', 'blue'];

var el = document.getElementById('colors');
el.textContent = colors[0];

var clr = '';
for(var i in colors){
    // clr += "<span style=color:" + colors[i] + ">";
    // clr += colors[i] + " ";
    // clr += "</span>";

    clr += "<span>" + colors[i] + " " + "</span>";
}

// el.textContent = clr;
// console.log(clr);

el.innerHTML = clr;
// console.log(clr);

var spanJs = el.getElementsByTagName("span");
// console.log(spanJs);

// spanJs[0].style.color = colors[0];
// spanJs[1].style.color = colors[1];
// spanJs[2].style.color = colors[2];


// for(var i in colors){ // == for(var i = 0; i < colors.length; i++)
//     spanJs[i].style.color = colors[i];
// }

//<span>에 각각 클래스명 넣기



// console.log(spanJs);