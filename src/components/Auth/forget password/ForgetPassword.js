import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Link as MatLink } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import { resendCode } from '../../../modules/Auth/Forgot password/actions';

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
    return (
      <div>
        <div className={'Auth'}>
          <Card className={'Auth-card'}>
            <h3 className={'Auth-card__heading m-1'}>Forget Password</h3>
            <form className={'form'} noValidate onSubmit={this.submitHandler}>
              <div className={'form__control m-1'}>
                <TextField
                  className={'form__input'}
                  required
                  label="user name"
                  name="username"
                  type="name"
                  value={this.state.username}
                  onChange={this.inputChangeHandler}
                />
              </div>

              <Button
                type={'submit'}
                variant="contained"
                className={'btn-primary m-2'}
              >
                Send Code
              </Button>
              <div className={'form__link m-2'}>
                <MatLink
                  onClick={this.goBack}
                  className={'p-1'}
                  variant="body2"
                >
                  Already have an Account?
                </MatLink>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    resendCode,
  }
)(ForgetPassword);
