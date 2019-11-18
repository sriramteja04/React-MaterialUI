import React from 'react';

const Dropdown = props => {
    const { list } = props;
    return (
        <ul className={'dropdown__content'}>
            {list.map(item => (
                <li
                    className={'dropdown__list'}
                    onClick={() => {
                        item.onClick(item.label);
                    }}
                >
                    <>{item.image}</>
                    <label>{item.label}</label>
                </li>
            ))}
        </ul>
    );
};

export default React.memo(Dropdown);
