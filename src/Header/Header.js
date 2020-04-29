import React from 'react';
import NavBar from '../NavBar/NavBar';

import owl from '../assets/images/owl.png';
import './Header.css';

const Header = props => (
  <header className="Header container">
    <div className="Header__title-container">
      <img className="logo" src={owl} alt="Hoo's There logo" />
      <h1 className="title">Hoo's There?</h1>
    </div>
    <NavBar username={props.currentUser.username} />
  </header>
);

export default Header;