import React, { useState } from 'react';
import classes from './NameInput.module.scss';

import { connect } from 'react-redux';
import { addName } from '../../../../store/actions/contactFormActions';

const NameInput = ({ addName }) => {
    let [name, setName] = useState('');

    if (name !== '') {
        console.log(name);
        addName(name);
    }

    return (
        <div className={classes.FormControl}>
            <input
                type='text'
                name='name'
                placeholder='Name and Surname'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </div>
    );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addName })(NameInput);
