import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = makeStyles({
    paper: {
        margin: '24px 0px',
    },
    input: {
        marginLeft: '24px',
    },
});

const FormControl = props => {
    const classes = styles();
    return (
        <div>
            <Paper square={true} className={classes.paper}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3} className={classes.input}>
                        <TextField
                            name="orderID"
                            label="Order ID - Last 4 digit"
                            autoComplete="Order ID - Last 4 digit"
                            required
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            name="StoreID"
                            label="Store#"
                            autoComplete="Store#"
                            required
                            fullWidth
                        />
                    </Grid>
                    <Button>
                        <Link to="/dashboard">View Dashboard</Link>
                    </Button>
                </Grid>
            </Paper>
        </div>
    );
};

export default FormControl;
