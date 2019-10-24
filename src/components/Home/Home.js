import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from '../UI/Table';
import FormControl from '../UI/FormControl';

export class Home extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      this.setState({
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <FormControl />
        {this.state.data && <Table data={this.state.data} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.get('loading'),
});

export default connect(mapStateToProps)(Home);
