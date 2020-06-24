import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './MobileNav.module.scss';
import { Link } from 'react-scroll';
import NavItems from '../navItems';

import ServiceModal from '../../layout/serviceModal/ServiceModal';
import servicesList from '../../services/service_list';

const MobileNav = ({ open, closeNav }) => {
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

    return (
        <React.Fragment>
            <nav className={`${classes.MobileNav} ${open && classes.OpenNav}`}>
                <ul>
                    {NavItems.map(navItem => (
                        <li key={navItem.id}>
                            <Link
                                to={navItem.id}
                                duration={1000}
                                smooth={true}
                                offset={navItem.offsetMobile}
                                spy={true}
                                activeClass={classes.active}
                                onClick={closeNav}
                            >
                                <span>{navItem.label}</span>
                            </Link>
                            {navItem.children && navItem.children.length > 0 && (
                                <ul className={classes.SubNav}>
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
            </nav>
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

MobileNav.propTypes = {
    open: PropTypes.bool.isRequired,
    closeNav: PropTypes.func.isRequired,
};

export default MobileNav;
