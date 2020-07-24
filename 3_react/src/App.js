import React, { useState, useRef, useCallback } from 'react';
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

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링',
      checked: true,
    },
    {
      id: 3,
      text: '기능 구현',
      checked: false,
    },
  ]);
  const nextId = useRef(4); // 고유값으로 사용될 id
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert
        onInsert={onInsert}
      />
      <TodoList
        todos={todos}
        onRemove={onRemove}
      />
    </TodoTemplate>
  );
};

export default App;