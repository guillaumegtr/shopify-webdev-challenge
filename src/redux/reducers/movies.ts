import { ADD_SEARCH_RESULTS } from '../../constants/actionTypes';

const moviesReducer = (state: IMovie[] = [], action: MoviesAction) => {
  const { movies } = action;
  if (action.type === ADD_SEARCH_RESULTS) {
    return Object.assign({}, state, {
      tasks: state.concat(movies),
    });
  }
  return state;
};

export default moviesReducer;
