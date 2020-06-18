import React from 'react';
import classes from './Slide.module.scss';

import Button from '../../../layout/Button/Button2';

const Slide = ({ service, openModal, index }) => {
    return (
        <div className={classes.Slide}>
            <div className={classes.SlideImageContainer}>
                <div
                    className={classes.SlideImage}
                    style={{ backgroundImage: `url(${service.image})` }}
                ></div>
            </div>
            <div className={classes.SlideContentContainer}>
                <h2>{service.title}</h2>
                <div
                    className={classes.SlideContent}
                    dangerouslySetInnerHTML={{ __html: service.abstract }}
                ></div>
                <footer>
                    <Button label='Read More' click={() => openModal(index)} />
                </footer>
            </div>
        </div>
    );
};

export default Slide;
