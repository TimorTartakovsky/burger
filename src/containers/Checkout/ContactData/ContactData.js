import React, { Component } from 'react';
import ApplicationMessages from "../../../messages/ApplicationMessages";
import Button from '../../../components/UI/Button/Button';
import {BTN_TYPES} from "../../../consts/application_consts";
import OrderHttpService from '../../../services/orders/http-order-service';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.scss';

class ContactData extends Component {

    state = {
      fullName: '',
      email: '',
      address: {
          apt: '',
          city: '',
          country: '',
          elevator: '',
          floor: '',
          street: '',
          zipCode: ''
      },
      loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
               fullName: 'Timor Tartakovsky',
               address: {
                   country: 'Israel',
                   city: 'Bat Yam',
                   street: 'Balfor 11',
                   apt: '33',
                   floor: '9',
                   elevator: 'a',
                   zipCode: '5948310',
               },
               email: 'timortartakovsky@gmail.com',
               deliveryMethod: 'fast',
            }
        };

        OrderHttpService.createNewOrder(JSON.stringify(order))
            .then(() => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(() => this.setState({loading: false}));

    }

    render() {

        let form = (<form >
            <input className={ classes.inputElement }
                   type='text'
                   name='fullName'
                   placeholder={ ApplicationMessages.contactDataComponent.form.fullNamePlaceholder }/>
            <input className={ classes.inputElement }
                   type='text'
                   name='apt'
                   placeholder={ ApplicationMessages.contactDataComponent.form.aptPlaceholder }/>
            <input className={ classes.inputElement }
                   type='text'
                   name='city'
                   placeholder={ ApplicationMessages.contactDataComponent.form.cityPlaceholder }/>
            <input className={ classes.inputElement }
                   type='text'
                   name='country'
                   placeholder={ ApplicationMessages.contactDataComponent.form.countryPlaceholder }/>
            <input className={ classes.inputElement }
                   type='text'
                   name='elevator'
                   placeholder={ ApplicationMessages.contactDataComponent.form.elevatorPlaceholder }/>
            <input className={ classes.inputElement }
                   type='text'
                   name='floor'
                   placeholder={ ApplicationMessages.contactDataComponent.form.floorPlaceholder }/>
            <input className={ classes.inputElement }
                   type='text'
                   name='street'
                   placeholder={ ApplicationMessages.contactDataComponent.form.streetPlaceholder }/>
            <input className={ classes.inputElement }
                   type='text'
                   name='zipCode'
                   placeholder={ ApplicationMessages.contactDataComponent.form.zipCodePlaceholder }/>
            <Button clicked={ this.orderHandler }
                    btnType={ BTN_TYPES.success }>
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


