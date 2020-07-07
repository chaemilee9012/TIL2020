import React, { useRef } from 'react';

function UpdateTodo() {
  return (
    <form
      action="/"
    >
      <input
        type="text"
        value="수정"
        name="inputText"
      />
      <button type="submit">확인</button>
    </form>
  );
}

export default UpdateTodo;