import React from 'react';
import classes from './Vision.module.scss';

const Vision = () => {
    return (
        <div className={classes.Vision}>
            <div className={classes.Card}>
                <div
                    className={`${classes.Card_img} ${classes.Vision_img}`}
                ></div>
                <p>
                    Reduce the virtual distance between businesses and clients
                    through automated digital platforms.
                </p>
            </div>
            <div className={classes.Card}>
                <div
                    className={`${classes.Card_img} ${classes.Mission_img}`}
                ></div>

                <p>
                    Reduce the virtual distance between businesses and clients
                    through automated digital platforms.
                </p>
            </div>
            <div className={classes.Card}>
                <div
                    className={`${classes.Card_img} ${classes.Values_img}`}
                ></div>
                <ul>
                    <li>Service excellence</li>
                    <li>Integrity</li>
                    <li>Innovation</li>
                    <li>Collaboration</li>
                </ul>
            </div>
        </div>
    );
};

export default Vision;
