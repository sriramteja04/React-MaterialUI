import React from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Link as MatLink } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export class Verification extends React.Component {
  state = {
    username: '',
    existingPassword: '',
    newPassword: '',
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
    const { username, existingPassword, newPassword } = this.state;
    this.props.completeNewPassword(username, existingPassword, newPassword);
  };

  render() {
    if (this.props.loading) {
      return <CircularProgress disableShrink />;
    }

    return (
      <div className={'Auth'}>
        <Card className={'Auth-card'}>
          <h3 className={'Auth-card__heading m-1'}>Change Password</h3>
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
            <div className={'form__control m-1'}>
              <TextField
                className={'form__input'}
                required
                label="Existing Password"
                name="existingPassword"
                type="password"
                value={this.state.existingPassword}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div className={'form__control m-1'}>
              <TextField
                className={'form__input'}
                required
                label="New Password"
                name="newPassword"
                type="password"
                value={this.state.newPassword}
                onChange={this.inputChangeHandler}
              />
            </div>
            <Button
              type={'submit'}
              variant="contained"
              className={'btn-primary m-2'}
            >
              Change Password
            </Button>
            <div className={'form__link m-2'}>
              <MatLink
                onClick={this.goBack}
                className={'p-1'}
                href="#"
                variant="body2"
              >
                Go Back
              </MatLink>
            </div>
          </form>
        </Card>
      </div>
    );
  }
}

export default Verification;
