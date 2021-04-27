import axios from 'axios';
import { API_KEY, API_URL } from '../constants/api';

const buildQueryURL = (movieQuery: string) => {
  return `${API_URL}?apikey=${API_KEY}&s=${movieQuery
    .split(' ')
    .join('+')}&type=movie`;
};

const searchMovieByName = async (movieName: string) => {
  const queryURL = buildQueryURL(movieName);
  const res = await axios.get(queryURL);

  if (res) {
    const { data } = res;
    if (!data.Error) return data;
    console.error('API returned error', data);
    return [];
  }
  return [];
};

export { searchMovieByName };
