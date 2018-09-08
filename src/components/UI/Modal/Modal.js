import React from 'react';
import classes from './Modal.scss';
import Aux from '../../../hoc/Auxe';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop clicked={ props.modalClose } show={ props.show }/>
        <div className={ classes.modal }
             style={{
                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: props.show ? '1' : '0',
             }}   >
            { props.children }
        </div>
    </Aux>
);

export default modal;



