import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, List, Pagination } from 'semantic-ui-react';
import { updateMovieResults } from '../redux/actions/movies';
import { getMoviesByPage } from '../api/omdb';
import ResultItem from './items/result-item';

interface ResultsProps {
  className: string;
}

const Results = (props: ResultsProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  // const [results, setResults] = useState<IMovie[]>([]);

  const searchString = useSelector(
    (state: ShoppiesState) => state.search.searchTerm
  );
  const results = useSelector((state: ShoppiesState) => state.movies);
  const resultsPage = useSelector(
    (state: ShoppiesState) => state.search.pagesNumber
  );

  useEffect(() => {}, []);

  useEffect(() => {
    if (results.length === 0) {
      setCurrentPage(1);
    }
  }, [results]);

  const searchResults = () => {
    if (searchString) {
      return `Results for "${searchString}"`;
    } else {
      return 'Try searching a movie 🎥 !';
    }
  };

  const handlePageChange = async (pageChangeEvent: any) => {
    const { activePage } = pageChangeEvent;
    setCurrentPage(activePage);
    const data = await getMoviesByPage(searchString, activePage);
    dispatch(updateMovieResults(data.Search));
  };

  return (
    <Card className={`results p-1 ${className}`}>
      <Card.Header as="h4">{searchResults()}</Card.Header>
      <Card.Content>
        <List>
          {results &&
            results.map((movie, i) => (
              <ResultItem
                key={i}
                movie={movie}
                List={List}
                nominated={movie.isNominated}
              />
            ))}
        </List>
      </Card.Content>
      <div className="flex-row justify-center">
        {results.length > 0 && (
          <Pagination
            boundaryRange={0}
            onPageChange={(e, data) => handlePageChange(data)}
            activePage={currentPage}
            ellipsisItem={null}
            firstItem={null}
            lastItem={null}
            siblingRange={1}
            totalPages={resultsPage}
          />
        )}
      </div>
    </Card>
  );
};

export default Results;
