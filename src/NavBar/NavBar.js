import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink exact to='/logout'>Log Out</NavLink>
        </>
      )
    }
  </div>
);

export default NavBar;