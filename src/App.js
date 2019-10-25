import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

import PrivateRouter from './components/Routers/PrivateRouter';
import NotFound from './components/Layouts/NotFound';
import { getCurrentUser } from './modules/Auth/Login/actions';
import './scss/style.scss';
import Layout from './components/Layouts/index';

import Home from './components/Home/Home';
import NewPassword from './components/Auth/New Password/NewPassword';
import ForgetPassword from './components/Auth/forget password/ForgetPassword';
import Login from './components/Auth/login/Login';

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (this.props.loading) {
      console.log('loading..........');
      return <CircularProgress disableShrink />;
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <Switch>
          <Route exact path={'/newPassword'} component={NewPassword} />
          <Route exact path={'/forgetPassword'} component={ForgetPassword} />
          <Route exact path={'/'} component={Login} />
          <Layout>
            <PrivateRouter exact path="/home" component={Home} />
          </Layout>
          <Route exact component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.get('loading'),
  error: state.get('error'),
});

export default connect(
  mapStateToProps,
  { getCurrentUser }
)(App);
