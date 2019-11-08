import React, { useState } from 'react';

const ToggleButton = props => {
    const [checked, setChecked] = useState(false);
    const { id } = props;
    const handleChange = event => setChecked(event.target.value);
    return (
        <label id={id} className={'switch'}>
            <input type="checkbox" onChange={handleChange}>
                <span className={'slider round'}></span>
            </input>
        </label>
    );
};

export default ToggleButton;
