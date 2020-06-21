import React, { useState, useEffect } from 'react';
import classes from './NameInput.module.scss';
import validator from 'validator';

import { connect } from 'react-redux';
import { addName } from '../../../../store/actions/contactFormActions';

const NameInput = ({ addName }) => {
    let [name, setName] = useState('');
    let [errorMsg, setErrorMsg] = useState('');

    const inputClasses = [classes.FormControl];
    errorMsg !== '' && inputClasses.push(classes.Error);

    const onChange = e => {
        validator.isAlpha(name.replace(/\s/g, '')) && setErrorMsg('');

        setName(e.target.value);
        name.length > 40 && setErrorMsg('Name and surname too long');
        if (name.length > 45) {
            setName('');
            setErrorMsg('');
        }
    };

    const validate = () => {
        validator.isEmpty(name)
            ? setErrorMsg('Name is required')
            : setErrorMsg('');

        if (name.length > 0 && name.length <= 3) {
            setErrorMsg('Name too short');
        } else {
            !validator.isAlpha(name.replace(/\s/g, ''))
                ? setErrorMsg('Invalid Name')
                : setErrorMsg('');
        }
    };

    useEffect(() => {
        errorMsg === '' && addName(name);
    }, [errorMsg, name, addName]);

    return (
        <div className={inputClasses.join(' ')}>
            <span>{name.length > 30 && 41 - name.length}</span>
            <input
                type='text'
                name='name'
                placeholder='Name and Surname'
                value={name}
                onChange={onChange}
                onBlur={validate}
            />
            <span className={classes.ErrorMessage}>
                {errorMsg !== '' && errorMsg}
            </span>
        </div>
    );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addName })(NameInput);
