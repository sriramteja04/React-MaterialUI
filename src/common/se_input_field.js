import React from 'react';

const InputField = props => {
    let { label, value, varient, className, ...rest } = props;
    if (varient) className = className + ' standard';
    if (value) className = className + ' has-value';
    return (
        <div className={'input'}>
            <input className={className} {...rest} />
            <label className={'label'}>{label}</label>
        </div>
    );
};

export default React.memo(InputField);
