import React from 'react';
// import TodoTemplate from './2_velopert/todo_app/components/TodoTemplate';
// import TodoInsert from './2_velopert/todo_app/components/TodoInsert';

// fastcampus
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './2_velopert/todo_app_facam/TodoTemplate';
import TodoHead from './2_velopert/todo_app_facam/TodoHead';
import TodoList from './2_velopert/todo_app_facam/TodoList';
import TodoCreate from './2_velopert/todo_app_facam/TodoCreate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

// fastcampus


// const App = () => {
//   return (
//     <TodoTemplate>
//       <TodoInsert />
//     </TodoTemplate>
//   );
// };

export default App;