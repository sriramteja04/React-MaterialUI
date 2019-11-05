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

class ListItems extends React.Component {
    render() {
        return (
            <div className={'mainlist'}>
                <ListItem className={'mainlist__btn'} button>
                    <ListItemIcon className={'mainlist__icon'}>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText className={'mainlist__text'} primary="Dashboard" />
                </ListItem>
                {!this.props.open ? (
                    <ListItem
                        button
                        onClick={e => {
                            this.props.toggle();
                        }}
                    >
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
                {!this.props.open ? (
                    <ListItem
                        button
                        onClick={() => {
                            this.props.toggle();
                        }}
                    >
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
                        <ExpansionPanelDetails className={'expansion__Link'}>
                            <Link>Prioritize Promos</Link>
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
    }
}

export default ListItems;

// export const secondaryListItems = (
//     <div className={'secondartlist'}>
//         {/*<ListSubheader inset>Saved reports</ListSubheader>*/}
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItem>
//     </div>
// );
