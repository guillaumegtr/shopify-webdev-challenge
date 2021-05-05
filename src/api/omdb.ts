import axios from 'axios';
import { API_KEY, API_URL } from '../constants/api';
import { MovieDTO } from '../model/MovieDTO';

interface IQuery {
  movieQuery?: string;
  movieId?: string;
  searchType?: SearchType;
  page?: number;
}

const buildQueryURL = (query: IQuery) => {
  const { movieQuery, movieId, searchType, page = 1 } = query;
  return `${API_URL}?apikey=${API_KEY}${
    movieQuery ? '&s='.concat(movieQuery.split(' ').join('+')) : ''
  }${movieId ? '&i='.concat(movieId) : ''}${
    searchType ? `&type=${searchType}` : ''
  }&page=${page}`;
};

const searchMovieByName = async (
  movieName: string,
  searchType: SearchType = 'movie'
) => {
  const queryURL = buildQueryURL({
    movieQuery: movieName,
    searchType: searchType,
  });
  console.log(queryURL);
  const res = await axios.get(queryURL);

  return handleResultResponse(res);
};

const searchMovieByID = async (id: string) => {
  const queryURL = buildQueryURL({ movieId: id });
  console.log(queryURL);
  const res = await axios.get(queryURL);

  return handleResultResponse(res);
};

const getMoviesByPage = async (
  movieName: string,
  pageNumber: number,
  searchType: SearchType = 'movie'
) => {
  const queryURL = buildQueryURL({
    movieQuery: movieName,
    searchType,
    page: pageNumber,
  });
  const res = await axios.get(queryURL);
  return handleResultResponse(res);
};

const getMoviesByImdbIDs = async (imdbIds: string[]): Promise<IMovie[]> => {
  const movies: MovieDTO[] = [];
  // omdb api does not offer bulk imdbId search 😢
  for (const id of imdbIds) {
    const movie = await searchMovieByID(id);
    // invalid imdbId will return empty array
    if (movie.imdbID) {
      movies.push(movie);
    } else {
      console.error(`Invalid imdbID ${id} make sure all your ids are valid!`);
    }
  }
  return MovieDTO.toMovie(movies);
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

export { searchMovieByName, getMoviesByPage, getMoviesByImdbIDs };
