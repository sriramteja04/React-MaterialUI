import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import Verification from './components/Auth/forget password/Verification';
import Dashboard from './components/Home/Dashboard';

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        if (this.props.loading) {
            return <CircularProgress disableShrink />;
        }

        // if(this.props.isAuth) {
        //   return <Redirect to={"/dashboard"} />
        // }

        return (
            <React.Fragment>
                <CssBaseline />
                <Switch>
                    <Route exact path={'/newPassword'} component={NewPassword} />
                    <Route exact path={'/forgetPassword'} component={ForgetPassword} />
                    <Route excat path={'/forgetPassword/:username'} component={Verification} />
                    <Route exact path={'/'} component={Login} />
                    <Layout>
                        {/*<PrivateRouter exact path="/home" component={Home} />*/}
                        <PrivateRouter exact path="/dashboard" component={Dashboard} />
                    </Layout>
                    <Route exact component={NotFound} />
                </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.get('isAuth'),
    loading: state.get('loading'),
    getUserError: state.get('error'),
});

export default connect(
    mapStateToProps,
    { getCurrentUser }
)(App);
