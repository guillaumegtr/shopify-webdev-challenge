import React from 'react';
import MovieCard from './movie-card';

interface PrettyShareProps {
  sharedMovies: IMovie[];
}

const PrettyShare = (props: PrettyShareProps) => {
  const { sharedMovies } = props;

  return (
    <>
      <div className="flex-row">
        <h1>Here is your friend's Nomination List 🍿</h1>
      </div>
      <div className="flex-row my-1">
        {sharedMovies.length > 0 ? (
          <div className="cards-container flex-row">
            {sharedMovies.map((m, i) => (
              <MovieCard key={i} movie={m} />
            ))}
          </div>
        ) : (
          <p>Shared movies not found ... Try again please 🤓</p>
        )}
      </div>
    </>
  );
};

export default PrettyShare;
