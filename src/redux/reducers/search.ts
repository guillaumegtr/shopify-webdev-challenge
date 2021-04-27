import {
  CLEAR_SEARCH,
  UPDATE_SEARCH_STRING,
  UPDATE_RESULTS_PAGES,
} from '../../constants/actionTypes';

const initialState: ISearch = {
  pagesNumber: 0,
  searchTerm: '',
};

const cleanState: ISearch = {
  pagesNumber: 0,
  searchTerm: '',
};

const searchReducer = (state: ISearch = initialState, action: SearchAction) => {
  const { search, type } = action;

  if (type === UPDATE_SEARCH_STRING) {
    state.searchTerm = search.searchTerm;
  } else if (type === UPDATE_RESULTS_PAGES) {
    state.pagesNumber = search.pagesNumber;
  } else if (type === CLEAR_SEARCH) {
    return cleanState;
  }
  return state;
};

export default searchReducer;
