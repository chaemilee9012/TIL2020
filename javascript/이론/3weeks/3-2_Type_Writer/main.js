(function() {


    /*
    var arr = [10, 20, 30];
    var index = 0;

    var loop = function() {
        
        var current = index % arr.length;
        console.log(arr[current]);
        index++;
        
        

    };

    loop();

    */

    // 실습 코드


    
    // var arr = [10, 20, 30];
    // var index = 0;
    // var loop = function () {
    //     var current = index % arr.length;
    //     console.log(arr[current]);
    //     index++;

    //     setTimeout(function() {
    //         return loop();
    //     }, 2000);
    // }

    // loop();
    


        function TypeWriter(txtElement, words, wait) {
    
        this.txtElement = txtElement;
        this.words = words;
        this.wait = parseInt(wait, 10); // parseInt : 문자열타입을 숫자(정수)데이터타입으로 변환, 2번째 아규먼트는 10을 넣어 10진수로 한다.


        this.txt = "";
        this.wordIndex = 0;
        this.isDeleting = false;
        
        this.type();
    
    }

        TypeWriter.prototype.type = function() {

            var current = this.wordIndex % this.words.length;
            var fulltxt = this.words[current];

            if(this.isDeleting) {
            
                this.txt = fulltxt.substring(0, this.txt.length - 1);
                
            } else {

                this.txt = fulltxt.substring(0, this.txt.length + 1);

            }

            this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

            var typeSpeed = 300;

            if(this.isDeleting) {

                typeSpeed /= 2;
            
            }

            if(!this.isDeleting && this.txt === fulltxt) {

                typeSpeed = this.wait;
                this.isDeleting = true;

            } else if(this.isDeleting && this.txt === "") {

                this.isDeleting = false;
                this.wordIndex ++;
                typeSpeed = 500;

            }

            var that = this;

            setTimeout(function(){

                return that.type();

            }, typeSpeed);


        };

        var txtElement = document.querySelector('.txt-type');
        var words = ["에이지 오브 울트론", "인피니티 워", "엔드게임"];
        var wait = 3000;

        new TypeWriter(txtElement, words, wait);




    // 실습 코드
    // function TypeWriter(txtElement, words, wait) {
    //
    //     this.txtElement = txtElement;
    //     this.words = words;
    //     this.wait = parseInt(wait, 10);
    //
    //     this.txt = "";
    //     this.wordIndex = 0;
    //     this.isDeleting = false;
    //
    //     this.type();
    //
    // }
    //
    // TypeWriter.prototype.type = function() {
    //
    //
    // };
    //
    // var txtElement = document.querySelector('.txt-type');
    // var words = ["에이지 오브 울트론", "인피니티 워", "엔드게임"];
    // var wait = 3000;
    //
    //
    // new TypeWriter(txtElement, words, wait);












    // 완성본 코드
    // TypeWriter 생성자 함수
    /*
    function TypeWriter(txtElement, words, wait) {

        this.txtElement = txtElement;
        this.words = words;
        this.wait = parseInt(wait, 10);  // 10진수

        this.txt = "";
        this.wordIndex = 0;
        this.isDeleting = false;

        this.type();

    }

    TypeWriter.prototype.type = function() {


        var current = this.wordIndex % this.words.length; // 배열 안 텍스트 좌표
        var fulltxt = this.words[current];                // 배열 안 텍스트 가져오기


        if(this.isDeleting) {

            // substring() : https://www.codingfactory.net/10429
            // 전체글자 기준 뒤에서 한 글자씩 제거
            this.txt = fulltxt.substring(0, this.txt.length - 1);

        } else {
            // 전체 글자 기준 앞에서 한 글자씩 붙이기
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }

        // 글자가 들어갈 HTML 코드
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;




        var typeSpeed = 300;       // 기본 속도값



        if(this.isDeleting) {
            typeSpeed /= 2;        // 글자가 사라지는 속도값
        }



        // 전체 단어가 완성되었다면
        if(!this.isDeleting && this.txt === fulltxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;


       // 단어가 모두 사라졌다면
        } else if(this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }



        var that = this;
        setTimeout(function() { return that.type(); }, typeSpeed);


    };


    var txtElement = document.querySelector('.txt-type');
    var words = ["에이지 오브 울트론", "인피니티 워", "엔드게임"];
    var wait = 3000;

    new TypeWriter(txtElement, words, wait);
    */



})();










