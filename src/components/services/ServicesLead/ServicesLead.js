import React from 'react';
import classes from './ServicesLead.module.scss';

const ServicesLead = () => {
    return (
        <div className={classes.Services_lead}>
            <div className={classes.Services_lead_image}>
                <div className={classes.Background}></div>
            </div>
            <div className={classes.Services_lead_content}>
                <p>
                    We offer a range of ICT services meant to create both
                    financial and sentimental value for everyone in our value
                    chain. Our assemblage of various skillsets allows us to
                    respond in a precise manner to our customer demands and
                    expectations.
                </p>
                <p>
                    We follow a tried and tested systems’ thinking format of
                    gathering user requirements filtered through collaborative
                    change management process and user acceptance testing (UAT)
                    ending with seamless herd deployment.
                </p>
                <p>
                    At the core of all our service delivery is to help our
                    client transition from offline to online without
                    inconveniencing the customers.
                </p>
                <p>
                    We hold as sacred our <strong>no-day-lost</strong> slogan in
                    all our service ventures.
                </p>
            </div>
        </div>
    );
};

export default ServicesLead;
