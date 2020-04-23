import React from 'react';
import NavBar from '../NavBar/NavBar';

import './Header.css';

const Header = props => (
  <div className="Header container">
    <h1 className="title">ACNH Creature Tracker</h1>
    <NavBar username={props.currentUser.username} />
  </div>
);

export default Header;