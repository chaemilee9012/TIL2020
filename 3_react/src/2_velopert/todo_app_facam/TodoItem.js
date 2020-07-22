import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CheckCircle = styled.div`
  align-items: center;
  border: 1px solid #ced4da;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-size: 24px; /* 아이콘 크기 */
  height: 32px;
  justify-content: center;
  margin-right: 20px;
  width: 32px;
  ${props => props.done && css` /* done props 있을 경우 */
    border: 1px solid #38d9a9;
    color: #38d9a9;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;

  ${props => props.done && css` /* done props 있을 경우 */
    color: #ced4da;
    text-decoration: line-through;
  `}
`;

const Remove = styled.div`
  align-items: center;
  color: #dee2e6;
  cursor: pointer;   
  display: flex;
  font-size: 24px;
  justify-content: center;
  opacity: 0;

  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  align-items: center;
  display: flex;
  padding: 12px 0;
  &:hover {
    ${Remove} { /* Remove 스타일 컴포넌트에서 생성한 클래스 이름 있을 경우 */
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;