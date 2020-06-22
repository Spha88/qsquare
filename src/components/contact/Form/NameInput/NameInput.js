import React from 'react';
import classes from './NameInput.module.scss';

const NameInput = () => {
    return (
        <div className={classes.FormControl}>
            <span></span>
            <input type='text' name='name' placeholder='Name and Surname' />
            <span className={classes.ErrorMessage}></span>
        </div>
    );
};

export default NameInput;
