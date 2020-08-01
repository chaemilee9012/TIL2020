import React from 'react';
import Categories from '../Categories';
import NewsList from '../NewsList';

const NewsPage = ({ match }) => {
  const category = match.params.category || 'all';
  // 카테고리 선택 안 하면 기본값 all

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;