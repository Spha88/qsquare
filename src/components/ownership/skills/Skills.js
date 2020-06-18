import React from 'react';
import classes from './Skills.module.scss';

const Skills = () => {
    return (
        <div className={classes.Skills}>
            <header>
                <h2>Accumulated skillset</h2>
            </header>
            <main>
                <div className={classes.Skills_content}>
                    <p className={classes.Skills_content_lead}>
                        The skillsets available to QSC are largely an acquired
                        collective from personnel and those from forged
                        partnerships. They are therefore a hybrid of formal
                        training and On-The-Job (OTJ) training:
                    </p>
                    <ul className={classes.Skills_content_list}>
                        <li>IT Operations Management</li>
                        <li>IT Resources Planning</li>
                        <li>
                            Project Management (government transversal systems –
                            BAS, PERSAL, LOGIS and eDNA Biometric system)
                        </li>
                        <li>Network Management and Support</li>
                        <li>
                            End-point Desktop configuration and support services
                        </li>
                        <li>Active Directory and backend support services</li>
                        <li>Deployment of IT Governance principles</li>
                        <li>Database Designs and Administration</li>
                        <li>Software Development and Big Data Analytics</li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Skills;
