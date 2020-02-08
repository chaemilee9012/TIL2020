(function () {


    // 실습 코드
    var customers = [
        {
            name: "아이언맨",
            img: "img/customer-0.jpg",
            text: "아이언맨은 미국 만화 마블 코믹스에 등장하는 슈퍼히어로이다. 스탠 리, 래리 리에버가 줄거리를 담당하고 돈 헤크와 잭 커비가 그림을 맡았다."
        },
        {
            name: "토르",
            img: "img/customer-1.jpg",
            text: "토르 오딘슨은 마블 코믹스의 슈퍼히어로이다. 북유럽 신화에서 동명의 신 토르를 기반으로 하고 있다. 토르 이름 뒤에 붙은 오딘슨은 오딘의 아들이라는 뜻이다."
        },
        {
            name: "캡틴 아메리카",
            img: "img/customer-2.jpg",
            text: "캡틴 아메리카의 만화책은 2007년까지 75개국에서 약 2억 1천만 부가 팔렸다. 거의 모든 이 캐릭터의 출판본에서는 캡틴 아메리카가 미국의 2차 세계대전 중 노력의 일환으로 진행된 실험용 혈청을 맞고 완전한 인간의 정점으로 강화된 약한 젊은이 스티브 로저스(Steve Rogers)의 분신으로 등장한다."
        },
        {
            name: "스파이더맨",
            img: "img/customer-3.jpg",
            text: "그의 기원은 방사능에 쐬인 거미로부터 물린 이후 거미와 관련된 능력을 얻은 것인데, 이는 표면에 매달리는 것, 손목에 탑재한 장치로부터 거미줄을 쏘는 것, 그리고 스파이더 센스를 통해 위험을 감지하는 것 등이 있다."
        }
    ];
    var index = 0;

    document.querySelectorAll('.btn').forEach(function(item){
        
        item.addEventListener("click", function(e) {
            
            e.preventDefault();
            console.log(e.target);

            if (e.target.classList.contains("prevBtn")) {

                if(index === 0) {
                    index = customers.length;
                    
                }
                
                index--;

                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            };

            if(e.target.classList.contains("nextBtn")) {

                if(index === customers.length - 1) {
                    index = -1;
                    
                }
                
                index++;

                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;

            };

        })

    });

    // contains true or false 만 불러온다.

    // 주석으로 코드를 먼저 한글로 타이핑 한다.

    













    // 완성본 코드
    /*
    var customers = [
        {
            name: "아이언맨",
            img: "img/customer-0.jpg",
            text: "아이언맨은 미국 만화 마블 코믹스에 등장하는 슈퍼히어로이다. 스탠 리, 래리 리에버가 줄거리를 담당하고 돈 헤크와 잭 커비가 그림을 맡았다."
        },
        {
            name: "토르",
            img: "img/customer-1.jpg",
            text: "토르 오딘슨은 마블 코믹스의 슈퍼히어로이다. 북유럽 신화에서 동명의 신 토르를 기반으로 하고 있다. 토르 이름 뒤에 붙은 오딘슨은 오딘의 아들이라는 뜻이다."
        },
        {
            name: "캡틴 아메리카",
            img: "img/customer-2.jpg",
            text: "캡틴 아메리카의 만화책은 2007년까지 75개국에서 약 2억 1천만 부가 팔렸다. 거의 모든 이 캐릭터의 출판본에서는 캡틴 아메리카가 미국의 2차 세계대전 중 노력의 일환으로 진행된 실험용 혈청을 맞고 완전한 인간의 정점으로 강화된 약한 젊은이 스티브 로저스(Steve Rogers)의 분신으로 등장한다."
        },
        {
            name: "스파이더맨",
            img: "img/customer-3.jpg",
            text: "그의 기원은 방사능에 쐬인 거미로부터 물린 이후 거미와 관련된 능력을 얻은 것인데, 이는 표면에 매달리는 것, 손목에 탑재한 장치로부터 거미줄을 쏘는 것, 그리고 스파이더 센스를 통해 위험을 감지하는 것 등이 있다."
        }
    ];
    var index = 0;

    document.querySelectorAll('.btn').forEach(function (item) {
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