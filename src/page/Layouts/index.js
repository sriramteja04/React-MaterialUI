import React from 'react';
import Container from '@material-ui/core/Container';

import Appbar from '../../components/Navigation/Appbar';
import SideDrawer from '../../components/Navigation/SideDrawer';
import Backdrop from '../../components/Navigation/Backdrop';

class Layout extends React.Component {
    state = {
        open: false,
    };

    toggleSideDrawer = () => {
        this.setState(prevState => ({
            open: !prevState.open,
        }));
    };

    toggleBackdrop = e => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <>
                <Appbar open={this.state.open} toggleHandler={this.toggleSideDrawer} />
                <SideDrawer open={this.state.open} toggleHandler={this.toggleSideDrawer} />
                {this.state.open && <Backdrop closeBackdrop={this.toggleBackdrop} />}
                <Container maxWidth={'xl'} className={'App__container'}>
                    {this.props.children}
                </Container>
            </>
        );
    }
}

export default Layout;
