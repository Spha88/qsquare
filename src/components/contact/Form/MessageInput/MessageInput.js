import React, { useState } from 'react';
import classes from './MessageInput.module.scss';

import { connect } from 'react-redux';
import { addMessage } from '../../../../store/actions/contactFormActions';

const MessageInput = ({ addMessage }) => {
    let [message, setMessage] = useState('');
    if (message) {
        addMessage(message);
    }
    return (
        <div className={classes.FormControl}>
            <label htmlFor='email'>Message</label>
            <span className={classes.FormControlWarning}></span>
            <textarea
                name='message'
                rows='5'
                onChange={e => setMessage(e.target.value)}
                value={message}
            ></textarea>
        </div>
    );
};

export default connect(null, { addMessage })(MessageInput);
