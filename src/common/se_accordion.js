import React, { Component } from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

class Accordion extends Component {
    render() {
        const { list, index, toggleSubMenu, handleClickSubMenu, open } = this.props;
        const toggleOpen = open && list.subMenu;
        return (
            <div className={'menuItem ' + (toggleOpen ? 'open' : '')} key={index}>
                <span onClick={() => toggleSubMenu(list)} className={'menuItem__content'}>
                    {list.image}
                    <label className={'menuItem__label'}>{list.label}</label>
                </span>
                {list.subMenu ? (
                    <>
                        <span className={'menuItem__arrow'}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </span>
                        <span className={open ? 'subMenuOpen' : 'subMenuClose'}>
                            {list.subMenu.map(subMenuItem => (
                                <>
                                    <br />
                                    <label onClick={() => handleClickSubMenu(subMenuItem.label)}>
                                        {subMenuItem.label}
                                    </label>
                                </>
                            ))}
                        </span>
                    </>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default Accordion;
