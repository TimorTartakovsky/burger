import React from 'react';
import classes from './BuildControl.scss';
import ApplicationMessages from "../../../../messages/ApplicationMessages";

const buildControl = (props) => (
    <div className={ classes.buildControl }>
        <div className={ classes.Label }>{ props.label }</div>
        <button className={ classes.buildControl.Less }
                disabled={ props.disabled }
                onClick={ props.removed }>
            { ApplicationMessages.buildControlsComponent.buildControl.btnLess }
        </button>
        <button className={ classes.buildControl.More }
                onClick={ props.added }>
            { ApplicationMessages.buildControlsComponent.buildControl.btnMore }
        </button>
    </div>
);

export default buildControl;
