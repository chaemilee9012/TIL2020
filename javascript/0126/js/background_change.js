(function () {
    var colors = ['yellow', 'green', 'pink', '#dc143c', 'rgba(123,123,123,0.5)'];
    var screen = document.querySelector(".box1");
    var mouse = document.querySelector(".box2");
    
    mouse.addEventListener('click', function(){
        var random=Math.floor(Math.random() * colors.length);
        screen.style.background=colors[random];
    });
    screen.addEventListener('click', function(){
        var random=Math.floor(Math.random() * colors.length);
        mouse.style.background=colors[random];
        
    });
}());
/*(function () {

       var colors = ['yellow', 'green', 'pink', '#DC143C', 'rgba(123, 123, 123, 0.5)'];
       var box1 = document.querySelector(".box1");
       var box2 = document.querySelector(".box2");

       box1.addEventListener('click', function() {
           var random = Math.floor(Math.random() * colors.length);
           box2.style.background = colors[random];
       });
   
       box2.addEventListener('click', function() {
           var random = Math.floor(Math.random() * colors.length);
           box1.style.background = colors[random];
       });
}());*/


