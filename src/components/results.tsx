import React from 'react';
import { useSelector } from 'react-redux';
import { Card, List, Pagination } from 'semantic-ui-react';
import ResultItem from './items/result-item';

interface ResultsProps {
  className: string;
}

const Results = (props: ResultsProps) => {
  const { className } = props;
  const searchString = useSelector(
    (state: ShoppiesState) => state.search.searchTerm
  );
  const results = useSelector((state: ShoppiesState) => state.movies);
  const resultsPage = useSelector(
    (state: ShoppiesState) => state.search.pagesNumber
  );
  const searchResults = () => {
    if (searchString) {
      return `Results for "${searchString}"`;
    } else {
      return 'Waiting for a movie search 🎥 !';
    }
  };

  return (
    <Card className={`results p-1 ${className}`}>
      <Card.Header as="h4">{searchResults()}</Card.Header>
      <Card.Content>
        <List>
          {results &&
            results.map((movie, i) => (
              <ResultItem key={i} movie={movie} List={List} />
            ))}
        </List>
      </Card.Content>
      <div className="flex-row justify-center">
        {results.length > 0 && (
          <Pagination
            boundaryRange={0}
            defaultActivePage={1}
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
