import React from 'react';
import CreaturesContainer from '../Creatures/CreaturesContainer';
import Clock from '../Clock';
import './Home.css';

const Home = props => {
  return (
    <div className="Home">
      <Clock />
      <CreaturesContainer creaturesToRender="currentCreatures" />
    </div>
  );
};

export default Home;