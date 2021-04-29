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

const SEARCH_DELAY = 500;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState<any>(null);
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
      dispatch(updateSearchString({ searchTerm }));

      const data = await searchMovieByName(searchTerm);

      dispatch(updateMovieResults(data.Search));
      // api returns 10 results per page
      dispatch(
        updatePageNumberCount({
          pagesNumber: Math.ceil(data.totalResults / 10),
        })
      );
    }, SEARCH_DELAY);
    setTimeoutId(timeout);
  };

  return (
    <Card className="search-bar p-1">
      <Form onSubmit={null}>
        <Form.Field>
          <label>Movie title</label>
          <Input
            className="search-input"
            iconPosition="left"
            placeholder="Movie title"
            onChange={(e) => handleChange(e.target.value.trim())}
          >
            <input />
            <Icon name="search" />
          </Input>
        </Form.Field>
      </Form>
    </Card>
  );
};

export default SearchBar;
