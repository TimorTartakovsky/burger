import React, {Component} from 'react';
import Aux from '../../hoc/Auxe/Auxe';
import axios from '../../services/axios-service';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import WithErrorHandler from '../../hoc/withErrorHandling/WithErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ApplicationMessages from "../../messages/ApplicationMessages";
import {INTERNAL_ROADS} from "../../consts/roudListConst";

class BurgerBuilder extends Component {

    state = {
        purchasable: false,
        purchasing: false
     };

    componentDidMount() {
        this.props.onInitIngredients();
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
        this.props.onInitPurchase();
        this.props.history.push({ pathname: INTERNAL_ROADS.checkout });
    }

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({purchasing: true});
        } else {
            this.props.onSetAuthRedirectPath(INTERNAL_ROADS.checkout);
            this.props.history.push(INTERNAL_ROADS.auth);
        }
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>{ ApplicationMessages.burgerBuilderComponent.noIngredients }</p> : (<Spinner/>);

        if (!!this.props.ingredients) {
            burger =(<Aux>
                        <Burger ingredients={ this.props.ingredients } />
                        <BuildControls
                            isAuth={ this.props.isAuthenticated }
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
        ingredients: state.burgerReducer.ingredients,
        totalPrice: state.burgerReducer.totalPrice,
        error: state.burgerReducer.error,
        isAuthenticated: !!state.authReducer.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: ingName =>  dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: ingName => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
