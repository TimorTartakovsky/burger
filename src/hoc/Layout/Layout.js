import React, { Component } from 'react';
import Aux from '../Auxe/Auxe';
import classes from './Layout.scss';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/UI/Navigation/SideDrawer/SideDrawer';
import { connect } from 'react-redux';

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
                <Toolbar
                        isAuth={ this.props.isAuthenticated }
                        drawerToggleClicked={ this.sideDrawerToggleHandler } />
                <SideDrawer isAuth={ this.props.isAuthenticated }
                            open={ this.state.showSideDrawer }
                            closed={ this.sideDrawerClosedHandler } />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.authReducer.token,
    };
};

export default connect(mapStateToProps)(Layout);

