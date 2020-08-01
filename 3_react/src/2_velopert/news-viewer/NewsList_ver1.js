import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const  NewsListBlock = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 3rem;
  width: 768px;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    width: 100%;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
};

const NewsList_ver1 = () => {
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};

export default NewsList_ver1;