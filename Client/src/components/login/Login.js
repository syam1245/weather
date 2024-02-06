import React, { Component } from 'react';

class Login extends Component {
  // define the handleClick function
  handleClick() {
    // redirect the user to the login.html file
    window.location.href = "logInSignup.html";
  }

  // use the componentDidMount lifecycle method to execute the handleClick function
  componentDidMount() {
    this.handleClick();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>Loading...</p>
      </div>
    );
  }
}

export default Login;
