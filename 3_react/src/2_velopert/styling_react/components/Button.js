import React from 'react'
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const fullWidthStyles = css`
  ${props => props.fullWidth && css`
    justify-contents: center;
    width: 100%;

    & + & {
      margin-left: 0;
      margin-top: 1rem;
    }
  `}
`;

const sizing = {
  large: {
    fontSize: '1.25rem',
    padding: '.75rem 1rem',
  },

  medium: {
    fontSize: '1rem',
    padding: '.5rem 1rem',
  },

  small: {
    fontSize: '.875rem',
    padding: '.3rem 1rem',
  },
};

const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
    font-size: ${sizing[size].fontSize};
    padding: ${sizing[size].padding};
  `}

  /* ${props => 
    props.size === 'large' && css`
      font-size: 1.25rem;
      padding: .75rem 1rem;
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
  /* padding: .5rem 1rem;
  font-size: 1rem; */
`;

const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    /* const color = props.theme.palette.blue; */
    /* const color = props.theme.palette[props.color]; */
    const selected = theme.palette[color];
    return css `
      background: ${selected};

      &:hover {
        background: ${lighten(.1, selected)};
      }

      &:active {
        background: ${darken(.1, selected)};
      }

      ${props => props.outline && css` /* outline === true일 때 */
        background: none;
        border: 1px solid ${selected};
        color: ${selected};

        &:hover {
          background: ${selected};
          color: white;
        }
      `}
    `;
  }}

  /* background: #228be6; */
  /* background: ${props => props.theme.palette.blue}; */

  /* &:hover { */
    /* background: #339af0; */
    /* background: ${lighten(.1, '#228be6')}; */
    /* background: ${props => lighten(.1, props.theme.palette.blue)};
  } */

  /* &:active { */
    /* background: #1c7ed6; */
    /* background: ${darken(.1, '#228be6')}; */
    /* background: ${props => darken(.1, props.theme.palette.blue)};
  } */
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-weight: bold;
  outline: none;
  
  /* 기타 */
  & + & { /* 버튼 두 개 같이 있게 될 경우*/
    margin-left: 1rem;
  }

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  ${fullWidthStyles}
  /* 이후에 이 부분이랑 겹치는 스타일 지정할 경우 스타일 깨짐 */
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  console.log('children::', {children});
  console.log('color::',{color});
  console.log('size::',{size});
  console.log('outline::',{outline});
  console.log('fullWidth::',{fullWidth});
  console.log('rest::', {rest});

  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
  // outline 기본값 지정 안 할 경우 undefined → false 처리됨
};

export default Button;