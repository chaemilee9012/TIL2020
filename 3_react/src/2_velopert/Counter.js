import React, { useState } from 'react';

function Counter() {
  const [num, setNum] = useState(0);
  // useState() hook: 결과로 배열[현재 상태, 상태 변경 함수] 반환
  const onIncrease = () => {
    // console.log('+1');
    // setNum(num + 1); // 이전 상태 값 참조하여 값 직접 변경
    setNum(prevNum => prevNum + 1);
    // 함수형 업데이트: 값을 어떻게 업데이트할 지 로직 지정 → 최적화와 관련
  };
  
  const onDecrease = () => {
    // console.log('-1');
    // setNum(num - 1);
    setNum(prevNum => prevNum - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onIncrease}>+1</button>
      {/* <button onClick={onIncrease()}>+1</button> */}
      {/* 이벤트 발생 시 함수명()하면 렌더링할 때 함수 실행됨 */}
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;