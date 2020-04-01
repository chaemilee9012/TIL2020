$(function(){
  //start
  var today = new Date();
  console.log(today);
  console.log('연도: ' + today.getFullYear()); // 연도
  console.log('월(0 ~ 11): ' + today.getMonth()); // 0 ~ 11월
  console.log('일: ' + today.getDate()); // 일
  console.log('요일(0 ~ 6): ' + today.getDay()); // 0(일요일) ~ 6(토요일);

  // 요일 쓰는 방법
  var dayKo = ['일', '월', '화', '수', '목', '금', '토']
  // console.log(dayKo[3]);
  console.log('한글 요일' + dayKo[today.getDay()]);

  console.log('시간: ' + today.getHours()); // 시간
  console.log('분: ' + today.getMinutes()); // 분
  console.log('초: ' + today.getSeconds()); // 초

  // console.clear();
  
  // 날짜 변경
  var lastDate = today.setDate(today.getDate() + 2); // 오늘 날짜 +2 변수에 담음
  console.log('오늘 +2일 초: ' + lastDate); // 1585894913082 // 1970년 1월 1일 0시 ~ 지금까지 초

  var newDate = new Date(lastDate); // 변수를 오늘 날짜로 만듦
  console.log('오늘 + 2일: ' + newDate); // Fri Apr 03 2020 15:22:17 GMT+0900 (대한민국 표준시)
  

  today.setDate(today.getDate() + 2); // 오늘 날짜 +2를 오늘 날짜로 만듦
  console.log('오늘 +2 +2일: ' + today); // Sun Apr 05 2020 15:22:24 GMT+0900 (대한민국 표준시)

  var oneDay = 24*60*60*1000; // 하루의 초
  // console.log((oneDay * 365) * 50);

  console.clear();

  var changeDate = new Date('2020-04-10');
  console.log('changeDate: ' + changeDate);
  console.log('today: ' + today);

  console.log((changeDate.getMonth() + 1) + '월');
  console.log(Math.round((changeDate - today) / oneDay));
  //end
});