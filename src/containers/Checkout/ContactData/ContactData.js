import React, { Component } from 'react';
import ApplicationMessages from "../../../messages/ApplicationMessages";
import Button from '../../../components/UI/Button/Button';
import {BTN_TYPES} from "../../../consts/application_consts";
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
    };

    render() {
        return (
            <div className={ classes.contactData }>
                <h4>{ ApplicationMessages.contactDataComponent.title }</h4>
                <form >
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
                    <Button btnType={ BTN_TYPES.success }>
                        { ApplicationMessages.contactDataComponent.orderBtn }
                    </Button>
                </form>
            </div>
        )
    }
}

export default ContactData;


