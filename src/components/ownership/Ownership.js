import React from 'react';
import classes from './Ownership.module.scss';
import Container from '../layout/container/Container';

const Ownership = () => {
    return (
        <Container>
            <div className={classes.Ownership}>
                <header>
                    <h1>Ownership</h1>
                </header>
                <main>
                    <div className={classes.Ownership_content}>
                        <p>
                            QSC is 100% black owned and currently under
                            leadership and management of the owner.
                        </p>
                    </div>
                </main>
            </div>
        </Container>
    );
};

export default Ownership;
