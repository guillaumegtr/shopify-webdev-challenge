import { UPDATE_SEARCH_STRING } from '../../constants/actionTypes';
import { UPDATE_RESULTS_PAGES } from '../../constants/actionTypes';

const initialState: ISearch = {
  pagesNumber: 0,
  searchTerm: '',
};

const searchReducer = (state: ISearch = initialState, action: SearchAction) => {
  const { search } = action;
  if (action.type === UPDATE_SEARCH_STRING) {
    state.searchTerm = search.searchTerm;
  }
  if (action.type === UPDATE_RESULTS_PAGES) {
    state.pagesNumber = search.pagesNumber;
  }
  return state;
};

export default searchReducer;
