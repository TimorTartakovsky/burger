import React from 'react';
import classes from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';
import {BUILDER_CONTROLS} from "../../../consts/application_consts";

const buildControls = (props) => (
    <div className={classes.buildControls}>
        { BUILDER_CONTROLS.map( ctrl => (
            <BuildControl
                key={ ctrl.label }
                label={ ctrl.label }
                added={ props.ingredientAdded.bind(this, ctrl.type) }
                removed={ props.ingredientRemoved.bind(this, ctrl.type) }
            />
        )) }
    </div>

);

export default buildControls;



