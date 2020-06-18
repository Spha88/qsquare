import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import classes from './Nav.module.scss';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import MobileNav from '../MobileNav/MobileNav';
import NavItems from '../navItems';

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
                <ul className={classes.Nav_Items_list}>
                    {NavItems.map(navItem => (
                        <li>
                            <Link
                                to={navItem.id}
                                duration={1000}
                                smooth={true}
                                offset={-50}
                                spy={true}
                                activeClass={classes.active}
                            >
                                <span>{navItem.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <MobileNav open={openNav} closeNav={toggleMobileNav} />
                <BurgerIcon open={openNav} openMobileNav={toggleMobileNav} />
            </nav>
        </div>
    );
};

export default Nav;
