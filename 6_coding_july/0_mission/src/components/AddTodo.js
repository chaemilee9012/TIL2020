import React from 'react';
import EnterTodo from './EnterTodo';
import UpdateTodo from './UpdateTodo';

function AddTodo({ mode, textValue, onClickAdd, onChange }) {
  switch(mode) {
    case 'read':
      return (
        <EnterTodo
          textValue={textValue.value}
          onClickAdd={onClickAdd}
          onChange={onChange}
        />
      );

    case 'update':
      return <UpdateTodo />;
    
    default: return;
  }
}

export default AddTodo;