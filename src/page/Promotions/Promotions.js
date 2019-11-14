import React, { Component } from 'react';
import PromotionsTable from '../../components/Promotions/PromotionsTable';
import Spinner from '../../common/se_spinner';

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
            <div className={'promotions'}>
                {!this.state.data.length ? (
                    <Spinner />
                ) : (
                    <PromotionsTable rows={this.state.data} input={'Incomplete Input'} />
                )}
            </div>
        );
    }
}

export default Promotions;
