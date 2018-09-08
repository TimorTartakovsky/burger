import React from 'react';
import image from '../../assets/images/burger-logo.png';
import classes from './Logo.scss';

const logo = (props) => (
    <div className={ classes.logo }>
        <img className='logoImage' src={ image } alt="Logo image" />
    </div>
);


export default logo;


