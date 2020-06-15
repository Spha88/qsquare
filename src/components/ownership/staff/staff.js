import React, { useState } from 'react';
import classes from './Staff.module.scss';
import Button from '../../layout/Button/Button2';
import Modal from '../../layout/serviceModal/ServiceModal';

import Bio from './biography';

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
        <div className={classes.Staff}>
            <div className={classes.Staff_content_container}>
                <div className={classes.Staff_img_container}>
                    <div className={classes.Staff_img}></div>
                </div>
                <div className={classes.Staff_content}>
                    <div className={classes.Staff_content_inner}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: Bio.abstract,
                            }}
                        ></div>
                        <div className={classes.Button_container}>
                            <Button
                                label='More about the owner'
                                click={openModal}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                click={closeModal}
                opened={isOpen}
                closed={isClosed}
                title='Mzimhle Zuko Mbijekana'
                description={Bio.fullBio}
            />
        </div>
    );
};

export default About;
