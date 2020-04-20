import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/userActions';
import { setPage } from '../actions/appActions';
import './NavBar.css';

const NavBar = props => {
  const handleOnClick = e => (props.setPage(e.target.dataset.page));

  const handleLogout = () => {
    props.logout();
    props.setPage('home');
  }

  return (
    <div className="Nav">
      <NavLink data-page="home" exact to='/' onClick={handleOnClick}>Currently Available Creatures</NavLink>
      {!props.username ?
        (<>
          <NavLink data-page="login" exact to='/login' onClick={handleOnClick}>Log In</NavLink>
          <NavLink data-page="signup" exact to='/signup' onClick={handleOnClick}>Sign Up</NavLink>
        </>) :
        (
          <>
            <NavLink data-page="user" exact to={`/${props.username}/creatures`} onClick={handleOnClick}>My Creatures</NavLink>
            <NavLink className="logout" data-page="logout" exact to='/' onClick={handleLogout}>Log Out</NavLink>
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