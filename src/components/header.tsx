import React from 'react';
import { Label, Segment } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/nominations');
  };

  return (
    <Segment basic>
      <Label as="a" onClick={handleClick} ribbon color="green">
        View nominations
      </Label>
      <h1>The Shoppies</h1>
    </Segment>
  );
};

export default Header;
