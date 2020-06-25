import React, { useState, useEffect } from 'react';
import classes from './SlideShow.module.scss';
import Slide from './Slide/Slide';
import ServiceModal from '../../layout/serviceModal/ServiceModal';
import scrollReveal from 'scrollreveal';

const SlideShow = ({ services }) => {
    let [currentSlide, setCurrentSlide] = useState(0);
    let [transition, setTransition] = useState('all 500ms ease-in-out');

    //Modal state
    const [isOpen, setIsOpen] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [slideToOpen, setSlideToOpen] = useState(currentSlide);

    let position = (currentSlide / (services.length * 2)) * 100;
    const next = () => {
        if (currentSlide < services.length) {
            setTransition('all 500ms ease-in-out');
            setCurrentSlide(currentSlide + 1);
        }
        if (currentSlide + 2 === services.length + 1) {
            setTimeout(() => {
                setTransition('none');
                setCurrentSlide(0);
            }, 500);
        }
    };

    const prev = () => {
        if (currentSlide !== 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const openModal = index => {
        setSlideToOpen(index);
        setIsOpen(true);
        setIsClosed(false);
    };
    const closeModal = e => {
        setIsOpen(false);
        setIsClosed(true);
    };

    useEffect(() => {
        // ScrollReveal animation
        const options = {
            distance: '100%',
            origin: 'right',
            delay: '0',
            duration: '2000',
            viewFactor: 0.5,
        };
        scrollReveal().reveal('#service-slide', options);
        //-------------------------------
    });

    return (
        <div className={classes.SlideShowContainer}>
            <div className={classes.SlideShow} id='service-slide'>
                <div
                    className={classes.SlideInner}
                    style={{
                        transform: `translateX(${-position}%)`,
                        transition: transition,
                    }}
                >
                    {services.map((service, index) => (
                        <Slide
                            service={service}
                            key={service.title}
                            openModal={openModal}
                            index={index}
                            currentSlide={currentSlide}
                        />
                    ))}

                    {services.map((service, index) => (
                        <Slide
                            service={service}
                            key={`${service.title}aa`}
                            openModal={openModal}
                            index={index}
                            currentSlide={currentSlide}
                        />
                    ))}
                </div>

                {/* Modal controls*/}
                <div className={classes.SlideControls}>
                    <span
                        onClick={prev}
                        style={{ opacity: `${currentSlide === 0 ? 0 : 1}` }}
                    >
                        <i class='fa fa-chevron-left' aria-hidden='true'></i>
                    </span>
                    <span>
                        {currentSlide < services.length ? currentSlide + 1 : 1}{' '}
                        of {services.length}
                    </span>
                    <span onClick={next}>
                        <i class='fa fa-chevron-right' aria-hidden='true'></i>
                    </span>
                </div>
            </div>
            <ServiceModal
                title={services[slideToOpen].title}
                description={services[slideToOpen].description}
                click={closeModal}
                opened={isOpen}
                closed={isClosed}
            />
        </div>
    );
};

export default SlideShow;
