import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Menu from './components/Menu';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Router>
      </div>
    );
  }
}
