import React from 'react';

function PrintLi({list, onRemove, onUpdate, onCheck}) {
  const {num, value} = list;
  return(
    <li>
      <input
        type="checkbox"
      />
      <span>{value}</span>
      <button
        id={value}
        type="button"
        onClick={() => onUpdate(num)}
      >수정</button>
      <button
        type="button"
        onClick={() => onRemove(num)}
      >삭제</button>
    </li>
  );
}

function TodoList({tasks, onRemove, onUpdate, onCheck}) {
  return (
    <ul>
      {
        tasks.map(
          (v) => {
            return (
              <PrintLi
                key={v.num}
                list={v}
                onRemove={onRemove}
                onUpdate={onUpdate}
                onCheck={onCheck}
              />
            );
          }
        )
      }
    </ul>
  )
}

export default TodoList;