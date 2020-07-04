import React, { useState, useRef } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      num: 1,
      value: '할 일 1',
    },
    {
      num: 2,
      value: '할 일 2',
    },
    {
      num: 3,
      value: '할 일 3',
    }
  ]);
  const num = useRef(4);

  const addTask = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,






      
    ]);
  };

  return(
    <div>
      <h2>일정 관리</h2>
      <AddTodo number={num} tasks={todos} onClickAdd={addTask} />
      <TodoList tasks={todos} />
    </div>
  )
}

export default TodoApp;