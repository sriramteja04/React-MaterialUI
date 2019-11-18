import React, { PureComponent } from 'react';
import Dropdown from './se_dropdown';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreatePromo from '../components/Promotions/Create Promo/CreatePromo';

class CreateNew extends PureComponent {
    state = {
        label: '',
    };

    handleClick = label => {
        console.log(label);
        this.setState({
            label: label,
        });
        this.props.closeDropdown();
    };

    closeHandler = () => {
        this.setState({
            label: '',
        });
    };

    // handleClickCallback = (label) =>{
    //     switch(label){
    //         case 'Promotions':
    //             console.log('inside Promotions');
    //             return this.toggleCreateNew();
    //             case 'Message':
    //             return console.log('inside Message');
    //         default:
    //             return console.log('default');
    //     }
    // }

    render() {
        const list = [
            {
                image: <ListAltIcon />,
                label: 'Promotions',
                onClick: this.handleClick,
            },
        ];

        return (
            <React.Fragment>
                <Dropdown list={list} />
                {this.state.label === 'Promotions' && (
                    <CreatePromo label={'Promotions'} close={this.closeHandler} />
                )}
            </React.Fragment>
        );
    }
}

export default CreateNew;
