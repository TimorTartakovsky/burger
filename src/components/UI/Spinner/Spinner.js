import React from 'react';
import ApplicationMessages from "../../../messages/ApplicationMessages";
import classes from './Spinner.scss';

const spinner = (props) => (
    <div className={ classes.loader }>{ ApplicationMessages.loadingMessage }</div>
);

export default spinner


