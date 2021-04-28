import React from 'react';
import { Button, List } from 'semantic-ui-react';

interface ResultProps {
  List: typeof List;
  movie: IMovie;
}

const ResultItem = (props: ResultProps) => {
  const { List, movie } = props;
  return (
    <List.Item>
      <List.Content floated="right">
        <Button size="tiny">Nominate</Button>
      </List.Content>
      <p>
        {movie.title} ({movie.year})
      </p>
    </List.Item>
  );
};

export default ResultItem;
