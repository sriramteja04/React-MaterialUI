import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SettingsIcon from '@material-ui/icons/Settings';

const TableToolBar = ({ rows, input }) => {
    return (
        <div className={'promo-toolbar'}>
            <div className={'toolbar-items-1'}>
                <h2 className={'toolbar-items-1__heading'}>Promotions</h2>
                <span className={'toolbar-items-1__items'}>{rows.length} items</span>
            </div>
            <div className={'toolbar-items-2'}>
                <FormControl className={'form-control'} variant="outlined">
                    <InputLabel>Incomplete Setup</InputLabel>
                    <Select className={'form-control select-input'} value={input}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" className={'column--btn'}>
                    <SettingsIcon />
                    Columns
                </Button>
                <FormControlLabel
                    className={'switch'}
                    control={<Switch />}
                    label="Inline Editing"
                />
            </div>
        </div>
    );
};

export default TableToolBar;
