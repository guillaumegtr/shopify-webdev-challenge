import { combineReducers } from 'redux';
import moviesReducer from './reducers/movies';
import searchReducer from './reducers/search';

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});
