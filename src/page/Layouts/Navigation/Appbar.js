import React from 'react';

import {
    CssBaseline,
    Drawer,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    AppBar,
    Badge,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import ListItems from './listItems';

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
            <>
                <CssBaseline />
                <AppBar className="navbar">
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
                <Drawer className={'sidedrawer'} variant={'persistent'} open={this.state.open}>
                    <div>
                        <IconButton onClick={this.toggleHandler}>
                            <CloseIcon fontSize={'large'} color={'action'} />
                        </IconButton>
                    </div>
                    <Divider />
                    <List className={'list'}>
                        <ListItems open={this.state.open} toggle={this.toggleHandler} />
                    </List>
                </Drawer>
            </>
        );
    }
}

export default connect(
    null,
    { logout }
)(Appbar);
