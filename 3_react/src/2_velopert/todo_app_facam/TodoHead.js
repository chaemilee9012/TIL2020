import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  border-bottom: 1px solid #e9ecef;
  padding: 48px 32px 24px;

  h1 {
    color: #343a40;
    font-size: 36px;
    margin: 0;
  }

  .day {
    color: #868e96;
    font-size: 21px;
    margin-top: 4px;
  }

  .task_left {
    color: #20c997;
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
  }
`;

function TodoHead() {
  const todos = useTodoState(); // InitialTodos 가져오기
  const undoneTasks = todos.filter(todo => !todo.done); // done === false인 것만 새 배열에 담음

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="task_left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;