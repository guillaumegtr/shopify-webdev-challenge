import React from 'react';
import { useSelector } from 'react-redux';
import { Message, Transition } from 'semantic-ui-react';

const NominationBanner = () => {
  const nominationsCount = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.movies.length
  );

  const isNominationAttempt = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.toggleNomination
  );

  return (
    <>
      {nominationsCount === 5 && (
        <Transition
          animation="pulse"
          duration="500"
          visible={!isNominationAttempt}
        >
          <Message
            warning
            size="small"
            header="Warning: Can not nominate more movies!"
            content="You've reach the maximum of 5 nominated movies! You should remove one and try again 😊"
          />
        </Transition>
      )}
    </>
  );
};

export default NominationBanner;
