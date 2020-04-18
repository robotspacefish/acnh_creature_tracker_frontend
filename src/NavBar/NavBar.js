import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
import { setPage } from '../actions/appActions';
import './NavBar.css';

const NavBar = props => {
  const handleOnClick = e => (props.setPage(e.target.dataset.page));
  const handleLogout = () => {
    props.setPage('home');
    props.logout();
  }

  return (
    <div className="Nav">
      <NavLink data-page="home" exact to='/' onClick={handleOnClick}>Home</NavLink>
      {!props.username ?
        (<>
          <NavLink data-page="login" exact to='/login' onClick={handleOnClick}>Log In</NavLink>
          <NavLink data-page="signup" exact to='/signup' onClick={handleOnClick}>Sign Up</NavLink>
        </>) :
        (
          <>
            Welcome, {props.username}!
            <NavLink data-page="user" exact to={`/${props.username}/creatures`} onClick={handleOnClick}>My Creatures</NavLink>

            <NavLink data-page="home" exact to='/' onClick={handleLogout}>Log Out</NavLink>
          </>
        )
      }
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    setPage: page => dispatch(setPage(page))
  };
};

export default connect(null, mapDispatchToProps)(NavBar);