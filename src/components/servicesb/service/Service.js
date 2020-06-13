import React, { useState } from 'react';
import classes from './Service.module.scss';
import Button from '../../layout/Button/Button2';
import ServiceModal from '../serviceModal/ServiceModal';

const Service = ({ service: { image, title, abstract, description } }) => {
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = e => {
        setOpenModal(!openModal);
    };

    return (
        <div className={classes.Service}>
            <header className={classes.Service_header}>
                <div>
                    <div
                        className={classes.Header_bg}
                        style={{
                            background: `url(${image}) no-repeat center center`,
                        }}
                    ></div>
                </div>
                <h2>{title}</h2>
            </header>
            <main>
                <div
                    className={classes.Service_content}
                    dangerouslySetInnerHTML={{ __html: abstract }}
                />
            </main>
            <footer>
                <Button label='Read More' click={toggleModal} />
            </footer>

            <ServiceModal
                title={title}
                image={image}
                description={description}
                click={toggleModal}
                open={openModal}
            />
        </div>
    );
};

export default Service;
