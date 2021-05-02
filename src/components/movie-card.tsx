import React from 'react';
import { Card, Image } from 'semantic-ui-react';

interface MovieCardProps {
  movie: IMovie;
}

const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;
  return (
    <Card>
      <Image src={movie.poster} wrapped />
      <Card.Header>
        {movie.title} - {movie.year}
      </Card.Header>
      <Card.Meta>
        {movie.type} - #{movie.id}
      </Card.Meta>
    </Card>
  );
};

export default MovieCard;
