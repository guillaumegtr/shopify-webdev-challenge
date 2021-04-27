import { UPDATE_SEARCH_STRING } from '../../constants/actionTypes';

const searchReducer = (state: string = '', action: SearchAction) => {
  const { searchTerm } = action;
  if (action.type === UPDATE_SEARCH_STRING) {
    state = searchTerm;
  }
  return state;
};

export default searchReducer;
