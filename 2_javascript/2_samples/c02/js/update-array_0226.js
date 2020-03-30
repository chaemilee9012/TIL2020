var colors = ['white', 'black', 'custom'];
var colors2 = [];
var font = ["dotum", "gulim"];


//배열 특정 위치에 원하는 값 추가
colors[2] = 'beige';
colors[3] = "beige2";

colors.push("beige3"); //배열 끝에 원하는 값 추가

colors.shift(); //첫번째 값 제거

colors.pop(); //마지막 값 제거

colors = colors.concat("aa", "bb"); //배열 합치기

colors = colors.concat(font); //배열 합치기

colors = colors.reverse();



console.log(colors);
colors2 = colors.slice(-5) // 배열의 일부분 반환 → 선택한 부분의 나머지 값 얻고 싶을 때
//ex) (0, 4): 0 ~ 4앞(3)까지
//ex) (0, -4): 0 ~ -4앞(-3)까지
//ex) (4): 4 ~ 끝까지
//ex) (-4): -4 ~ -1까지
// console.log(colors2);


// slice: 배열 원소 값에 영향 X → 새로운 변수에 담아야 사용 가능
var slice = [10, 20, 30, 40, 50];
    slice.slice(0, 2);
    //slice(start, end)
console.log("slice: " + slice); //10, 20, 30, 40, 50
//     slice = slice.slice(0, 2);
// console.log("slice: " + slice); //10, 20


// splice: 배열 원소 값이 splice한 결과값으로 변경
var splice = [10, 20, 30, 40, 50];
    splice.splice(4);
    //splice(index, length)
console.log("splice: " + splice); //30, 40, 50


// colors = colors.join("/"); //배열값 사이에 원하는 문자 삽입 → type: 문자로 변경



// console.log(colors);
// console.log(typeof colors);

