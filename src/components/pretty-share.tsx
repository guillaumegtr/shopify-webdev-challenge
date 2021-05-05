import React from 'react';
import MovieCard from './movie-card';

interface PrettyShareProps {
  sharedMovies: IMovie[];
  isLoading: boolean;
}

const PrettyShare = (props: PrettyShareProps) => {
  const { sharedMovies } = props;
  console.log(sharedMovies);

  return (
    <>
      {sharedMovies.length > 0 ? (
        sharedMovies.map((m, i) => <MovieCard key={i} movie={m} />)
      ) : (
        <p>Shared movies not found ... Try again please 🤓</p>
      )}
    </>
  );
};

export default PrettyShare;
