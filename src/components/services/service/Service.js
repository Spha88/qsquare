import React, { useState } from 'react';
import classes from './Service.module.scss';
import Button from '../../layout/Button/Button2';
import ServiceModal from '../../layout/serviceModal/ServiceModal';

const Service = ({ service: { image, title, abstract, description } }) => {
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
                <Button label='Read More' click={openModal} />
            </footer>

            <ServiceModal
                title={title}
                description={description}
                click={closeModal}
                opened={isOpen}
                closed={isClosed}
            />
        </div>
    );
};

export default Service;
