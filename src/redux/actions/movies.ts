import { UPDATE_MOVIE_RESULTS } from '../../constants/actionTypes';
import { MovieDTO } from '../../model/MovieDTO';

const updateMovieResults = (movies: MovieDTO[]) => {
  const action: MoviesAction = {
    type: UPDATE_MOVIE_RESULTS,
    movies: movies ? MovieDTO.toMovie(movies) : [],
  };
  return action;
};

export { updateMovieResults };
