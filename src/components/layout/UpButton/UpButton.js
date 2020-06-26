import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import classes from './UpButton.module.scss';

const UpButton = () => {
    // Handle hover effect to prevent flick and continue animation when the
    // mouse leaves the container in less than 400ms;
    let [hover, setHover] = useState(false);
    const handleHover = () => {
        setHover(true);
        setTimeout(() => {
            setHover(false);
        }, 400);
    };

    return (
        <div
            className={`${classes.UpButtonContainer} ${hover && classes.hover}`}
            onClick={() => scroll.scrollToTop()}
            onMouseEnter={handleHover}
        >
            <button>
                <i className='fa fa-arrow-circle-o-up' aria-hidden='true'></i>
            </button>
        </div>
    );
};

export default UpButton;
