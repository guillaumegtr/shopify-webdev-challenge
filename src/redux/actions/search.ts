import { UPDATE_SEARCH_STRING } from '../../constants/actionTypes';
import { UPDATE_RESULTS_PAGES } from '../../constants/actionTypes';

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

export { updateSearchString, updatePageNumberCount };
