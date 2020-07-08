import React from 'react';
import EnterTodo from './EnterTodo';
import UpdateTodo from './UpdateTodo';

function AddTodo({ mode, textValue, onClickAdd, onChange, onConfirm}) {
  switch(mode) {
    case 'read':
      return (
        <EnterTodo
          textValue={textValue}
          onClickAdd={onClickAdd}
          onChange={onChange}
        />
      );

    case 'update':
      return (
        <UpdateTodo
          textValue={textValue}
          onChange={onChange}
          onSubmit={onConfirm}
        />
        );
    
    default: return;
  }
}

export default AddTodo;