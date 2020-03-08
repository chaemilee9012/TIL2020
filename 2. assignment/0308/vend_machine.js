var resultBox = document.querySelector('.result');
// var resultContents = document.querySelectorAll('.result p');
var resultContents = document.getElementsByTagName('p');
// console.log(resultContents);

var topHeight = 0;

// var inputJs = document.querySelectorAll('.status input');
var inputJs = document.getElementsByTagName('input');
// console.log(inputJs);


function resultHeight(){
    for(var i = 0; i < resultContents.length; i++){
        if(topHeight < resultContents[i].offsetHeight){
            topHeight = resultContents[i].offsetHeight;
        }
    }
    
}
resultHeight();


// inputJs[0].onclick = function(){
//     resultContents[0].style.display = 'block';
//     resultContents[1].style.display = 'none';
//     resultContents[2].style.display = 'none';
//     resultContents[3].style.display = 'none';
//     resultContents[4].style.display = 'none';
//     resultContents[5].style.display = 'none';
// };
// inputJs[1].onclick = function(){
//     resultContents[0].style.display = 'none';
//     resultContents[1].style.display = 'block';
//     resultContents[2].style.display = 'none';
//     resultContents[3].style.display = 'none';
//     resultContents[4].style.display = 'none';
//     resultContents[5].style.display = 'none';
// };
// inputJs[2].onclick = function(){
//     resultContents[0].style.display = 'none';
//     resultContents[1].style.display = 'none';
//     resultContents[2].style.display = 'block';
//     resultContents[3].style.display = 'none';
//     resultContents[4].style.display = 'none';
//     resultContents[5].style.display = 'none';
// };
// inputJs[3].onclick = function(){
//     resultContents[0].style.display = 'none';
//     resultContents[1].style.display = 'none';
//     resultContents[2].style.display = 'none';
//     resultContents[3].style.display = 'block';
//     resultContents[4].style.display = 'none';
//     resultContents[5].style.display = 'none';
// }
// inputJs[4].onclick = function(){
//     resultContents[0].style.display = 'none';
//     resultContents[1].style.display = 'none';
//     resultContents[2].style.display = 'none';
//     resultContents[3].style.display = 'none';
//     resultContents[4].style.display = 'block';
//     resultContents[5].style.display = 'none';
// };
// inputJs[5].onclick = function(){
//     resultContents[0].style.display = 'none';
//     resultContents[1].style.display = 'none';
//     resultContents[2].style.display = 'none';
//     resultContents[3].style.display = 'none';
//     resultContents[4].style.display = 'none';
//     resultContents[5].style.display = 'block';
// };

// this.onclick = function(){
//     switch(name){
//         case '0':
//             resultContents[0].style.display = 'block';
//             break;
//         case '1':
//             resultContents[1].style.display = 'block';
//             break;
//         case '2':
//             resultContents[2].style.display = 'block';
//             break;
//         case '3':
//             resultContents[3].style.display = 'block';
//             break;
//         case '4':
//             resultContents[4].style.display = 'block';
//             break;
//         case '5':
//             resultContents[5].style.display = 'block';
//             break;
//     }
// }

// function show(){
//     for(var i = 0; i < inputJs[i].length; i++){
//         if(inputJs[i].className == resultContents[i].className){
//             resultContents[i].style.display = 'block';
//             console.log(resultContents[i].style);
//         }
//     }
// }

// for(var i = 0; i < inputJs[i].length; i++){
//     inputJs[i].addEventListener = ('click', function(){
//         for(var j = 0; j < inputJs[j].length; j++){
//             if(inputJs[i].className == resultContents[i].className){
//                 resultContents[j].style.display = 'block';
//                 console.log(resultContents[j].style);
//             } else{
//                 resultContents[j].style.display = 'none';
//             }
//         }
//     })
// }

// function show(){
//     for(var i = 0; i < inputJs[i].length; i++){
//         if(inputJs[i].className == resultContents[i].className){
//             resultContents[i].style.display = 'block';
//         }
//     }
// }

// for(var i = 0; i < inputJs[i].length; i++){
//     inputJs[i].addEventListener('click', show);
// }

// for(var i = 0; i < inputJs[i].length; i++){
//     // inputJs[i].style.display = 'none';
//     inputJs[i].onclick = function(){
//         if(inputJs[i].className == resultContents[i].className){
//             resultContents[i].style.display = 'block';
//         }
//     }
// }

// for(var i = 0; i < inputJs[i].length; i++){
//     inputJs[i].onclick = function(){
//         if(inputJs[i].className == resultContents[i].className){
//             resultContents[i].style.display = 'block';
//             continue;
//         } else{
//             resultContents[i].style.display = 'none';
//         }
//     }
// }