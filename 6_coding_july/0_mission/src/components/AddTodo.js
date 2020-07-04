import React from 'react';

function AddTodo({number, tasks, onClickAdd}) {
  // const { value } = tasks;

  return (
    <form
      onSubmit={onClickAdd}
    >
      <input
        type="text"
        placeholder="해야 하는 일"
        // value={value}
      />
      <button type="submit">추가</button>
    </form>
  )
}

export default AddTodo;