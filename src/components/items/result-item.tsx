import React from 'react';
import { Button, List } from 'semantic-ui-react';
import { nominateMovie } from '../../redux/actions/nominate';
import { useDispatch, useSelector } from 'react-redux';

interface ResultProps {
  List: typeof List;
  movie: IMovie;
}

const maxNominations = 5;

const ResultItem = (props: ResultProps) => {
  const { List, movie } = props;
  const dispatch = useDispatch();
  const isNominated = useSelector((state: ShoppiesState) =>
    state.nominatedMovies.some((m) => m.id === movie.id)
  );
  const nominatedCount = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.length
  );

  const handleNominate = () => {
    if (nominatedCount < maxNominations && !isNominated) {
      dispatch(nominateMovie(movie));
    } else {
      //TODO: add alert to tell user max nominations is 5!
      console.log('max nominations!');
    }
  };

  return (
    <List.Item>
      <List.Content floated="right">
        <Button
          className={nominatedCount === maxNominations && 'not-allowed'}
          onClick={handleNominate}
          disabled={isNominated}
          size="tiny"
        >
          Nominate
        </Button>
      </List.Content>
      <p>
        {movie.title} ({movie.year})
      </p>
    </List.Item>
  );
};

export default ResultItem;
