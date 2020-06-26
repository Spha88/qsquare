import React from 'react';
import classes from './Slide.module.scss';

import PropTypes from 'prop-types';
import Button from '../../../layout/Button/Button2';

const Slide = ({ service, openModal, index, currentSlide }) => {
    return (
        <div
            className={`${classes.Slide} ${
                index === currentSlide && classes.active
            }`}
        >
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

Slide.propTypes = {
    service: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    currentSlide: PropTypes.number.isRequired,
};

export default Slide;
