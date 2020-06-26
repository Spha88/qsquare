import React from 'react';
import Container from '../layout/container/Container';
import classes from './Footer.module.scss';
import UpButton from '../layout/UpButton/UpButton';

const Footer = () => {
    return (
        <div className={classes.Footer} id='footer'>
            <Container>
                <div className={classes.Footer_content}>
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

                    <p className={classes.CopyRight} style={{ color: '#fff' }}>
                        Q-Squared Concepts (PTY) Ltd &copy;{' '}
                        {new Date().getFullYear()}
                    </p>
                </div>

                <div className={classes.Designer}>
                    <a href='http://www.netslate.co.za'>Website by Spha</a>
                </div>
            </Container>
            <UpButton />
        </div>
    );
};

export default Footer;
