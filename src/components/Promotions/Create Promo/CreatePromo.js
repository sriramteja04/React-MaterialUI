import React, { Component } from 'react';
import Modal from '../../UI/Modal';

class CreatePromo extends Component {
    componentDidMount() {
        console.log('promo comp mounted');
    }

    render() {
        console.log('modal');
        return (
            <div>
                <Modal>
                    <h3>Create a new promo</h3>
                </Modal>
            </div>
        );
    }
}

export default CreatePromo;
