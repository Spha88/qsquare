import React from 'react';
import classes from './Services.module.scss';
import Container from '../layout/container/Container';
import Service from './service/Service';
import service_list from './service_list';

import marketing_bg from '../../assets/images/digital_marketing.jpg';
import ict_services_bg from '../../assets/images/ict_services.jpg';
import it_performance_bg from '../../assets/images/it_performance.jpg';
import engineering from '../../assets/images/software_engineering.jpg';

const Services = () => {
    let bg_images = [
        marketing_bg,
        ict_services_bg,
        it_performance_bg,
        engineering,
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
                <div className={classes.Services_lead}>
                    <div className={classes.Services_lead_image}></div>
                    <div className={classes.Services_lead_content}>
                        <p>
                            We offer a range of ICT services meant to create
                            both financial and sentimental value for everyone in
                            our value chain. Our assemblage of various skillsets
                            allows us to respond in a precise manner to our
                            customer demands and expectations.
                        </p>
                        <p>
                            We follow a tried and tested systems’ thinking
                            format of gathering user requirements filtered
                            through collaborative change management process and
                            user acceptance testing (UAT) ending with seamless
                            herd deployment.
                        </p>
                        <p>
                            At the core of all our service delivery is to help
                            our client transition from offline to online without
                            inconveniencing the customers.
                        </p>
                        <p>
                            We hold as sacred our <strong>no-day-lost</strong>{' '}
                            slogan in all our service ventures.
                        </p>
                    </div>
                </div>

                <div className={classes.Services_list}>
                    {myServices.map(service => (
                        <Service service={service} key={service.title} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Services;
