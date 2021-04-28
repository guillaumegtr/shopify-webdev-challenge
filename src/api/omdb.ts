import axios from 'axios';
import { API_KEY, API_URL } from '../constants/api';
import { useSelector } from 'react-redux';

const buildQueryURL = (movieQuery: string, page = 1) => {
  return `${API_URL}?apikey=${API_KEY}&s=${movieQuery
    .split(' ')
    .join('+')}&type=movie&page=${page}`;
};

const searchMovieByName = async (movieName: string) => {
  const queryURL = buildQueryURL(movieName);
  const res = await axios.get(queryURL);

  return handleResultResponse(res);
};

const getMoviesByPage = async (movieName: string, pageNumber: number) => {
  const queryURL = buildQueryURL(movieName, pageNumber);
  const res = await axios.get(queryURL);
  return handleResultResponse(res);
};

const handleResultResponse = (res) => {
  if (res) {
    const { data } = res;
    if (!data.Error) return data;
    console.error('API returned error', data);
    return [];
  }
  return [];
};

export { searchMovieByName, getMoviesByPage };
