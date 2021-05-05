import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { getMoviesByImdbIDs } from '../api/omdb';
import PrettyShare from '../components/pretty-share';
import PrettyUser from '../components/pretty-user';

const NominationsPretty = () => {
  const history = useHistory();
  const nominatedMovies = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.movies
  );
  const [isShareView, setIsShareView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sharedMovies, setSharedMovies] = useState<IMovie[]>();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const imdbIds = urlParams.get('ids');
    if (imdbIds) {
      setIsShareView(true);
    }
  }, []);

  useEffect(() => {
    if (!isShareView) {
      setIsLoading(false);
    }
  }, [nominatedMovies]);

  useEffect(() => {
    setIsLoading(true);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const imdbIds = urlParams.get('ids');
    (async () => {
      if (imdbIds) {
        const movies = await getMoviesByImdbIDs(imdbIds.split(','));
        setSharedMovies(movies);
        setIsLoading(false);
      }
    })();
  }, [isShareView]);

  const goToHome = () => {
    history.push('/home');
  };

  return (
    <div className="nominations-pretty container">
      <div className="cards-container flex-row">
        {isLoading ? (
          <Loader active inline="centered" />
        ) : isShareView ? (
          <PrettyShare sharedMovies={sharedMovies} isLoading={isLoading} />
        ) : (
          <PrettyUser />
        )}
      </div>
      <div className="flex-row nav-footer">
        <a onClick={goToHome} style={{ cursor: 'pointer' }}>
          Back
        </a>
        <a onClick={goToHome} style={{ cursor: 'pointer' }}>
          Share
        </a>
      </div>
    </div>
  );
};

export default NominationsPretty;
