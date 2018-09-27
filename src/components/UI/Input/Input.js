import React from 'react';
import {inputTypes} from "../../../consts/applicationConsts";
import classes from './Input.scss';

const input = (props) => {

    let inputElement = null;

    const inputClasses = [classes.inputElement];

    if(props.invalid) {
        inputClasses.push(classes.invalid);
    }

    switch (props.elementType) {
        case inputTypes.input:
            inputElement = <input key={ props.key }
                                  className={ inputClasses.join(' ') }
                                  onChange={ props.changed }
                                  { ...props.elementConfig }
                                  value={ props.value } />;
            break;
        case inputTypes.select:
            inputElement = <select key={ props.key }
                                   className={ inputClasses.join(' ') }
                                   onChange={ props.changed }
                                   value={ props.value } >
                                { props.elementConfig.options
                                    .map(
                                       option => (
                                           <option key={ option.value }
                                                   value={ option.value }>
                                                   { option.displayValue }
                                           </option>
                                       )
                                    )
                                }
                           </select>;
             break;
        case inputTypes.textArea:
            inputElement = <textarea key={ props.key }
                                     className={ inputClasses.join(' ') }
                                     onChange={ props.changed }
                                     { ...props.elementConfig }
                                     value={ props.value } />;
            break;
        default: inputElement = <input key={ props.key }
                                       className={ inputClasses.join(' ') }
                                       onChange={ props.changed }
                                       { ...props.elementConfig }
                                       value={ props.value } />;
    }

    return (
        <div className={ classes.input } >
            <label className={ classes.label }>{ props.label }</label>
            { inputElement }
        </div>
    )
};


export default input;

