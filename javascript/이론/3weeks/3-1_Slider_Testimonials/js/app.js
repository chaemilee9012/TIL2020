(function () {


    // 클래스 : 생성자 함수
    /*
    function Person(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = function() {

            console.log(this.firstName + " " + this.lastName);

        }
    
    } // 붕어빵 틀

    var kim = new Person("inkweon", "Kim"); // kim은 붕어빵, new 라는 키워도를 사용해야 한다. new부터는 붕어빵을 찍어내는 행위
    var park = new Person("David", "Park");

    kim.fullName();
    park.fullName();

    console.log(kim);
    console.log(park);
    */
    


    // 프로토타입
    /*

    // Person prototype 객체
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    Person.prototype.fullName = function() {
        console.log(this.firstName + " " + this.lastName);
    };

    var kim = new Person("inkweon", "Kim");
    var park = new Person("David", "Park");

    kim.fullName();
    park.fullName();

    console.log(kim);
    console.log(park);
    */


    // _proto_ = 조상
    
    /*
    var arr = new Array(1);
    console.dir(arr);

    var str = new String("K"); // 데이터 타입이 객체(오브젝트)로 생성된다.
    console.dir(str);

    var func = new Function("x, y", "return x * y");
    console.dir(func);
    */


    /*
    var person = new Object();
    person.name = "Kim In Kweon";
    person.age = 20;
    person.sayHi = function() {

        console.log("Hi");

    };

    console.log(person);

    console.log("Hi")
    console.dir(person);
    console.log(person.__proto__ === Object.prototype); // _ 를 2개넣어서 __proto__ 를 작성해야 한다.
    */



    /*
    var str = new String("K");

    console.log(str.__proto__ === String.prototype);
    console.log(String.prototype.__proto__ === Object.prototype); // 모든 객체의 프로토타입은 조상은 Object이다.
    */



    // constructor = 인스턴스의 생성자 함수가 누구인가를 알려준다.
    

    // var str = new String("Hello World");
    // console.log(str.constructor === String);
    // console.log(String.prototype.constructor === String);

    // console.log(String.__proto___ === Function.prototype);
    // console.log(String.__proto__);




    // 조상 탐색하기
    
    /*
    // Person prototype 객체 생성
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.fullName = function() {
        console.log(this.firstName + " " + this.lastName);
    };

    var kim = new Person("inkweon", "Kim");

    console.log(kim.__proto__ === Person.prototype);
    console.log(Person.prototype.__proto__ === Object.prototype);

    console.log(Person.__proto__ === Function.prototype);
    console.log(Function.prototype.__proto__ === Object.prototype);
    
    console.log(kim.constructor === Person);
    console.log(Person.prototype.constructor === Person);
    */



    // this
    

    

    /*
    var personOne = {
        name: "Kim",
        age: 100,
        getName: function() {

            var that = this;

            function a() {
           
                console.log(that.name);
           
            }

            a();
            
        }
    };

    var personTwo = {
        name: "Park",
        age: 999,
        getName: function() {
            console.log(this.name);
        }
    };

    personOne.getName();
    personTwo.getName();
    */


    // 실습 코드
    var customers = [];
    var index = 0;

    function Customer(name, img, text) {

        this.name = name;
        this.img = img;
        this.text = text;        

    }


    //배열안에 객체를 추가하는 함수
    function createCustomer(name, img, text) {

        var fullImg = `img/customer-${img}.jpg`
        var customer = new Customer(name, fullImg, text);
        customers.push(customer);

    }

    createCustomer("아이언맨", 0, "HHH");
    createCustomer("토르", 1, "HHH");
    createCustomer("헐크", 2, "HHH");


    document.querySelectorAll('.btn').forEach(function(item) {

        item.addEventListener('click', function (e) {

            e.preventDefault();

            // console.log(e.target);
            if (e.target.classList.contains('prevBtn')) {

                // 배열의 가장 앞 데이터에 접근했을 때
                if (index === 0) {
                    index = customers.length;
                }

                index--;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            }

            if (e.target.classList.contains('nextBtn')) {
                // 배열의 가장 끝 데이터에 접근했을 때
                if (index === (customers.length - 1)) {
                    index = -1;
                }

                index++;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            }

        })
    })
















    // 완성본 코드
    /*
    var customers = [];
    var index = 0;


    // 생성자 함수
    function Customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }

    function createCustomer(name, img, text) {
        var fullImg = `img/customer-${img}.jpg`;
        var customer = new Customer(name, fullImg, text);
        customers.push(customer);
    }

    createCustomer("아이언맨", 0, "Hello World");
    createCustomer("토르", 1, "Nice to meet you");
    createCustomer("헐크", 2, "Great!!");
    createCustomer("캡틴 아메리카", 3, "Welcome to Real World");

    console.log(customers);
    console.log(customers[0].name);



    // 2회차 때 작성된 코드
    document.querySelectorAll('.btn').forEach(function(item) {

        item.addEventListener('click', function (e) {

            e.preventDefault();

            // console.log(e.target);
            if (e.target.classList.contains('prevBtn')) {

                // 배열의 가장 앞 데이터에 접근했을 때
                if (index === 0) {
                    index = customers.length;
                }

                index--;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            }

            if (e.target.classList.contains('nextBtn')) {
                // 배열의 가장 끝 데이터에 접근했을 때
                if (index === (customers.length - 1)) {
                    index = -1;
                }

                index++;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            }

        })
    })
     */


})();