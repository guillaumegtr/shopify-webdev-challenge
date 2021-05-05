import React from 'react';
import MovieCard from './movie-card';

interface PrettyUserProps {
  nominatedMovies: IMovie[];
}

const PrettyUser = (props: PrettyUserProps) => {
  const { nominatedMovies } = props;
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
