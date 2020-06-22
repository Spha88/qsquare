import React from 'react';
import classes from './EmailInput.module.scss';

const EmailInput = ({ addEmail }) => {
    return (
        <div className={classes.FormControl}>
            <input type='email' name='email' placeholder='Email' />
        </div>
    );
};

export default EmailInput;
