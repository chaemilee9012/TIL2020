import React from 'react';
import styled, { css } from 'styled-components';
// 여러 줄의 스타일 구문을 조건부로 설정해야 할 때는 CSS 불러와야 함

const sizes = {
  desktop: 1024,
  tablet: 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
  console.log('acc::', acc);
  console.log('label::', label);

  acc[label] = (...args) =>

  console.log('...args::', ...args);
  // console.log('acc[label]::', acc[label]);
  console.log('sizes[label]', sizes[label]);
  // css` @media (max-width: ${sizes[label] / 16}em) {
  //     ${css(...args)};
  //   }
  // `;

  return acc;
}, {});

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1em;
  display: flex;
  /* 가로 크기 1024px에 가운데 정렬 
  → 가로 크기가 작아짐에 따라 크기를 줄이고
    768px미만이 되면 꽉 채움 */
  width: 1024px; 
  margin: 0 auto;
  {/* @media (max-width: 1024px) {
    width: 786px;
  }

  @media (max-width: 768px) {
    width: 100%;
  } */}

  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`};
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: .5rem;
  display: flex;
  align-items: center;
  justify-content: color;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255, 255, 255, .9);
  }

  /* inverted 값 true일 때 스타일 적용 */
  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);

export default StyledComponent;