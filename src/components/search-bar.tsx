import React from 'react';
import { Icon, Input, Form } from 'semantic-ui-react';

const SearchBar = () => {
  return (
    <div className="ui card search-bar">
      <Form>
        <Form.Field>
          <label>Movie title</label>
          <Input
            className="search-input"
            iconPosition="left"
            placeholder="Movie title"
          >
            <input />
            <Icon name="search" />
          </Input>
        </Form.Field>
      </Form>
    </div>
  );
};

export default SearchBar;
