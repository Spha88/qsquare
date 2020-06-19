import React, { useState } from 'react';
import classes from './EmailInput.module.scss';

import { connect } from 'react-redux';
import { addEmail } from '../../../../store/actions/contactFormActions';

const EmailInput = ({ addEmail }) => {
    let [email, setEmail] = useState('');
    if (email !== '') {
        addEmail(email);
    }
    return (
        <div className={classes.FormControl}>
            <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}
            />
        </div>
    );
};

export default connect(null, { addEmail })(EmailInput);
