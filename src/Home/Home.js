import React from 'react';
import CreaturesContainer from '../Creatures/CreaturesContainer';
import Clock from '../Clock/Clock';
import './Home.css';

const Home = props => (
  <div className="Home container">
    <Clock />
    <CreaturesContainer creaturesToRender="currentCreatures" />
  </div>
);

export default Home;