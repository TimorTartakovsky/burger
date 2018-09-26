import React from 'react';
import {inputTypes} from "../../../consts/application_consts";
import classes from './Input.scss';

const input = (props) => {

    let inputElement = null;

    switch (props.inputType) {
        case inputTypes.input:
            inputElement = <input className={ classes.inputElement } { ...props } />;
            break;
        case inputTypes.textArea:
            inputElement = <textarea className={ classes.inputElement } { ...props } />;
            break;
        default: inputElement = <input className={ classes.inputElement } { ...props } />;
    }

    return (
        <div className={ classes.input } >
            <label className={ classes.label }>{ props.label }</label>
            { inputElement }
        </div>
    )
};


export default input;

