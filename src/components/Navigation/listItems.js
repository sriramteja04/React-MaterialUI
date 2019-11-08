import React from 'react';
import { Link } from 'react-router-dom';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const ListItems = props => {
    const toggleSideDrawer = () => {
        props.toggle();
    };

    return (
        <div className={'mainlist'}>
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
        </div>
    );
};

export default ListItems;
