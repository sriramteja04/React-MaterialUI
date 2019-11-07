import React from 'react';
import { Divider, Drawer, IconButton, List } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ListItems from './listItems';

const SideDrawer = props => {
    const { open, toggleHandler } = props;
    return (
        <>
            <Drawer className={'sidedrawer'} variant={'persistent'} open={open}>
                <div>
                    <IconButton onClick={toggleHandler}>
                        <CloseIcon color={'inherit'} fontSize={'large'} color={'action'} />
                    </IconButton>
                </div>
                <Divider />
                <List className={'list'}>
                    <ListItems open={open} toggle={toggleHandler} />
                </List>
            </Drawer>
        </>
    );
};

export default SideDrawer;
