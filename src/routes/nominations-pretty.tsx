import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Loader, Popup } from 'semantic-ui-react';
import { getMoviesByImdbIDs } from '../api/omdb';
import PrettyShare from '../components/pretty-share';
import PrettyUser from '../components/pretty-user';
import { nominateMovie } from '../redux/actions/nominate';

const NominationsPretty = () => {
  const history = useHistory();
  const [isShareView, setIsShareView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sharedMovies, setSharedMovies] = useState<Array<IMovie>>([]);

  const nominatedMovies = useSelector(
    (state: ShoppiesState) => state.nominatedMovies.movies
  );

  useEffect(() => {
    if (getUrlParams()) {
      setIsShareView(true);
      getMoviesFromUrlParams(getUrlParams().split(','));
    } else {
      setIsLoading(false);
    }
  }, []);

  const getUrlParams = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('ids');
  };

  const getMoviesFromUrlParams = (imdbIds: string[]) => {
    (async () => {
      if (imdbIds) {
        const movies = await getMoviesByImdbIDs(imdbIds);
        setSharedMovies(movies);
        setIsLoading(false);
      }
    })();
  };

  const goToHome = () => {
    history.push('/home');
  };

  const createShareLink = () => {
    const shareableIds = nominatedMovies.map((m) => m.id).join(',');
    const shareableLink = `${window.location.origin}/nominations?ids=${shareableIds}`;
    navigator.clipboard.writeText(shareableLink);
  };

  return (
    <div className="nominations-pretty container">
      {isLoading ? (
        <Loader active inline="centered" className="my-1" />
      ) : isShareView ? (
        <PrettyShare sharedMovies={sharedMovies} />
      ) : (
        <PrettyUser nominatedMovies={nominatedMovies} />
      )}
      <div className="flex-row nav-footer mt-1">
        <Button onClick={goToHome} style={{ cursor: 'pointer' }}>
          Back
        </Button>
        <Button
          onClick={() => setIsShareView(false)}
          style={{ cursor: 'pointer' }}
        >
          My nominations
        </Button>
        <Popup
          content="Shareable link copied to clipboard!"
          inverted
          position="top center"
          on="click"
          trigger={
            <Button
              onClick={createShareLink}
              style={{ cursor: 'pointer' }}
              disabled={
                (sharedMovies.length === 0 && isShareView) ||
                (!isShareView && nominatedMovies.length === 0)
              }
            >
              Share
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default NominationsPretty;
