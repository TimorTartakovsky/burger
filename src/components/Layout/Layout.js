import React, { Component } from 'react';
import Aux from '../../hoc/Auxe';
import classes from './Layout.scss';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToggleHandler = () => {
        this.setState((previousState) => {
            return { showSideDrawer: !previousState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={ this.sideDrawerToggleHandler } />
                <SideDrawer open={ this.state.showSideDrawer } closed={ this.sideDrawerClosedHandler } />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;

