import React from 'react';
import SearchBar from '../components/search-bar';
import Results from '../components/results';
import Nominations from '../components/nominations';
import NominationBanner from '../components/nomination-banner';
import Header from '../components/header';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="flex-row justify-center">
          <NominationBanner />
        </div>
        <div className="flex-col mt-2 section-header">
          <Header />
        </div>
        <div className="flex-row mt-2">
          <SearchBar />
        </div>
        <div className="flex-row mt-2 section-3">
          <Results className="mr-2" />
          <Nominations className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
