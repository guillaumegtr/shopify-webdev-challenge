import { ADD_SEARCH_RESULTS } from '../../constants/actionTypes';

const addMovies = (movies: IMovie[]) => {
  const action: MoviesAction = {
    type: ADD_SEARCH_RESULTS,
    movies,
  };
  return action;
};

export { addMovies };
