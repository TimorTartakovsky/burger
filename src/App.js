import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import { Route, Switch, withRouter } from 'react-router-dom';
import Logout from "./containers/Auth/Logout/Logout";
import {INTERNAL_ROADS} from "./consts/roudListConst";
import { connect } from 'react-redux';
import * as actions from './store/actions/index';


class App extends Component {

  componentDidMount() {
      this.props.onTryAutoSignUp();
  }

  render() {
    return (
      <div>
        <Layout>
            <Switch>
                <Route path={ INTERNAL_ROADS.checkout } component={ Checkout } />
                <Route path={ INTERNAL_ROADS.orders } component={ Orders } />
                <Route path={ INTERNAL_ROADS.auth } component={ Auth } />
                <Route path={ INTERNAL_ROADS.logout } component={ Logout } />
                <Route path={ INTERNAL_ROADS.default } component={ BurgerBuilder } />
            </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
