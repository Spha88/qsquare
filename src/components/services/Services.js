import React from 'react';
import classes from './Services.module.scss';
import Container from '../layout/container/Container';
import service_list from './service_list';
import ServicesLead from './ServicesLead/ServicesLead';
import ServicesList from './ServicesList/ServicesList';

import marketing_bg from '../../assets/images/digital_marketing.jpg';
import ict_services_bg from '../../assets/images/ict_services.jpg';
import it_performance_bg from '../../assets/images/it_performance.jpg';
import engineering from '../../assets/images/software_engineering.jpg';
import sars_registration from '../../assets/images/smme_bg.jpg';

const Services = () => {
    let bg_images = [
        marketing_bg,
        ict_services_bg,
        it_performance_bg,
        engineering,
        sars_registration,
    ];

    const myServices = service_list.map((service, index) => {
        return {
            ...service,
            image: bg_images[index],
        };
    });

    return (
        <Container>
            <div className={classes.Services} id='services'>
                <header className={classes.Services_header}>
                    <h1>Services</h1>
                </header>

                <ServicesLead />
                <ServicesList services={myServices} />
            </div>
        </Container>
    );
};

export default Services;
