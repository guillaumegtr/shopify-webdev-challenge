import React from 'react';
import { Button, List } from 'semantic-ui-react';
import { removeNomination } from '../../redux/actions/nominate';
import { useDispatch, useSelector } from 'react-redux';

interface ResultProps {
  List: typeof List;
  movie: IMovie;
}

const NominationItem = (props: ResultProps) => {
  const { List, movie } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeNomination(movie));
  };

  return (
    <List.Item>
      <List.Content floated="right">
        <Button onClick={handleRemove} size="tiny">
          Remove
        </Button>
      </List.Content>
      <p>
        {movie.title} ({movie.year})
      </p>
    </List.Item>
  );
};

export default NominationItem;
