import React from 'react';

import Container from '../layout/container/Container';
import Heading from '../layout/Heading/Heading';
import classes from './Partners.module.scss';
import Hailer_logo from '../../assets/images/hailer_logo.png';
import Ndalo_logo from '../../assets/images/ndalo_logo.png';

const Partners = () => {
    return (
        <Container>
            <div className={classes.Partners} id='partners'>
                <header className={classes.Partners_heading}>
                    <Heading>Our Partners</Heading>
                </header>
                <main>
                    <p>
                        QSC has forged strategic partnerships with service
                        providers whose business disposition resonates with our
                        value system. We have partnered with Hailer
                        Technologies, as our software development partner.
                    </p>
                    <p>
                        Ndalo Risk Management assists us with our risk
                        management and auditing transactions and solutions.
                    </p>
                </main>
                <footer>
                    <a href='https://hailer.co.za/'>
                        <img src={Hailer_logo} alt='hailer logo' />
                    </a>
                    <a href='https://www.ndalo-risk.co.za/'>
                        <img src={Ndalo_logo} alt='ndalo logo' />
                    </a>
                </footer>
            </div>
        </Container>
    );
};

export default Partners;
