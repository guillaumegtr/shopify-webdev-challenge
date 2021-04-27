import React from 'react';
import { Card, Icon, Input, Form } from 'semantic-ui-react';

const SearchBar = () => {
  return (
    <Card className="search-bar p-1">
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
    </Card>
  );
};

export default SearchBar;
