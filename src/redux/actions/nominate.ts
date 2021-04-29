import {
  INITIALIZE_NOMINATIONS,
  REMOVE_NOMINATION,
  NOMINATE_MOVIE,
} from '../../constants/actionTypes';

const nominateMovie = (movie: IMovie) => {
  const action: NominateAction = {
    type: NOMINATE_MOVIE,
    movie: movie,
  };
  return action;
};

const initNomination = (movie: IMovie) => {
  const action: NominateAction = {
    type: INITIALIZE_NOMINATIONS,
    movie: movie,
  };
  return action;
};

const removeNomination = (movie: IMovie) => {
  const action: NominateAction = {
    type: REMOVE_NOMINATION,
    movie: movie,
  };
  return action;
};

export { nominateMovie, initNomination, removeNomination };
