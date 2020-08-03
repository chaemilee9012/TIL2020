import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './2_velopert/news-viewer/pages/NewsPage';

const App = () => {
  return (
    <Route
      path="/:category?"
      component={NewsPage}
    />
  );
};

export default App;