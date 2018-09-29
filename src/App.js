import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Logout from "./containers/Auth/Logout/Logout";
import {INTERNAL_ROADS} from "./consts/roudListConst";
import { connect } from 'react-redux';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncCheckout = asyncComponent(() => {
    return import('./containers/Checkout/Checkout');
});

const asyncOrders = asyncComponent(() => {
    return import('./containers/Orders/Orders');
});

const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
});

class App extends Component {

  componentDidMount() {
      this.props.onTryAutoSignUp();
  }

  render() {
      let routes = (<Switch>
                        <Route path={ INTERNAL_ROADS.auth } component={ asyncAuth } />
                        <Route path={ INTERNAL_ROADS.default } component={ BurgerBuilder } />
                        <Redirect to={ INTERNAL_ROADS.default } />
                    </Switch>);
      if (this.props.isAuthenticated) {
          routes = (<Switch>
                        <Route path={ INTERNAL_ROADS.checkout } component={ asyncCheckout } />
                        <Route path={ INTERNAL_ROADS.orders } component={ asyncOrders } />
                        <Route path={ INTERNAL_ROADS.auth } component={ asyncAuth } />
                        <Route path={ INTERNAL_ROADS.logout } component={ Logout } />
                        <Route path={ INTERNAL_ROADS.default } component={ BurgerBuilder } />
                        <Redirect to={ INTERNAL_ROADS.default } />
                    </Switch>);
      }
    return (
      <div>
        <Layout>
            { routes }
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
       isAuthenticated: !!state.authReducer.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
