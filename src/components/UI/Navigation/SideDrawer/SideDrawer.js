import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Auxe';
import classes from './SideDrawer.scss';


const sideDrawer = (props) => {
    let attachedClasses = [classes.sideDrawer, classes.close];
    if (props.open) {
        attachedClasses = [classes.sideDrawer, classes.open];
    }

    return (
        <Aux>
            <Backdrop show={ props.open } clicked={ props.closed }></Backdrop>
            <div className={ attachedClasses.join(' ') }>
                <div className={ classes.logo }>
                    <Logo></Logo>
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;

