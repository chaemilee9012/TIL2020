import React, { useState, useRef } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function TodoApp() {
  const nextNum = useRef(4);
  const targetNum = useRef(0);
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
    setInputText(e.target.value);
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

  const _onUpdate = num => {
    setMode('update');
    setInputText(todos[num - 1].value);
    targetNum.current = num;
  };

  const _onConfirm = (e) => {
    e.preventDefault();
    setMode('read');
    
    todos[targetNum.current - 1].value = e.target.inputText.value;
    setInputText('');
  }

  return(
    <div>
      <h2>일정 관리</h2>
      <AddTodo
        mode={mode}
        textValue={inputText}
        onClickAdd={addTask}
        onChange={_onChange}
        onConfirm={_onConfirm}
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