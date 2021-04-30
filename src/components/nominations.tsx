import React from 'react';
import { useSelector } from 'react-redux';
import { Card, List, Transition } from 'semantic-ui-react';
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
        <Transition.Group as={List} duration={400} animation="slide right">
          {nominatedMovies &&
            nominatedMovies.map((movie, i) => (
              <List.Item key={i}>
                <NominationItem
                  movie={movie}
                  List={List}
                  animationDuration={400}
                />
              </List.Item>
            ))}
        </Transition.Group>
      </Card.Content>
    </Card>
  );
};

export default Nominations;
