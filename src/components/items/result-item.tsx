import React, { useEffect, useState } from 'react';
import { Button, List } from 'semantic-ui-react';
import { nominateMovie } from '../../redux/actions/nominate';
import { useDispatch, useSelector } from 'react-redux';

interface ResultProps {
  List: typeof List;
  movie: IMovie;
  nominated: boolean;
}

const ResultItem = (props: ResultProps) => {
  const { List, movie, nominated } = props;
  const dispatch = useDispatch();
  const nominatedMovies = useSelector(
    (state: ShoppiesState) => state.nominatedMovies
  );

  const handleNominate = () => {
    if (!nominated) {
      dispatch(nominateMovie(movie));
    }
  };

  return (
    <List.Item>
      <List.Content floated="right">
        <Button onClick={handleNominate} disabled={nominated} size="tiny">
          Nominate
        </Button>
      </List.Content>
      <p>
        {movie.title} ({movie.year})
      </p>
    </List.Item>
  );
};

export default ResultItem;
