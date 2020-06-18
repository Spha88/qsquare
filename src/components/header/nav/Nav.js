import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import classes from './Nav.module.scss';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import MobileNav from '../MobileNav/MobileNav';
import NavItems from '../NavItems/NavItems';

const Nav = () => {
    let [openNav, setOpenNav] = useState(false);
    const toggleMobileNav = () => setOpenNav(!openNav);

    return (
        <div className={classes.NavContainer}>
            <nav className={classes.Nav}>
                <div
                    className={classes.Logo}
                    onClick={() => scroll.scrollToTop()}
                ></div>
                <NavItems />
                <MobileNav open={openNav} closeNav={toggleMobileNav} />
                <BurgerIcon open={openNav} openMobileNav={toggleMobileNav} />
            </nav>
        </div>
    );
};

export default Nav;
