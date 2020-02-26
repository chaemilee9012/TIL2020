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


var colors; 
colors = ['red', 'green', 'blue'];

var el = document.getElementById('colors');
el.textContent = colors[0];

var clr = '';
for(var i in colors){
    // clr += "<span style=color:" + colors[i] + ">";
    // clr += colors[i] + " ";
    // clr += "</span>";

    clr += "<br>" + "<span>" + colors[i] + "</span>";
}

// el.textContent = clr;

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

for(var i in colors){        
    // spanJs[i].className = colors[i];
    // spanJs[i].classList.add('white'); //클래스 추가할 때

    // spanJs[i].classList.add(colors[i], "white");

    spanJs[i].classList.add(colors[i]);
}
spanJs[0].classList.add('white');

 
for(var i in colors){        
    if(spanJs[i].classList.contains("white")){
    // white를 찾아라 → white가 없으면 white클래스 추가
    //classList.contains(""): ""값 가지고 있으면 true, 없으면 false로 값 반환
        console.log("true");
    } else{
        spanJs[i].classList.add("white");
        console.log("false")
    }
}

// for(var i in colors){
//     if(!spanJs[i].classList.contains("white")){ // white가 아닌 값을 찾아라
//         spanJs[i].classList.add("white");
//         console.log("true");
//     } else{
//         console.log("false")
//     }
// }
