import React, { Component } from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import Home from './components/Home';
import AppContent from './components/AppContent';
import UserList from './components/UserList';
const naviData = [
  //{path: '/sys/orgMana', module: 'O'},
  {path: '/sys/userMana', module: 'UserList'}
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Home>
            <AppContent>
              <Route path='/sys/userMana' component={UserList} />
            </AppContent>
          </Home>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
