import React from 'react';
import classes from './MobileNav.module.scss';

const MobileNav = ({ open }) => {
    return (
        <nav className={`${classes.MobileNav} ${open && classes.OpenNav}`}>
            <ul>
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
        </nav>
    );
};

export default MobileNav;
