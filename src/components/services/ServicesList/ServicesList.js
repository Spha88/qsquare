import React from 'react';
import classes from './ServicesList.module.scss';
import Service from '../service/Service';

const ServicesList = ({ services }) => {
    return (
        <div className={classes.Services_list}>
            {services.map(service => (
                <Service service={service} key={service.title} />
            ))}
        </div>
    );
};

export default ServicesList;
