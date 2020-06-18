import React from 'react';
import classes from './BurgerIcon.module.scss';

const BurgerIcon = ({ open, openDesktopNav }) => {
    let iconClassList = [classes.navIcon];
    open && iconClassList.push(classes.open);

    return (
        <div className={iconClassList.join(' ')} onClick={openDesktopNav}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default BurgerIcon;
