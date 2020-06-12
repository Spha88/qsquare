import React from 'react'
import classes from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={classes.Nav}>
            <div className={classes.Logo}>

            </div>
            <ul className={classes.Nav_Items_list}>
                <li>About</li>
                <li>Services</li>
                <li>Partners</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav
