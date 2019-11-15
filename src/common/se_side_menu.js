import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const SideMenu = props => {
    const { toggleHandler, open } = props;

    return (
        <div className={open ? 'side-menu open' : 'side-menu'}>
            <IconButton className={'close-icon svg-icon'} onClick={toggleHandler}>
                <CloseIcon color={'action'} fontSize={'large'} />
            </IconButton>
        </div>
    );
};

export default React.memo(SideMenu);
