import React from 'react';

const ToggleButton = props => {
    const { label, ...rest } = props;
    return (
        <label className={'switch'}>
            <input className={'slider round'} type={'checkbox'} {...rest} />
            <span className={'slider round'}>
                <span className={'switch text'}>{label}</span>
            </span>
        </label>
    );
};

export default React.memo(ToggleButton);
