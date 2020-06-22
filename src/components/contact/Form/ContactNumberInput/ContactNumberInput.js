import React from 'react';
import classes from './ContactNumberInput.module.scss';

const ContactNumber = () => {
    return (
        <div className={classes.FormControl}>
            <span></span>
            <input
                type='text'
                name='contact-number'
                placeholder='Contact Number'
            />
            <span className={classes.ErrorMessage}></span>
        </div>
    );
};

export default ContactNumber;
