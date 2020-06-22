import React from 'react';
import classes from './Form.module.scss';

import { useForm } from 'react-hook-form';
import validator from 'validator';

import { connect } from 'react-redux';
import { sendEmail } from '../../../store/actions/contactFormActions';

import Button from '../../layout/Button/Button2';
import Loader from '../../layout/Loader/Loader';

const Form = ({ sendEmail, sending, emailSent }) => {
    const { register, handleSubmit, errors } = useForm();

    const submit = data => {
        sendEmail(data);
        document.getElementById('contact-form').reset();
    };

    const validateNumber = number => {
        if (number.length >= 10) {
            return (
                validator.isMobilePhone(number) ||
                'Enter a valued contact number'
            );
        } else {
            return true;
        }
    };
    return (
        <form
            className={classes.ContactForm}
            onSubmit={handleSubmit(submit)}
            id='contact-form'
        >
            {sending && <Loader />}
            {emailSent && <span className={classes.MessageSent}>Message sent.</span>}

            <div
                className={`${classes.FormControl} ${
                    errors.name && classes.Error
                    }`}
            >
                <input
                    type='text'
                    name='name'
                    placeholder='Name and Surname'
                    ref={register({
                        required: 'This field is required',
                        minLength: {
                            value: 3,
                            message:
                                'Name should not be less than 3 characters',
                        },
                        maxLength: {
                            value: 35,
                            message: 'Maximum number of characters is 35',
                        },
                        validate: value =>
                            validator.isAlpha(value.replace(/\s/g, '')) ||
                            'Invalid name',
                    })}
                />
                <span className={classes.ErrorMessage}>
                    {errors.name && errors.name.message}
                </span>
            </div>

            <div
                className={`${classes.FormControl} ${
                    errors.number && classes.Error
                    }`}
            >
                <input
                    type='tel'
                    name='number'
                    placeholder='Number'
                    ref={register({
                        minLength: {
                            value: 10,
                            message: 'Contact number is too short',
                        },
                        maxLength: {
                            value: 13,
                            message: 'Contact number too long',
                        },
                        validate: value => validateNumber(value),
                    })}
                />
                <span className={classes.ErrorMessage}>
                    {errors.number && errors.number.message}
                </span>
            </div>

            <div
                className={`${classes.FormControl} ${
                    errors.email && classes.Error
                    }`}
            >
                <input
                    type='text'
                    name='email'
                    placeholder='Email'
                    ref={register({
                        required: 'Email is required',
                        validate: value =>
                            validator.isEmail(value) || 'Invalid email address',
                    })}
                />
                <span className={classes.ErrorMessage}>
                    {errors.email && errors.email.message}
                </span>
            </div>

            <div
                className={`${classes.FormControl} ${
                    errors.subject && classes.Error
                    }`}
            >
                <select
                    id='subject'
                    name='subject'
                    ref={register({ required: 'Please choose a subject', maxLength: { value: 40, message: 'Max. characters for subject is 40' } })}
                >
                    <option value=''>choose a subject</option>
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
                <span className={classes.ErrorMessage}>
                    {errors.subject && errors.subject.message}
                </span>
            </div>

            <div
                className={`${classes.FormControl} ${
                    errors.message && classes.Error
                    }`}
            >
                <textarea
                    defaultValue='Message'
                    name='message'
                    rows='5'
                    ref={register({
                        required: 'Message is required',
                        minLength: {
                            value: 10,
                            message:
                                'Your message is too short, give a bit more details',
                        },
                        maxLength: {
                            value: 400,
                            message: 'Your message is too long.',
                        },
                    })}
                ></textarea>
                <span className={classes.ErrorMessage}>
                    {errors.message && errors.message.message}
                </span>
            </div>
            <Button label='Send' />
        </form>
    );
};

const mapStateToProps = state => ({
    sending: state.contact.sending,
    emailSent: state.contact.emailSent
})

export default connect(mapStateToProps, { sendEmail })(Form);
