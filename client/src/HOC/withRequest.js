import React, { Component } from 'react';
import axios from 'axios';

const withRequest = OriginalComp => {
  class UpdatedComponent extends Component {
    state = {
      id: '',
      password: ''
    };

    handleInput = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e, type) => {
      e.preventDefault();
      const endpoint = `/${type}`;

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
          if (type === 'signup') {
            if (res.data.msg === 'SINGUP/SUCCESS') {
              alert('Your ID got registered..');
              this.props.history.push('/login');
            }
            if (res.data.msg === 'SINGUP/EXISTS_ALREADY') {
              alert('This ID already exists..');
            }
          }
          if (type === 'login') {
            if (res.data.msg === 'LOGIN/SUCCESS') {
              alert(`Welcome, ${res.data.id}`);
              this.props.history.push('/');
            }
            if (res.data.msg === 'LOGIN/FAILURE') {
              alert('Login failed.. Try again!');
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
    render() {
      return (
        <OriginalComp
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }
  return UpdatedComponent;
};

export default withRequest;
