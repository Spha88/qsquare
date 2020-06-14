import React from 'react';
import classes from './Hero.module.scss';

import Button from '../../layout/Button2/Button2';

const hero = () => {
    return (
        <div className={classes.Hero}>
            <div className={classes.Logo}></div>
            <div className={classes.Info}>
                <p>
                    Our greatest passion is in <br />
                    helping our clients to transition from a predominantly
                    offline business to a fully automated entity.
                </p>

                <Button label='Learn More' />
            </div>
        </div>
    );
};

export default hero;
