import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: null,
        price: 0,
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()) {
            if (!!param[0] && param[0] === 'price') {
                price = param[0];
                return;
            }
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients, totalPrice: price});
    }

    onCheckoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    onCheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    render() {
        return (
            <div>
                <CheckoutSummary onCheckoutCanceled={ this.onCheckoutCanceledHandler }
                                 onCheckoutContinued={ this.onCheckoutContinuedHandler }
                                 ingredients={ this.state.ingredients } />
                <Route path={ `${ this.props.match.path }/contact-data` }
                       render={(props) => (<ContactData ingredients={ this.state.ingredients }
                                                   price={ this.state.totalPrice }
                                                        { ...props }/>) } />
            </div>
        )
    }

}


export default Checkout;
