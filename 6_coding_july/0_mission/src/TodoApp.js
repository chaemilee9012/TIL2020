import React, { useState, useRef } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function TodoApp() {
  const nextNum = useRef(4);
  const [mode, setMode] = useState('read');
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

  const [inputText, setInputText] = useState('');

  const _onChange = e => {
    setInputText({
      ...inputText,
      value: e.target.value,
    });
  }

  const addTask = e => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        num: nextNum.current,
        value: e.target.inputText.value,
      }
    ]);

    nextNum.current += 1;

    setInputText('');
  };

  const _onRemove = num => {
    setTodos(todos.filter(todos => todos.num !== num));
  };

  const _onUpdate = e => {
    setMode('update');
    input1.current.focus();

    console.log(e.target.id);
  };

  return(
    <div>
      <h2>일정 관리</h2>
      <AddTodo
        mode={mode}
        textValue={inputText}
        onClickAdd={addTask}
        onChange={_onChange}
      />
      <TodoList
        mode={mode}
        tasks={todos}
        onRemove={_onRemove}
        onUpdate={_onUpdate}
      />
    </div>
  )
}

export default TodoApp;