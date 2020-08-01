import React from 'react';
import styled, { css } from 'styled-components';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 1rem;
  width: 768px;

  @media screen and (max-width: 768px) {
    overflow-x: auto;
    width: 100%;
  }
`;

const Category = styled.div`
  color: inherit;
  cursor: pointer;
  font-size: 1.125rem;
  padding-bottom: .25rem;
  text-decoration: none;
  white-space: pre;

  &:hover {
    color: #495057;
  }

  ${props =>
    props.active && css`
      font-weigth: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;

      &:hover {
        color: #3bc9db;
      }
    `
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories_ver1 = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories_ver1;