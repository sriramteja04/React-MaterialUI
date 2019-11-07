import React from 'react';
import Container from '@material-ui/core/Container';

import Appbar from '../../components/Navigation/Appbar';
import SideDrawer from '../../components/Navigation/SideDrawer';

class Layout extends React.Component {
    state = {
        open: false,
    };

    toggleHandler = () => {
        this.setState(prevState => ({
            open: !prevState.open,
        }));
    };

    closeSideMenu = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div className={'App'}>
                <Appbar open={this.state.open} toggleHandler={this.toggleHandler} />
                <SideDrawer open={this.state.open} toggleHandler={this.toggleHandler} />

                <Container
                    onClick={this.closeSideMenu}
                    maxWidth={'xl'}
                    className={'App__container'}
                >
                    {this.props.children}
                </Container>
            </div>
        );
    }
}

export default Layout;
