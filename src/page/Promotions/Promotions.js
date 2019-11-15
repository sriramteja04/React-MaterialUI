import React, { Component } from 'react';
import PromotionsTable from '../../components/Promotions/PromotionsTable';
import { CircularProgress } from '@material-ui/core';

class Promotions extends Component {
    state = {
        data: [],
    };

    async componentDidMount() {
        const res = await fetch('http://www.mocky.io/v2/5dc1f04d330000be171a55fb');
        const data = await res.json();
        this.setState({
            data: data.data,
        });
    }

    render() {
        // console.log(this.state.data);
        return (
            <>
                {!this.state.data.length ? (
                    <CircularProgress disableShrink />
                ) : (
                    <PromotionsTable rows={this.state.data} input={'Incomplete Input'} />
                )}
            </>
        );
    }
}

export default Promotions;
