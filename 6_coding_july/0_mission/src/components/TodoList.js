import React from 'react';

function PrintLi({mode, list, onRemove, onUpdate}) {
  const {num, value} = list;
  return(
    <li>
      <input
        type="checkbox"
      />
      {mode === 'read' ?
        <span>{value}</span> :
        <input
          type="text"
        />
      }
      <button
        type="button"
        onClick={onUpdate}
      >수정</button>
      <button
        type="button"
        onClick={() => {
          onRemove(num)
        }}
      >삭제</button>
    </li>
  );
}

function TodoList({mode, tasks, onRemove, onUpdate}) {
  return (
    <ul>
      {
        tasks.map(
          (v) => {
            return (
              <PrintLi
                key={v.num}
                mode={mode}
                list={v}
                onRemove={onRemove}
                onUpdate={onUpdate}
              />
            );
          }
        )
      }
    </ul>
  )
}

export default TodoList;