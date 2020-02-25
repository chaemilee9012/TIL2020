var openJs = document.getElementById("open");
var closeJs = document.getElementById("close");
var modalWindow = document.querySelector(".modal-wrapper");

//클릭한다
//addEventListener
//document.getElementById("myBtn").addEventListener("click", displayDate)
//모달 창 display > flex

//클릭한다
//removeEventListener
//document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
//모달 창 display > none


function show(){
    modalWindow.style.display = "flex";
    console.log("show");
}
function hide(){
    modalWindow.style.display = "none";
    console.log("hide");
}


// open.onclick = function(){
//     modalWindow.style.display = "flex";
// }
// close.onclick = function(){
//     modalWindow.style.display = "none";
// }


openJs.addEventListener("click", show);
closeJs.addEventListener("click", hide);



