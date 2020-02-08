(function() {




    // TagName, Id, ClassName
    
    /*
    var header = document.getElementsByTagName("header"); // s가 붙으면 배열로 불러온다.
    var serviceSection = document.getElementById("services");
    var serviceSectionContainer = document.getElementsByClassName("container");

    console.log(header);
    console.log(serviceSection);
    console.log(serviceSectionContainer);
    */







    // querySelector(), querySelectorAll()
    
    // var header = document.querySelector("header");
    // var serviceSection = document.querySelector("#services");
    // var serviceSectionContainer = document.querySelector(".container");

    // console.log(header);
    // console.log(serviceSection);
    // console.log(serviceSectionContainer);


    // var serviceSectionContainerOne = document.querySelector("#services .container");
    // var serviceSectionContainerTwo = document.querySelectorAll(".container");

    // console.log(serviceSectionContainerOne);
    // console.log(serviceSectionContainerTwo);
    






    // querySelectorAll() 응용
    /*
    var serviceSectionContainer = document.querySelectorAll(".container");
    for(var i = 0; i < serviceSectionContainer.length; i++){
        console.log(serviceSectionContainer[i]);
    }
    */
   // 이미지 슬라이드시 사용





    // innerHTML, outerHTML
    
    // var header = document.querySelector(".masthead");

    // console.log(header.innerHTML); // header를 제외해서 불러온다.
    // console.log(header.outerHTML); // header를 포함해서 불러온다.

    // console.log(typeof header.innerHTML);
    // console.log(typeof header.outerHTML);
    





    // textContent
    
    // var introHeading = document.querySelector(".intro-heading ");
    // console.log(introHeading.textContent);
    // introHeading.textContent = "Hello World";


    // var introHeading = document.querySelector(".intro-heading ");
    // introHeading.textContent = "<em>Hello</em> World"; // <em>도 같이 출력한다. 태그를 인식하지 않는다.
    // introHeading.innerHTML = "<em>Hello</em> World"; // <em>을 태그로 인식한다.

    





    // innerText
    

    // var introHeading = document.querySelector(".intro-heading ");
    // console.log(introHeading.innerText);



    // var introHeading = document.querySelector(".intro-heading ");
    // console.log(introHeading.innerText); // CSS가 적용된 상태로 결과값을 출력한다.
    // console.log(introHeading.textContent); // HTML에 작성된 상태로 결과값을 출력한다.









    // createElement()
    
    // var h3Test = document.createElement("h3");
    
    // // 태그 안에 콘텐츠 작성
    // h3Test.textContent = "Hello World";
    // console.log(h3Test);
    







    // appendChild()
    

    // var h3Test = document.createElement("h3");
    // h3Test.textContent = "Hello World";

    // var introText = document.querySelector(".intro-text");
    // introText.appendChild(h3Test); // 항상 마지막 자식으로 들어간다.


    // appendChild() 주의점
    // var introLeadIn = document.querySelector(".intro-lead-in");
    // var introHeading = document.querySelector(".intro-heading");
    // var introBtn = document.querySelector(".intro-text .btn");
    
    // var h3Txt = document.createElement("h3");
    // h3Txt.textContent = "?!?!?!";
    
    // introLeadIn.appendChild(h3Txt);
    // introHeading.appendChild(h3Txt);
    // introBtn.appendChild(h3Txt); // 마지막 형제에게만 자식이 생성된다.

    







    // insertAdjacentHTML
    

    // var introHeading = document.querySelector(".intro-heading");
    // var txt = '<h2>Skydiving is fun!</h2>';

    // introHeading.insertAdjacentHTML('afterbegin', txt); //(데이터를 삽입할 지점, 무엇을) 넣을것인가

    








    // 콘텐츠를 제거하는 메서드
    

    // removeChild()
    // var introText = document.querySelector(".intro-text");
    // var introHeading = document.querySelector(".intro-heading");

    // introText.removeChild(introHeading);
    // // introText.parentElement.removeChild(introText);

    // remove()
    // introText.remove();

    






    // firstElementChild
    

        // var introText = document.querySelector(".intro-text");
        // console.log(introText.firstElementChild); // Element는 HTML을 의미한다.

        
        

    






    // Class 접근 방법
    


        // className
        // var introHeading = document.querySelector(".intro-heading");
        // var introheadingclass = introHeading.className;
        // const arrayOfClasses = introheadingclass.split(' '); // ' ' << 공백을 기준으로 쪼개어 배열형태로 담는다.

        // // console.log(introheadingclass);
        // console.log(arrayOfClasses);



        // var introHeading = document.querySelector(".intro-heading");
        // introHeading.className = "test"; // 기존 Class가 없을 때 사용





        // classList
        // var introHeading = document.querySelector(".intro-heading");
        // var introheadingclass = introHeading.classList;
        
        // console.log(introheadingclass); // Class가 입력된 순서로 배열로 나타낸다.





        // add(), remove(), toggle(), contains()
        // var introHeading = document.querySelector(".intro-heading");
        // var introheadingclass = introHeading.classList;
        
        // introheadingclass.add("test");                               // 클래스 추가
        // introheadingclass.remove("text-uppercase");                  // 클래스 삭제
        // introheadingclass.toggle("test");                            // 클래스 추가 및 삭제
        // console.log(introheadingclass.contains("intro-heading"));    // 클래스 확인



        var introHeading = document.querySelector(".intro-heading");
        
        // introHeading.style.color = "red";
        // introHeading.style.backgroundColor = "yellow";
        
        // introHeading.setAttribute("id", "heading-test"); // id속성값 안에 heading-test를 넣는다.

        


        
    









        // Event


        // addEventListener
        var introHeading = document.querySelector(".intro-heading");
        
        // introHeading.addEventListener('click', function () {
        //     console.log('Click!!!'); // (~할 때 ~해라) 콜백 함수
        // });

        // introHeading.removeEventListener('click', function() {
        //     console.log('Click');
        // })




        // // removeEventListener
        // var introHeading = document.querySelector(".intro-heading");
        
        // function clickFunc() { 
            
        //     console.log('Click');
        // }
        
        // introHeading.addEventListener('click', clickFunc);
        // introHeading.removeEventListener('click', clickFunc);




        // var introHeading = document.querySelector(".intro-heading");
        // introHeading.addEventListener('click', function clickFunc() {
        //     console.log('Click');
        // });
        
        // introHeading.removeEventListener('click', function clickFunc() {
        //     console.log('Click');
        // }); // 함수명은 같지만 들어가있는 주소가 다르기 때문에 removeEvent가 작동하지 않는다.






        // preventDefault()
        // var links = document.querySelectorAll('.navbar-collapse a');
        // var serviceBtn = links[0];
        // console.log(serviceBtn);

        // serviceBtn.addEventListener("click", function(e) {
        //     e.preventDefault();
        //     console.log("Hello World");
        // });


     








})();