import React from 'react';
import classes from './Form.module.scss';

import NameInput from './NameInput/NameInput';
import ContactNumberInput from './ContactNumberInput/ContactNumberInput';
import EmailInput from './EmailInput/EmailInput';
import QueryInput from './QueryInput/QueryInput';
import MessageInput from './MessageInput/MessageInput';
import Button from '../../layout/Button/Button2';

const Form = () => {
    return (
        <form className={classes.ContactForm}>
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

export default Form;
