import React, { useState } from 'react';
import classes from './About.module.scss';
import Container from '../layout/container/Container';
import Vision from './vision/Vision';
import Button from '../layout/Button/Button2';
import Modal from '../layout/serviceModal/ServiceModal';

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    const openModal = e => {
        setIsOpen(true);
        setIsClosed(false);
    };

    const closeModal = e => {
        setIsOpen(false);
        setIsClosed(true);
    };

    return (
        <Container>
            <div className={classes.About} id='about'>
                <header>
                    <h1>About Us</h1>
                </header>
                <div className={classes.About_content_container}>
                    <div className={classes.About_img_container}>
                        <div className={classes.About_img}></div>
                    </div>
                    <div className={classes.About_content}>
                        <div
                            dangerouslySetInnerHTML={{ __html: extract }}
                        ></div>
                        <Button label='Read More' click={openModal} />
                    </div>
                </div>
            </div>

            <Modal
                click={closeModal}
                opened={isOpen}
                closed={isClosed}
                title='About Q-Squared Concepts'
                description={fullText}
            />

            <Vision />
        </Container>
    );
};

export default About;

const extract = `
<p>
Our company is an ICT advisory and consultancy with a special focus on Internet and Digital Marketing, Technical Support Services, ICT Performance Management and Software Engineering.
</p>
<p>
We avidly develop bespoke technology solutions in areas such as IT Governance, Cyber Security and Online Business Applications.
</p>
    `;

const fullText = `
<p>
Our company is an ICT advisory and consultancy with a special focus on Internet and Digital Marketing, Technical Support Services, ICT Performance Management and Software Engineering.
</p>
<p>
We avidly develop bespoke technology solutions in areas such as IT Governance, Cyber Security and Online Business Applications.
</p>
<p>
With the advent of Internet of Things (IOT), and the much publicised Fourth Industrial Revolution (4IR), information technology solutions can no longer be delivered in an orthodox fashion. It is for aforementioned reason that we drive virtualised solutions designed to extend, but not eliminate human involvement, while delivering even better value for the customer.
</p>
<p>
The supreme goal of all our operations is to maximise financial and sentimental value for all our stakeholders.
</p>
`;
