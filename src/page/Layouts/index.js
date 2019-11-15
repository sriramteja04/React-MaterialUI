import React from 'react';
// import Container from '@material-ui/core/Container';

import Appbar from '../../components/Navigation/Appbar';
import Backdrop from '../../components/Navigation/Backdrop';
import SideMenu from '../../common/se_side_menu';
import Container from '../../components/HOC/Container';

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
        const { open } = this.state;
        return (
            <>
                <Appbar open={open} toggleHandler={this.toggleSideDrawer} />
                {open && <SideMenu open={open} toggleHandler={this.toggleSideDrawer} />}
                {open && <Backdrop closeBackdrop={this.toggleBackdrop} />}
                {/*<Container maxWidth={'xl'} className={'App__container'}>*/}
                <Container>{this.props.children}</Container>
            </>
        );
    }
}

export default Layout;
