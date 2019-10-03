import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>You are successfully authenticated {this.props.username}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.get('loading'),
  username: state.get('username')
});

export default connect(mapStateToProps)(Home);
