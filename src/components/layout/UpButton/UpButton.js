import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import classes from './UpButton.module.scss';

const UpButton = () => {
    return (
        <div
            className={classes.UpButtonContainer}
            onClick={() => scroll.scrollToTop()}
        >
            <button>
                <i class='fa fa-arrow-circle-o-up' aria-hidden='true'></i>
            </button>
        </div>
    );
};

export default UpButton;
