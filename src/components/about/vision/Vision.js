import React from 'react';
import classes from './Vision.module.scss';

const Vision = () => {
    return (
        <div className={classes.Vision}>
            <div className={classes.Card}>
                <div className={`${classes.Card_img} ${classes.Vision_img}`}>
                    <div className={classes.Card_header_container}>
                        <h2>Vision</h2>
                    </div>
                </div>
                <div className={classes.Card_body}>
                    <p>
                        To help more people and businesses realise the full
                        potential of the internet.
                    </p>
                </div>
            </div>
            <div className={classes.Card}>
                <div className={`${classes.Card_img} ${classes.Mission_img}`}>
                    <div className={classes.Card_header_container}>
                        <h2>Our Mission</h2>
                    </div>
                </div>
                <div className={classes.Card_body}>
                    <p>
                        Reduce the virtual distance between businesses and
                        clients through automated digital platforms.
                    </p>
                </div>
            </div>
            <div className={classes.Card}>
                <div className={`${classes.Card_img} ${classes.Values_img}`}>
                    <div className={classes.Card_header_container}>
                        <h2>Our Values</h2>
                    </div>
                </div>
                <div className={classes.Card_body}>
                    <ul>
                        <li>Service excellence</li>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Collaboration</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Vision;
