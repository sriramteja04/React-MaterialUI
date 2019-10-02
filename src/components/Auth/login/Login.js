import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
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
  };

  render() {
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>

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
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default connect(
  null,
  {
    login
  }
)(SignIn);
