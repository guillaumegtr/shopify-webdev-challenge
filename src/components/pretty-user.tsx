import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './movie-card';

const PrettyUser = () => {
  const nominatedMovies = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.movies
  );

  return (
    <>
      {nominatedMovies.length === 0 ? (
        <p>Nothing to show. Nominate at least one movie 👍</p>
      ) : (
        nominatedMovies.map((m, i) => <MovieCard key={i} movie={m} />)
      )}
    </>
  );
};

export default PrettyUser;
