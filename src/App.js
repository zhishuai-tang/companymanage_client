import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AppContent from './components/AppContent';
import UserMana from './components/UserMana';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Home>
            <AppContent>
              <Route path='/sys/userMana' component={UserMana} />
            </AppContent>
          </Home>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
