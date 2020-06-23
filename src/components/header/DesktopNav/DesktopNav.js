import React, { useState } from 'react';
import { Link } from 'react-scroll';
import classes from './DesktopNav.module.scss';
import navItems from '../navItems';

import ServiceModal from '../../layout/serviceModal/ServiceModal';
import servicesList from '../../services/service_list';

const DesktopNav = ({ open, closeNav }) => {
    const dnClasses = [classes.DesktopNav];
    const sloganClasses = [classes.Slogan];

    //Modal state
    const [isOpen, setIsOpen] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [slideToOpen, setSlideToOpen] = useState(1);

    const openModal = id => {
        setSlideToOpen(id);
        setIsOpen(true);
        setIsClosed(false);
    };
    const closeModal = e => {
        setIsOpen(false);
        setIsClosed(true);
    };

    if (open) {
        dnClasses.push(classes.Open);
        sloganClasses.push(classes.Hide);
    }

    return (
        <React.Fragment>
            <div className={classes.DesktopNavContainer}>
                <ul className={dnClasses.join(' ')}>
                    {navItems.map(navItem => (
                        <li key={navItem.id}>
                            <Link
                                to={navItem.id}
                                duration={1000}
                                smooth={true}
                                offset={navItem.offsetDesktop}
                                spy={true}
                                activeClass={classes.active}
                            >
                                {navItem.label}
                            </Link>
                            {navItem.children && navItem.children.length > 0 && (
                                <ul className={classes.SubNav}>
                                    <li>
                                        <Link
                                            to={navItem.id}
                                            duration={1000}
                                            smooth={true}
                                            offset={navItem.offsetDesktop}
                                            spy={true}
                                            activeClass={classes.active}
                                        >
                                            {navItem.label}
                                        </Link>
                                    </li>
                                    {navItem.children.map((child, index) => (
                                        <li
                                            key={child.id}
                                            onClick={() => openModal(index)}
                                        >
                                            {child.label}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div className={sloganClasses.join(' ')} onClick={closeNav}>
                    <p>Experience digital transition</p>
                </div>
            </div>
            <ServiceModal
                title={servicesList[slideToOpen].title}
                description={servicesList[slideToOpen].description}
                click={closeModal}
                opened={isOpen}
                closed={isClosed}
            />
        </React.Fragment>
    );
};

export default DesktopNav;
