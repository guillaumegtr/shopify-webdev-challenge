import {
  CLEAR_SEARCH,
  UPDATE_SEARCH_STRING,
  UPDATE_RESULTS_PAGES,
  UPDATE_SEARCH_TYPE,
} from '../../constants/actionTypes';

const initialState: ISearch = {
  pagesNumber: 0,
  searchTerm: '',
  searchType: '',
};

const searchReducer = (state: ISearch = initialState, action: SearchAction) => {
  const { search, type } = action;

  switch (type) {
    case UPDATE_SEARCH_STRING:
      state.searchTerm = search.searchTerm;
      break;
    case UPDATE_RESULTS_PAGES:
      state.pagesNumber = search.pagesNumber;
      break;

    case UPDATE_SEARCH_TYPE:
      state.searchType = search.searchType;
      break;
    case CLEAR_SEARCH:
      state.pagesNumber = 0;
      state.searchTerm = '';
      break;
  }
  return state;
};

export default searchReducer;
