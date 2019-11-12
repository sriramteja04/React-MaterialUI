import React from 'react';

const Dropdown = props => {
    const { list } = props;
    return (
        <ul id="myDropdown" className={'dropdown-content'}>
            {list.map(item => (
                <li className={'list'} onClick={item.onClick}>
                    <>{item.image}</>
                    <label>{item.label}</label>
                </li>
            ))}
        </ul>
    );
};

export default React.memo(Dropdown);
