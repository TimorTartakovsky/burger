import React, {Component} from 'react';
import Aux from '../../hoc/Auxe/Auxe';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../services/axios-service';
import WithErrorHandler from '../../hoc/withErrorHandling/WithErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import IngredientsHttpService from '../../services/ingredients/http-ingredients-service';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {

    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
     };

    componentDidMount() {
        // IngredientsHttpService.getAllIngredients()
        //     .then(response => {
        //         this.setState({ingredients: response.data});
        //     })
        //     .catch(() => undefined);
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            })
            .reduce(( sum, el ) => {
                return sum + el;
            }, 0);
        return sum > 0;
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {

        /*
            USED to path params through the query params

             const queryParams = [];

             for(let ingredient in this.state.ingredients) {
                 queryParams.push(`${
                     encodeURIComponent(ingredient)
                 }=${
                     encodeURIComponent(this.state.ingredients[ingredient])
                 }`);
             }
             queryParams.push(`price=${ this.props.totalPrice }`);

             search: `?${ queryParams.join('&') }`
         */

        this.props.history.push({ pathname: '/checkout' });
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary;
        let burger = (<Spinner/>);

        if (!!this.props.ingredients) {
            burger =(<Aux>
                        <Burger ingredients={ this.props.ingredients } />
                        <BuildControls
                            ingredientAdded={ this.props.onIngredientAdded }
                            ingredientRemoved={ this.props.onIngredientRemoved }
                            ordered={ this.purchaseHandler }
                            purchasable={ this.updatePurchaseState(this.props.ingredients) }
                            disabled={ disabledInfo }
                            price={ this.props.totalPrice }
                        />
                    </Aux>
            );

            orderSummary = (<OrderSummary
                                purchaseCanceled={ this.purchaseCancelHandler }
                                purchaseContinued={ this.purchaseContinueHandler }
                                price={ this.props.totalPrice }
                                ingredients={ this.props.ingredients }/>
            );
        }

        if (this.state.loading) {
            orderSummary = (<Spinner></Spinner>);
        }

        return (
            <Aux>
                <Modal modalClose={ this.purchaseCancelHandler } show={ this.state.purchasing }>
                    { orderSummary }
                </Modal>
                { burger }
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: ingName =>  dispatch({ type: actionTypes.ADD_INGREDIENT, payload: {ingredientName: ingName} }),
        onIngredientRemoved: ingName => dispatch({ type: actionTypes.REMOVE_INGREDIENT, payload: {ingredientName: ingName} }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
