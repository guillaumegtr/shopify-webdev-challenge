import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Form, Checkbox } from 'semantic-ui-react';
import {
  updateSearchString,
  updatePageNumberCount,
  clearSearch,
  updateSearchType,
} from '../redux/actions/search';
import { updateMovieResults } from '../redux/actions/movies';
import { searchMovieByName } from '../api/omdb';
import { Search } from 'semantic-ui-react';

const SEARCH_DELAY = 500;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');

  const searchType = useSelector(
    (state: ShoppiesState) => state.search.searchType
  );

  const handleChange = async (searchTerm: string) => {
    clearTimeout(timeoutId);
    setUserInput(searchTerm);
    if (!searchTerm) {
      dispatch(clearSearch());
      dispatch(updateMovieResults([]));
      return;
    }

    getData(searchTerm);
  };

  const handleChangeSearchType = (selectedType: SearchType) => {
    dispatch(updateSearchType({ searchType: selectedType }));
    if (userInput) {
      getData(userInput, selectedType);
    }
  };

  const getData = (searchTerm, selectedSearchType?: SearchType) => {
    // timeout to let user finish typing before calling api
    const timeout = setTimeout(async () => {
      setIsLoading(true);
      dispatch(updateSearchString({ searchTerm }));

      const data = await searchMovieByName(
        searchTerm,
        selectedSearchType || searchType
      );

      dispatch(updateMovieResults(data.Search));
      // api returns 10 results per page
      dispatch(
        updatePageNumberCount({
          pagesNumber: Math.ceil(data.totalResults / 10),
        })
      );
      setIsLoading(false);
    }, SEARCH_DELAY);
    setTimeoutId(timeout);
  };

  return (
    <Card className="search-bar p-1">
      <Form onSubmit={null}>
        <Form.Field>
          <label>Movie title</label>
          <Search
            onSearchChange={(e, data) => handleChange(data.value.trim())}
            input={{ iconPosition: 'left' }}
            open={false}
            loading={isLoading}
          />
        </Form.Field>
        <div className="flex-row">
          <Checkbox
            radio
            label="Any"
            checked={searchType === ''}
            onChange={() => handleChangeSearchType('')}
          />
          <Checkbox
            radio
            className="ml-1"
            label="Movies"
            checked={searchType === 'movie'}
            onChange={() => handleChangeSearchType('movie')}
          />
          <Checkbox
            radio
            className="ml-1"
            label="Series"
            checked={searchType === 'series'}
            onChange={() => handleChangeSearchType('series')}
          />
          <Checkbox
            radio
            className="ml-1"
            label="Episode"
            checked={searchType === 'episode'}
            onChange={() => handleChangeSearchType('episode')}
          />
        </div>
      </Form>
    </Card>
  );
};

export default SearchBar;
