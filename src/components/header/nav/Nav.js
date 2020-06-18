import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import classes from './Nav.module.scss';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import BurgerIconDesktop from '../BurgerIconDesktop/BurgerIcon';
import MobileNav from '../MobileNav/MobileNav';
import NavItems from '../NavItems/NavItems';

const Nav = () => {
    let [openMobileNav, setOpenMobileNav] = useState(false);
    const toggleMobileNav = () => setOpenMobileNav(!openMobileNav);

    let [showDeskTopNav, setShowDeskTopNav] = useState(false);
    const toggleDesktopNav = () => setShowDeskTopNav(!showDeskTopNav);

    return (
        <div className={classes.NavContainer}>
            <nav className={classes.Nav}>
                <div
                    className={classes.Logo}
                    onClick={() => scroll.scrollToTop()}
                ></div>
                <NavItems />
                <MobileNav open={openMobileNav} closeNav={toggleMobileNav} />
                <BurgerIconDesktop
                    open={showDeskTopNav}
                    openDesktopNav={toggleDesktopNav}
                />
                <BurgerIcon
                    open={openMobileNav}
                    openMobileNav={toggleMobileNav}
                />
            </nav>
        </div>
    );
};

export default Nav;
