import React from 'react';

const InputField = props => {
    const { label, ...rest } = props;
    return (
        <div className={'input'}>
            <input {...rest} />
            <label className={'label'}>{props.label}</label>
        </div>
    );
};

export default React.memo(InputField);
