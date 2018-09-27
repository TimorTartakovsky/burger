import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { connect } from 'react-redux';


class Checkout extends Component {

    onCheckoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    onCheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render() {
        let summary = <Redirect to='/' />

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


