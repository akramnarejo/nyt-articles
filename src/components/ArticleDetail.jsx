import React from 'react';


const ArticleDetail = ({ article }) => (
  <div>
    <h2>{article.title}</h2>
    <p>{article.abstract}</p>
    <a href={article.url} target="_blank" rel="noreferrer">Read more</a>
  </div>
);

export default ArticleDetail;