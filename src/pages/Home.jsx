import React from 'react';
import { useNavigate } from 'react-router-dom';
import useArticles from '../hooks/useArticles';
import ArticleList from '../components/ArticleList';

const Home = () => {
  const { articles, loading, error } = useArticles(7);
  const navigate = useNavigate();

  const handleSelect = (article) => {
    navigate(`/article/${article.id}`, { state: article });
  };

  return (
    <div>
      <h1>NYT Most Popular Articles</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ArticleList articles={articles} onSelect={handleSelect} />
    </div>
  );
};

export default Home;
