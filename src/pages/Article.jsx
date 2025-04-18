import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';

const Article = () => {
  const { state: article } = useLocation();
  const navigate = useNavigate();

  if (!article) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <ArticleDetail article={article} />
    </div>
  );
};

export default Article;
