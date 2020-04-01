$(function(){
  //start
  var divBox = document.querySelector('div');
  var today = new Date();
  var lastDay = new Date('2020-06-08');
  var dayKo = ['일', '월', '화', '수', '목', '금', '토'];
  var gYear, gMonth, gDate, gDay, dDay;
  var oneDay = 24*60*60*1000;
  
  gYear = today.getFullYear();
  gMonth = today.getMonth() + 1;
  gDate = today.getDate();
  gDay = dayKo[today.getDay()];

  dDay = Math.round((lastDay - today) / oneDay);

  divBox.textContent = `${gYear}년 ${gMonth}월 ${gDate}일 ${gDay}요일`;
  // divBox.textContent += `종강일(${year}.6.8)까지 D-day: ${dDay}일`;
  divBox.innerHTML += '<br>' + `종강일(2020.6.8)까지 D-day: ${dDay}일`;

  // var event = new Date('2020-04-01');
  // var eventS = event.getDate();
  // var eventE = event.setDate(eventS + 7); // event의 date 값 +7
  
  //편하게 쓰려면 각각 변수 선언
  var event = new Date();
  var eventS = new Date('2020-04-01');
  var eventE = new Date('2020-04-08 18:00:00');
  
  // console.log(eventS);
  // console.log(event.getDate()); // 8 → eventE에서 바뀐 값

  console.log(event);

  if(event > eventS && event < eventE){
    console.log('이벤트 기간');
  } else {
    console.log('이벤트 끝')
  }
  //end
});