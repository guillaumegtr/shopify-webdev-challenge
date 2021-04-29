import {
  NOMINATE_MOVIE,
  INITIALIZE_NOMINATIONS,
  REMOVE_NOMINATION,
} from '../../constants/actionTypes';

const nominateReducer = (state: IMovie[] = [], action: NominateAction) => {
  const { movie } = action;
  if (action.type === NOMINATE_MOVIE) {
    movie.isNominated = true;
    const newState = Object.assign([], state.concat(movie));
    // save nomination to browser local storage
    localStorage.setItem('nominations', JSON.stringify(newState));
    state = newState;
  } else if (action.type === INITIALIZE_NOMINATIONS) {
    const nominations: IMovie[] =
      JSON.parse(localStorage.getItem('nominations')) || [];
    state = nominations;
  } else if (action.type === REMOVE_NOMINATION) {
    const newState = Object.assign(
      [],
      state.filter((m) => m.id !== movie.id)
    );
    localStorage.setItem('nominations', JSON.stringify(newState));
    state = newState;
  }
  return state;
};

export default nominateReducer;
