import React, { useState, useEffect } from 'react';
import classes from './ContactNumberInput.module.scss';

import validator from 'validator';

import { connect } from 'react-redux';
import { addNumber } from '../../../../store/actions/contactFormActions';

const ContactNumber = ({ addNumber }) => {
    let [number, setNumber] = useState('');
    let [errorMsg, setErrorMsg] = useState('');

    const inputClasses = [classes.FormControl];
    errorMsg !== '' && inputClasses.push(classes.Error);

    const onChange = e => {
        validator.isAlpha(number.replace(/\s/g, '')) &&
            setErrorMsg('Invalid contact number');
        setNumber(e.target.value);
        number.length > 13 && setErrorMsg('Invalid Contact number');
        if (number.length === 14) {
            setNumber('');
            setErrorMsg('');
        }
    };

    const validate = () => {
        validator.isEmpty(number)
            ? setErrorMsg('Name is required')
            : setErrorMsg('');

        if (number.length > 0 && number.length <= 9) {
            setErrorMsg('Invalid Contact Number');
        }
    };

    useEffect(() => {
        errorMsg === '' && addNumber(number);
    }, [errorMsg, number, addNumber]);

    return (
        <div className={inputClasses.join(' ')}>
            <input
                type='tel'
                name='phoneNumber'
                value={number}
                placeholder='Contact Number'
                onChange={onChange}
                onBlur={validate}
            />
            <span className={classes.ErrorMessage}>
                {errorMsg !== '' && errorMsg}
            </span>
        </div>
    );
};

export default connect(null, { addNumber })(ContactNumber);
