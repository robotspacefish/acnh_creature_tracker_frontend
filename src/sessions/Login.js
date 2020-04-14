import React, { Component } from 'react';
import './sessions.css';

export default class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <form className="sessions-form Login">
        <div className="input-container">
          <label>Username</label><br />
          <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username} />
        </div>
        <div className="input-container">
          <label>Password</label><br />
          <input type="password" name="password" onChange={this.handleOnChange} value={this.state.password} />
        </div>

        <button>Log In</button>
      </form>
    );
  }
}