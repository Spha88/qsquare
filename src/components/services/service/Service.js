import React, { useState } from 'react';
import classes from './Service.module.scss';

const Service = ({ service: { title, description } }) => {
    const [openService, setOpenService] = useState(false);

    return (
        <div className={classes.Service}>
            <header onClick={() => setOpenService(!openService)}>
                <h2>{title}</h2>
            </header>
            <main className={`${openService && classes.Open}`}>
                <div
                    className={classes.Service_content}
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </main>
        </div>
    );
};

export default Service;
