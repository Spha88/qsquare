import React from 'react';
import classes from './Form.module.scss';

import NameInput from './NameInput/NameInput';
import ContactNumberInput from './ContactNumberInput/ContactNumberInput';
import EmailInput from './EmailInput/EmailInput';
import QueryInput from './QueryInput/QueryInput';
import MessageInput from './MessageInput/MessageInput';
import Button from '../../layout/Button/Button2';

import { connect } from 'react-redux';
import { sendMessage } from '../../../store/actions/contactFormActions';

const Form = ({ sendMessage }) => {
    const submit = e => {
        e.preventDefault();
        sendMessage();
    };

    return (
        <form
            className={classes.ContactForm}
            onSubmit={submit}
            autoComplete='off'
        >
            <input
                autoComplete='false'
                name='hidden'
                type='text'
                style={{ display: 'none' }}
            />
            <h3>Send us a Message</h3>
            <NameInput />
            <ContactNumberInput />
            <EmailInput />
            <QueryInput />
            <MessageInput />
            <Button label='Send' />
        </form>
    );
};

export default connect(null, { sendMessage })(Form);
