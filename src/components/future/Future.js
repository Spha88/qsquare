import React from 'react';
import Container from '../layout/container/Container';
import classes from './Future.module.scss';

const Future = () => {
    return (
        <div className={classes.Future}>
            <Container>
                <div className={classes.Future_content}>
                    <header>
                        <h2>A future of collaborative digital platforms</h2>
                    </header>
                    <main>
                        <p>
                            South Africa’s economy has historically been
                            designed and organised around certain industries,
                            like mining, thus leading to a skewed concentration
                            of expertise to the urban centers. As a result,
                            innovative solutions that could resolve rural
                            challenges are excluded from the mainstream economy.
                        </p>
                        <p>
                            Q-Squared Concepts (PTY) LTD aims to exploit this
                            gap between aspirant entrepreneurs and industry
                            experts through the development of digital platforms
                            for entrepreneurial collaboration and facilitate
                            business mentorship.
                        </p>
                        <p>
                            The key aim of the digital platforms is to afford
                            aspiring entrepreneurs who have innovative business
                            ideas, an opportunity to access expert professional
                            guidance and services.
                        </p>
                    </main>
                </div>
            </Container>
        </div>
    );
};

export default Future;
