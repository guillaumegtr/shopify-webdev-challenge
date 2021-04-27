import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';

interface ResultsProps {
  className: string;
}

const Results = (props: ResultsProps) => {
  const { className } = props;
  const searchString = useSelector((state: ShoppiesState) => state.searchTerm);
  return (
    <Card className={`results p-1 ${className}`}>
      <Card.Header as="h4">{`Results for "${searchString}"`}</Card.Header>
    </Card>
  );
};

export default Results;
