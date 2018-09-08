import React from 'react';
import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import ApplicationMessages from "../../../../messages/ApplicationMessages";

const navigationItems = (props) => (
    <ul className={ classes.navigationItems }>
        <NavigationItem link='/' active>{ ApplicationMessages.navigationItems.burgerBuilder }</NavigationItem>
        <NavigationItem link='/' >{ ApplicationMessages.navigationItems.checkout }</NavigationItem>
    </ul>
);

export default navigationItems;





