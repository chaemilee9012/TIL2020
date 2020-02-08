(function () {


    // 조건문
    // var a = 20;
    // var b = 40;
    // var c = 60;


    // if 문
    
    // if (a < b) {
    //     console.log("a는 b보다 작다.");
    // };
    


    // if ~ else 문
    
    // if (a > b) {
    //     console.log("a는 b보다 크다.");
    // } else {
    //     console.log("a는 b보다 작다.");
    // };
    


    // else if 문
    
    // if (a > b) {
    //     console.log("a는 b보다 크다.");
    // } else if (b > c) {
    //     console.log("b는 c보다 크다.");
    // } else if (a < c) {
    //     console.log("a는 c보다 작다.");
    // } else if (b < c) {
    //     console.log("b는 c보다 작다.");
    // } else {
    //     console.log("모든 조건을 만족하지 않는다.");
    // }; // 가장 먼저 나온 참만 실행한다.
    
    
    // 중첩 if문
    
    // if(a === b) {
    //     console.log("a와 b는 같다.");
    // } else {
    //     if(a > b) {
    //         console.log("a는 b보다 크다.");
    //     } else {
    //         console.log("a는 b보다 작다.");
    //     }
    // }








    // 삼항 연산자
    
    // var age = 15;

    // if(age >= 18) {
    //     console.log("You are an adult!");
    // } else {
    //     console.log("You are a kid");
    // }


    // var result;
    
    // var age = 15;
    // (age >= 18) ? console.log("You are an adult!") : console.log("You are a kid"); // ?는 참 :는 거짓, 간단한 if문일 때만 사용한다.





    // 전역변수와 지역변수
    
    // var gv = "전역변수";

    // function func() {
    //     var gv = "지역변수";
    //     console.log(gv);
    //     // console.log(lv);
    // }

    // func();

    // console.log(gv);
    // console.log(lv);
    
    // var키워드를 사용하는 것은 함수 바깥쪽에있는 변수와 함수 안쪽에있는 변수를 분리하겠다는 의미. 변수를 선언할 때는 var키워드를 사용하자.

    
    // var gv = "전역변수";

    // if (true) {
    //     var lv = "지역변수??????";
    //     console.log(gv);
    //     console.log(lv);
    // }
    // console.log(gv);
    // console.log(lv);

    // 함수를 기준으로 전역과 지역변수가 나뉘어 진다.
    // var가 아닌 let을 사용하게 되면 {}기준으로 전역과 지역변수가 나뉘어 진다.








    // 스코프
    // 전역변수
    /*
    var gv = "전역 변수";
    function func() {
        console.log(gv);
    } func();
    */
    

    // 지역변수
    /*
    function func() {
        var lv = "지역 스코프";
        console.log(lv);
    }
    func();
    console.log(lv);
    */


    //함수는 서로의 스코프에 접근할 수 없다.
    
    // function funcOne() {
    //     var func1 = "Func One 안에 있는 변수";
    // }
    // function test() {
    //     funcOne();
    //     console.log(func1);
    // }
    // test(); // is not defined 에러 발생.
    






    // 스코프 체인
    
    // var a = 10;

    // function func1() {
    //     var b = 20;

    //     function func2() {
    //         var c = 30;
    //         console.log(a + b + c);
    //     }

    //     func2();
    // }

    // func1(); // 안쪽에서부터 바깥쪽으로 함수를 탐색한다.




    // 렉시컬 스코프
    
    // var name = 'inkwon';

    // function func1() {
    //     console.log(name);
    // }
    // function func2() {
    //     name = 'jun';
    //     func1();
    // }
    // func2(); // var키워드를 사용안했기 때문에 Jun이 출력된다.
    //          // 함수가 만들어 짐과 동시에 name이 jun으로 바뀌게 된다.
    


    
    // var name = 'inkwon';
    // function func1() {
    //     console.log(name);
    // }
    // function func2() {
    //     var name = 'jun';
    //     func1();
    // }
    // func2();
     






    // 변수 호이스팅
    // console.log(a);
    
    // var a;// 변수가 끌어올려지는 상태
    // a = 10; // 변수초기화와 변수 호이스팅과는 상관이없다.
    // var a = 10; // 변수 선언과 초기화를 동시에 하면 호이스팅이 되지 않는다. undefined 상태

    // console.log(a);







    // 함수 호이스팅
    
    // func();
    // function func() {
    //     console.log("Func!");
    // } // 호출 위치와 상관없이 함수가 정상적으로 동작한다.
    


    
    // funcVar();
    // var funcVar = function() {
    //     console.log("Func Var!!");
    // };  // 함수호이스팅이 아닌 변수호이스팅이 동작한다.
    








    // Math 객체
    /*
    // 절대값을 반환
    var num_abs = Math.abs(-3);
    console.log(num_abs);

    // 정수로 올림
    var num_ceil = Math.ceil(0.3);
    console.log(num_ceil);

    // 정수로 내림
    var num_floor = Math.floor(10.9);
    console.log(num_floor);

    // 랜덤한 숫자를 추출
    var num_random = Math.random();
    console.log(num_random);
    */





    // 문자로 작성된 숫자를 숫자 데이터 타입으로 변환하는 법
    /*
    var str1 = "20.6";
    var num1 = parseInt(str1);
    console.log(num1); // 20이 출력된다.


    var str2 = "20.1";
    var num2 = parseFloat(str2);
    console.log(num2); // 20.1이 출력된다.
    */









    // 반복문
    // while 문
    
    // var num = 1;
    // while (num < 10) {
    //     console.log(2 * num);
    //     num++;
    // }
    


    // do ~ while 문
    
    // var i = 1;
    // do {
    //     console.log(i + " ");
    //     i++;
    // } while (i < 10); // 최소 한번은 실행하겠다.
    
    // console.log(i); // i = 10 출력


    // for 문
    
    // for (var i = 0; i < 10; i++) {
    //     console.log(i);
    // }

    // console.log(i); // i = 10이 출력된다.



    // 객체에 적용할 수 있는 반복문
    
    // var student = {
    //     name : "inkweon",
    //     country : "Korea",
    //     age : 31,
    //     skills : ["JavaScript", "HTML", "CSS"],
    //     sum : function(num1, num2) {
    //         return num1 + num2;
    //     }
    // };

    // for (var prop in student) {
    //     console.log(student[prop]);
    // } // 객체반복문 for in.
    





    // 배열에 적용할 수 있는 반복문
    /*
    var array = ['Apple', 'Banana', 'Tomato', 'Melon'];

    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }   // 많은 연습이 필요하다.

    array.forEach(function (element) {
        console.log(element);
    });
    */






    
    var hexValue = document.getElementById('hex-value');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', createHex);

    function createHex() {
        
        var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        var hexColor = '#';

        for (var i = 0; i < 6; i++){
            
            var random = Math.floor(Math.random() * hexValues.length);
            hexColor += hexValues[random];

            console.log(random, hexColor);

        }

        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;

    }
    









    // 완성본 코드
    /*
    var hexValue = document.getElementById('hex-value');
    var btn = document.getElementById('btn');

    btn.addEventListener('click', createHex);

    function createHex() {
        var hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        var hexColor = '#';

        for(var i = 0; i < 6; i++) {
            var random = Math.floor(Math.random() * hexValues.length);
            hexColor += hexValues[random];
        }

        document.body.style.backgroundColor = hexColor;
        hexValue.textContent = hexColor;
    }
    */

})();