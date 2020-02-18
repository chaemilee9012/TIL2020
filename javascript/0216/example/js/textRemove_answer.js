let i = 0;
let j = 0;
const textArray = ["HTML", "CSS", "Javascript"],
    speed = 100,
    target = document.getElementById("type");

type();

//한글자씩 추출해서 html에 출력 charAt
function type(){
    console.log("type start");
    // for(i = 0; i <= textArray[j].length-1; i++)
    if(i <= textArray[j].length-1){
        console.log(textArray[j].charAt(i));
        target.innerHTML += textArray[j].charAt(i);
        i++;
        setTimeout(type, 800);
    }
    else {
        remove();
    }
}
// console.log(textArray[i].charAt(i))

//한글자씩 html에서 제거 slice
function remove(){
    console.log("remove start : " + i);
    // if(i > textArray[j].length-1){
    if(i == 0){
        console.log('remove true');
        textNum();
    }
    else {
        i--;
        console.log(textArray[j].slice(0,i));
        target.innerHTML = textArray[j].slice(0,i);
        setTimeout(remove, 800);
    }
}
//다음 문자열로 넘어감
function textNum(){
    console.log('text start : ' + j);
    if(j == textArray.length-1){
        console.log('j--');
        j = 0;
    }else{
        console.log('j++-');
        j++;
    }
    type();
}