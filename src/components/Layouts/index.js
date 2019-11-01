import React from 'react';
import Container from '@material-ui/core/Container';

import Navigation from './Navigation';

const Layout = props => {
    return (
        <div>
            <Navigation />
            <Container maxWidth={'xl'}>
                <div className={'container'}>{props.children}</div>
            </Container>
        </div>
    );
};

export default Layout;
