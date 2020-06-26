import React from 'react';
import classes from './Header.module.scss';
import Particles from 'react-particles-js';

import Nav from './nav/Nav';
import Hero from './hero/Hero';

const Header = () => {
    return (
        <header className={classes.Header} id='header'>
            <Nav />
            <Hero />
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 200,
                            density: {
                                enable: true,
                                value_area: 2000,
                            },
                        },
                    },
                }}
            />
        </header>
    );
};

export default Header;
