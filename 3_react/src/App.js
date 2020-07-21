import React from 'react';
import TodoTemplate from './2_velopert/todo_app/components/TodoTemplate';
import TodoInsert from './2_velopert/todo_app/components/TodoInsert';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  );
};

export default App;