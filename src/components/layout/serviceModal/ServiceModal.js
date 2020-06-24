import React from 'react';
import classes from './ServiceModal.module.scss';

import PropTypes from 'prop-types';

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

ServiceModal.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    opened: PropTypes.bool.isRequired,
    closed: PropTypes.bool.isRequired,
    click: PropTypes.func.isRequired,
};

export default ServiceModal;
