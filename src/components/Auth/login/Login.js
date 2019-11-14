import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import HelpIcon from '@material-ui/icons/Help';

import { login, disableError } from '../../../modules/Auth/Login/actions';
import Button from '../../../common/se_button';
import InputField from '../../../common/se_input_field';
import Spinner from '../../../common/se_spinner';

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
                username: '',
                password: '',
            });
        }
    };

    eraseInputValues = () => {
        this.setState({
            username: '',
            password: '',
        });
    };

    render() {
        if (this.props.loading) {
            return <Spinner />;
        }

        if (this.props.isAuth) {
            return <Redirect to="/promotions" />;
        }

        if (this.props.error) {
            this.eraseInputValues();
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
                        <div>
                            <InputField
                                className={
                                    !this.state.inputError && !this.props.error
                                        ? 'input__control'
                                        : 'input__control error'
                                }
                                required
                                label="User Name"
                                name="username"
                                type="text"
                                value={this.state.username}
                                onChange={this.inputChangeHandler}
                                autoComplete="off"
                                placeholder={'Enter user name'}
                            />
                        </div>
                        <div>
                            <InputField
                                className={
                                    !this.state.inputError && !this.props.error
                                        ? 'input__control'
                                        : 'input__control error'
                                }
                                required
                                label="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.inputChangeHandler}
                                autoComplete="off"
                                placeholder={'Enter password'}
                            />
                        </div>
                        <div className={'m-1'}>
                            <FormControlLabel control={<Checkbox />} label={'Remember Me'} />
                        </div>
                        <Button className={'btn btn-dark md'} type={'submit'}>
                            Log In
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
