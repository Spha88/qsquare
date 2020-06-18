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
                            76 Tieroog Street
                            <span className={classes.Town}>Kathu</span>8446
                        </li>
                        <li>
                            <span>Email:</span> info@q-sqaured.co.za
                        </li>
                        <li>
                            <span>Facebook:</span> @qsquaredconcepts{' '}
                        </li>
                        <li>
                            <span>Tel:</span> 082 556 9878
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
