import React from 'react';
import Clock from '../Clock/Clock';
import CreaturesContainer from '../Creatures/CreaturesContainer';

const Main = props => {

  return (
    <>
      {props.match.url === '/' && <Clock now={props.now} />}
      <CreaturesContainer path={props.match.url} />
    </>
  )
};

export default Main;