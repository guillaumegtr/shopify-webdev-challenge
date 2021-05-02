import {
  UPDATE_SEARCH_STRING,
  UPDATE_RESULTS_PAGES,
  CLEAR_SEARCH,
  UPDATE_SEARCH_TYPE,
} from '../../constants/actionTypes';

const updateSearchString = (search: ISearch) => {
  const action: SearchAction = {
    type: UPDATE_SEARCH_STRING,
    search,
  };
  return action;
};

const updatePageNumberCount = (search: ISearch) => {
  const action: SearchAction = {
    type: UPDATE_RESULTS_PAGES,
    search,
  };
  return action;
};

const clearSearch = () => {
  const action: SearchAction = {
    type: CLEAR_SEARCH,
  };
  return action;
};

const updateSearchType = (search: ISearch) => {
  const action: SearchAction = {
    type: UPDATE_SEARCH_TYPE,
    search,
  };
  return action;
};

export {
  updateSearchString,
  updatePageNumberCount,
  updateSearchType,
  clearSearch,
};
