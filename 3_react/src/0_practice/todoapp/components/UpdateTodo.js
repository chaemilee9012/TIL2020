import React from 'react';

function UpdateTodo({textValue, onChange, onSubmit}) {
  return (
    <form
      action="/"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        value={textValue}
        name="inputText"
        onChange={onChange}
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default UpdateTodo;