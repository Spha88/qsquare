import React from 'react';
import Container from '../layout/container/Container';
import classes from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <Container>
                <div className={classes.Footer_content}>
                    <p>76 Tieroog Street Kathu 8446</p>
                    <p>Email: info@q-sqaured.co.za</p>
                    <p>Facebook: @qsquaredconcepts </p>
                    <p>Tel: 082 556 9878</p>
                </div>

                <div className={classes.Designer}>
                    <a href='http://www.netslate.co.za' target='_blank'>
                        Website by <br /> Spha
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
