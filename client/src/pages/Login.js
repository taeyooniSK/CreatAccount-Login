import React, { Component } from 'react';
import withRequest from '../HOC/withRequest';

class Login extends Component {
  render() {
    const { handleInput, handleSubmit } = this.props;
    return (
      <div>
        <h1> Login Page</h1>
        <form
          action='/login'
          method='POST'
          onSubmit={e => handleSubmit(e, 'login')}
        >
          <label htmlFor='id'>ID:</label>
          <input type='text' name='id' id='id' onChange={e => handleInput(e)} />
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            autoComplete='true'
            onChange={e => handleInput(e)}
          />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default withRequest(Login);
