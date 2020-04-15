import React from 'react';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
import './Home.css';

const Home = props => {
  return (
    <div className="Home">
      Todo:<br />
      Time display (updates in real time)<br />
      CreaturesContainer to display currently available creatures
    </div>
  );
};

export default Home;