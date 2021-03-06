import React, { Component } from 'react';
import SignupForm from './presenter';

class Container extends Component {
  state = {
    email: '',
    fullname: '',
    username: '',
    password: ''
  }
  render() {
    const { email, fullname, username, password } = this.state;
    return (
    <SignupForm
      handleInputChange={this._handleInputChange}
      handleSubmit={this._handleSubmit}
      _handleFacebookLogin={this._handleFacebookLogin}
      emailValue={email}
      fullnameValue={fullname}
      usernameValue={username}
      passwordValue={password}
      />
    );
  }
  _handleInputChange = event => {
    const {target: {value, name}} = event;
    console.log(value, name)
    this.setState({
      [name]: value
    })
    console.log(this.state)
  };
  _handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
  }
  _handleFacebookLogin = response => {
    console.log(response);
  }
}

export default Container;
