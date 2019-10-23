import React from 'react';
import Container from '@material-ui/core/Container';

import Navbar from './Navbar/Navbar';

const Layout = props => {
  return (
    <div>
      <Navbar />

      <Container maxWidth={'xl'}>{props.children}</Container>
    </div>
  );
};

export default Layout;
