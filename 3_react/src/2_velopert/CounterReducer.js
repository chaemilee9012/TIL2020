import React, { useReducer } from 'react';

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // useState(첫번째 파라미터: 리듀서 함수, 두번째 파라미터: 리듀서의 기본값)
  // → state 값(현재 가리키고 있는 상태)과 dispatch 함수(액션을 발생시킴)를 받아옴
  // → dispatch 함수에 파라미터로 액션 값 넣으면 리듀서 함수 호출
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >+1</button>
      <button
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >-1</button>
    </div>
  );
};

export default CounterReducer;