import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import classes from './Nav.module.scss';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import BurgerIconDesktop from '../BurgerIconDesktop/BurgerIcon';
import MobileNav from '../MobileNav/MobileNav';
import DesktopNav from '../DesktopNav/DesktopNav';

import scrollReveal from 'scrollreveal';

const Nav = () => {
    let [openMobileNav, setOpenMobileNav] = useState(false);
    const toggleMobileNav = () => setOpenMobileNav(!openMobileNav);

    let [showDeskTopNav, setShowDeskTopNav] = useState(false);
    const toggleDesktopNav = () => setShowDeskTopNav(!showDeskTopNav);

    useEffect(() => {
        // ScrollReveal animation
        const options = {
            distance: '100%',
            origin: 'top',
            delay: '500',
            duration: '1500',
        };
        scrollReveal().reveal('#nav-container', options);
        //-------------------------------
    }, []);

    return (
        <div className={classes.NavContainer} id='nav-container'>
            <nav className={classes.Nav}>
                <div
                    id='logo'
                    className={classes.Logo}
                    onClick={() => scroll.scrollToTop()}
                ></div>

                <DesktopNav open={showDeskTopNav} closeNav={toggleDesktopNav} />
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
