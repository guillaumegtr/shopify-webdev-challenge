import {
  NOMINATE_MOVIE,
  INITIALIZE_NOMINATIONS,
  REMOVE_NOMINATION,
  TOGGLE_NOMINATION,
} from '../../constants/actionTypes';

const initialState: INomination = {
  movies: [],
  toggleNomination: false,
};

const nominateReducer = (
  state: INomination = initialState,
  action: NominateAction
) => {
  const { movie, type } = action;

  switch (type) {
    case NOMINATE_MOVIE:
      {
        movie.isNominated = true;
        const newState = Object.assign(
          {},
          {
            movies: state.movies.concat(movie),
            toggleNomination: !state.toggleNomination,
          }
        );
        // save nomination to browser local storage
        localStorage.setItem('nominations', JSON.stringify(newState.movies));
        state = newState;
      }
      break;

    case INITIALIZE_NOMINATIONS:
      const nominations: IMovie[] =
        JSON.parse(localStorage.getItem('nominations')) || [];
      state.movies = nominations;
      break;

    case REMOVE_NOMINATION:
      {
        const newState = Object.assign(
          {},
          {
            movies: state.movies.filter((m) => m.id !== movie.id),
            toggleNomination: !state.toggleNomination,
          }
        );
        // save nomination to browser local storage
        localStorage.setItem('nominations', JSON.stringify(newState.movies));
        state = newState;
      }
      break;
    case TOGGLE_NOMINATION:
      state.toggleNomination = !state.toggleNomination;
      break;
  }
  return state;
};

export default nominateReducer;
