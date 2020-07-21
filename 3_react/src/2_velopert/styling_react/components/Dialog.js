import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const DarkBackground = styled.div`
  align-items: center;
  animation: ${fadeIn} .25s ease-out forwards;
  background: rgba(0, 0, 0, .5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  ${props => 
    props.disappear && css`
        animation: ${fadeOut} .25s ease-out forwards;
    `
  }
`;

const DialogBlock = styled.div`
  animation: ${slideUp} .25s ease-out forwards;
  background: white;
  border-radius: 2px;
  padding: 1.5rem;
  width: 320px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  ${props => 
    props.disappear && css`
        animation: ${slideDown} .25s ease-out forwards;
    `
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  
  /* button + button {
    margin-left: .5rem;
  } */
`;

const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: .5rem;
  }
`;

function Dialog({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    if(localVisible && !visible) { // visible true > false
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible); // visible 값 바뀔 때마다 localVisible 값 동기화
  }, [localVisible, visible]);

  console.log('visible::', visible);

  if(!localVisible && !animate) return null // visible === false이면 아무것도 안 보임
  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>{cancelText}</ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>{confirmText}</ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
}

export default Dialog;