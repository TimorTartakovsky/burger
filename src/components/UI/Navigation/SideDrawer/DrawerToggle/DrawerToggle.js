import React from 'react';
import ApplicationMessages from "../../../../../messages/ApplicationMessages";
import classes from './DrawerToggle.scss';


const drawerToggle = (props) => (
    <div className={ classes.drawerToggle }
         onClick={ props.clicked }>
        <div title={ ApplicationMessages.toolbarComponent.menu }></div>
        <div title={ ApplicationMessages.toolbarComponent.menu }></div>
        <div title={ ApplicationMessages.toolbarComponent.menu }></div>
    </div>
);

export default drawerToggle;


