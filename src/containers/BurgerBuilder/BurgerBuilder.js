import React, {Component} from 'react';
import Aux from '../../hoc/Auxe/Auxe';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import {INGREDIENT_PRICES} from "../../consts/application_consts";
import OrderHttpService from '../../services/orders/http-order-service';
import Spinner from '../../components/UI/Spinner/Spinner';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
     };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            })
            .reduce(( sum, el ) => {
                return sum + el;
            }, 0);
        this.setState( { purchasable: sum > 0 } );
    }

     addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
               fullName: 'Timor Tartakovsky',
               address: {
                   country: 'Israel',
                   city: 'Bat Yam',
                   street: 'Balfor 11',
                   apt: '33',
                   floor: '9',
                   elevator: 'a',
                   zipCode: '5948310',
               },
               email: 'timortartakovsky@gmail.com',
               deliveryMethod: 'fast',
            }
        };
        debugger;
        OrderHttpService.createNewOrder(JSON.stringify(order))
            .then(() => this.setState({loading: false, purchasing: false}))
            .catch(() => this.setState({loading: false, purchasing: false}));
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = (<OrderSummary
            purchaseCanceled={ this.purchaseCancelHandler }
            purchaseContinued={ this.purchaseContinueHandler }
            price={ this.state.totalPrice }
            ingredients={ this.state.ingredients }/>);
        if (this.state.loading) {
            orderSummary = (<Spinner></Spinner>);
        }
        return (
            <Aux>
                <Modal modalClose={ this.purchaseCancelHandler } show={ this.state.purchasing }>
                    { orderSummary }
                </Modal>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls
                    ingredientAdded={ this.addIngredientHandler }
                    ingredientRemoved={ this.removeIngredientHandler }
                    ordered={ this.purchaseHandler }
                    purchasable={ this.state.purchasable }
                    disabled={ disabledInfo }
                    price={ this.state.totalPrice }
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
