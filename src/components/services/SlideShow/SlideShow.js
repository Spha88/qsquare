import React from 'react';

const SlideShow = ({ services }) => {
    return (
        <div className={classes.Services_list}>
            {services.map(service => (
                <Service service={service} key={service.title} />
            ))}
        </div>
    );
};

export default SlideShow;
