import React, { useReducer, createContext, useContext, useRef } from 'react';

const InitialTodos = [ // 초기 상태
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

function todoReducer(state, action) { // 리듀서 함수
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo); // 기존 todo 배열에 내용 추가
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ?
        {
          ...todo,
          done: !todo.done, // 기존 done 값 반전,
        } :
        todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id); // 선택한 항목 빼고 렌더링
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext(); // state context
const TodoDispatchContext = createContext(); // dispatch context
const TodoNextIdContext = createContext(); // NextId context

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, InitialTodos);
  const nextId = useRef(5);
  return (
    // context에서 만든 provider 사용 // 순서 상관 없음
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

// const state = useContext(TodoStateContext);

// 커스텀 훅 →
export function useTodoState() {
  // return useContext(TodoStateContext);
  const context = useContext(TodoStateContext);
  if(!context) { // context 값 없을 경우 에러 발생
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoDispatch() {
  // return useContext(TodoDispatchContext);
  const context = useContext(TodoDispatchContext);
  if(!context) { // context 값 없을 경우 에러 발생
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useTodoNextId() {
  // return useContext(TodoNextIdContext);
  const context = useContext(TodoNextIdContext);
  if(!context) { // context 값 없을 경우 에러 발생
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}