import React from 'react'
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

/* 크기 */
const sizes = {
  large: {
    fontSize: 1.25rem;
    padding: 1rem;
  },

  medium: {
    fontSize: 1rem;
    padding: .5rem 1rem;
  },

  small: {
    fontSize: 1.25rem;
    padding: .3rem 1rem;
  },
};

const sizeStyles = css`
  /* font-size: 1rem;
  padding: .5rem 1rem; */
  
  /* ${props =>
    props.size === 'large' && css`
      font-size: 1.25rem;
      padding: 1rem;
    `
  }
  
  ${props =>
    props.size === 'medium' && css`
      font-size: 1rem;
      padding: .5rem 1rem;  
    `
  }

  ${props =>
    props.size === 'small' && css`
      font-size: .875rem;
      padding: .3rem 1rem;  
    `
  } */
`;

/* 색상 */
const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};

      &:hover {
        background: ${lighten(.1, selected)};
      }

      &:active {
        background: ${darken(.1, selected)};
      }
    `
  }}
  /* background: ${props => props.theme.palette.blue};
  &:hover {
    background: ${props => lighten(.1, props.theme.palette.blue)};
  }
  &:active {
    background: ${props => darken(.1, props.theme.palette.blue)};
  } */
`

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  outline: none;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, size, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'blue',
  size: 'medium'
};

export default Button;