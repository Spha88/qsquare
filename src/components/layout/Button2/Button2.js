import React from 'react';
import classes from './Button2.module.scss';

const Button = ({ label }) => (
    <button className={classes.Button}>{label}</button>
);

export default Button
