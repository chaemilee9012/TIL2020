var saying = 'Home sweet home ';
// 0309 ---------------------------------------------------------------------------------------------
var strJS = document.querySelector('#str');
var arrSaying = [];

for(var i = 0; i < saying.length; i++){
    var char = saying.charAt(i);
    arrSaying.push(char);
}
console.log(arrSaying);

for(var i in arrSaying){
    strJS.innerHTML += "<span>" + arrSaying[i] + "</span>";
}
// 0309 ---------------------------------------------------------------------------------------------

var msg = '<h2>length</h2><p>' + saying.length + '</p>';

msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';

msg += '<h2>character index: 12</h2><p>' + saying.charAt(12) + '</p>';
console.log(saying[12]); // 배열처럼 처리할 수도 있음

msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>'; // 앞에서 뒤로 검색 index 값은 같음
msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>'; // 뒤에서 앞으로 검색 index 값은 같음

msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>'; // index 이용해서 문자 찾을 때 (시작 index, index 앞까지)

// 0309 ---------------------------------------------------------------------------------------------

// var saying = 'Home sweet home ';
var h = saying.indexOf('h');
var e = saying.lastIndexOf('e') + 1;
console.log(saying.substr(h, e)); // substring == substr


location.href = '#subpage=3'; // location.href: 페이지 url 값 변경
var hash = location.hash; // location.hash: 페이지 url 값 가져올 때
var idxOf = hash.indexOf('=') + 1;
var pNum = hash.substr(idxOf);
// console.log(pNum);

switch(pNum){
    case '0': console.log('main'); break;
    case '1': console.log('company'); break;
    case '2': console.log('service'); break;
    case '3': console.log('notice'); break;
}

// 0309 ---------------------------------------------------------------------------------------------

msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';

var img = document.querySelector('#img img');
var src = img.src;

img.src = src.replace('png', 'jpg');
console.log(src.replace('png', 'jpg'));

var el = document.getElementById('info');
el.innerHTML = msg;



// // Create a variable called saying to hold the string that will be used
// var saying = 'Home sweet home ';

// // Create a variable called msg to hold a message that will be shown on the page
// // Find the length of the string, and put this in the msg variable
// var msg = '<h2>length</h2><p>' + saying.length + '</p>';
// // Convert the string to uppercase and add it to the msg variable
// msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>';
// // Convert the string to lowercase and add it to the msg variable
// msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>';
// // Find the character with an index of 12 in the string and add it to the msg variable
// msg += '<h2>character index: 12</h2><p>' + saying.charAt(12) + '</p>';
// // Find the index number of the first instance of 'ee' in the string and add it to the msg variable
// msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>';
// // Find the index number of the last instance of the 'e' character in the string and add it to the msg variable
// msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>';
// // Find the characters with an index number in the 8-14 range in the string and add it to the msg variable
// msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
// // Find the first instance of 'me' in the string and replace it with a 'w' character and add it to the msg variable
// msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>';

// // Create a variable called el to hold the element whose id attribute has a value of info
// var el = document.getElementById('info');
// // Write the message into that element
// el.innerHTML = msg;