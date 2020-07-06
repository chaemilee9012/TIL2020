import React from 'react';

function AddTodo({textValue, onClickAdd, onChange}) {
  return (
    <form
      onSubmit={onClickAdd}
    >
      <input
        type="text"
        placeholder="해야 하는 일"
        value={textValue.value}
        name="inputText"
        onChange={onChange}
      />
      <button type="submit">추가</button>
    </form>
  )
}

export default AddTodo;