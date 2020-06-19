import React, { useState } from 'react';
import classes from './ContactNumberInput.module.scss';

import { connect } from 'react-redux';
import { addNumber } from '../../../../store/actions/contactFormActions';

const ContactNumber = ({ addNumber }) => {
    let [number, setNumber] = useState('');
    if (number !== '') {
        addNumber(number);
    }
    return (
        <div className={classes.FormControl}>
            <input
                type='tel'
                name='phoneNumber'
                placeholder='Contact Number'
                onChange={e => setNumber(e.target.value)}
            />
        </div>
    );
};

export default connect(null, { addNumber })(ContactNumber);
