var body = {
    setColor: function (color){
        document.querySelector('body').style.color = color;
    }, 
    backColor: function (color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
var link = {
    setColor: function (color){
        var aList = document.querySelectorAll('a');
        var i = 0;

        while(i < aList.length){
            aList[i].style.color = color;
            i = i + 1;
        }
    }
}

function nightDay(self){

    if(self.value == 'night'){
        body.backColor('black');
        body.setColor('white');
        self.value = 'day';
        link.setColor('powderblue');
    } else{
        body.backColor('white');
        body.setColor('black');
        self.value = 'night';
        link.setColor('blue');
    }
}