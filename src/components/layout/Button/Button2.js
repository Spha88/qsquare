import React from 'react';
import classes from './Button2.module.scss';

const Button = ({ label, click }) => (
    <button className={classes.Button} onClick={click}>
        {label}
    </button>
);

export default Button;
