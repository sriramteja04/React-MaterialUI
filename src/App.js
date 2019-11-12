import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import NotFound from './page/Layouts/NotFound';
import { getCurrentUser } from './modules/Auth/Login/actions';
import Layout from './page/Layouts/index';
import PrivateRouter from './components/Routers/PrivateRouter';
import NewPassword from './components/Auth/New Password/NewPassword';
import ForgetPassword from './components/Auth/forget password/ForgetPassword';
import Login from './components/Auth/login/Login';
import Verification from './components/Auth/forget password/Verification';
import Dashboard from './page/Dashboard/Dashboard';
import Promotions from './page/Promotions/Promotions';
import './scss/index.scss';
import CreatePromo from './components/Promotions/Create Promo/CreatePromo';

class App extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        return (
            <div className={'app'}>
                <CssBaseline />
                <Switch>
                    <Route exact path={'/newPassword'} component={NewPassword} />
                    <Route exact path={'/forgetPassword'} component={ForgetPassword} />
                    <Route excat path={'/forgetPassword/:username'} component={Verification} />
                    <Route exact path={'/'} component={Login} />
                    <Layout>
                        <PrivateRouter exact path="/dashboard" component={Dashboard} />
                        <PrivateRouter exact path="/promotions" component={Promotions} />
                        <PrivateRouter
                            exact
                            path={'/promotions/create-new'}
                            component={CreatePromo}
                        />
                    </Layout>
                    <Route exact component={NotFound} />
                </Switch>
            </div>
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
