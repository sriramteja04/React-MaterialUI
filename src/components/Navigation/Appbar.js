import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CssBaseline, IconButton, Badge } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { logout } from '../../modules/Auth/Login/actions';
import CreatePromo from '../Promotions/Create Promo/CreatePromo';

const Appbar = props => {
    const { open, toggleHandler } = props;

    const logoutHandler = () => {
        props.logout();
    };

    const [createNew, setCreateNew] = useState(false);

    const toggleCreateNew = () => {
        setCreateNew(!createNew);
    };

    return (
        <>
            <CssBaseline />
            <header className="header">
                <nav className="toolbar">
                    <div className={'toolbar__menuicon'}>
                        <IconButton onClick={toggleHandler}>
                            <MenuIcon fontSize={'large'} />
                        </IconButton>
                    </div>
                    <div className={!open ? 'toolbar__heading' : 'toolbar__heading shift'}>
                        <h1>Admin Portal</h1>
                    </div>
                    <div className="toolbar--notification">
                        <IconButton
                            onClick={toggleCreateNew}
                            color="inherit"
                            className={'toolbar--notification addbutton svg-icon'}
                        >
                            <AddIcon />
                            Create New
                        </IconButton>
                        <>{createNew && <CreatePromo close={toggleCreateNew} />}</>
                        <IconButton className={'svg-icon'} color="inherit">
                            <ChatIcon />
                        </IconButton>
                        <IconButton className={'svg-icon'} color="inherit">
                            <Badge badgeContent={4} className={'badge-number'} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            className={'svg-icon'}
                            color={'inherit'}
                            onClick={logoutHandler}
                        >
                            <Link to={'/'}>
                                <AccountCircleIcon />
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
