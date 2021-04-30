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
const nominateEffect = new Audio('../../../public/assets/button_effect.mp3');
const deniedEffect = new Audio('../../../public/assets/denied_effect.mp3');
deniedEffect.volume = 0.2;
nominateEffect.volume = 0.5;

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
      nominateEffect.currentTime = 0;
      nominateEffect.play();
    } else {
      dispatch(toggleNominationAttempt());
      deniedEffect.currentTime = 0;
      deniedEffect.play();
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
