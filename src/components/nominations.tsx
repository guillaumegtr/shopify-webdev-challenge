import React from 'react';
import { Card } from 'semantic-ui-react';

interface NominationsProps {
  className: string;
}

const Nominations = (props: NominationsProps) => {
  const { className } = props;
  return <Card className={`nominations ${className}`}>nominations</Card>;
};

export default Nominations;
