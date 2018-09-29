import React from 'react';
import classes from './Toolbar.scss';
import ApplicationMessages from "../../../../messages/ApplicationMessages";
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../../Logo/Logo';

const toolbar = (props) => (
    <header className={ classes.toolbar }>
        <DrawerToggle clicked={ props.drawerToggleClicked }></DrawerToggle>
        <Logo height='80%'>{ ApplicationMessages.toolbarComponent.logo }</Logo>
        <nav className={ classes.desktopOnly }>
            <NavigationItems isAuthenticated={ props.isAuth } />
        </nav>
    </header>
);


export default toolbar;



