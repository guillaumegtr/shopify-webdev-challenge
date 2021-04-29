import {
  NOMINATE_MOVIE,
  INITIALIZE_NOMINATIONS,
} from '../../constants/actionTypes';

const nominateReducer = (state: IMovie[] = [], action: NominateAction) => {
  const { movie } = action;
  if (action.type === NOMINATE_MOVIE) {
    // save nominations in local storage
    const nominations: IMovie[] =
      JSON.parse(localStorage.getItem('nominations')) || [];
    movie.isNominated = true;
    nominations.push(movie);
    localStorage.setItem('nominations', JSON.stringify(nominations));
    state.push(movie);
  } else if (action.type === INITIALIZE_NOMINATIONS) {
    const nominations: IMovie[] =
      JSON.parse(localStorage.getItem('nominations')) || [];
    state = nominations;
  }
  return state;
};

export default nominateReducer;
