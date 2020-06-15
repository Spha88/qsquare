import React from 'react';
import classes from './ServiceModal.module.scss';

const ServiceModal = ({ title, description, opened, closed, click }) => {
    const bdClass = [classes.Backdrop];
    opened && bdClass.push(classes.Open);
    closed && bdClass.push(classes.Close);

    return (
        <div className={bdClass.join(' ')} onClick={click}>
            <div className={classes.Modal}>
                <header className={classes.Modal_header}>
                    <h1>{title}</h1>
                </header>
                <main className={classes.Modal_body}>
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                </main>
            </div>
        </div>
    );
};

export default ServiceModal;
