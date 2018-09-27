import React from 'react';
import classes from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';
import {BUILDER_CONTROLS} from "../../../consts/applicationConsts";
import ApplicationMessages from "../../../messages/ApplicationMessages";

const buildControls = (props) => (
    <div className={classes.buildControls}>
        <p><strong>{ ApplicationMessages.buildControlsComponent.currentPrice + props.price.toFixed(2) }</strong></p>
        { BUILDER_CONTROLS.map( ctrl => (
            <BuildControl
                key={ ctrl.label }
                label={ ctrl.label }
                added={ props.ingredientAdded.bind(this, ctrl.type) }
                removed={ props.ingredientRemoved.bind(this, ctrl.type) }
                disabled={ props.disabled[ctrl.type] }
            />
        )) }
        <button className={classes.orderButton}
                onClick={ props.ordered }
                disabled={ !props.purchasable }>
            { ApplicationMessages.buildControlsComponent.orderButton }
        </button>
    </div>

);

export default buildControls;



