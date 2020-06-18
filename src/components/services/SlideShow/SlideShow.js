import React, { useState } from 'react';
import classes from './SlideShow.module.scss';
import Slide from './Slide/Slide';
import ServiceModal from '../../layout/serviceModal/ServiceModal';

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
            }, 501);
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

    return (
        <div className={classes.SlideShow}>
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
                    />
                ))}

                {services.map((service, index) => (
                    <Slide
                        service={service}
                        key={`${service.title}aa`}
                        openModal={openModal}
                        index={index}
                    />
                ))}
            </div>

            <div className={classes.SlideControls}>
                <span
                    onClick={prev}
                    style={{ opacity: `${currentSlide === 0 ? 0 : 1}` }}
                >
                    <i className='material-icons'>navigate_before</i>
                </span>
                <span>
                    {currentSlide < services.length ? currentSlide + 1 : 1}/
                    {services.length}
                </span>
                <span onClick={next}>
                    <i className='material-icons'>navigate_next</i>
                </span>
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
