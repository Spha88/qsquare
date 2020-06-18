import React from 'react';
import { Link } from 'react-scroll';
import classes from './NavItems.module.scss';
import NavItemsList from '../navItems';

const NavItems = () => {
    return (
        <ul className={classes.Nav_Items_list}>
            {NavItemsList.map(navItem => (
                <li>
                    <Link
                        to={navItem.id}
                        duration={1000}
                        smooth={true}
                        offset={-100}
                        spy={true}
                        activeClass={classes.active}
                    >
                        <span>{navItem.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
