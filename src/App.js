import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import Login from './components/Auth/login/Login';
import Home from './components/Home/Home';
import PrivateRouter from './components/Routers/PrivateRouter';
import NotFound from './components/Layouts/NotFound';
import Navbar from './components/Layouts/Navbar';
import { getCurrentUser } from './store/actions/actions';
import './scss/style.scss';

class App extends React.Component {
  async componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Login} />
          <Navbar />
          <PrivateRouter exact path="/home" component={Home} />
          <Route exact component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { getCurrentUser }
)(App);
