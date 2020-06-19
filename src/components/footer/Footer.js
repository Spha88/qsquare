import React from 'react';
import Container from '../layout/container/Container';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.Footer} id='contact'>
            <Container>
                <div className={classes.Footer_content}>
                    <ul>
                        <li>
                            <a
                                href='mailto:info@q-squared.co.za'
                                title='Email us'
                            >
                                <i
                                    class='fa fa-envelope fa-lag'
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
                                    class='fa fa-facebook-square fa-lg'
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
                                    class='fa fa-whatsapp fa-lg'
                                    aria-hidden='true'
                                ></i>{' '}
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={classes.Designer}>
                    <a href='http://www.netslate.co.za'>Website by Spha</a>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
