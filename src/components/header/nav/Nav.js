import React, { useState } from 'react';
import classes from './Nav.module.scss';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import MobileNav from '../MobileNav/MobileNav';

const Nav = () => {
    let [openNav, setOpenNav] = useState(false);

    const toggleMobileNav = () => setOpenNav(!openNav);

    return (
        <nav className={classes.Nav}>
            <div className={classes.Logo}></div>
            <ul className={classes.Nav_Items_list}>
                <li>
                    <a href='#!'>About</a>
                </li>
                <li>
                    <a href='#!'>Services</a>
                </li>
                <li>
                    <a href='#!'>Partners</a>
                </li>
                <li>
                    <a href='#!'>Contact Us</a>
                </li>
            </ul>
            <MobileNav open={openNav} />
            <BurgerIcon open={openNav} openMobileNav={toggleMobileNav} />
        </nav>
    );
};

export default Nav;
