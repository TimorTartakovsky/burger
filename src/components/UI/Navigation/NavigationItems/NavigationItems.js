import React from 'react';
import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import ApplicationMessages from "../../../../messages/ApplicationMessages";

const navigationItems = (props) => (
    <ul className={ classes.navigationItems }>
        <NavigationItem link='/' active>{ ApplicationMessages.navigationItems.burgerBuilder }</NavigationItem>
        <NavigationItem link='/orders' >{ ApplicationMessages.navigationItems.orders }</NavigationItem>
        <NavigationItem link='/auth' >{ ApplicationMessages.navigationItems.authenticate }</NavigationItem>
    </ul>
);

export default navigationItems;





