import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CircleButton = styled.button`
  align-items: center;
  background: #38d9a9;
  border: none;
  border-radius: 50%;
  bottom: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 60px;
  height: 80px;
  justify-content: center;
  left: 50%;
  outline: none;
  position: absolute;
  transform: translate(-50%, 50%);
  transition: .125s all ease-in;
  width: 80px;
  z-index: 5;

  &:active {
    background: #20c997;
  }

  &:hover {
    background: #63e6be;
  }

  ${props => props.open && css` /* open props 있을 경우 */
    background: #ff6b6b;
    transform: translate(-50%, 50%) rotate(45deg);

    &:active {
      background: #fa5252;
    }

    &:hover {
      background: #ff8787;
    }
  `}
`;

const InsertFormPositioner = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
`;

const InsertForm = styled.div`
  animation: ${fadeIn} .125s ease-out forwards;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  box-sizing: border-box;
  padding: 32px 32px 72px;
  width: 100%;
`;

const Input = styled.input`
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  font-size: 18px;
  outline: none;
  padding: 12px;
  width: 100%;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open); // 기존 open 값 반전
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder="할 일을 입력해주세요." autoFocus />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
      
  );
}

export default TodoCreate;