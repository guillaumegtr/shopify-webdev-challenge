import axios from 'axios';
import { API_KEY, API_URL } from '../constants/api';

const buildQueryURL = (movieQuery: string, searchType, page: number = 1) => {
  return `${API_URL}?apikey=${API_KEY}&s=${movieQuery.split(' ').join('+')}${
    searchType ? `&type=${searchType}` : ''
  }&page=${page}`;
};

const searchMovieByName = async (
  movieName: string,
  searchType: string = 'movie'
) => {
  const queryURL = buildQueryURL(movieName, searchType);
  const res = await axios.get(queryURL);

  return handleResultResponse(res);
};

const getMoviesByPage = async (
  movieName: string,
  pageNumber: number,
  searchType: string = 'movie'
) => {
  const queryURL = buildQueryURL(movieName, searchType, pageNumber);
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
