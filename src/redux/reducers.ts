import { combineReducers } from 'redux';
import moviesReducer from './reducers/movies';
import searchReducer from './reducers/search';
import nominateReducer from './reducers/nominates';

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  nominatedMovies: nominateReducer,
});
