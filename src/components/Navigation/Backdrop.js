import React from 'react';

const Backdrop = props => {
    return <div className={'backdrop'} onClick={props.closeBackdrop}></div>;
};

export default Backdrop;
