import React from 'react';
import Aux from '../../../hoc/Auxe';
import ApplicationMessages from "../../../messages/ApplicationMessages";

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
            <p>{ ApplicationMessages.orderSummary.continueCheck }</p>
        </Aux>
    )

}

export default orderSummary;

