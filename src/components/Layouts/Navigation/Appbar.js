import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { mainListItems, secondaryListItems } from './listItems';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../../modules/Auth/Login/actions';

class Appbar extends React.Component {
    state = {
        open: false,
    };

    toggleHandler = () => {
        this.setState(prevState => ({
            open: !prevState.open,
        }));
    };

    logoutHandler = () => {
        this.props.logout();
    };

    render() {
        return (
            <div>
                <CssBaseline />
                <AppBar position="absolute" className="navbar">
                    <Toolbar className={'toolbar'}>
                        <div className={'toolbar__menuicon'}>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.toggleHandler}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                        <div
                            className={
                                !this.state.open ? 'toolbar__heading' : 'toolbar__heading shift'
                            }
                        >
                            <Typography component="h1" variant="h6" color="inherit" noWrap>
                                Admin Portal
                            </Typography>
                        </div>
                        <div className="toolbar--notification">
                            <IconButton
                                color="inherit"
                                className={'toolbar--notification addbutton'}
                            >
                                <AddIcon />
                                Create New
                            </IconButton>
                            <IconButton color="inherit">
                                <ChatIcon />
                            </IconButton>
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton color={'inherit'} onClick={this.logoutHandler}>
                                <Link to={'/'}>
                                    <ExitToAppIcon />
                                </Link>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={!this.state.open ? 'sidedrawer__close' : 'sidedrawer'}
                    variant="permanent"
                    open={this.state.open}
                >
                    <div className={'sidedrawer__closeIcon'}>
                        {this.state.open ? (
                            <IconButton
                                className={'sidedrawer_closeIcon close'}
                                onClick={this.toggleHandler}
                            >
                                <CloseIcon />
                            </IconButton>
                        ) : (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={this.toggleHandler}
                                className={'sidedrawer_closeIcon menu'}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                    <Divider />
                    <List>{secondaryListItems}</List>
                </Drawer>
            </div>
        );
    }
}

export default connect(
    null,
    { logout }
)(Appbar);
