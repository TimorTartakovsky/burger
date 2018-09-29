import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { connect } from 'react-redux';
import {INTERNAL_ROADS} from "../../consts/roudListConst";


class Checkout extends Component {

    onCheckoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    onCheckoutContinuedHandler = () => {
        this.props.history.replace(INTERNAL_ROADS.contactData);
    }


    render() {
        let summary = <Redirect to={ INTERNAL_ROADS.default } />

        if (this.props.ingredients) {
            summary = (<div>
                            <CheckoutSummary onCheckoutCanceled={ this.onCheckoutCanceledHandler }
                                             onCheckoutContinued={ this.onCheckoutContinuedHandler }
                                             ingredients={ this.props.ingredients } />
                            <Route path={ `${ this.props.match.path }/contact-data` }
                                   component={ ContactData }/>
                       </div>);
        }

        return summary;
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.burgerReducer.ingredients,
        totalPrice: state.burgerReducer.totalPrice,
        purchased: state.orderReducer.purchased,
    }
};

export default connect(mapStateToProps)(Checkout);


