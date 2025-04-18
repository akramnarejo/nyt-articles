const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed';

export const getArticles = async (period = 7) => {
  const res = await fetch(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
  if (!res.ok) throw new Error('Failed to fetch articles');
  return res.json();
};