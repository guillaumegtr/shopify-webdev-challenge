import { UPDATE_MOVIE_RESULTS } from '../../constants/actionTypes';

const moviesReducer = (state: IMovie[] = [], action: MoviesAction) => {
  const { movies } = action;
  if (action.type === UPDATE_MOVIE_RESULTS) {
    state = movies;
  }
  return state;
};

export default moviesReducer;
