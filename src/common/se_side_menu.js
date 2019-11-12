import React from 'react';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const SideMenu = props => {
    const { toggleHandler, open } = props;
    let drawerClasses = 'side-menu';
    if (props.show) {
        drawerClasses = 'side-menu open';
    }

    return (
        <div className={drawerClasses}>
            <IconButton className={'close-icon'} onClick={toggleHandler}>
                <CloseIcon color={'action'} fontSize={'large'} />
            </IconButton>
        </div>
    );
};

export default React.memo(SideMenu);
