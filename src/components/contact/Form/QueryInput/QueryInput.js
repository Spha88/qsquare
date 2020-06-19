import React, { useState } from 'react';
import classes from './QueryInput.module.scss';

import { connect } from 'react-redux';
import { addSubject } from '../../../../store/actions/contactFormActions';

const QueryInput = ({ addSubject }) => {
    let [subject, setSubject] = useState('');
    if (subject) {
        addSubject(subject);
    }
    return (
        <div className={classes.FormControl}>
            <span className={classes.FormControlWarning}></span>
            <select
                id='subject'
                name='subject'
                onChange={e => setSubject(e.target.value)}
            >
                <option value='Internet and Digital Marketing'>
                    Internet and Digital Marketing
                </option>
                <option value='Technical Support Services'>
                    Technical Support Services
                </option>
                <option value='IT Performance Management (ITPM)'>
                    IT Performance Management (ITPM)
                </option>
                <option value='Software Engineering'>
                    Software Engineering
                </option>
                <option value='SMME Services'>SMME Services</option>
                <option value='Other'>Other</option>
            </select>
        </div>
    );
};

export default connect(null, { addSubject })(QueryInput);
