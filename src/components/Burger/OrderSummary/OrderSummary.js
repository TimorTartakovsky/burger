import React, {Component} from 'react';
import Aux from '../../../hoc/Auxe/Auxe';
import Button from '../../UI/Button/Button';
import ApplicationMessages from "../../../messages/ApplicationMessages";
import {BTN_TYPES} from "../../../consts/application_consts";

// Created it as a class only for a learning reason, could be a functional component
class OrderSummary extends Component{

    componentWillUpdate() {
        console.log('[OrderSummary] OrderSummary: WillUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingredientKey => {
                return (
                    <li key={ ingredientKey }>
                        <span style={{textTransform: 'capitalize'}}>{ ingredientKey }</span>
                        : { this.props.ingredients[ingredientKey] }
                    </li>
                )
            });

        return (
            <Aux>
                <h3>{ ApplicationMessages.orderSummaryComponent.yourOrder }</h3>
                <p>{ ApplicationMessages.orderSummaryComponent.defaultDescription }</p>
                <ul>
                    { ingredientSummary }
                </ul>
                <p><strong>{ ApplicationMessages.orderSummaryComponent.totalPrice + this.props.price.toFixed(2)}</strong></p>
                <p>{ ApplicationMessages.orderSummaryComponent.continueCheck }</p>
                <Button clicked={ this.props.purchaseCanceled } btnType={ BTN_TYPES.danger }>{ ApplicationMessages.orderSummaryComponent.cancelBtn }</Button>
                <Button clicked={ this.props.purchaseContinued } btnType={ BTN_TYPES.success }>{ ApplicationMessages.orderSummaryComponent.continueBtn }</Button>
            </Aux>
        )
    }
}

export default OrderSummary;

