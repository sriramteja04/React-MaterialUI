import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Auth/login/Login';
import Home from './components/Home/Home';
import PrivateRouter from './components/Routers/PrivateRouter';
import NotFound from './components/Layouts/NotFound';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRouter exact path='/home' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
