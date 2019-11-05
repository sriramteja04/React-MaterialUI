import React from 'react';
import Container from '@material-ui/core/Container';

import Navigation from './Navigation';

const Layout = props => {
    return (
        <div className={'App'}>
            <Navigation />
            <Container maxWidth={'xl'} className={'App__container'}>
                {props.children}
            </Container>
        </div>
    );
};

export default Layout;
