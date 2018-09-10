import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import {BTN_TYPES} from "../../../consts/application_consts";
import ApplicationMessages from "../../../messages/ApplicationMessages";
import classes from './CheckoutSummary.scss';

const checkoutSummary = (props) => {

    return (
        <div className={ classes.checkoutSummary }>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={ props.ingredients }></Burger>
            </div>
            <Button clicked={ props.onCheckoutCanceled }
                    btnType={ BTN_TYPES.danger }>
                { ApplicationMessages.checkoutComponent.cancelBtn }
            </Button>
            <Button clicked={ props.onCheckoutContinued }
                    btnType={ BTN_TYPES.success }>
                { ApplicationMessages.checkoutComponent.continueBtn }
            </Button>
        </div>
    )

}

export default checkoutSummary;

