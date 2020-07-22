import React from 'react';
import styled from 'styled-components';

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
  return (
    <TodoHeadBlock>
      <h1>2020년 7월 23일</h1>
      <div className="day">일요일</div>
      <div className="task_left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;