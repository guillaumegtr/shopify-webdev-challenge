import React from 'react';
import { useSelector } from 'react-redux';
import { Card, List, Button, Pagination } from 'semantic-ui-react';

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
          {results.map((movie, i) => (
            <List.Item key={i}>
              <List.Content floated="right">
                <Button size="tiny">Nominate</Button>
              </List.Content>

              <p>
                {movie.title} ({movie.year})
              </p>
            </List.Item>
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
