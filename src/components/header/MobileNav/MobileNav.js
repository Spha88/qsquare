import React from 'react';
import classes from './MobileNav.module.scss';
import { Link } from 'react-scroll';
import NavItems from '../navItems';

const MobileNav = ({ open, closeNav }) => {
    return (
        <nav className={`${classes.MobileNav} ${open && classes.OpenNav}`}>
            <ul>
                {NavItems.map(navItem => (
                    <li>
                        <Link
                            to={navItem.id}
                            duration={1000}
                            smooth={true}
                            offset={-50}
                            spy={true}
                            activeClass={classes.active}
                            onClick={closeNav}
                        >
                            <span>{navItem.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileNav;