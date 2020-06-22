import React from 'react';
import classes from './Contact.module.scss';
import Form from './Form/Form';

const Contact = () => {
    return (
        <div className={classes.Contact} id='contact'>
            <div className={classes.Container}>
                <div className={classes.Content}>
                    <div className={classes.ContactBody}>
                        <div className={classes.Lead}>
                            <header><h1>Contact Us</h1></header>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti et fuga mollitia officiis, consectetur veniam. Deserunt dignissimos laborum commodi obcaecati error maxime consequatur mollitia consequuntur molestias illum quisquam, deleniti.</p>

                            <footer>
                                <ul className={classes.Address}>
                                    <span><i
                                        className='fa fa-map-marker fa-lg'
                                        aria-hidden='true'
                                    ></i></span>
                                    <li>76 Tieroog Street</li>
                                    <li>Kathu</li>
                                    <li>8446</li>
                                </ul>

                                <ul>
                                    <li>
                                        <a
                                            href='mailto:info@q-squared.co.za'
                                            title='Email us'
                                        >
                                            <i
                                                className='fa fa-envelope fa-lag'
                                                aria-hidden='true'
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href='https://web.facebook.com/qsquaredconcepts/'
                                            title='Visit our Facebook page'
                                        >
                                            <i
                                                className='fa fa-facebook-square fa-lg'
                                                aria-hidden='true'
                                            ></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            id='whatsapp'
                                            href='https://api.whatsapp.com/send?phone=27825569878'
                                            title='Send a message on Whatsapp'
                                        >
                                            <i
                                                className='fa fa-whatsapp fa-lg'
                                                aria-hidden='true'
                                            ></i>{' '}
                                        </a>
                                    </li>
                                </ul>
                            </footer>
                        </div>
                        <div className={classes.FormContainer}>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
