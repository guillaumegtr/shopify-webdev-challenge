import React from 'react';
import { Card } from 'semantic-ui-react';

interface ResultsProps {
  className: string;
}

const Results = (props: ResultsProps) => {
  const { className } = props;
  return <Card className={`results ${className}`}>results</Card>;
};

export default Results;
