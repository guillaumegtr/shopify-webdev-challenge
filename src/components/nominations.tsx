import React from 'react';
import { useSelector } from 'react-redux';
import { Card, List } from 'semantic-ui-react';
import NominationItem from './items/nomination-item';

interface NominationsProps {
  className: string;
}

const Nominations = (props: NominationsProps) => {
  const { className } = props;
  const nominatedMovies = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.movies
  );

  return (
    <Card className={`nominations p-1 ${className}`}>
      <Card.Header as="h4">Nominations</Card.Header>
      <Card.Content>
        <List>
          {nominatedMovies &&
            nominatedMovies.map((movie, i) => (
              <NominationItem key={i} List={List} movie={movie} />
            ))}
        </List>
      </Card.Content>
    </Card>
  );
};

export default Nominations;
