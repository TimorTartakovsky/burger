import React from 'react';
import Aux from '../../hoc/Auxe';
import classes from './Layout.scss';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;

