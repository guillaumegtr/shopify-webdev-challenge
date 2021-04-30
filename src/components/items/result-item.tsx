import React from 'react';
import { Button, List } from 'semantic-ui-react';
import {
  nominateMovie,
  toggleNominationAttempt,
} from '../../redux/actions/nominate';
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
    state.nominatedMovies.movies.some((m) => m.id === movie.id)
  );
  const nominatedCount = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.movies.length
  );

  const handleNominate = () => {
    if (nominatedCount < maxNominations && !isNominated) {
      dispatch(nominateMovie(movie));
    } else {
      dispatch(toggleNominationAttempt());
      console.warn('max nominations!');
    }
  };

  return (
    <List.Item>
      <List.Content floated="right">
        <Button
          className={nominatedCount === maxNominations ? 'not-allowed' : ''}
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
