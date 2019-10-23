import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { logout } from '../../modules/Auth/Login/actions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logout: {
    textDecoration: 'none',
    color: 'inherit',
  },
  outterBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  innerBox: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Navbar = props => {
  const classes = useStyles();

  const logoutHandler = () => {
    props.logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className={classes.outterBox}>
            <Box className={classes.innerBox}>
              <Box>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box>
                <Typography variant="h6" color="inherit">
                  DashBoard
                </Typography>
              </Box>
            </Box>
            {props.username && (
              <Box className={classes.innerBox}>
                <Box>
                  <Typography color="inherit" variant="h6">
                    {/* <AccountCircleIcon /> */}
                    {props.username} |
                  </Typography>
                </Box>
                <Box>
                  <Button color="inherit">
                    <Link
                      className={classes.logout}
                      onClick={logoutHandler}
                      to="/"
                    >
                      Logout
                    </Link>
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.get('username'),
});

export default connect(
  mapStateToProps,
  {
    logout,
  }
)(Navbar);
