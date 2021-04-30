import React, { useEffect } from 'react';
import { Button, List } from 'semantic-ui-react';
import { removeNomination } from '../../redux/actions/nominate';
import { useDispatch } from 'react-redux';

interface ResultProps {
  List: typeof List;
  movie: IMovie;
  animationDuration?: number;
}

const NominationItem = (props: ResultProps) => {
  const { List, movie, animationDuration = undefined } = props;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeNomination(movie));
  };

  useEffect(() => {
    return () => {
      if (animationDuration) {
        const timeout = setTimeout(async () => {
          // wait for animation done before unmounting item
          clearTimeout(timeout);
        }, animationDuration);
      }
    };
  }, []);

  return (
    <>
      <List.Content floated="right">
        <Button onClick={handleRemove} size="tiny">
          Remove
        </Button>
      </List.Content>
      <p>
        {movie.title} ({movie.year})
      </p>
    </>
  );
};

export default NominationItem;
