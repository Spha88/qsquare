import React from 'react';
import classes from './BurgerIcon.module.scss';

const BurgerIcon = ({ open, openMobileNav }) => {
    let iconClassList = [classes.navIcon];
    open && iconClassList.push(classes.open);

    return (
        <div className={iconClassList.join(' ')} onClick={openMobileNav}>
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
