import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import HelpIcon from '@material-ui/icons/Help';

import { login, disableError } from '../../../modules/Auth/Login/actions';

class SignIn extends React.Component {
    state = {
        username: '',
        password: '',
        inputError: '',
    };

    inputChangeHandler = e => {
        this.props.disableError();
        this.setState({
            [e.target.name]: e.target.value,
            inputError: '',
        });
    };

    submitHandler = e => {
        e.preventDefault();
        if (this.state.username && this.state.password) {
            //Authenticate User
            this.props.login(this.state.username, this.state.password);
        } else {
            this.setState({
                inputError: 'Please Enter User name and Password',
            });
        }
    };

    render() {
        if (this.props.loading) {
            return <CircularProgress disableShrink />;
        }

        if (this.props.isAuth) {
            return <Redirect to="/home" />;
        }

        return (
            <div className={'Auth'}>
                <Card className={'Auth-card'}>
                    <h3 className={'Auth-card__heading m-1'}>Login</h3>
                    {this.props.error && (
                        <div>
                            <p className={'error'}>{this.props.error}</p>
                        </div>
                    )}
                    {this.state.inputError && (
                        <div>
                            <p className={'error'}>{this.state.inputError}</p>
                        </div>
                    )}
                    <form className={'form'} noValidate onSubmit={this.submitHandler}>
                        <div className={'form__control m-1'}>
                            <AccountCircleIcon className={'form__icon'} />
                            <TextField
                                className={
                                    !this.state.inputError && !this.props.error
                                        ? 'form__input'
                                        : 'form__input error'
                                }
                                required
                                label="user name"
                                name="username"
                                type="name"
                                value={this.state.username}
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                        <div className={'form__control m-1'}>
                            <LockIcon className={'form__icon'} />
                            <TextField
                                className={
                                    !this.state.inputError && !this.props.error
                                        ? 'form__input'
                                        : 'form__input error'
                                }
                                required
                                label="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.inputChangeHandler}
                            />
                        </div>
                        <div className={'m-1'}>
                            <FormControlLabel control={<Checkbox />} label={'Remember Me'} />
                        </div>
                        <Button className={'btn-primary m-1'} type="submit" variant="contained">
                            Sign In
                        </Button>
                        <div className={'form__link m-2'}>
                            <Link to={'/forgetPassword'}>
                                <HelpIcon className={'form__icon'} />
                                Forgot password?
                            </Link>
                        </div>
                    </form>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.get('isAuth'),
    loading: state.get('loading'),
    error: state.get('error'),
});

export default connect(
    mapStateToProps,
    {
        login,
        disableError,
    }
)(SignIn);
