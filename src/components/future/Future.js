import React from 'react';
import Container from '../layout/container/Container';
import classes from './Future.module.scss';

const Future = () => {
    return (
        <div className={classes.Future} id='future'>
            <Container>
                <div className={classes.Future_content}>
                    <header>
                        <h2>A future of collaborative digital platforms</h2>
                    </header>
                    <main>
                        <p>
                            South Africa’s economy has historically been
                            designed and organised around certain industries,
                            such as mining, which lead to a skewed concentration
                            of expertise to the urban centers. As a result,
                            innovative solutions that could resolve rural
                            challenges are excluded from the mainstream economy.
                        </p>
                        <p>
                            We aim to bridge this gap between aspirant
                            entrepreneurs and industry experts through the
                            development of digital platforms for entrepreneurial
                            collaboration and facilitate business mentorship.
                        </p>
                        <p>
                            The key aim of the digital platforms is to afford
                            aspiring entrepreneurs who have innovative business
                            ideas, an opportunity to access expert professional
                            guidance and services and thus equally participate
                            in the overall economy.
                        </p>
                    </main>
                </div>
            </Container>
        </div>
    );
};

export default Future;
