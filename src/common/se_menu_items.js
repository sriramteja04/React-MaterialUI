import React, { Component } from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Accordion from './se_accordion';
import CreatePromo from '../components/Promotions/Create Promo/CreatePromo';
import DashboardIcon from '@material-ui/icons/Dashboard';

class MenuItem extends Component {
    state = {
        currentMenuItem: '',
        Dashboard: false,
        Promotions: false,
    };

    toggleSubMenu = list => {
        const label = list.label;
        const prevLabel = this.state[list.label];
        const currentMenuItem = this.state.currentMenuItem;
        if (prevLabel) {
            this.setState({
                [label]: false,
                currentMenuItem: '',
            });
        } else {
            if (currentMenuItem) {
                this.setState({
                    [currentMenuItem]: false,
                });
            }
            this.setState({
                [label]: true,
                currentMenuItem: label,
            });
        }

        if (!list.subMenu) {
            this.props.displayMenuitemContent(list.label);
        }
    };

    handleClickSubMenu = label => {
        this.setState({ currentMenuItem: label });
        this.props.displayMenuitemContent(label);
    };

    render() {
        const list = [
            { image: <DashboardIcon />, label: 'Dashboard', subMenu: '' },
            {
                image: <ListAltIcon />,
                label: 'Promotions',
                subMenu: [{ label: 'Manage Promos' }, { label: 'Prioritize Promos' }],
            },
        ];
        return (
            <React.Fragment>
                <div className={'menuItems__list'}>
                    {list.map((item, i) => (
                        <Accordion
                            list={item}
                            open={this.state[item.label]}
                            index={i}
                            toggleSubMenu={this.toggleSubMenu}
                            handleClickSubMenu={this.handleClickSubMenu}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default MenuItem;
