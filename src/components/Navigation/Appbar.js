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
import CreatePromo from '../Promotions/Create Promo/CreatePromo';
import Dropdown from '../../common/se_dropdown';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DraftsIcon from '@material-ui/icons/Drafts';
// import ListAltIcon from "@material-ui/core/SvgIcon/SvgIcon";

const Appbar = props => {
    const { open, toggleHandler } = props;

    const logoutHandler = () => {
        props.logout();
    };

    const [createNew, setCreateNew] = useState(false);

    const [displayDropdown, setDisplayDropdown] = useState(false);

    const toggleCreateNew = () => {
        setCreateNew(!createNew);
    };

    const toggleDropdown = () => {
        setDisplayDropdown(!displayDropdown);
    };

    const listItems = [
        { image: <ListAltIcon />, label: 'Promotions', onClick: toggleCreateNew },
        { image: <DraftsIcon />, label: 'Message' },
    ];

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
                        {/*<Link to={'/promotions/create-new'}>*/}
                        <IconButton
                            onClick={toggleDropdown}
                            color="inherit"
                            className={'toolbar--notification addbutton'}
                        >
                            <AddIcon />
                            Create New
                        </IconButton>
                        <>{displayDropdown && <Dropdown list={listItems} />}</>
                        {/*</Link>*/}
                        <>{createNew && <CreatePromo close={toggleCreateNew} />}</>
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
