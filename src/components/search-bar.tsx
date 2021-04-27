import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Icon, Input, Form } from 'semantic-ui-react';
import updateSearchString from '../redux/actions/search';

const SearchBar = () => {
  const dispatch = useDispatch();
  const handleChange = (searchTerm: string) => {
    searchTerm = searchTerm.trim();
    dispatch(updateSearchString(searchTerm));
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
            onChange={(e) => handleChange(e.target.value)}
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
