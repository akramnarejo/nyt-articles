import { useEffect, useState } from 'react';
import { getArticles } from '../api/nyt';

const useArticles = (period) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getArticles(period)
      .then(data => setArticles(data.results))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [period]);

  return { articles, loading, error };
};

export default useArticles;