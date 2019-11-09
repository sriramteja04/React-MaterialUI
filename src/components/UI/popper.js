import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

export default class MenuListComposition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        this.anchorRef = React.createRef(null);
    }

    handleToggle = () => {
        this.setState({
            open: true,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <Button ref={this.anchorRef} onClick={this.handleToggle}>
                    Create New
                </Button>
                <Popper open={open} anchorEl={this.anchorRef.current} transition>
                    {({ TransitionProps }) => (
                        <Grow {...TransitionProps}>
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList autoFocusItem={open}>
                                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        );
    }
}
