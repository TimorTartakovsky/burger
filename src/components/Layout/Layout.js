import React from 'react';
import Aux from '../../hoc/Auxe';
import classes from './Layout.scss';

const layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;

