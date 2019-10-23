import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import Layout from '../Layouts/index'

const PrivateRouter = props => {
  const { component: Component, isAuth, ...rest } = props;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuth ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = state => ({
  isAuth: state.get('isAuth'),
});

export default connect(mapStateToProps)(PrivateRouter);
