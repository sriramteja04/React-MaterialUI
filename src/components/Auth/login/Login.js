import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link as MatLink } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';

import { login } from '../../../modules/Auth/Login/actions';

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = async e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
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
          {this.props.error.length > 0 && (
            <div>
              <h3>{this.props.error}</h3>
            </div>
          )}
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
                name="password"
                label="Password"
                type="password"
                value={this.state.password}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div className={'m-1'}>
              <FormControlLabel control={<Checkbox />} label={'Remember Me'} />
            </div>
            <Button
              className={'btn-primary m-1'}
              type="submit"
              variant="contained"
            >
              Sign In
            </Button>
            <div className={'form__link m-2'}>
              <MatLink className={'p-1'} href="#" variant="body2">
                Forgot password?
              </MatLink>
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
  }
)(SignIn);
