import React from 'react';
import Aux from '../../../hoc/Auxe';
import Button from '../../UI/Button/Button';
import ApplicationMessages from "../../../messages/ApplicationMessages";
import {BTN_TYPES} from "../../../consts/application_consts";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return (
                <li key={ ingredientKey }>
                    <span style={{textTransform: 'capitalize'}}>{ ingredientKey }</span>
                    : { props.ingredients[ingredientKey] }
                </li>
            )
        });
    return (
        <Aux>
            <h3>{ ApplicationMessages.orderSummary.yourOrder }</h3>
            <p>{ ApplicationMessages.orderSummary.defaultDescription }</p>
            <ul>
                { ingredientSummary }
            </ul>
            <p><strong>{ ApplicationMessages.orderSummary.totalPrice + props.price.toFixed(2)}</strong></p>
            <p>{ ApplicationMessages.orderSummary.continueCheck }</p>
            <Button clicked={ props.purchaseCanceled } btnType={ BTN_TYPES.danger }>{ ApplicationMessages.orderSummary.cancelBtn }</Button>
            <Button clicked={ props.purchaseContinued } btnType={ BTN_TYPES.success }>{ ApplicationMessages.orderSummary.continueBtn }</Button>
        </Aux>
    )

}

export default orderSummary;

