import React from 'react';
import SearchBar from '../components/search-bar';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>The Shoppies</h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
