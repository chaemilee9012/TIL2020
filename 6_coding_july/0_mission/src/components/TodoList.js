import React from 'react';

function TodoList({tasks}) {
  return (
    <ul>
      <li>
        <input
          type="checkbox"
        />
        <span>일정 1</span>
        <button>삭제</button>
      </li>
      <li>
        <input
          type="checkbox"
        />
        <span>일정 2</span>
        <button>삭제</button>
      </li>
      <li>
        <input
          type="checkbox"
        />
        <span>일정 3</span>
        <button>삭제</button>
      </li>
    </ul>
  )
}

export default TodoList;