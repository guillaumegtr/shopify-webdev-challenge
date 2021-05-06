import React from 'react';
import MovieCard from './movie-card';

interface PrettyUserProps {
  nominatedMovies: IMovie[];
}

const PrettyUser = (props: PrettyUserProps) => {
  const { nominatedMovies } = props;
  return (
    <div className="my-1">
      {nominatedMovies.length === 0 ? (
        <p>Nothing to show. Nominate at least one movie 👍</p>
      ) : (
        <div className="cards-container flex-row">
          {nominatedMovies.map((m, i) => (
            <MovieCard key={i} movie={m} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PrettyUser;
