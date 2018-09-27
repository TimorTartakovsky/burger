import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { connect } from 'react-redux';

class Checkout extends Component {

    /*
        USED to receive a query params.
        componentWillMount() {
            const query = new URLSearchParams(this.props.location.search);
            const updatedIngredients = {};
            let price = 0;

            for ( let param of query.entries() ) {
                if (param[0] === 'price') {
                    price = param[1];
                } else {
                    updatedIngredients[param[0]] = +param[1];
                }
            }
            this.setState(
                {
                  ingredients: updatedIngredients,
                  totalPrice: price
                }
            );
        }
    */

    onCheckoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    onCheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }


    /*
        USED before
         render={(props) => (<ContactData ingredients={ this.props.ingredients }
                                            price={ this.props.totalPrice }
                                            { ...props }/>) }
    */

    render() {
        return (
            <div>
                <CheckoutSummary onCheckoutCanceled={ this.onCheckoutCanceledHandler }
                                 onCheckoutContinued={ this.onCheckoutContinuedHandler }
                                 ingredients={ this.props.ingredients } />
                <Route path={ `${ this.props.match.path }/contact-data` }
                       component={ ContactData }/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
    }
};


export default connect(mapStateToProps) (Checkout);


