import React, { useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './2_velopert/todo_app/TodoTemplate';
import TodoInsert from './2_velopert/todo_app/TodoInsert';
import TodoList from './2_velopert/todo_app/TodoList';

// // fastcampus
// import { createGlobalStyle } from 'styled-components';
// import TodoTemplate from './2_velopert/todo_app_facam/TodoTemplate';
// import TodoHead from './2_velopert/todo_app_facam/TodoHead';
// import TodoList from './2_velopert/todo_app_facam/TodoList';
// import TodoCreate from './2_velopert/todo_app_facam/TodoCreate';
// import { TodoProvider } from './2_velopert/todo_app_facam/TodoContext';

// const GlobalStyle = createGlobalStyle`
//   body {
//     background: #e9ecef;
//   }
// `;

// function App() {
//   return (
//     <TodoProvider>
//       <GlobalStyle />
//       <TodoTemplate>
//         <TodoHead />
//         <TodoList />
//         <TodoCreate />
//       </TodoTemplate>
//     </TodoProvider>
//   );
// }

// // fastcampus

function createBulkTodos() {
  const array = [];
  for(let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // 새로 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      // { type: 'REMOVE', id: 1 }
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': // 토글
      // { type: 'TOGGLE', id: 1 }
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,);
    default: 
      return todos;
  }
}

const AppTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState(
  //   createBulkTodos
  // // [{
  // //     id: 1,
  // //     text: '리액트 기초',
  // //     checked: true,
  // //   },
  // //   {
  // //     id: 2,
  // //     text: '컴포넌트 스타일링',
  // //     checked: true,
  // //   },
  // //   {
  // //     id: 3,
  // //     text: '기능 구현',
  // //     checked: false,
  // //   },]
  // );

  // 고유값으로 사용될 id
  // ref 사용하여 변수 담기
  // const nextId = useRef(4);
  const nextId = useRef(2501);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos => todos.concat(todo)); // useState
      dispatch({ type: 'INSERT', todo }); // useReducer
      nextId.current += 1;
    }, [],
  );

  const onRemove = useCallback(
    id => {
      // setTodos(todos => todos.filter(todo => todo.id !== id)); // useState
      dispatch({ type: 'REMOVE', id }); // useReducer
    }, [],
  );

  const onToggle = useCallback(
    id => {
      // setTodos( todos =>
      //   todos.map(todo => 
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      //   ),
      // ); // useState
      dispatch({ type: 'TOGGLE', id }); // useReducer
    },[],
  );

  return (
    <TodoTemplate>
      <TodoInsert
        onInsert={onInsert}
      />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </TodoTemplate>
  );
};

export default AppTodo;