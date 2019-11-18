import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CssBaseline, Typography, IconButton, Badge } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { logout } from '../../modules/Auth/Login/actions';
// import ListAltIcon from "@material-ui/core/SvgIcon/SvgIcon";
import CreateNew from '../../common/createNew';
import Backdrop from './Backdrop';

const Appbar = props => {
    const { open, toggleHandler } = props;

    const logoutHandler = () => {
        props.logout();
    };

    const [displayDropdown, setDisplayDropdown] = useState(false);

    const toggleDropdown = () => {
        setDisplayDropdown(!displayDropdown);
    };

    return (
        <>
            <CssBaseline />
            <header className="header">
                <nav className="toolbar">
                    <div className={'toolbar__menuicon'}>
                        <IconButton color="inherit" onClick={toggleHandler}>
                            <MenuIcon fontSize={'large'} />
                        </IconButton>
                    </div>
                    <div className={!open ? 'toolbar__heading' : 'toolbar__heading shift'}>
                        <Typography component="h1" variant="h5" color="inherit" noWrap>
                            Admin Portal
                        </Typography>
                    </div>
                    <div className="toolbar--notification">
                        <IconButton
                            onClick={toggleDropdown}
                            color="inherit"
                            className={'toolbar--notification addbutton'}
                        >
                            <AddIcon />
                            Create New
                        </IconButton>
                        <>{displayDropdown && <CreateNew closeDropdown={toggleDropdown} />}</>
                        {displayDropdown && <Backdrop closeBackdrop={toggleDropdown} />}
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
                </nav>
            </header>
        </>
    );
};

export default connect(
    null,
    { logout }
)(Appbar);
