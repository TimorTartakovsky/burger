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

        let orderSummary = null;
        let burger = this.props.error ? <p>{ ApplicationMessages.burgerBuilderComponent.noIngredients }</p> : (<Spinner/>);

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
        totalPrice: state.totalPrice,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: ingName =>  dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: ingName => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios));
