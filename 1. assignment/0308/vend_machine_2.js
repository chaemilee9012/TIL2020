var articleJs = document.querySelector('article');

articleJs.onclick = function(){
    var target = event.target;
    // console.log(target);

    if(target.type == 'button'){
        // console.log('ok');
        var pJs = articleJs.querySelectorAll('p');
    }

}