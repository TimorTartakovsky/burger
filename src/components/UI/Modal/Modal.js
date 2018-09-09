import React, { Component } from 'react';
import classes from './Modal.scss';
import Aux from '../../../hoc/Auxe';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState) {
        console.log('State in Modal: ', nextState);
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[OrderSummary] Modal: WillUpdate');
    }

    render() {
        return (<Aux>
            <Backdrop clicked={ this.props.modalClose } show={ this.props.show }/>
            <div className={ classes.modal }
                 style={{
                     transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                     opacity: this.props.show ? '1' : '0',
                 }}   >
                { this.props.children }
            </div>
        </Aux>);
    }
};

export default Modal;



