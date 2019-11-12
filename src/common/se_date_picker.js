import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiPickersDay: {
            daySelected: {
                '&:hover': {
                    backgroundColor: '#2f7a58',
                },
                backgroundColor: '#2f7a58',
            },
            current: {
                color: '#2f7a58',
            },
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#2f7a58',
            },
        },
        MuiButton: {
            textPrimary: {
                color: '#2f7a58',
            },
        },
    },
});

const useStyles = makeStyles(theme => ({
    outlinedRoot: {
        '&:hover $notchedOutline': {
            borderColor: '#2f7a58',
        },
        '&$focused $notchedOutline': {
            borderColor: '#2f7a58',
            borderWidth: 2,
        },
    },
    notchedOutline: {},
    focused: {},
}));

const DatePicker = props => {
    const classes = useStyles();

    const InputProps = {
        classes: {
            root: classes.outlinedRoot,
            notchedOutline: classes.notchedOutline,
            focused: classes.focused,
            button: classes.textPrimary,
        },
    };
    return (
        <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    className={'date_picker'}
                    format="MMM dd, yyyy"
                    margin="normal"
                    id="date-picker-dialog"
                    value={props.selectedDate}
                    onChange={props.handleDateChange}
                    inputVariant="outlined"
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    InputProps={InputProps}
                />
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
};

export default React.memo(DatePicker);
