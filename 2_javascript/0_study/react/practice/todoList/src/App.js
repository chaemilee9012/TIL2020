import React, { useRef } from 'react';
import './App.css';
import EnterTodo from './EnterTodo';
import CreateTodo from './CreateTodo';

function App() {
  const todoList = [
    {
      idx: 1,
      value: 'buy'
    },
    {
      idx: 2,
      value: 'rest'
    },
    {
      idx: 3,
      value: 'sleep'
    },
  ];

  const nextIdx = useRef(4);
  const newTodo = () => {
    nextIdx.current += 1;
  };

  return (
    <>
      <CreateTodo />
      <EnterTodo tdList={todoList}/>
    </>
  );
}

export default App;