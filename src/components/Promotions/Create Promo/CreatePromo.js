import React, { PureComponent } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import Modal from '../../../common/Modal/se_modal';
import InputField from '../../../common/se_input_field';
import Button from '../../../common/se_button';

class CreatePromo extends PureComponent {
    state = {
        promo_name: '',
        show: false,
    };

    changeHandler = e => {
        this.setState(
            {
                promo_name: e.target.value,
            },
            () => {
                if (this.state.promo_name.length > 0) {
                    this.setState({
                        show: true,
                    });
                } else {
                    this.setState({
                        show: false,
                    });
                }
            }
        );
    };

    cancelModalHandler = () => {
        this.props.close();
    };

    render() {
        const { promo_name, show } = this.state;

        let header = (
            <div className={'heading'}>
                <h2 className={'promo--heading'}>Create a new promo</h2>
                <CloseIcon className={'close--icon'} onClick={this.cancelModalHandler} />
            </div>
        );
        let content = (
            <div className={'content'}>
                <InputField
                    label={'Create a New Promo'}
                    value={promo_name}
                    onChange={this.changeHandler}
                    type={'text'}
                    className={'input__control xl'}
                    placeholder={'Create Promo'}
                    required
                />
                <div className={'details'}>
                    <p className={'details__sub-heading'}>
                        This promo will have the following parts:
                    </p>
                    <div className={'details__toggles'}>
                        <FormControlLabel control={<Switch />} label="Merchandising" />
                        <FormControlLabel control={<Switch />} label="Marketing" />
                    </div>
                </div>
            </div>
        );
        let actions = (
            <>
                <Button className={'btn btn-light xl'} onClick={this.cancelModalHandler}>
                    CANCEL
                </Button>
                <Button
                    className={show ? `btn btn-dark xl` : 'btn btn-disabled xl'}
                    disabled={!show}
                >
                    SAVE
                </Button>
            </>
        );
        return (
            <>
                <Modal header={header} content={content} actions={actions} />
            </>
        );
    }
}

export default CreatePromo;
