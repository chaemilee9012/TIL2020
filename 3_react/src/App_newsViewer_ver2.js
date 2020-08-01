import React, { useState, useCallback } from 'react';
import NewsList from './2_velopert/news-viewer/NewsList';
import Categories from './2_velopert/news-viewer/Categories';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories
        category={category}
        onSelect={onSelect}
      />
      <NewsList
        category={category}
      />
    </>
  );
};

export default App;