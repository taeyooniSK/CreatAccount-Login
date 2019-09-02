import React, { Component } from 'react';
import withRequest from '../HOC/withRequest';

class Signup extends Component {
  render() {
    const { handleInput, handleSubmit } = this.props;

    return (
      <div>
        <h1>Signup Page</h1>
        <form
          action='/signup'
          method='POST'
          onSubmit={e => handleSubmit(e, 'signup')}
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
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}

export default withRequest(Signup);
