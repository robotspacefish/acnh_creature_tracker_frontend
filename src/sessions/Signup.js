import React, { Component } from 'react';
import './sessions.css';

export default class Signup extends Component {
  render() {
    return (
      <form className="Signup">
        <div className="input-container">
          <label>Username</label><br />
          <input type="text" name="name" />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div className="input-container">
          <p>Select Your Hemisphere:</p>
          <div className="input-container">
            <label>North</label>
            <input type="radio" id="north" name="hemisphere" value="North" />
          </div>
          <div className="input-container">
            <label>South</label>
            <input type="radio" id="south" name="hemisphere" value="South" />
          </div>
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}