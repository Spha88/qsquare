import React from 'react';
import classes from './Services.module.scss';
import Container from '../layout/container/Container';
import Service from './service/Service';
import service_list from './service_list';

const Services = () => {
    return (
        <Container>
            <div className={classes.Services}>
                <header className={classes.Services_header}>
                    <h1>Services</h1>
                </header>
                <div className={classes.Services_list}>
                    {service_list.map(service => (
                        <Service service={service} key={service.title} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Services;
