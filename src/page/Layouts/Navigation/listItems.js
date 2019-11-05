import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import HistoryIcon from '@material-ui/icons/History';
import TimelineIcon from '@material-ui/icons/Timeline';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
const ListItems = props => {
    const toggleSideDrawer = () => {
        props.toggle();
    };
    const conditionalToggle = () => {
        console.log(props.open);
        if (props.open) props.toggle();
    };

    return (
        <div className={'mainlist'}>
            <Link to={'/dashboard'}>
                <ListItem className={'mainlist__btn'} button onClick={conditionalToggle}>
                    <ListItemIcon className={'mainlist__icon'}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText className={'mainlist__text'} primary="Dashboard" />
                </ListItem>
            </Link>
            {!props.open ? (
                <ListItem button onClick={toggleSideDrawer}>
                    <ListItemIcon>
                        <HistoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Order History" />
                </ListItem>
            ) : (
                <ExpansionPanel className={'expansion'}>
                    <ExpansionPanelSummary
                        className={'expansion__panel'}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <HistoryIcon />
                        <Typography className={'expansion--heading'}>Order History</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={'expansion__Link'}>
                        <Link>Manage Promos</Link>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails className={'expansion__Link'}>
                        <Link>Prioritize Promos</Link>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )}
            {!props.open ? (
                <ListItem button onClick={toggleSideDrawer}>
                    <ListItemIcon>
                        <LocalOfferIcon />
                    </ListItemIcon>
                    <ListItemText primary="Promotions" />
                </ListItem>
            ) : (
                <ExpansionPanel className={'expansion'}>
                    <ExpansionPanelSummary
                        className={'expansion__panel'}
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <LocalOfferIcon />
                        <Typography className={'expansion--heading'}>Promotions</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={'expansion__Link'}>
                        <Link>Manage Promos</Link>
                    </ExpansionPanelDetails>
                    <ExpansionPanelDetails onClick={toggleSideDrawer} className={'expansion__Link'}>
                        <Link to={'/promotions'}>Prioritize Promos</Link>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )}
            <ListItem button className={'mainlist__btn'}>
                <ListItemIcon>
                    <TimelineIcon />
                </ListItemIcon>
                <ListItemText primary="Reporting" />
            </ListItem>
            <ListItem button className={'mainlist__btn'}>
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Assortment" />
            </ListItem>
        </div>
    );
};

export default ListItems;
