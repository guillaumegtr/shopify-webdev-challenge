import React from 'react';
import { Card } from 'semantic-ui-react';

interface NominationsProps {
  className: string;
}

const Nominations = (props: NominationsProps) => {
  const { className } = props;
  return (
    <Card className={`nominations p-1 ${className}`}>
      <Card.Header as="h4">Nominations</Card.Header>
    </Card>
  );
};

export default Nominations;
