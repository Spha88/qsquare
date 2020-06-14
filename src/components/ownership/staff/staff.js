import React, { useState } from 'react';
import classes from './Staff.module.scss';
import Button from '../../layout/Button/Button2';
import Modal from '../../layout/serviceModal/ServiceModal';

import Bio from './biography';

const About = () => {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = e => {
        setOpenModal(!openModal);
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
                                click={toggleModal}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                click={toggleModal}
                open={openModal}
                title='Mzimhle Zuko Mbijekana'
                description={Bio.fullBio}
            />
        </div>
    );
};

export default About;
