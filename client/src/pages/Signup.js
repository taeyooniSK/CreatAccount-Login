import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
  state = {
    id: '',
    password: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = '/signup';
    const data = {
      id: this.state.id,
      password: this.state.password
    };
    axios({
      method: 'post',
      url: endpoint,
      data
    })
      .then(res => {
        console.log(res.data.msg);
        if (res.data.msg === 'Your ID registered..') {
          this.props.history.push('/login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Signup Page</h1>
        <form action='/signup' method='POST' onSubmit={this.handleSubmit}>
          <label htmlFor='id'>ID:</label>
          <input type='text' name='id' id='id' onChange={this.handleInput} />
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={this.handleInput}
          />
          <button>Sign up</button>
        </form>
      </div>
    );
  }
}
