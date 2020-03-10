var articleJs = document.querySelector('article');
var pJs = document.querySelectorAll('p');

articleJs.onclick = function(){
    var target = event.target;

    for(var i = 0; i < pJs.length; i++){
        pJs[i].style.display = 'none';
        if(target.className == pJs[i].className){
            pJs[i].style.display = 'block'
        }
    }
}