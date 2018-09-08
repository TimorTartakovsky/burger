import React from 'react';
import classes from './Toolbar.scss';
import ApplicationMessages from "../../../../messages/ApplicationMessages";
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../../Logo/Logo';

const toolbar = () => (
    <header className={ classes.toolbar }>
        <div>{ ApplicationMessages.toolbarComponent.menu }</div>
        <Logo>{ ApplicationMessages.toolbarComponent.logo }</Logo>
        <nav>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);


export default toolbar;



