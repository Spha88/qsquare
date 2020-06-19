import React from 'react';
import { Link } from 'react-scroll';
import classes from './Desktop.module.scss';
import navItems from '../navItems';

const DesktopNav = ({ open, closeNav }) => {
    const dnClasses = [classes.DesktopNav];
    const sloganClasses = [classes.Slogan];

    if (open) {
        dnClasses.push(classes.Open);
        sloganClasses.push(classes.Hide);
    }

    return (
        <div className={classes.DesktopNavContainer}>
            <ul className={dnClasses.join(' ')}>
                {navItems.map(navItem => (
                    <li key={navItem.id}>
                        <Link
                            to={navItem.id}
                            duration={1000}
                            smooth={true}
                            offset={navItem.offsetDesktop}
                            spy={true}
                            activeClass={classes.active}
                        >
                            <span>{navItem.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className={sloganClasses.join(' ')} onClick={closeNav}>
                <p>Experience digital transition</p>
            </div>
        </div>
    );
};

export default DesktopNav;
