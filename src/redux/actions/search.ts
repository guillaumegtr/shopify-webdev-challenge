import { UPDATE_SEARCH_STRING } from '../../constants/actionTypes';

const updateSearchString = (searchTerm: string) => {
  const action: SearchAction = {
    type: UPDATE_SEARCH_STRING,
    searchTerm,
  };
  return action;
};

export default updateSearchString;
