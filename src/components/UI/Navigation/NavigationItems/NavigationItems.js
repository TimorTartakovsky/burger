import React from 'react';
import Aux from '../../../../hoc/Auxe/Auxe'
import classes from './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';
import ApplicationMessages from "../../../../messages/ApplicationMessages";
import {INTERNAL_ROADS} from "../../../../consts/roudListConst";

const navigationItems = (props) => (
    <ul className={ classes.navigationItems }>
        {
            props.isAuthenticated ?
                (<Aux>
                    <NavigationItem link={ INTERNAL_ROADS.default } exact>{ ApplicationMessages.navigationItems.burgerBuilder }</NavigationItem>
                    <NavigationItem link={ INTERNAL_ROADS.orders } >{ ApplicationMessages.navigationItems.orders }</NavigationItem>
                    <NavigationItem link={ INTERNAL_ROADS.logout }>{ ApplicationMessages.navigationItems.logOut }</NavigationItem>
                </Aux>)
                :
                (<NavigationItem link={ INTERNAL_ROADS.auth } >{ ApplicationMessages.navigationItems.authenticate }</NavigationItem>)
        }
    </ul>
);

export default navigationItems;





