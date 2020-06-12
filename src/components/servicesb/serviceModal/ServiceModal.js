import React from 'react';
import classes from './ServiceModal.module.scss';

const ServiceModal = ({ title, image, description, open, click }) => {
    console.log(description);
    return (
        <React.Fragment>
            <div
                className={`${classes.Backdrop} ${
                    open ? classes.Open : classes.Close
                }`}
                onClick={click}
            >
                <div className={classes.Modal}>
                    <header className={classes.Modal_header}>
                        <h1>{title}</h1>
                    </header>
                    <main className={classes.Modal_body}>
                        <div
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </main>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ServiceModal;
