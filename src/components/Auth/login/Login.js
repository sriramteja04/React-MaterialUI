import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link as MatLink } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';

import { login } from '../../../store/actions/actions';
import './login.scss';

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
    // const user = await Auth.signIn(this.state.username, this.state.password);
    // console.log(user);
  };

  render() {
    if (this.props.loading) {
      return <CircularProgress disableShrink />;
    }

    if (this.props.isAuth) {
      return <Redirect to="/home" />;
    }

    return (
      <Card className={'login'}>
        <h3 className={'login__heading'}>Sign In</h3>
        <div>
          {this.props.error.length > 0 && (
            <div>
              <h3>{this.props.error}</h3>
            </div>
          )}
          <form className={'form'} noValidate onSubmit={this.submitHandler}>
            <div className={'form__control'}>
              <TextField
                className={'form__input'}
                variant="outlined"
                required
                label="username"
                name="username"
                placeholder="User Name"
                type="name"
                autoFocus
                value={this.state.username}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div className={'form__control'}>
              <TextField
                className={'form__input'}
                variant="outlined"
                required
                name="password"
                label="Password"
                type="password"
                placeholder="current-password"
                value={this.state.password}
                onChange={this.inputChangeHandler}
              />
            </div>
            <div>
              <FormControlLabel control={<Checkbox />} label={'Remember Me'} />
            </div>
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <MatLink href="#" variant="body2">
                  Forgot password?
                </MatLink>
              </Grid>
              <Grid item>
                <MatLink href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </MatLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Card>
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
