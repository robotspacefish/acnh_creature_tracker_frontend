import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';

import './NavBar.css';

const NavBar = props => (
  <div className="Nav">
    <NavLink exact to='/'>Home</NavLink>
    {!props.username ?
      (<>
        <NavLink exact to='/login'>Log In</NavLink>
        <NavLink exact to='/signup'>Sign Up</NavLink>
      </>) :
      (
        <>
          Welcome, {props.username}!
          <NavLink exact to={`/${props.username}/creatures`}>My Creatures</NavLink>
          <button onClick={props.logout}>Log Out</button>
        </>
      )
    }
  </div>
);

export default connect(null, { logout })(NavBar);