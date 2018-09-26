import React, { Component } from 'react';
import ApplicationMessages from "../../../messages/ApplicationMessages";
import Button from '../../../components/UI/Button/Button';
import {BTN_TYPES, inputTypes} from "../../../consts/application_consts";
import OrderHttpService from '../../../services/orders/http-order-service';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.scss';
import Input from '../../../components/UI/Input/Input';


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
            <Input inputType={ inputTypes.input }
                   type='text'
                   name='fullName'
                   placeholder={ ApplicationMessages.contactDataComponent.form.fullNamePlaceholder }/>
            <Input inputType={ inputTypes.input }
                   type='text'
                   name='apt'
                   placeholder={ ApplicationMessages.contactDataComponent.form.aptPlaceholder }/>
            <Input inputType={ inputTypes.input }
                   type='text'
                   name='city'
                   placeholder={ ApplicationMessages.contactDataComponent.form.cityPlaceholder }/>
            <Input inputType={ inputTypes.input }
                   type='text'
                   name='country'
                   placeholder={ ApplicationMessages.contactDataComponent.form.countryPlaceholder }/>
            <Input inputType={ inputTypes.input }
                   type='text'
                   name='elevator'
                   placeholder={ ApplicationMessages.contactDataComponent.form.elevatorPlaceholder }/>
            <Input inputType={ inputTypes.input }
                   type='text'
                   name='floor'
                   placeholder={ ApplicationMessages.contactDataComponent.form.floorPlaceholder }/>
            <Input inputType={ inputTypes.input }
                   type='text'
                   name='street'
                   placeholder={ ApplicationMessages.contactDataComponent.form.streetPlaceholder }/>
            <Input inputType={ inputTypes.input }
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


