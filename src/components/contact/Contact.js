import React from 'react';
import Container from '../layout/container/Container';
import classes from './Contact.module.scss';
import Form from './Form/Form';

const Contact = () => {
    return (
        <div className={classes.Contact} id='contact'>
            <Container>
                <div className={classes.Content}>
                    <div className={classes.ContactBody}>
                        <Form />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
