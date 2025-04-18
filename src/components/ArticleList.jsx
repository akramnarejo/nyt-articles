import React from 'react';

const ArticleList = ({ articles, onSelect }) => (
  <ul>
    {articles.map(article => (
      <li key={article.id} onClick={() => onSelect(article)} style={{ cursor: 'pointer' }}>
        <h2>{article.title}</h2>
        <p>{article.byline}</p>
      </li>
    ))}
  </ul>
);

export default ArticleList;