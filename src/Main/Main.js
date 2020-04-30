import React from 'react';
import Clock from '../Clock/Clock';
import CreaturesContainer from '../Creatures/CreaturesContainer';

const Main = props => {

  return (
    <main className={props.match.url.includes('/creatures') ? 'scrollbar' : ''}>
      {props.match.url === '/' && <Clock now={props.now} />}
      <CreaturesContainer path={props.match.url} />
    </main>
  )
};

export default Main;