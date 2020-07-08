import React from 'react';

function EnterTodo({ textValue, onClickAdd, onChange}) {
  return (
    <form
      action="/"
      onSubmit={onClickAdd}
    >
      <input
        type="text"
        placeholder="해야 하는 일"
        value={textValue}
        name="inputText"
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default EnterTodo;