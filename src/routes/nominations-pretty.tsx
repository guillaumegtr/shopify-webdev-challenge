import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MovieCard from '../components/movie-card';

const NominationsPretty = () => {
  const history = useHistory();
  const nominatedMovies = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.movies
  );

  const goToHome = () => {
    history.push('/home');
  };
  return (
    <div className="nominations-pretty container">
      <div className="cards-container flex-row">
        {nominatedMovies.length === 0 ? (
          <p>Nothing to show. Nominate at least one movie 👍</p>
        ) : (
          nominatedMovies.map((m, i) => <MovieCard key={i} movie={m} />)
        )}
      </div>
      <div className="flex-row nav-footer">
        <a onClick={goToHome} style={{ cursor: 'pointer' }}>
          Back
        </a>
        <a onClick={goToHome} style={{ cursor: 'pointer' }}>
          Share
        </a>
      </div>
    </div>
  );
};

export default NominationsPretty;
