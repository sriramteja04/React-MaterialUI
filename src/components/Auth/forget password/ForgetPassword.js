import React from 'react';
import { Card, Link as MatLink } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { resendCode } from '../../../modules/Auth/Forgot password/actions';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class ForgetPassword extends React.Component {
    state = {
        username: '',
        inputError: '',
    };

    goBack = () => {
        this.props.history.goBack();
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitHandler = e => {
        e.preventDefault();
        if (this.state.username) {
            this.props.resendCode(this.state.username);
        } else {
            this.setState({
                inputError: 'Please Enter Registered User name',
            });
        }
    };

    render() {
        console.log(this.props.resendError);
        return (
            <div>
                <div className={'Auth'}>
                    <Card className={'Auth-card'}>
                        <h3 className={'Auth-card__heading m-1'}>Forget Password</h3>
                        {this.state.inputError && (
                            <p className={'error'}>{this.state.inputError}</p>
                        )}
                        {this.props.resendError && (
                            <p className={'error'}>{this.props.resendError}</p>
                        )}
                        <form className={'form'} noValidate onSubmit={this.submitHandler}>
                            <div className={'form__control m-1'}>
                                <AccountCircleIcon className={'form__icon'} />
                                <TextField
                                    className={
                                        !this.state.inputError && !this.props.resendError
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
                            <Grid>
                                <Grid>
                                    <Button
                                        type={'submit'}
                                        variant="contained"
                                        className={'btn-primary m-2'}
                                    >
                                        Send Code
                                    </Button>
                                </Grid>
                                <Grid>
                                    <Button
                                        onClick={this.goBack}
                                        variant="contained"
                                        className={'btn-primary p-1'}
                                    >
                                        Log In
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Card>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    resendError: state.get('resendError'),
});

export default connect(
    mapStateToProps,
    {
        resendCode,
    }
)(ForgetPassword);
