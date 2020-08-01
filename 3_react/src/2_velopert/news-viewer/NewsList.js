import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => { // async 사용 함수 따로 선언
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;
        const response = await axios.get(
        `http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cbcfc444fde64a4cbf8542610d7a1bbb`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log('error::', e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if(loading) { // 대기중일 때
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  if(!articles) { // ariticles 값 없을 때
    return null;
  }

  return ( // articles 값 유효할 때
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;