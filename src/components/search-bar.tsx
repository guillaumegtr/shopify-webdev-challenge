import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, Icon, Input, Form } from 'semantic-ui-react';
import updateSearchString from '../redux/actions/search';
import { updateMovieResults } from '../redux/actions/movies';
import { searchMovieByName } from '../api/omdb';
import { MovieDTO } from '../model/MovieDTO';

const SEARCH_DELAY = 500;

const SearchBar = () => {
  const dispatch = useDispatch();
  const [timeoutId, setTimeoutId] = useState<any>(null);

  const handleChange = async (searchTerm: string) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(async () => {
      dispatch(updateSearchString(searchTerm));
      const data = await searchMovieByName(searchTerm);
      dispatch(updateMovieResults(data.Search));
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
