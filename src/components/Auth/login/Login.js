import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link as MatLink } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import { login } from '../../../store/actions/actions';

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  };

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
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
      return <Redirect to='/home' />;
    }

    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />

        <Typography component='h1' variant='h5'>
          Sign in
          </Typography>
        <div>
          {this.props.error.length > 0 && <div>
            <h3>{this.props.error}</h3>
          </div>}
          <form noValidate onSubmit={this.submitHandler}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='username'
              name='username'
              autoComplete='User Name'
              type='name'
              autoFocus
              value={this.state.username}
              onChange={this.inputChangeHandler}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={this.state.password}
              onChange={this.inputChangeHandler}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <MatLink href='#' variant='body2'>
                  Forgot password?
                </MatLink>
              </Grid>
              <Grid item>
                <MatLink href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </MatLink>
              </Grid>
            </Grid>
            <Link to='/home'>Home Button</Link>
          </form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.get('isAuth'),
  loading: state.get('loading'),
  error: state.get('error')
});

export default connect(
  mapStateToProps,
  {
    login
  }
)(SignIn);
