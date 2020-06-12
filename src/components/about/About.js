import React from 'react';
import classes from './About.module.scss';
import Container from '../layout/container/Container';
import Vision from './vision2/Vision';

const About = () => {
    return (
        <Container>
            <div className={classes.About}>
                <header>
                    <h1>About Us</h1>
                </header>
                <div className={classes.About_content_container}>
                    <div className={classes.About_img_container}>
                        <div className={classes.About_img}></div>
                    </div>
                    <div className={classes.About_content}>
                        <p>
                            Q-Squared Concepts (Pty) Ltd (QSC), is a micro ICT
                            advisory and consultancy with a special focus on
                            Internet/Digital Marketing, ICT Support Services, IT
                            Performance Management and Software Engineering.
                        </p>
                        <p>
                            Our greatest passion is in helping our clients to
                            transition from a predominantly offline business to
                            a fully automated entity. We develop bespoke
                            technology solutions in areas such as IT Governance,
                            Cyber Security and Online Business Applications
                            Development.
                        </p>
                        <p>
                            With the advent of Internet of Things (IOT), and the
                            much publicised Fourth Industrial Revolution (4IR),
                            information technology solutions can no longer be
                            delivered in the conventional way. It is for this
                            reason that we drive virtualised solutions designed
                            to extend, but not eliminate, human involvement.
                        </p>
                        <p>
                            The supreme goal of all our operations, as implied
                            in our mission statement, is to maximise value for
                            all our stakeholders.
                        </p>
                    </div>
                </div>
            </div>
            <Vision />
        </Container>
    );
};

export default About;
