import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import Checkbox from '@material-ui/core/Checkbox';
// import Select from '@material-ui/core/Select';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import ListItemText from '@material-ui/core/ListItemText';
// import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/styles';

// const state = ['CA', 'TX', 'IL', 'FL', 'GA'];

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;

// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

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
          <Grid item xs={12} sm={3}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default FormControl;
