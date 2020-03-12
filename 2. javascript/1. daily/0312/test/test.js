window.addEventListener('DOMContentLoaded', function() {
    var gradeJs = document.querySelector('.grades');
    var inputJs = gradeJs.querySelectorAll('input');
    var resultBtn = gradeJs.querySelector('.result');
    var cancelBtn = gradeJs.querySelector('.cancel');

    var resultTable = document.querySelector('.result_t')
    var tdJs = resultTable.querySelectorAll('td');

    var sum = 0;
    resultBtn.addEventListener('click', function() {
        // input value 없으면 함수 실행 X ----------------------------
        for(var i = 0; i < inputJs.length; i++) {
            if(inputJs[i].value == '') {
                return;
            }
        }
        
        // 합계, 평균 계산 ------------------------------------------
        for(var i = 1; i < inputJs.length; i++){
            sum += parseInt(inputJs[i].value);
        }

        tdJs[0].textContent = inputJs[0].value;
        tdJs[1].textContent = sum;
        tdJs[2].textContent = (sum / (inputJs.length-1));

        // 판정 ------------------------------------------------------
        if(tdJs[2].textContent < 60) {
            tdJs[3].textContent = '불합격';
        } else {
            tdJs[3].textContent = '합격';
        }
    });

    cancelBtn.addEventListener('click', function() {
        for(var i = 0; i < inputJs.length; i++) {
            inputJs[i].value = '';
            tdJs[i].textContent = '';
        }
        // console.log(tdJs);
    });  
});