import React from 'react';

const Button = props => {
    const { id, className, style, value } = props;
    return (
        <button id={id} type="button" class={className} style={style} onClick={props.onClick}>
            {value}
        </button>
    );
};

export default Button;
