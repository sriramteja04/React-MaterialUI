import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ScatterGraph from './ScatterGraph';

// import "./Dashboard.scss";

const Dashboard = () => {
    function FormRow() {
        return (
            <React.Fragment>
                <Grid item xs={2} className="root-1 grid">
                    <Paper square={true} className="root-1 paper">
                        item
                    </Paper>
                </Grid>
                <Grid item xs={2} className="root-1 grid">
                    <Paper square={true} className="root-1 paper">
                        item
                    </Paper>
                </Grid>
                <Grid item xs={2} className="root-1 grid">
                    <Paper square={true} className="root-1 paper">
                        item
                    </Paper>
                </Grid>
                <Grid item xs={2} className="root-1 grid">
                    <Paper square={true} className="root-1 paper">
                        item
                    </Paper>
                </Grid>
                <Grid item xs={2} className="root-1 grid">
                    <Paper square={true} className="root-1 paper">
                        item
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    function Extras() {
        return (
            <React.Fragment>
                <Grid item xs={3} className={'root-3 grid'}>
                    <Paper square={true} className="root-3 paper">
                        item
                    </Paper>
                </Grid>
                <Grid item xs={4} className={'root-3 grid'}>
                    <Paper square={true} className="root-3 paper">
                        item
                    </Paper>
                </Grid>
                <Grid item xs={4} className={'root-3 grid'}>
                    <Paper square={true} className="root-3 paper">
                        item
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div className="root">
            <Grid container className="root-1">
                <FormRow />
            </Grid>
            <Grid container className="root-2">
                <Grid item xs={12} className="root-2 grid">
                    <Paper square={true} className="root-2 paper">
                        item
                    </Paper>
                </Grid>
            </Grid>
            <Grid container className="root-3">
                <Extras />
            </Grid>
        </div>
    );
};

export default Dashboard;
