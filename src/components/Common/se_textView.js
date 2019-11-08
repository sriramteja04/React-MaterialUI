import React, { useState } from 'react';

const Input = props => {
    const [inputValue, setInputValue] = useState('');
    const { id, label, style } = props;
    const handleChange = event => setInputValue(event.target.value);
    return (
        <input
            id={id}
            type="text"
            value={inputValue}
            placeholder={label}
            style={style}
            onChange={handleChange}
        />
    );
};

export default Input;
