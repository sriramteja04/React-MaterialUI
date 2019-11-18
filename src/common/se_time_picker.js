import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#2f7a58',
            },
        },
        MuiPickersClock: {
            pin: {
                backgroundColor: '#2f7a58',
            },
        },
        MuiPickersClockPointer: {
            pointer: {
                backgroundColor: '#2f7a58',
            },
            thumb: {
                borderColor: '#2f7a58',
            },
            noPoint: {
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
        margin: '10px',
    },
    notchedOutline: {},
    focused: {},
}));

const TimePicker = props => {
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
                <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    value={props.selectedTime}
                    onChange={props.handleTimeChange}
                    inputVariant="outlined"
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    InputProps={InputProps}
                />
            </MuiPickersUtilsProvider>
        </MuiThemeProvider>
    );
};

export default React.memo(TimePicker);
