import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    id: '',
    password: ''
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = '/login';
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
        if (res.data.msg === 'LOGIN/SUCCESS') {
          alert(`Welcome, ${res.data.id}`);
          this.props.history.push('/');
        }
        if (res.data.msg === 'LOGIN/FAILURE') {
          this.props.history.push('/signup');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h1> Login Page</h1>
        <form action='/login' method='POST' onSubmit={this.handleSubmit}>
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
