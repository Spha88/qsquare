import React from 'react';
import classes from './Services.module.scss';
import Container from '../layout/container/Container';
import service_list from './service_list';
import ServicesLead from './ServicesLead/ServicesLead';
import SlideShow from './SlideShow/SlideShow';

import ServicesIE from '../servicesInternetExplorer/Services';
// import ServicesList from './ServicesList/ServicesList';

import marketing_bg from '../../assets/images/digital_marketing.jpg';
import ict_services_bg from '../../assets/images/ict_services.jpg';
import it_performance_bg from '../../assets/images/it_performance.jpg';
import engineering from '../../assets/images/software_engineering.jpg';
import sars_registration from '../../assets/images/smme_bg.jpg';

const Services = () => {
    // Internet Explorer 6-11
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;

    console.log('This is IE: ' + isIE);
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

    // Return service component without slide for internet explorer
    if (isIE) {
        return <ServicesIE />;
    }

    return (
        <React.Fragment>
            <Container>
                <div className={classes.Services} id='services'>
                    <header className={classes.Services_header}>
                        <h1>Services</h1>
                    </header>

                    <ServicesLead />
                </div>
            </Container>

            <SlideShow services={myServices} />
        </React.Fragment>
    );
};

export default Services;
