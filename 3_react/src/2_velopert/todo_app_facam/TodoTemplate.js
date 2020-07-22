import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .04);
  display: flex;
  flex-direction: column;
  height: 768px;
  margin: 0 auto;
  margin-bottom: 7rem;
  margin-top: 4rem;
  position: relative;
  width: 512px;
`;

function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      {children}
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;