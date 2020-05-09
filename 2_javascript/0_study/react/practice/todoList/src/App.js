import React, { useRef } from 'react';
import './App.css';
import EnterTodo from './EnterTodo';

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
    nextIdx += 1;
  };

  return (
    <>
      <EnterTodo tdList={todoList}/>
    </>
  );
}

export default App;