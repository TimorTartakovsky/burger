import React, { Component } from 'react';
import ApplicationMessages from "../../../messages/ApplicationMessages";
import Button from '../../../components/UI/Button/Button';
import {BTN_TYPES, defaultConfigurationData, inputTypes} from "../../../consts/application_consts";
import OrderHttpService from '../../../services/orders/http-order-service';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.scss';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {

    state = {
      orderForm: defaultConfigurationData,
      formIsValid: true,
      loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        };

        OrderHttpService.createNewOrder(JSON.stringify(order))
            .then(() => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(() => this.setState({loading: false}));

    }

    checkValidity(value, rules) {
        if(!!rules && !!rules.required) {
            return value.trim() !== '';
        }
        return true;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = false;

        for(inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }

    render() {

        const formElementsArray = [];

        for(let key in this.state.orderForm) {
            formElementsArray.push(
                {
                    id: key,
                    config: this.state.orderForm[key],
                }
            );
        }

        let form = (<form onSubmit={ this.orderHandler } >
            { formElementsArray.map(
                formElement => (
                    <Input  key={ formElement.id }
                            invalid={ !formElement.config.valid }
                            elementType={ formElement.config.elementType }
                            elementConfig={ formElement.config.elementConfig }
                            changed={ event => this.inputChangedHandler(event, formElement.id) }
                            value={ formElement.config.value }
                             />
                )
            ) }
            <Button btnType={ BTN_TYPES.success }
                    disabled={ this.state.formIsValid } >
                { ApplicationMessages.contactDataComponent.orderBtn }
            </Button>
        </form>);
        if (this.state.loading) {
            form = (<Spinner />);
        }

        return (
            <div className={ classes.contactData }>
                <h4>{ ApplicationMessages.contactDataComponent.title }</h4>
                { form }
            </div>
        )
    }
}

export default ContactData;


