import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Icon, Input, Form } from 'semantic-ui-react';
import {
  updateSearchString,
  updatePageNumberCount,
  clearSearch,
} from '../redux/actions/search';
import { updateMovieResults } from '../redux/actions/movies';
import { searchMovieByName } from '../api/omdb';
import { Search } from 'semantic-ui-react';

const SEARCH_DELAY = 500;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const nominatedMovies = useSelector(
    (state: ShoppiesState) => state.nominatedMovies
  );

  const handleChange = async (searchTerm: string) => {
    clearTimeout(timeoutId);

    if (!searchTerm) {
      dispatch(clearSearch());
      dispatch(updateMovieResults([]));
      return;
    }

    // timeout to let user finish typing before calling api
    const timeout = setTimeout(async () => {
      setIsLoading(true);
      dispatch(updateSearchString({ searchTerm }));

      const data = await searchMovieByName(searchTerm);

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
      </Form>
    </Card>
  );
};

export default SearchBar;
