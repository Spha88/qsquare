import React from 'react';
import classes from './Header.module.scss';

import Nav from './nav/Nav';
import Hero from './hero/Hero';

const Header = () => {
    return (
        <header className={classes.Header}>
            <Nav />
            <Hero />
        </header>
    )
}

export default Header
