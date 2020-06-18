import React from 'react';
import classes from './Hero.module.scss';
import { Link } from 'react-scroll';

import Button from '../../layout/Button2/Button2';

const hero = () => {
    return (
        <div className={classes.Hero}>
            <div className={classes.Logo}></div>
            <div className={classes.Info}>
                <p>
                    Our greatest passion lies in facilitating our clients’
                    transition from being a predominantly offline business to a
                    fully automated entity.
                </p>

                <Link to='about' duration={500} smooth={true} offset={-50}>
                    <Button label='Learn More' />
                </Link>
            </div>
        </div>
    );
};

export default hero;
