// 즉시실행함수
(function () {

    /*
    var appleBox;
    appleBox = "Apple";
    console.log(appleBox);

    var bananaBox = "banana";

    var a = "a",
        b = "b";
    */

    /*
    var str1 = "she's girl";
    var str2 = 'she\'s girl';

    console.log(str1);
    console.log(str2);
    */

    /*
    var num1 = "10";
    var num2 = "3.14";

    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 % num2);

    console.log(typeof num1);
    */

    // var a = 10;

    // // console.log(--a);
    // // console.log(a);

    // // a = a + 20;
    // a += 20;
    // console.log(a);

    // var a = 10,
    //     b = 20,
    //     c = 30;
    
    // console.log(a < b);

    // console.log(a === b && b < c);
    // console.log(a === b || b < c);

    // var str10 = "10";
    // var num10 = 10;

    // console.log(str10 == num10);
    // console.log(str10 === num10);

    // var u;
    // var n = null;

    // console.log(a);
    // console.log(n);

    // console.log(typeof null);
    // console.log(typeof undefined);

    // console.log(null == undefined);
    // console.log(null === undefined);

    // console.log(!!u);
    // console.log(!!n);

    // console.log(1 + u);
    // console.log(1 + n);

    // function sum(a, b){
    //     var result = a + b;
    //     console.log(result);
    // }   // 함수를 선언 sum은 함수명, a와 b는 Parameter

    // sum(10, 20); // 함수를 호출 10과 20은 Argument

    // function area(width, height){
    //     var result = width * height;
    //     console.log(result);
    //     return result;
    // }

    // var a = area(10, 20);   // 200

    // // b : area
    // // test : 높이
    
    // function t(b, test) {
    //     console.log(b * test);
    // }

    // t(a, 10);

    // function warning(a){
    //     console.log("Hello World");
    //     return a;   // return문은 함수의 끝이다.
    //     console.log("Hello World");
    // }
    // warning(10);

    // var num = [10, 20, 30];

    // console.log(num);
    // console.log(num[0]);

    // num[0] = 1000;
    // console.log(num);

    // var numArr = [
    //     [10, 20],
    //     [30, 40],
    //     [50, 60]
    // ];

    // console.log(numArr[1][1]); // 배열안에 배열을 선택해서 호출하기

    // var student = {
    //     name: "Jang",
    //     age: 20,
    //     country: "korea",    // key와 value, 합치면 property
    //     sum: function(){
    //         console.log("Hello");
    //     }   // 객체안에 있는 함수는 Method
    // };

    // console.log(student["name"]);
    // console.log(student.age);
    // student.age = 200;

    // student.sum();
    // console.log();

    // var str1 = "Hello World",
    //     str2 = str1;

    //     console.log(str1);
    //     console.log(str2);

    // str1 = "Nice";

    // console.log(str1);
    // console.log(str2); // 원시타입의 특징

    // var obj1 = {
    //     name: "Jang"
    // };
    // var obj2 = obj1;

    // console.log(obj1);
    // console.log(obj2);

    // obj1.name = "Park"

    // console.log(obj1);
    // console.log(obj2); // 참조타입의 특징, 참조타입의 복사본을 수정하는 것은 위험
                        // (원본까지 변경되기 때문)

    // var obj3 = { age = 100};
    // var obj4 = { age = 100};

    // console.log(obj3 === obj4); // 각각 참조 타입이 할당되기 때문에 false가 나온다.




    var colors = ['yellow', 'green', 'pink', '#DC143C', 'rgba(123, 123, 123, 0.5)'];

    var screen = document.getElementById("screen");
    // var mouse = document.getElementsByClassName("mouse");
    var mouse = document.querySelector(".mouse"); // 가장 첫번째 영역만 가져온다.

    mouse.addEventListener("click", function(){

        // console.log(colors.length);
        var random = Math.floor(Math.random() * colors.length); // floor는 숫자를 내림하여 내온다.
        // console.log(colors[random]);
        screen.style.background = colors[random];

    }); // 이러한 함수의 형식을 콜백함수라고 한다.

    









    console.log(screen);
    console.log(mouse);



    // 완성본 코드
    /*
    var colors = ['yellow', 'green', 'pink', '#DC143C', 'rgba(123, 123, 123, 0.5)'];

    var screen = document.getElementById('screen');
    var mouse = document.getElementById('mouse');

    mouse.addEventListener('click', function() {

        var random = Math.floor(Math.random() * colors.length);
        screen.style.background = colors[random];

    });
    */


})();



















