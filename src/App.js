import React, { Component } from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/Login';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={LoginForm} />
          <Route path='/home' component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
