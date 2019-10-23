import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import Login from './components/Auth/login/Login';
import Home from './components/Home/Home';
import PrivateRouter from './components/Routers/PrivateRouter';
import NotFound from './components/Layouts/NotFound';
import { getCurrentUser } from './modules/Auth/Login/actions';
import './scss/style.scss';
import Layout from './components/Layouts/index';

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
          <Layout>
            <PrivateRouter exact path="/home" component={Home} />
          </Layout>
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
