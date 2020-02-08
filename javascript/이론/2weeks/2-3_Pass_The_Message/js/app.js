(function() {

    // 실습 코드
    
    var message_form = document.getElementById('message-form');
    message_form.addEventListener('submit', function(e) {
        
        e.preventDefault(); // e(파라미터)가 가진 기능을 정지시킨다.
        var message = document.getElementById('message').value;
        
        if (message === "") {
            
            var feedback = document.querySelector(".feedback");
            feedback.classList.add("show");
            setTimeout(function() {
                feedback.classList.remove("show");
            }, 2000);

        } else {

            document.querySelector('.message-content').textContent = message;
            message_form.reset(); // 모든 form 태그를 리셋 시킨다.

        }

    });
    
    
    // Enter 기능을 꺼보기(과제). Keycode 검색해보기

    // Input 항목을 여러개 생성하고 다양한 데이터 타입도 넣어보기








    // 완성본 코드
    /*
    var message_form = document.getElementById('message-form');

    message_form.addEventListener('submit', function(e) {

        e.preventDefault();

        var message = document.getElementById('message').value;

        if(message === "") {

            var feedback = document.querySelector('.feedback');

            feedback.classList.add('show');
            setTimeout(function() {
                feedback.classList.remove('show');
            }, 2000)

        } else {

            document.querySelector('.message-content').textContent = message;
            message_form.reset();

        }

    })
    */

})();