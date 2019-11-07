import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CssBaseline, Toolbar, Typography, IconButton, AppBar, Badge } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { logout } from '../../modules/Auth/Login/actions';

const Appbar = props => {
    const { open, toggleHandler } = props;

    const logoutHandler = () => {
        props.logout();
    };

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
                            onClick={toggleHandler}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <div className={!open ? 'toolbar__heading' : 'toolbar__heading shift'}>
                        <Typography component="h1" variant="h6" color="inherit" noWrap>
                            Admin Portal
                        </Typography>
                    </div>
                    <div className="toolbar--notification">
                        <IconButton color="inherit" className={'toolbar--notification addbutton'}>
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
                        <IconButton color={'inherit'} onClick={logoutHandler}>
                            <Link to={'/'}>
                                <ExitToAppIcon />
                            </Link>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default connect(
    null,
    { logout }
)(Appbar);