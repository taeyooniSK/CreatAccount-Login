import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Menu from './components/Menu';

// import axios from 'axios';

import Navigation from './components/Navigation';

export default class App extends Component {
  state = {
    data: ''
  };
  // fetchTest = () => {
  //   const URL = 'http://localhost:8000';
  //   axios
  //     .get(URL)
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({ data: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Router>
        {/* <button onClick={this.fetchTest}>Fetch</button> */}
      </div>
    );
  }
}
