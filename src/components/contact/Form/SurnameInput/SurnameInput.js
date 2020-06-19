import React from 'react';
import classes from './SurnameInput.module.scss';

const Surname = () => {
    return (
        <div className={classes.FormControl}>
            <label htmlFor='surname'>Surname</label>
            <input
                type='text'
                name='surname'
                placeholder='Enter your surname'
            />
        </div>
    );
};

export default Surname;
